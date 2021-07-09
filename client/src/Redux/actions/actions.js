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

 /*    }
  }
  try await axios.post("http://localhost:3002/users", {
    email: email.value,
    password: password.value,
  });
  console.log(data)
  // seteo de estado
  setUser(data);
  success(`logged user ${data.email}`);
  // redirect home
  history.push("/home");
 catch ({ response }) {
  // algo no esta.
  error( */