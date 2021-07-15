import actionsTypes from "../constants/constants";
import { findService } from "../../utils/filter.js";


const initialState = {
  services: {
    loading: true,
    data: [],
  },
  userActive: false,
  loginData: {},
  serviceDetails: { loading: true, data: {} },
  providers: { loading: true, data: [] },
  providersByService: { loading: true, data: [] },
  reservation_status: {}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET SERVICES
    case actionsTypes.SET_SERVICES_REQUEST:
      return {
        ...state,
        services: { loading: true },
        allServices: { loading: false, data: action.payload },
      };
    case actionsTypes.SET_SERVICES_SUCCESS:
      return {
        ...state,
        allServices: { loading: false, data: action.payload },
        services: { loading: false, data: action.payload },
      };
    case actionsTypes.SET_SERVICES_FAIL:
      return {
        ...state,

        services: { loading: false, error: action.payload },
        allServices: { loading: false, error: action.payload },
      };
    case actionsTypes.LOGIN_SUCCESSFUL:

       /* ocalStorage.setItem("token", action.payload.token) */;

      return {
        ...state,
        loginData: action.payload,
        userActive: true,
      };
    case actionsTypes.LOGIN_FAIL:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        error: action.payload.userActive,
      };
    case actionsTypes.LOGOUT:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        userActive: action.payload.userActive,
      };

    //GET SERVICES --> DETAILS

    case actionsTypes.GET_SERVICES_DETAILS_REQUEST:
      return {
        ...state,
        serviceDetails: { loading: true },
      };
    case actionsTypes.GET_SERVICES_DETAILS_SUCCES:
      return {
        ...state,
        serviceDetails: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_SERVICES_DETAILS_FAIL:
      return {
        ...state,
        serviceDetails: { loading: false, error: action.payload },
      };

    //GET PROVIDERS

    case actionsTypes.GET_PROVIDERS_REQUEST:
      return {
        ...state,
        providers: { loading: true },
      };
    case actionsTypes.GET_PROVIDERS_SUCCES:
      return {
        ...state,
        providers: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_PROVIDERS_FAIL:
      return {
        ...state,
        providers: { loading: false, error: action.payload },
      };

    //GET PROVIDERS BY SERVICE

    case actionsTypes.GET_PROVIDERS_BY_SERVICE_REQUEST:
      return {
        ...state,
        providersByService: { loading: true },
      };
    case actionsTypes.GET_PROVIDERS_BY_SERVICE_SUCCES:
      return {
        ...state,
        providersByService: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_PROVIDERS_BY_SERVICE_FAIL:
      return {
        ...state,
        providersByService: { loading: false, error: action.payload },
      };

    //SEARCH SERVICE BY NAME

    case actionsTypes.SEARCH_SERVICE_BY_NAME:
      return {
        ...state,
        services: { data: findService(state.allServices.data, action.payload) },
      };

    //SET RESERVATIONS FOR USERS

    case actionsTypes.SET_RESERVATION_STATUS:
      return {
        ...state,
        reservation_status: {loading: false, message: action.payload}
      };
    case actionsTypes.SET_RESERVATION_STATUS_LOADING:
      return {
        ...state,
        reservation_status: action.payload
      };
    
    default:
      return state;
  }
};

export default appReducer;
