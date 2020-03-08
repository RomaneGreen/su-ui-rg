import axios from "axios";
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

export const getBuyerProfileDetails = () => {
    setAuthHeaders();
    return dispatch => {
        return axios
            .get(`${BASE_URL}/getBuyerDetails`)
            .then(json => {
                dispatch({ type: "BUYER_PROFILE_DETAILS", payload: json.data.payload })
            })
            .catch(error => {
                return error;
            })
    };
};

export const changePassowrd = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/changePassowrd`, data)
            .catch(error => {
                return error;
            })
    };
};

export const updateBuyerInfo = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/buyerInformation`, data)
            .catch(error => {
                return error;
            })
    };
};

export const updateBillingAddress = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/billingAddressUpdate`, data)
            .catch(error => {
                return error;
            })
    };
};

export const updateBuyerProfileType = profile_id => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/updateProfileType`, profile_id)
            
            .catch(error => {
                return error;
            })
    };
};

export const updateInvestingExperienceDetails = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/updateInvestingExperience`, data)
            .catch(error => {
                return error;
            })
    };
};

export const updateGeneralInformation = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/updateGeneralInformation`, data)
            .catch(error => {
                return error;
            })
    };
};

export const addPreference = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/addPreferences`, data)
            .then(
                dispatch(getPreferences()))
            .catch(error => {
                return error;
            })
    };
};

export const removePreference = preference_id => {
    return dispatch => {
        return axios
            .delete(`${BASE_URL}/removePreferences?preference_id=${preference_id}`, {
            })
            .then(
                dispatch(getPreferences()))
            .catch(error => {
                return error;
            })
    };
};

export const getPreferences = () => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/getBuyerPreferences`, {
            })
            .then(json => {
                dispatch({ type: "BUYER_PREFERENCES", payload: json.data.payload })
            })
            .catch(error => {
                return error;
            })
    };
};


export const smsAndEmailAlertSettings = data => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/alertsSetting`, data)
            .catch(error => {
                return error;
            })
    };
};

export const cancelSubscription = () => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/setSubscriptionCancel`, {
            })
            .then(
                dispatch(getBuyerProfileDetails()))
            .catch(error => {
                return error;
            })
    };
};

export const uncancelSubscription = () => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/setSubscriptionUnCancel`, {
            })
            .then(
                dispatch(getBuyerProfileDetails()))
            .catch(error => {
                return error;
            })
    };
};

export const changeSubscription = plan_id => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/changeSubscriptionPlan`, plan_id)
            .then(json => {
                dispatch(getBuyerProfileDetails());
            })
            .catch(error => {
                return error;
            })
    };
};
