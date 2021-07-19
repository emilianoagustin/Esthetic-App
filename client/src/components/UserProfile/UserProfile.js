
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../img/wall-cart.jpg";
import { getUserReservations } from "../../Redux/actions/user.actions";

import "./UserProfile.css";


const ID = JSON.parse(localStorage.getItem("loggedSpatifyApp")).userFound;
console.log("Esta es la info del ID", ID);

function UserProfile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReservations.data);

  useEffect(() => {
    dispatch(getUserReservations(ID._id));
    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-data">
          <div className="profile-img">
            {ID.img ? (
              <img className="img" src={ID.img} alt="Service Image"></img>
            ) : (
              <img className="img" src={defaultImg} alt="Default Image"></img>
            )}
          </div>
        </div>
        <div className="profile-info">
          <h1>MIS DATOS</h1>
          <hr />
          <hr />
          <p className="p">Nombre: {ID && ID.firstName}</p>
          <p className="p">Apellido: {ID && ID.lastName}</p>
          <p className="p">Correo Electronico: {ID.email}</p>
          <p className="p">Telefono: {ID.phone}</p>
          <p className="p">Direccion: {ID.addresses}</p>
        </div>
        <br></br>
      </div>
      <div className="booking-container">
        <div className="booking-data">
          <h1 className="h1"> MIS TURNOS</h1>
          <p className="p">Proximos Turnos: {userData && userData._id}</p>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;
