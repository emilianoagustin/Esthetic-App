import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

function Service({ data }) {
  console.log(data);
  return (
    <div className="service">
      <div>
        <img className="img" src={data.img} alt="Service Image"></img>
      </div>
      <Link to={`/services/providers/${data.name}`}>
        <button>
          <span className="service-title">{data.name}</span>
        </button>
      </Link>
      <span className="service-desciption">{data.description}</span>
      <span>{data.price}</span>
      <Link to={"/services/details"}>
        <button className="more-details">
          <span className="more-details-text">More Details</span>
        </button>
      </Link>
    </div>
  );
}


export default Service;
