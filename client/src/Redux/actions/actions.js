import axios from "axios";
import actionsTypes  from "../constants/constants";
import { getProvidersByService, getServicesBack } from "../../utils/constants.js";
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



 

export const getServiceDetails = (serviceId) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_SERVICES_DETAILS_REQUEST });

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

export const getProvidersbyServiceName = (serviceName) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_PROVIDERS_BY_SERVICE_REQUEST });

  try {
    const { data } = await axios.get(`${getProvidersByService}/${serviceName}`);
    dispatch({ type: actionsTypes.GET_PROVIDERS_BY_SERVICE_SUCCES, payload: data });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_PROVIDERS_BY_SERVICE_FAIL,
      payload: error.message,
    });
  }
};
