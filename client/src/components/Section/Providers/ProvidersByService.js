import React, { useEffect } from "react";
import "./ProvidersByService.css";
import { useDispatch, connect } from "react-redux";
import { getProvidersbyServiceName } from "../../../Redux/actions/actions";
import { useParams } from "react-router-dom";
import Provider from "./Provider/Provider.js";
import data from "../Providers/dataFakeProviders";
import "./ProvidersByService.css"

export function ProvidersByService() {
  const dispatch = useDispatch();

  const { serviceName } = useParams();

  useEffect(() => {
    dispatch(getProvidersbyServiceName(serviceName));
    return () => {};
  }, []);
  console.log("Esto es data", data);
  return (
    <div>
      <h3 className="title">PROVIDERS</h3>
      <div className="providers-container">
        {data.map((provider, index) => (
          <Provider key={index} provider={provider} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    providers: state.providers,
  };
}

export default connect(mapStateToProps)(ProvidersByService);
