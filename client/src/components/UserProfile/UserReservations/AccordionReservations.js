import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAddresses,
  editUserAddresses,
  getUserAddresses,
  getUserReservations,
} from "../../../Redux/actions/user.actions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "./AccordionReservations.css";
import { BsTrash } from "react-icons/bs";
import useReactRouter from "use-react-router";
import FormEditAddresses from "../Form/FormEditAddresses";

const ID = window.localStorage.getItem("loggedSpatifyApp")
  ? JSON.parse(window.localStorage.getItem("loggedSpatifyApp")).userFound._id
  : null

function AccordionReservations (){
 /*  const [editAddressModal, setEditAddressModal] = useState(false); */
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReservations.data)

  let reservations = [];
  if (data && data.length) {
    reservations = data;
  } 


  useEffect(() => {
    if (ID) {
      dispatch(getUserReservations(ID));
    }
  }, []);

  /* const deleteAddress = (addressId) => {
    const userId = ID.userFound._id;
    dispatch(deleteUserAddresses({ userId, addressId }));
  }; */

  /* const editAddress = () => {
      setEditAddressModal(prev => !prev)
  } */

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [selected, setSelected] = useState(null);
  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {reservations.map((r, i) => (
          <div className="accordion-item" onClick={() => toggle(i)}>
            <div className="accordion-title">
              <p>
                <b>Servicio Contratado:</b> {r.service}
              </p>
              <span>
                {selected == i ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            <div
              className={
                selected == i
                  ? `accordion-description-show`
                  : `accordion-description`
              }
            >
              {r && (
                <div>
                  <p className="p">Dia: {r.date}</p>
                  <p className="p">Hora: {r.hour}</p>
                  <p className="p">Precio: {r.price}</p>
                  <p className="p">Prestador: {r.provider}</p>
                </div>
              )}
              {/* <div className="accordion-item-options">
                <i className="trash-icon" onClick={() => deleteAddress(a._id)}>
                  <BsTrash />
                </i>
                <i className="edit-icon" onClick={() => editAddress(a._id)}>
                  <HiOutlinePencilAlt />
                </i>
              </div> */}
              {/* <FormEditAddresses addressId={a._id} editAddressModal={editAddressModal} setEditAddressModal={setEditAddressModal} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionReservations;
