import React, { useEffect, useState } from "react";
import defaultImg from "../../../img/wall-cart.jpg";
import { BsPencilSquare } from "react-icons/bs";
import Form from "../Form/Form";
import { getUserProfile } from "../../../Redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfileInfo.css";

const ID = window.localStorage.getItem("loggedSpatifyApp")
  ? JSON.parse(window.localStorage.getItem("loggedSpatifyApp"))
  : null;
  console.log ("Este es el ID wacho", ID)

function UserProfileInfo() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  console.log(userData, "este es el user Data");

  useEffect(() => {
    dispatch(getUserProfile(ID.userFound._id));
  }, []);

  return (
    <div>
      <div className="user-profile-info-container">
        <div className="profile-data">
          <div className="profile-img">
         {/*    {userData.img ? (
              <img
                className="img"
                src={userData.img}
                alt="Service Image"
              ></img>
            ) : ( */}
              <img className="img" src={defaultImg} alt="Default Image"></img>
           {/*  )} */}
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <h1>MIS DATOS</h1>
            <Form showModal={showModal} setShowModal={setShowModal} />
            <BsPencilSquare className="profile-icon" onClick={setShowModal} />
          </div>
          <hr />
          <hr />
          <p className="p">Nombre: {userData && userData.firstName}</p>
          <p className="p">Apellido: {userData && userData.lastName}</p>
          <p className="p">Correo Electronico: {userData && userData.email}</p>
          <p className="p">Telefono: {userData && userData.phone}</p>
          <p className="p">Direccion: {userData && userData.addresses}</p>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default UserProfileInfo;
