import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderDetails } from "../../Redux/actions/actions";
// import "./providerDetails.scss";
import { useParams } from "react-router-dom";

const ProviderDetails = () => {
  const dispatch = useDispatch();
  const providerDetails = useSelector((state) => state.providerDetails.data);
  const { id } = useParams();

  useEffect(() => {
    console.log("PROVIDER DETAILS: ", providerDetails);
    return dispatch(getProviderDetails(id));
  }, []);

  return (
    <div className="container-main">
      <div className="container">
        <div className="providerDetails-container">
          <div>
            <h1>{`Bienvenido al prestador ${providerDetails.firstName}`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
