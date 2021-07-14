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
  session_id: {
    user: "",
    provider: "",
  },
<<<<<<< HEAD
  userData: {
    loading: true,
    data: {},
  },
=======
>>>>>>> e8baf4adf0c1df0d8590f42b62b1c586c3afc9e9
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

    ///SEARCH SERVICE BY NAME

    case actionsTypes.SEARCH_SERVICE_BY_NAME:
      return {
        ...state,
        services: { data: findService(state.allServices.data, action.payload) },
      };

    /// GET USER DATA (PROFILE)

    case actionsTypes.GET_USER_DATA_PROFILE_REQUEST:
      return {
        ...state,
        userData: { loading: true },
      };
    case actionsTypes.GET_USER_DATA_PROFILE_SUCCESS:
      return {
        ...state,
        userData: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_USER_DATA_PROFILE_FAIL:
      return {
        ...state,
        userData: { loading: false, error: action.payload },
      };

    default:
      return state;
  }
};

export default appReducer;
