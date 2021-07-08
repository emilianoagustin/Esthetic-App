import React from "react";
/* import { RiServiceLine } from "react-icons/ri"; */
import { Data } from "./Data";
import Service from "./Service/Service";
import "./Services.css";

function Services() {
  return (
    <div>
      <h3>Servicios </h3>

      <div className="services-container">
        {Data.map((s, index) => (
          <Service key={index} data={s} />
        ))}
      </div>
    </div>
  );
}

/* 
const ServiceSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
    },
    { versionKey: false, timestamps: true }
);

router.post('/', createService);
router.get('/', getServices);
router.get('/:id', getServiceDetail);
/services/ */

export default Services;
