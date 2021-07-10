import React, { useEffect } from "react";
import "./Provider.css";
import { useDispatch, connect } from "react-redux";
import { getProviders } from "../../../../../Redux/actions/actions";
import { useParams } from "react-router-dom";
import Provider from "./Provider/Provider.js";
import defaultImg from "../../../../../img/wall-cart.jpg";

export function ProvidersByService({ providers }) {
  const dispatch = useDispatch();

  const { serviceName } = useParams();

  useEffect(() => {
    dispatch(getProviders(serviceName));
    return () => {};
  }, []);

  return (
    <div>
      <h3 className="title">PROVIDERS</h3>
      <div className="providers-container">
        {providers.data &&
          providers.data.map((provider, index) => (
            <Provider key={index} data={provider} />
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
