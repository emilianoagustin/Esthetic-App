import { RequestHandler } from "express";
import Bags from "../models/Bags";
import Users from "../models/Users";

export const addReservation: RequestHandler = async (req, res) => {
    try {
        const user = await Users.findById(req.body.user)
        let bag = await Bags.findOne({ user: user })
        if (!bag) {
            const newBag = new Bags({ user: user });
            newBag.save()
        } else {
            let check = false;
            bag.reservations.forEach((r: any) => {
                if (r.provider == req.body.provider &&
                    r.date == req.body.date &&
                    r.hour == req.body.hour) {
                    check = true
                }
            })
            if(check) return res.status(301).send('this reservation already exists')
        }
        bag = await Bags.findOne({ user: user })
        bag.reservations.push(
            {
                provider: req.body.provider,
                date: req.body.date,
                hour: req.body.hour,
                service: req.body.service,
                price: req.body.price,
                address: req.body.address
            }
        )
        bag.save()
            .then((saved: any) => {
                res.status(200).send('reservation added successfully')
            })
    } catch (error) {
        return res.send(error);
    }
};