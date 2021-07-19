import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import defaultImg from "../../../../img/wall-cart.jpg";
import { getProvidersByService, sortByPrice } from "../../../../utils/constants";
import "./Provider.scss";



function Provider({ provider, service }) {
  function OrderByPrice() {
    const dispatch = useDispatch();
  
    useEffect(() => {
    
      dispatch(getProvidersByService());
    }, [dispatch]);
  
    const found = useSelector((store) => store.all);
    let filters = ["Menor a Mayor", "Mayor a Menor"];
    let options = filters.map((e) => (
      <option key={e} value={e}>
        {e}
      </option>
    ));
  
    function handleChange(e) {
      console.log(e.target.value);
      if (e.target.value === "All") {
        dispatch(getProvidersByService());
      } else {
        dispatch(sortByPrice(e.target.value));
      }
    }
    return (
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          id="az"
          onChange={handleChange}
          defaultValue="Sort MinToMax/MaxToMin"
        >
          <option selected disabled>
          Ordenar de Minimo a Maximo / Maximo a Minimo
          </option>
          <option value="All">All</option>
          {options}
        </select>
      </div>
    );
  }
  
  return (
    <div className="provider-container">
      <NavLink
        className="navLink"
        to={`/services/providers/${service}/${provider._id}`}
      >
        <div className="provider-card">
          <div className="card-left">
            {provider.img ? (
              <img
                className="card-img"
                src={provider.img}
                alt="Service Image"
              ></img>
            ) : (
              <img
                className="card-img"
                src={defaultImg}
                alt="Default Image"
              ></img>
            )}
            <div className="card-title">
              <h2 className="">{`${provider.firstName} ${provider.lastName}`}</h2>
              <h4>{`Calificación: ${provider.rating}`}</h4>
            </div>
          </div>
          <div className="card-options">
            <NavLink
              className="navLink card-button"
              to={`/providers/${provider._id}`}
            >
              Ver Perfil
            </NavLink>
            <NavLink
              className={provider.hasCalendar ? "navLink card-button" : "navlink card-button inactive"}
              to={provider.hasCalendar ? `/services/providers/${service}/${provider._id}/calendar` : `/services/providers/${service}`}
            >
              {provider.hasCalendar ? "Ver Agenda" : "Sin Agenda"}
            </NavLink>
            <NavLink className="navLink card-button" to="/">
              Ver Reseñas
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Provider
