import axios from "axios";
// const BASE_URL = "https://dev.sellerbailout.com/seller/api";
import {BASE_URL} from "../common/config";


function getCookie() {
    var value = "; " + document.cookie;
    var parts = value.split("; access_token=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setAuthHeaders() {
    var auth = "Bearer " + getCookie();
    axios.defaults.headers.common["Authorization"] = auth;
}

export const agentOnboarding = data => {
    setAuthHeaders();
    return dispatch => {
        return axios
            .post(`${BASE_URL}/agentBoarding`, data)
            
            .catch(error => {
                return error;
            })
    };
};

