import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../img/wall-cart.jpg";
import { getUserReservations } from "../../Redux/actions/user.actions";
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";
import UserReservations from "./UserReservations/UserReservations";
import "./UserProfile.css";
import UserBanner from "./UserBanner/UserBanner";

const ID = window.localStorage.getItem("loggedSpatifyApp")
  ? JSON.parse(window.localStorage.getItem("loggedSpatifyApp"))
  : null;


console.log("Esta es la info del ID", ID);

function UserProfile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReservations.data);

  useEffect(() => {
    if (ID.userFound?._id) {
      dispatch(getUserReservations(ID));
    }
  }, []);

  return (
    <div className="container-main">
      <div className="container">
        <div className="user-profile-container">
          <UserProfileInfo />
          <UserBanner />

          {/* <div className='profile-container'>
        <div className='profile-data'>
          <div className='profile-img'>
            {ID.userFound.img ? (
              <img
                className='img'
                src={ID.userFound.img}
                alt='Service Image'
              ></img>
            ) : (
              <img className='img' src={defaultImg} alt='Default Image'></img>
            )}
          </div>
        </div>
        <div className='profile-info'>
          <h1>MIS DATOS</h1>
          <hr />
          <hr />
          <p className='p'>Nombre: {ID && ID.userFound.firstName}</p>
          <p className='p'>Apellido: {ID && ID.userFound.lastName}</p>
          <p className='p'>Correo Electronico: {ID.userFound.email}</p>
          <p className='p'>Telefono: {ID.userFound.phone}</p>
          <p className='p'>Direccion: {ID.userFound.addresses}</p>
        </div>
        <br></br>
      </div> */}
          <UserReservations />

          {/*    <div className='booking-container'>
        <div className='booking-data'>
          <h1 className='h1'> MIS TURNOS</h1>
          <p className='p'>Proximos Turnos: {userData && userData._id}</p>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
