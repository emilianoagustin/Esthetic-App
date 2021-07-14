import React from "react";
import "./Service.scss";
import { Link } from "react-router-dom";
import defaultImg from "../../../../img/wall-cart.jpg";

function Service({ data }) {
 

  return (
    <div className="service">
      <Link to={`/services/providers/${data.name}`}>
        <div className="service-title-btn">
          <button >
            <span className="service-title">{data.name}</span>
          </button>
        </div>
        <div>
          {data.img ? (
            <img className="img" src={data.img} alt="Service Image"></img>
          ) : (
            <img className="img" src={defaultImg} alt="Default Image"></img>
          )}
        </div>
      </Link>
      <span className='service-text'>{`Contrata servicios de ${data.name} a domicilio`}</span>
      <Link to={`/services/details/${data._id}`}>
        <button className="more-details">
          <span className="more-details-text">Ver Detalles</span>
        </button>
      </Link>
    </div>
  );
}

export default Service;
