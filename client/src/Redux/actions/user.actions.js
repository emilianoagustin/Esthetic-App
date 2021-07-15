import axios from "axios";
import actionsTypes from "../constants/constants";

// login
export const loginUser = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios
      .post(`http://localhost:3002/auth/signin`, data)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: actionsTypes.LOGIN_SUCCESSFUL,
          payload: response.data
        });
      })
      .catch((error) => {
        if (error.response?.status !== 404 || 422)
          alert("El usuario ingresado no existe");
        dispatch({ type: actionsTypes.LOGIN_FAIL, payload: false });
      });
  };
};

//logout
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: actionsTypes.LOGOUT,
      payload: {
        userActive: false,
      },
    });
  };
};
