import React from "react";
import "./Banner.css";
import banner from "../../../img/banner.jpg";

export default function Banner() {
  return (
    <div className="banner-container">
      <div
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.3)",
          position: "absolute",
          opacity: 0.8,
          top: 100,
          left: 150,
          backgroundColor: "white",
          width: "31rem",
        }}
      >
        <h1>Spa-tify </h1>
        <p>
          Somos La noticia en tu ciudad. Venimos a reunir a todos tus servidores
          de spa favoritos directamente a tu casa o donde sea que te encuentres.
          ¡Cuando sea! ¡Ese es nuestro lema! Desde manicura hasta servicio de
          barbero profesional y masajes especializados, lo tenemos todo dentro
          de la seguridad de tu teléfono u ordenador a sólo unos clicks de
          distancia. Regístrate ahora y simplemente ten un día relajante con
          UrSpa/Spa-tify.
        </p>
      </div>

      <div className="banner">
        <img className="banner-img" src={banner} alt="banner-img"></img>
      </div>
    </div>
  );
}
