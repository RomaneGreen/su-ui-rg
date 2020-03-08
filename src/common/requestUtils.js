import axios from "axios";

function getCookie() {
    var value = "; " + document.cookie;
    var parts = value.split("; access_token=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setAuthHeaders() {
    var auth = "Bearer " + getCookie();
    axios.defaults.headers.common["Authorization"] = auth;
}

const requestUtils = {
    authenticated: function () {
        setAuthHeaders();
        return axios;
    }
};

export default requestUtils;