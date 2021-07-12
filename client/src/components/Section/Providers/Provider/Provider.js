import React from "react";

import defaultImg from "../../../../img/wall-cart.jpg";
import "./Provider.css";

function Provider({ provider }) {
  return (
    <div className="provider-card">
      <button>
        <div>
          {provider.img ? (
            <img className="img" src={provider.img} alt="Service Image"></img>
          ) : (
            <img className="img" src={defaultImg} alt="Default Image"></img>
          )}
        </div>
        <span className="service-title">{provider.firstName}</span>
      </button>

      <span className="service-desciption">{provider.lastName}</span>
      <span className="service-desciption">{provider.email}</span>
      <span className="service-desciption">
        {provider.services.map((s) => s.name)}
      </span>
    </div>
  );
}

export default Provider;
