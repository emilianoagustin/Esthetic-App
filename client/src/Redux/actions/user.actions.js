 import axios from "axios";
import actionsTypes  from "../constants/constants";
 
 // login 
 export const  getUser = (data)  => {
    console.log(data)
    return (dispatch ) => {
      return axios.get(`http://localhost:3002/users/${data}`)
      .then((response)=>{
        console.log(response.data.token)
        dispatch({type: actionsTypes.LOGIN_SUCCESSFUL,
          payload: {
            userActive: true, 
          }})
      })
      .catch((error) => {
        if (error.response?.status !== 404||422) alert("El usuario ingresado no existe");
        dispatch({ type: actionsTypes.LOGIN_FAIL, payload: null });
      });
    }
  }

  //logout
 export const  logout = ()  => {
    return (dispatch ) => {
        dispatch({type: actionsTypes.LOGOUT,
          payload: {
            userActive: false, 
          }})
        }
      }