// import authenticationContainer from "../components/authentication/authenticationContainer";

const initialState = {
    pagination: {
        pageNumber: 1,
        limit: 15,
        totalCount: 0
    },
    filters: {},
    showEmailSuccess: false,
    showEmailForm: false,
    showSuccessRefer: true,
    isFavListingRemoved: false,
    propertyDetails: []
}

export default function propertyReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PROPERTY_DETAILS":
            return { ...state, propertyDetails: action.payload }
        case "LISTINGS_FETCHED":
            return Object.assign({}, state,
                { listings: action.payload.listings });
        case "SEARCH_FILTER":
            var searchFilters = state.filters;
            if (isNaN(action.payload.data)) {
                delete searchFilters[action.payload.name];
            }
            else {
                if (action.payload.name === 'Asset Type') {
                    delete searchFilters["Property Type"];
                }
                searchFilters[action.payload.name] = action.payload.data;
            }
            return { ...state, searchFilters }
        case "PAGINATION":
            return { ...state, pagination: action.payload }
        case "SORT_COLUMN":
        case "SET_FETCHING_FLAG":
        case "RESET_PAGE_OFFSET":
        case "RESET_FILTER_FLAG":
        case "SET_SORT_COLUMN":
            return state;
        case "CLEAR_FILTER":
            var clearFilters = state.filters;
            delete clearFilters[action.payload];
            return { ...state, clearFilters }
        case "CLEAR_ALL_FILTERS":
            return { ...state, filters: {} }
        case "FAVOURITE_LISTINGS":
            return { ...state, favouriteListings: action.payload }
        case "RESET_PAGINATION":
            var pagination = state.pagination;
            pagination.totalCount = 0;
            return { ...state, pagination: pagination }
        case "CHANGE_EMAIL_SUCCESS":
            return { ...state, showEmailSuccess: !state.showEmailSuccess }
        case "SHOW_EMAIL_FORM":
            return { ...state, showEmailForm: !state.showEmailForm }
        case "SHOW_SUCCESS_REFER":
            return { ...state, showSuccessRefer: !state.showSuccessRefer }
        case "SET_LOGIN_TYPE":
            return { ...state, loginType: action.payload }
        case "FAV_LISTING_REMOVED":
            return { ...state, isFavListingRemoved: action.payload }
        default:
            return state;
    }
}