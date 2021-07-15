import axios from 'axios';
import actionsTypes from '../constants/constants';
import {
  getProvidersByService,
  getServicesBack,
  HOST,
} from '../../utils/constants.js';
import { GET_PROVIDERS, GET_SERVICES } from "../../utils/constants.js";
//GET SERVICES

export const getServices = () => async (dispatch) => {
  dispatch({
    type: actionsTypes.SET_SERVICES_REQUEST,
  });

  try {
    const data = await axios.get(GET_SERVICES);
    dispatch({ type: actionsTypes.SET_SERVICES_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionsTypes.SET_SERVICES_FAIL, payload: error.message });
  }
};

export const getServiceDetails = (serviceId) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_SERVICES_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`${GET_SERVICES}/${serviceId}`);
    dispatch({ type: actionsTypes.GET_SERVICES_DETAILS_SUCCES, payload: data });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_SERVICES_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const getProviderDetails = (providerId) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_PROVIDER_DETAILS_REQ });
  try {
    const { data } = await axios.get(`${GET_PROVIDERS}/${providerId}`);
    dispatch({ type: actionsTypes.GET_PROVIDER_DETAILS_SUCC, payload: data });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_PROVIDER_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const getProvidersbyServiceName = (serviceName) => async (dispatch) => {
  dispatch({ type: actionsTypes.GET_PROVIDERS_BY_SERVICE_REQUEST });

  try {
    const { data } = await axios.get(
      `${GET_PROVIDERS}/services/${serviceName}`
    );
    dispatch({
      type: actionsTypes.GET_PROVIDERS_BY_SERVICE_SUCCES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionsTypes.GET_PROVIDERS_BY_SERVICE_FAIL,
      payload: error.message,
    });
  }
};

export const serviceSearch = (payload) => (dispatch) => {
  dispatch({ type: actionsTypes.SEARCH_SERVICE_BY_NAME, payload });
};

export const reservationStatus = (data) => async (dispatch) => {
  const default_data = {
    loading: true,
    message: 'Loading...'
  }
  dispatch({ type: actionsTypes.SET_RESERVATION_STATUS_LOADING, payload: default_data })
  try {
    const { message } = await axios.post(`${HOST}/reservations`, data)
    const success = 'Turno agregado con éxito';
    dispatch({ type: actionsTypes.SET_RESERVATION_STATUS, payload: success })
  } catch (error) {
    const err = 'Error al agregar el turno';
    dispatch({ type: actionsTypes.SET_RESERVATION_STATUS, payload: err })
  }
}