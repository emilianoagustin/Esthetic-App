import React from "react";
import "./Service.css";

function Service({ data }) {
  return (
    <div className="service">
      <div>
       {/*  <img className="img" src={data.img} alt="barberia"></img> */}
      </div>
      <span className="service-title">{data.name}</span>
      <span>{data.price}</span>
      <span className="service-desciption">{data.description}</span>
    </div>
  );
}

export default Service;
