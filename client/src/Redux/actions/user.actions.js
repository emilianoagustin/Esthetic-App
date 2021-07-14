import axios from "axios";
import actionsTypes from "../constants/constants";
<<<<<<< HEAD
import {getUserData} from "../../utils/constants"


// login
export const getUser = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios
      .get(`http://localhost:3002/users/${data}`)
      .then((response) => {
        console.log(response.data.token);
        dispatch({
          type: actionsTypes.LOGIN_SUCCESSFUL,
          payload: {
            userActive: true,
          },
=======

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
>>>>>>> e8baf4adf0c1df0d8590f42b62b1c586c3afc9e9
        });
      })
      .catch((error) => {
        if (error.response?.status !== 404 || 422)
          alert("El usuario ingresado no existe");
        dispatch({ type: actionsTypes.LOGIN_FAIL, payload: null });
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
<<<<<<< HEAD

//USER PROFILE

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_USER_DATA_PROFILE_REQUEST });

  try {
    const { data } = await axios.get(`${getUserData}/${userId}`);
    dispatch({
      type: actionsTypes.GET_USER_DATA_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_USER_DATA_PROFILE_FAIL,
      payload: error.message,
    });
  }
};
=======
>>>>>>> e8baf4adf0c1df0d8590f42b62b1c586c3afc9e9
