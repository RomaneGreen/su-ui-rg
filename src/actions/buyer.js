import axios from "axios";
import {BASE_URL} from "../common/config"
export const registerBuyer = (formData) => {
    
    return dispatch => {
        return axios
            .post(`${BASE_URL}/buyerRegistration`, formData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(res => {
                dispatch({type: 'REGISTERED_BUYER', res});
            })
    };
}