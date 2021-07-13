import React from "react";
import { NavLink } from "react-router-dom";

import defaultImg from "../../../../img/wall-cart.jpg";
import "./Provider.css";

function Provider({ provider, service }) {
  return (
    <div className="provider-container">
      <NavLink className='navLink' to={`/services/providers/${service}/${provider._id}`}>
        <div className='provider-card'>
          <div className='card-left'>
            {provider.img ? (
              <img className="card-img" src={provider.img} alt="Service Image"></img>
            ) : (
              <img className="card-img" src={defaultImg} alt="Default Image"></img>
            )}
            <div className='card-title'>
              <h3 className="">{`${provider.firstName} ${provider.lastName}`}</h3>
              <h4>Calificación</h4>
            </div>
          </div>
          <div className='card-options'>
            <NavLink className='navLink card-button' to='/'>Ver Perfil</NavLink>
            <NavLink className='navLink card-button' to={`/services/providers/${service}/${provider._id}/calendar`}>Ver Agenda</NavLink>
            <NavLink className='navLink card-button' to='/'>Ver Reseñas</NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Provider;
