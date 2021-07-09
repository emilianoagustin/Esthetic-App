import actionsTypes from "../constants/constants";

const initialState = {
  services: { loading: false, data: [] },
};

export const appReducer = (state = initialState, action) => {
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
    case actionsTypes.SET_SERVICES_SUCCESS:
      return {
        ...state,
        services: { loading: false, error: action.payload },
      };
    default:
      return state;
  }
};
