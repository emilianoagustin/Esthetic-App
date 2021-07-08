import React from "react";
import "./Service.css";

function Service({ data }) {
  return (
    <div className="service">
      <div>
        <img className="img" src={data.img} alt="barberia"></img>
      </div>
      <span>{data.title}</span>
      <span>{data.price}</span>
      <span>{data.description}</span>
    </div>
  );
}

export default Service;
