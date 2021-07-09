import React, {useEffect} from "react";
/* import { RiServiceLine } from "react-icons/ri"; */
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../../Redux/actions/actions";
import { Data } from "./Data";
import Service from "./Service/Service";
import "./Services.css";

function Services() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.appReducer.services.data)

  useEffect(() => {
    dispatch(getServices());
  }, []);

  return (
    <div>
      <h3 className="title">SERVICIOS</h3>

      <div className="services-container">
        {data && data.map((service, index) => (
          <Service key={index} data={service} />
        ))}
      </div>
    </div>
  );
}


export default Services;
