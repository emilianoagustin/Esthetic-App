import React from "react";
import "./Banner.css";
import banner from "../../../img/imagen2.jpeg";

export default function Banner() {
  return (
    <div className="banner-container">
      <div
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.3)",
          position: "absolute",
          opacity: 0.8,
          top: 40,
          left: 77,
          backgroundColor:"white",
          width: "31rem"
        }}
      >
        <h1>Esthetic-App </h1>
        <p>
          Somos La noticia en tu ciudad. Venimos a reunir a todos sus servidores
          de spa favoritos directamente a su casa o donde sea que se encuentre.
          ¡Cuando sea! ¡Ese es nuestro lema! Desde manicura hasta servicio de
          barbero profesional y masajes especializados, lo tenemos todo dentro
          de la seguridad de su teléfono o PC a solo unos clics de distancia.
          Regístrese ahora y simplemente relájese con UrSpa.
        </p>
      </div>
     
      <div className="banner">
        <img className="banner-img" src={banner} alt="backgroud-img"></img>
      </div>
      <div
      style={{
        width: 165,
        height: 17,
        /* border: solid; */
        /* position: absolute; */
        /* top: 10px; */
        /* left: 10px; */
        position: "absolute",
        top: "84%",
        left:" 50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white"
   }}>

      </div>
    </div>
  );
}
