/* eslint no-unused-vars: "off" */
import axios from "axios";
import history from "../common/history";
import { BASE_URL } from "../common/config";

// const BASE_URL = "https://dev.sellerbailout.com/seller/api";
function getCookie() {
  var value = "; " + document.cookie;
  var parts = value.split("; access_token=");
  if (parts.length === 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

function setAuthHeaders() {
  var auth = "Bearer " + getCookie();
  axios.defaults.headers.common["Authorization"] = auth;
}

export const fetchPropertyDetails = propertyId => {
  return async dispatch => {
    setAuthHeaders();
    try {
      const response = await axios.get(`${BASE_URL}/getSingleListing?property_id=${propertyId}`, {});
      dispatch({ type: "GET_PROPERTY_DETAILS", payload: response.data.payload });
    } catch(error) {
      if (error.response && error.response.status === 401) {
        dispatch(setLoginType("listing"));
        history.push(`${process.env.PUBLIC_URL}/authenticate`);
      } else {
        console.log("error", error)
      }
    }
  }
};

export const getFilteredListings = () => {
  setAuthHeaders();
  return (dispatch, getState) => {
    var state = getState();
    let filters = mapFilters(state.propertyReducer.filters);
    let pagination = state.propertyReducer.pagination;

    return axios
      .post(`${BASE_URL}/getFilteredListing`, {
        ...filters,
        limit: pagination.limit,
        page: pagination.pageNumber
      })
      .then(function(result) {
        dispatch({ type: "LISTINGS_FETCHED", payload: result.data.payload });
        pagination.totalCount = result.data.payload.filteredCount;
        dispatch({ type: "PAGINATION", payload: pagination });
      })
      .catch(function(error) {
        if (error.response.status === 401) {
          dispatch(setLoginType("listing"));
          history.push(`${process.env.PUBLIC_URL}/authenticate`);
        }
      });
  };
};

export const getFavouriteListing = () => {
  setAuthHeaders();
  return (dispatch, getState) => {
    let pagination = getState().propertyReducer.pagination;
    axios
      .get(
        `${BASE_URL}/getFavouriteListing?page=${pagination.pageNumber}&limit=${pagination.limit}`
      )
      .then(response => {
        dispatch({
          type: "FAVOURITE_LISTINGS",
          payload: response.data.payload
        });
      })
      .catch(error => {
        if (error.response.status === 401) {
          dispatch(setLoginType("listing"));
          history.push(`${process.env.PUBLIC_URL}/authenticate`);
        }
      });
  };
};

export const filterChangeHandler = (event, pageNumber) => {
  return (dispatch, getstate) => {
    let state = getstate();
    dispatch({ type: "RESET_PAGINATION" });
    dispatch(setFiltersAndPagination(event, state, pageNumber));
    dispatch(getFilteredListings());
  };
};

export const setFiltersAndPagination = (event, state, selectedPageNumber) => {
  let type, selectedFilter, payload;
  let data = event.target.value;
  let name = event.target.name || event.target.getAttribute("name");
  if (!name) return;

  const { pageNumber, limit, totalCount } = state.propertyReducer.pagination;

  switch (name) {
    case "nextPage":
      type = "PAGINATION";
      // var pagination = state.propertyReducer.pagination;
      // var pageNumber = pagination.pageNumber + 1;
      payload = { pageNumber: pageNumber + 1, limit, totalCount };
      break;

    case "previousPage":
      type = "PAGINATION";
      // var pagination = state.propertyReducer.pagination;
      // var pageNumber = pagination.pageNumber - 1;
      payload = { pageNumber: pageNumber - 1, limit, totalCount };
      break;
    case "pageNumber":
      type = "PAGINATION";
      payload = { pageNumber: selectedPageNumber, limit, totalCount };
      break;
    case "clearFilter":
      selectedFilter = event.currentTarget.attributes.filtertagname.value;
      type = "CLEAR_FILTER";
      payload = selectedFilter;
      break;
    case "order_by":
      type = "SORT_COLUMN";
      payload = data;
      break;
    case "clearAllFilters":
      type = "CLEAR_ALL_FILTERS";
      payload = "";
      break;
    default:
      type = "SEARCH_FILTER";
      payload = { name, data };
      break;
  }
  return { type, payload };
};

export const addFavourite = listing_id => {
  return dispatch => {
    axios
      .post(`${BASE_URL}/addFavourite`, { listing_id })
      .then(dispatch(getFavouriteListing()));
  };
};

export const deleteFavourite = listing_id => {
  return dispatch => {
    axios
      .delete(`${BASE_URL}/removeFavourite?listing_id=${listing_id}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded (delete)"
        }
      })
      .then(() => {
        dispatch(favListingRemoved(true));
        dispatch(getFavouriteListing());
      });
  };
};

const mapFilters = filters => {
  let isCommmercialAssetType = filters["asset_type_id"] === 1;
  let filterMap = {
    order_by: "order_by",
    "Product Type": "product_type_id",
    "Asset Type": "asset_type_id",
    //"ResidentialPropertyType": "property_type_id",
    //"Investor Type":
    "Property Type": "property_type_id",
    State: "state",
    County: "country",
    City: "city",
    //"Neighborhood":,
    Price: "price_rang",
    Bedrooms: "bedrooms_rang",
    Bathrooms: "bathrooms_rang",
    "# Of Stories": "stories_rang",
    "# Of Units": "units_rang",
    noteStatus: "note_status",
    "Lien Position": "lien_position",
    "Total SQFT": isCommmercialAssetType
      ? "total_square_feet_commercial_rang"
      : "total_square_feet_residential_rang",
    "Lot Area SQFT (Floorplate)": "lot_square_feet_rang",
    "Maturity Date": "maturity_rang",
    "Interest Rate": "interest_rate_rang",
    "Year Built": isCommmercialAssetType
      ? "year_built_commercial_rang"
      : "year_built_residential_rang",
    Occupancy: isCommmercialAssetType
      ? "occupancy_commercial"
      : "occupancy_residential"
  };
  let mappedFilters = {};

  for (var key in filters) {
    mappedFilters[filterMap[key] || key] = filters[key];
  }

  return mappedFilters;
};

export const contactAgent = emailDetails => {
  return async dispatch => {
    try {
      const json = await axios.post(`${BASE_URL}/contactAgent`, emailDetails);
      dispatch(changeEmailSuccess());
      dispatch(changeShowEmailForm());
    } catch (error) {
      return error;
    }
  };
};

export const changeEmailSuccess = () => {
  return {
    type: "CHANGE_EMAIL_SUCCESS"
  };
};

export const changeShowEmailForm = () => {
  return {
    type: "SHOW_EMAIL_FORM"
  };
};

export const referEmailListing = emailDetails => {
  return async dispatch => {
    try {
      const json = await axios.post(`${BASE_URL}/mailForListing`, emailDetails);
      dispatch(showSuccessReferModal());
    } catch (error) {
      return error;
    }
  };
};

export const showSuccessReferModal = () => {
  return {
    type: "SHOW_SUCCESS_REFER"
  };
};

export const setLoginType = type => {
  return { type: "SET_LOGIN_TYPE", payload: type };
};

export const favListingRemoved = response => {
  return {
    type: "FAV_LISTING_REMOVED",
    payload: response
  };
};
