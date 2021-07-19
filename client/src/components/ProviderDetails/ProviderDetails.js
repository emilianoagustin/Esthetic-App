import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderDetails } from "../../Redux/actions/actions";
// import "./providerDetails.scss";
import { NavLink, useParams } from "react-router-dom";
import defaultImg from "../../img/wall-cart.jpg";

const ProviderDetails = () => {
  const dispatch = useDispatch();
  const providerDetails = useSelector((state) => state.providerDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProviderDetails(id));
  }, [dispatch]);
  console.log("PROVIDER DETAILS: ", providerDetails.data);

  return (
    <div className="container-main">
      <div className="container">
        <div className="providerDetails-container">
          <h1>
            {providerDetails.data &&
              `Bienvenido al espacio de ${providerDetails.data.firstName}`}
          </h1>
          <div>
            {providerDetails.data && providerDetails.data.image ? (
              <img
                className="card-img"
                src={providerDetails.data.image}
                alt="Provider picture"
              ></img>
            ) : (
              <img
                className="card-img"
                src={defaultImg}
                alt="Default Image"
              ></img>
            )}
            {/* <div>
              <NavLink
                className="navLink card-button"
                to={`../${service}/${provider._id}/calendar`}
              >
                Ver Agenda
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
