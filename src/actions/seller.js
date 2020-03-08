import axios from "axios";
import {BASE_URL} from "../common/config";

export const fetchSellerFormData = dataListType => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/commonDataLists?datalist_type=${dataListType}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(json => {
                let action = selectActionType(dataListType)
                dispatch({ type: action, payload: json.data.payload });
            })
            .catch(error => {
                return error;
            })
    };
};

export const fetchPropertyDetails = (dataListType, assetType, productType) => {
    return dispatch => {
        return axios
            .get(`${BASE_URL}/commonDataLists?datalist_type=${dataListType}&asset_type_id=${assetType}&product_type_id=${productType}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(json => {
                if (assetType === 1) {
                    dispatch({ type: dataListType === "property_type" ? "PROPERTY_TYPE_COMMERCIAL" : "PROPERTY_USE_COMMERCIAL", payload: json.data.payload });
                } else {
                    dispatch({ type: dataListType === "property_type" ? "PROPERTY_TYPE_RESIDENTIAL" : "PROPERTY_USE_RESIDENTIAL", payload: json.data.payload });
                }
            })
            .catch(error => {
                console.log(error.response.data.message);
            })
    };
}



export const registerSeller = (formData) => {    
    return dispatch => {
        return axios
            .post(`${BASE_URL}/sellerRegistration`, filterFormData(formData), {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(json => {
                console.log(json);
            })
    };
}

export const validatePromoCode = promoCode => {
    return dispatch => {
        return axios
            .post(`${BASE_URL}/verifyPromocode?field-promocode=${promoCode}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(json => {
                let action = selectActionType(promoCode)
                dispatch({ type: action, payload: json.data.payload });
            })
            .catch(error => {
                return error;
            })
    };
};

const selectActionType = (dataListType) => {
    switch (dataListType) {
        case "product_type": return "PRODUCT_TYPE";
        case "asset_type": return "ASSET_TYPE";
        case "states": return "STATES";
        case "ideal_closing_days": return "CLOSING_DAYS";
        case "heard": return "HEARD";
        case "selling_reason": return "SELLING_REASONS";
        case "interestRate": return "INTEREST_RATE";
        case "lienPosition": return "LIEN_POSITION";
        case "loanStatus": return "LOAN_STATUS";
        case "bathrooms": return "BATHROOMS";
        case "bedrooms": return "BEDROOMS";
        case "stories": return "STORIES";
        case "units": return "UNITS";
        default:
            break;
    }
}

const filterFormData = (formData) => {
    const loadKeys = ["field-loan-status", "field-lien-position", "field-maturity-date", "field-interest-rate"];
    const commercialKeys = ["field-units", "field-stories"];
    const residentialKeys = ["field-bedrooms", "field-bathrooms"];
    const numberKeys = ["field-annual-taxes", "field-asking-price", "field-mortgage-balance", "field-what-price"];

    if (formData["field-product-type"] === 1) { // Real Estate
        loadKeys.forEach(key => {
            delete formData[key];
        });
        if(formData["field-asset-type"] === 1) {
            residentialKeys.forEach(key => {
                delete formData[key];
            });
        } else {
            commercialKeys.forEach(key => {
                delete formData[key];
            });
        }
    } else {
        delete formData["field-product-used"];
        residentialKeys.forEach(key => {
            delete formData[key];
        });
        commercialKeys.forEach(key => {
            delete formData[key];
        });
    }

    // Remove $ and convert string to number
    numberKeys.forEach(number => {
        formData[number] = parseFloat(formData[number].replace(/\$|,/g, ''));
    });
    return formData;
}