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
        <div className="profile-img">
          {ID.img ? (
            <img className="img" src={ID.img} alt="Service Image"></img>
          ) : (
            <img className="img" src={defaultImg} alt="Default Image"></img>
          )}
        </div>
        <div className="data-top">
          <h1>MIS DATOS</h1>
          <hr />
          <hr />
          <p>Nombre: {ID && ID.firstName}</p>
          <p>Apellido: {ID && ID.lastName}</p>
          <p>Correo Electronico: {ID.email}</p>
          <br></br>
        </div>
        <div className="data-bottom">
          <h1>MIS RESERVAS</h1>
          {/*  <p>Correo Electronico: {userData && userData}</p> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
