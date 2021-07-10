import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import defaultImg from "../../../../img/wall-cart.jpg";

function Service({ data }) {
  console.log(data);
  return (
    <div className="service">
      
      <Link to={`/services/providers/${data.name}`}>
        <button>
          <span className="service-title">{data.name}</span>
        </button>
        <div>
          {data.img ? (
            <img className="img" src={data.img} alt="Service Image"></img>
          ) : (
            <img className="img" src={defaultImg} alt="Default Image"></img>
          )}
        </div>
      </Link>
      <span className="service-desciption">{data.description}</span>
      <span>{data.price}</span>
      <Link to={`/services/details/${data._id}`}>
        <button className="more-details">
          <span className="more-details-text">More Details</span>
        </button>
      </Link>
    </div>
  );
}

export default Service;
