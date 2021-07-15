import React, { useEffect } from "react";
import "./ServiceDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getServiceDetails } from "../../../../../Redux/actions/actions";
import defaultImg from "../../../../../img/wall-cart.jpg";

function ServiceDetails() {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.serviceDetails.data);

  var data = {};

  if (service) {
    data = service;
  }
  const { id } = useParams();

  useEffect(() => {
    dispatch(getServiceDetails(id));
    return () => {};
  }, []);

  return (
    <div className="service-container">
      <div className="service-details">
        {data.img ? (
          <img className="img" src={data.img} alt="Service Image"></img>
        ) : (
          <img className="img" src={defaultImg} alt="Default Image"></img>
        )}
        <div className="service-data">
          <h1>{service && service.name}</h1><hr />
          <p>{service && service.description}</p>
          <p>AR$ {service && service.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
