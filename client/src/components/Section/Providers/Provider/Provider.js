import React from "react";

function Provider({ data }) {
  return (
    <div>
      <button>
        <div>
          {data.img ? (
            <img className="img" src={data.img} alt="Service Image"></img>
          ) : (
            <img className="img" src={defaultImg} alt="Default Image"></img>
          )}
        </div>
        <span className="service-title">{data.firstName}</span>
      </button>

      <span className="service-desciption">{data.lastName}</span>
      <span className="service-desciption">{data.addresses}</span>
    </div>
  );
}

export default Provider;
