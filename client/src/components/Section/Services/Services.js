import React, { useEffect } from "react";
/* import { RiServiceLine } from "react-icons/ri"; */
import { useDispatch, connect } from "react-redux";
import { getServices } from "../../../Redux/actions/actions";
import Service from "./Service/Service";
import "./Services.css";

export function Services({ services }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);
  console.log("SERVICIOS: ", services);

  return (
    <div>
      <h1 className="title">SERVICIOS</h1>
      <div className="services-container">
        {services.data &&
          services.data.map((service, index) => (
            <Service key={index} data={service} />
          ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    services: state.services,
  };
}

export default connect(mapStateToProps)(Services);
