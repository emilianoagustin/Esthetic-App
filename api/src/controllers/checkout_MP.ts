// import { RequestHandler } from "express";
// const mercadopago = require("mercadopago");
// import Services from "../models/Services";
// import dotenv from "dotenv";
// dotenv.config();
// mercadopago.configure({
//   access_token: process.env.TEST_ACCESS_TOKEN,
// });

// export const postPayment: RequestHandler = async (req, res) => {
//   try {
//     const { bag } = req.body;
//     const mpCart = bag.map(event => {
//         return {
//             title: event.name,
//             unit_price: event.price,
//             quantity: 1,
//           },
//     })

//     let preference = {
//       items: mpCart,
//       back_urls: {
//         success: 'http://localhost:3002/',
//         failure: 'http://localhost:3002/',
//         pending: 'http://localhost:3002/'
//       }
//     };

//     mercadopago.preferences
//       .create(preference)
//       .then(function (response: any) {
//         // Este valor reemplazará el string "<%= global.id %>" en tu HTML
//         global.id = response.body.id;
//       })
//       .catch(function (error: any) {
//         console.log(error);
//       });
//   } catch (error) {
//     return res.send(error);
//   }
// };
