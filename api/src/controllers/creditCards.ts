import { RequestHandler } from "express";
import CreditCards from "../models/CreditCards";
CreditCards;

export const getAllCreditCards: RequestHandler = async (req, res) => {
  try {
    const cc = await CreditCards.find();
    return res.send(cc);
  } catch (error) {
    res.send(error);
  }
};
export const getOneCreditCard: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const foundCC = await CreditCards.findById(id);
    if (foundCC) return res.send(foundCC);
  } catch (error) {
    res.send(error);
  }
};
export const createCreditCard: RequestHandler = async (req, res) => {
  try {
    const foundCC = await CreditCards.findOne({
      card_number: req.body.card_number,
    });
    if (foundCC)
      return res.status(301).send({
        message: `Ya tienes una tarjeta de crédito nro ${req.body.card_number}. Quieres registrar una nueva?`,
      });
    const newCC = new CreditCards(req.body);
    newCC.save();
    return res.status(201).send({
      data: newCC,
      message: `Nueva tarjeta de crédito ${newCC.type_of_card} registrada con éxito.`,
    });
  } catch (error: any) {
    res.status(501).send({
      message: "Algo salió mal. Por favor vuelve a intentarlo.",
    });
  }
};
export const updateCreditCard: RequestHandler = async (req, res) => {
  try {
    const updateCC = await CreditCards.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updateCC) return res.status(201).send();
    return res.send(updateCC);
  } catch (error) {
    res.send(error);
  }
};
export const deleteCreditCard: RequestHandler = async (req, res) => {
  try {
    const deleteCC = await CreditCards.findByIdAndDelete(req.params.id);
    if (!deleteCC) return res.status(202).send();
    return res.send();
  } catch (error) {
    res.send(error);
  }
};
