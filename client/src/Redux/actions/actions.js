import axios from "axios";
import actionsTypes from "../constants/constants";
//GET SERVICES

export const getServices = () => async (dispatch) => {
    dispatch({
      type: actionsTypes.SET_SERVICES_REQUEST,
    });
    try {
      const { data } = await axios.get(
       /*  `${REACT_APP_BASE_URL}${REACT_APP_GET_GAMES}` */ //Ver a donde hago el llamado
       "http://localhost:3001/services"
      );
      dispatch({ type: actionsTypes.SET_SERVICES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionsTypes.SET_SERVICES_FAIL, payload: error.message });
    }
};   