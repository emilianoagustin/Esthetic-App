import React from "react";

function Service({data}) {
  return (
    <div>
      <div>
        <span>{data.title}</span>
      </div>
      <span>{data.price}</span>
      <span>{data.description}</span>
    </div>
  );
}

export default Service;
