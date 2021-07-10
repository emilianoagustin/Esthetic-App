import axios from "axios";
import actionsTypes  from "../constants/constants";
import { getServicesBack } from "../../utils/constants.js";
//GET SERVICES

export const getServices = () => async (dispatch) => {
  dispatch({
    type: actionsTypes.SET_SERVICES_REQUEST,
  });
  
  try {
    const data = await axios.get(getServicesBack);
    dispatch({ type: actionsTypes.SET_SERVICES_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionsTypes.SET_SERVICES_FAIL, payload: error.message });
  }
};



  // posteo de user
  export const  getUser = ()  => {
    return (dispatch ) => {
      return axios.get("http://localhost:3002/users")
      .then((response)=>{
        console.log(response.data.token)
        dispatch({type: actionsTypes.LOGIN_SUCCESSFUL,
          payload: {
            token: response.data.token,
            /* userActive: decoded.unique_name, */
          }})
      })
      .catch((error) => {
        if (error.response?.status !== 404||422) alert("Usuario no encontrdo");
        dispatch({ type: actionsTypes.LOGIN_FAIL, payload: null });
      });
    }
  }


export const getServiceDetails = (serviceId) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_SERVICES_DETAILS_REQUEST });
  console.log("Este el es serviceid",serviceId)
  try {
    const { data } = await axios.get(`${getServicesBack}/${serviceId}`);
    dispatch({ type: actionsTypes.GET_SERVICES_DETAILS_SUCCES, payload: data });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_SERVICES_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
