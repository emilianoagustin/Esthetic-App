import axios from 'axios';
import actionsTypes from '../constants/constants';
import { HOST } from '../../utils/constants';

// login
export const LoginUser = (data) => {
  return (dispatch) => {
    return axios
      .post(`${HOST}/auth/signin`, data)
      .then((response) => {
        // console.log(response.data);
        dispatch({
          type: actionsTypes.LOGIN_SUCCESSFUL,
          payload: response.data,
        });
        return response.data;
      })
      .catch((error) => {
        if (error.response?.status !== 404 || 422)
          /* alert('El usuario ingresado no existe'); */
          dispatch({ type: actionsTypes.LOGIN_FAIL, payload: null });
      });
  };
};

//logout
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: actionsTypes.LOGOUT,
      payload: '',
    });
  };
};

export const userActiveSession = () => {
  window.localStorage.getItem('loggedSpatifyApp');
  const user = JSON.parse(window.localStorage.getItem('loggedSpatifyApp'));
  return (dispatch) => {
    dispatch({
      type: actionsTypes.LOGGIN_IN_SESSION,
      payload: user.userFound.firstName,
    });
  };
};

//USER PROFILE

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_USER_DATA_PROFILE_REQUEST });

  try {
    const { data } = await axios.get(`${HOST}/users/${userId}`);
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
