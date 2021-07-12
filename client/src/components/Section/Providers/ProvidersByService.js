import React, { useEffect } from "react";
import "./ProvidersByService.css";
import { useDispatch, connect, useSelector } from "react-redux";
import { getProvidersbyServiceName } from "../../../Redux/actions/actions";
import { useParams } from "react-router-dom";
import Provider from "./Provider/Provider.js";
import "./ProvidersByService.css";

export function ProvidersByService() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providersByService.data);

  console.log(providers, "Esto es el  providers");

  const { serviceName } = useParams();

  useEffect(() => {
    dispatch(getProvidersbyServiceName(serviceName));
    return () => {};
  }, []);

  return (
    <div className="providers-container-main">
      <h3 className="title">PROVIDERS</h3>
      <h4>{serviceName}</h4>
      <div className="providers-container">
        {providers &&
          providers.map((provider, index) => (
            <Provider key={index} provider={provider} />
          ))}
      </div>
    </div>
  );
}
