import axios from 'axios';
import actionsTypes  from "../constants/constants";
import { URL_GET_PROVIDERS} from '../../utils/constants';

export const  getProviderById = (id)  => {
    console.log('id --------------',id);
    return async (dispatch) => {
        dispatch({ type: actionsTypes.GET_PROVIDERS_REQUEST });
        try {
            const { data } = await axios(URL_GET_PROVIDERS + id);
            console.log('data----------------', data);
            dispatch({type: actionsTypes.GET_PROVIDER_BY_ID, payload: data})
        } catch (error) {
            dispatch({type: actionsTypes.GET_PROVIDERS_FAIL, payload: error.message})
        }
    }
}