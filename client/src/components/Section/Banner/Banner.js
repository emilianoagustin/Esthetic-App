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
          color: "rgb(121, 47, 111)",
        }}
      >
        <h1>Spa-tify </h1>
        <p>
          Somos La noticia en tu ciudad. Venimos a reunir a todos tus
          estilistas, terapeutas y esteticistas de spa favoritos directamente a
          tu casa o donde sea que te encuentres. ¡Cuando sea! ¡Ése es nuestro
          lema! Desde manicura hasta servicio de barbería profesional y masajes
          especializados, lo tenemos todo dentro de la seguridad de tu teléfono
          u ordenador a sólo unos clicks de distancia. Regístrate ahora y
          simplemente ten un día relajante con Spa-tify.
        </p>
      </div>

      <div className="banner">
        <img className="banner-img" src={banner} alt="banner-img"></img>
      </div>
    </div>
  );
}
