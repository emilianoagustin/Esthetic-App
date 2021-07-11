import actionsTypes from "../constants/constants";

const initialState = {
  services: {
    loading: true,
    data: [],
  },
  serviceDetails: { loading: true, data: {} },
  providers: {loading:true, data: []}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET SERVICES
    case actionsTypes.SET_SERVICES_REQUEST:
      return {
        ...state,
        services: { loading: true },
      };
    case actionsTypes.SET_SERVICES_SUCCESS:
      return {
        ...state,
        services: { loading: false, data: action.payload },
      };
    case actionsTypes.SET_SERVICES_FAIL:
      return {
        ...state,
        services: { loading: false, error: action.payload },
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


      //GET PROVIDERTS
      
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


    default:
      return state;








  }
};

export default appReducer;
