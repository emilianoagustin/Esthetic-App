import React, { useEffect } from "react";
import "../Service.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getServiceDetails } from "../../../../../Redux/actions/actions";

function ServiceDetails() {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.serviceDetails);

  var data = {};

  if (service) {
    console.log(service);
    data = service;
  }
  const { id } = useParams();

  useEffect(() => {
    dispatch(getServiceDetails(id));
    return () => {};
  }, []);

  return <div></div>;
}

export default ServiceDetails;
