import React from "react";
import "./Banner.css";
import banner from "../../../img/imagen 1.jpg";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <img className="banner-img" src={banner} alt="backgroud-img"></img>
      </div>
    </div>
  );
}
