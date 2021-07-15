<<<<<<< HEAD
import actionsTypes from '../constants/constants';
import { findService } from '../../utils/filter.js';
=======
import actionsTypes from "../constants/constants";
import { findService } from "../../utils/filter.js";
>>>>>>> 3343230c1d6c62f023a46de7f0282cb1d4ebe5d5

const initialState = {
  services: {
    loading: true,
    data: [],
  },
  userActive: '',
  loginData: {},
  serviceDetails: { loading: true, data: {} },
  providers: { loading: true, data: [] },
  providersByService: { loading: true, data: [] },
<<<<<<< HEAD
  session_id: {
    user: '',
    provider: '',
=======
  userData: {
    loading: true,
    data: {},
>>>>>>> 3343230c1d6c62f023a46de7f0282cb1d4ebe5d5
  },
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
<<<<<<< HEAD
      window.localStorage.setItem(
        'loggedSpatifyApp',
        JSON.stringify(action.payload)
      );
=======
>>>>>>> 3343230c1d6c62f023a46de7f0282cb1d4ebe5d5
      return {
        ...state,
        loginData: action.payload,
        userActive: action.payload.userFound.firstName,
      };
    case actionsTypes.LOGIN_FAIL:
<<<<<<< HEAD
      window.localStorage.setItem('token', action.payload.token);
=======
>>>>>>> 3343230c1d6c62f023a46de7f0282cb1d4ebe5d5
      return {
        ...state,
        error: action.payload.userActive,
      };
    case actionsTypes.LOGOUT:
<<<<<<< HEAD
      window.localStorage.setItem('loggedSpatifyApp', '');
      // window.localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        userActive: action.payload,
      };

    case actionsTypes.LOGGIN_IN_SESSION:
=======
>>>>>>> 3343230c1d6c62f023a46de7f0282cb1d4ebe5d5
      return {
        ...state,
        userActive: action.payload,
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
