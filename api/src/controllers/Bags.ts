import { RequestHandler } from "express";
import Bags from "../models/Bags";
import Calendar from "../models/Calendar";
import Events from "../models/Events";
import Users from "../models/Users";

export const addReservation: RequestHandler = async (req, res) => {
    try {
        const user = await Users.findById(req.body.user)
        let bag = await Bags.findOne({ user: user })

        let check = false;
        bag.reservations.forEach((r: any) => {
            if (r.provider === req.body.provider &&
                r.date === req.body.date &&
                r.hour === req.body.hour) {
                check = true
            }
        })
        if (check) return res.status(301).send('this reservation already exists')
        else {
            bag.reservations.push(req.body)
            bag.save()
                .then((saved: any) => {
                    res.status(200).send('reservation added successfully')
                })
        }
    } catch (error) {
        return res.send(error);
    }
};

export const getUserReservations: RequestHandler = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        const bag = await Bags.findOne({ user: user })
        return res.status(200).send(bag.reservations);
    } catch (error) {
        return res.send(error);
    }
};

export const getReservationsAvailability: RequestHandler = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        const bag = await Bags.findOne({ user: user })

        let available: any[] = [];
        let notAvailable: any[] = [];

        for (let i = 0; i < bag.reservations.length; i++) {
            const calendar = await Calendar.findOne({ provider: bag.reservations[i].providerID })
            const eventFound = await Events.findOne({
                $and: [
                    { calendar: calendar },
                    { hour: bag.reservations[i].hour },
                    { date: bag.reservations[i].date }
                ]
            })
            if (eventFound) notAvailable.push(bag.reservations[i])
            else available.push(bag.reservations[i])
        }

        if (notAvailable.length) {
            bag.reservations = available;
            await bag.save();
            res.status(400).send(available);
        } else {
            res.status(200).json('All events are available')
        }

    } catch (error) {
        return res.send(error);
    }
}