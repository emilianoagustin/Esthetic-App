import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderServices } from "../../Redux/actions/actions";
import RecipeReviewCard from "../HomeProviders/PendingServices/PendingServices";
// import "./providerServices.scss";
// import { useParams } from "react-router-dom";

const ProviderServices = ({ providerId }) => {
  const dispatch = useDispatch();
  const servicesByProvider = useSelector((state) => state.servicesByProvider);
  //   const { id } = useParams();

  useEffect(() => {
    dispatch(getProviderServices(providerId));
  }, [dispatch]);
  console.log("SERVICIOS:", servicesByProvider);

  return (
    <div>
      <h2>Éstos son algunos de los servicios que brindo</h2>
      <span>
        {servicesByProvider ? (
          servicesByProvider.data.map((serv) => {
            return <RecipeReviewCard data={serv} />;
          })
        ) : (
          <h3>Sin servicios adicionales por el momento.</h3>
        )}
      </span>
    </div>
  );
};

export default ProviderServices;
