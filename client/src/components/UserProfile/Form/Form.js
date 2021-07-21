import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "../../../utils/validate-user-profile";
import "./Form.css";

function Form({ showModal, setShowModal }) {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      //Si hago click afuera del modal (en el wrapper), se cierra el modal gracias a useRef
      setShowModal(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Esto es input", input);
    dispatch(/* createVideogame */ input);
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.name]: e.value,
    });

    var objError = validate({
      ...input,
      [e.name]: e.value,
    });
    setErrors(objError);
  };

  return (
    <>
      {showModal && (
        <div className="wrapper" ref={modalRef} onClick={closeModal}>
          <div className="form-container">
            <form>
              <div className="form-element">
                <label>Nombre</label>
                <input
                  className={`${errors.firstName && "danger"}`}
                  name="firstName"
                  value={input.firstName}
                  placeholder="Ingresa su nombre"
                  onChange={(e) => handleInputChange(e.target)}
                />
                {errors.name && <p className="danger">{errors.lastName}</p>}
              </div>
              <div className="form-element">
                <label>Apellido</label>
                <input
                  className={errors.lastName && "danger"}
                  name="lastName"
                  type="text"
                  value={input.lastName}
                  placeholder="Ingrese su Apellido"
                  onChange={(e) => handleInputChange(e.target)}
                />
                {errors.lastName && <p className="danger">{errors.lastName}</p>}
              </div>
              <div className="form-element">
                <label>Telefono</label>
                <input
                  className={errors.phone && "danger"}
                  name="number"
                  type="text"
                  value={input.phone}
                  placeholder="Ingrese su numero de telefono"
                  onChange={(e) => handleInputChange(e.target)}
                />
                {errors.phone && <p className="danger">{errors.phone}</p>}
              </div>

              <button
                className="button"
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
