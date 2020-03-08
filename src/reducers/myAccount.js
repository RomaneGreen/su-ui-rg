
export default function myAccountReducer(state={}, action) {
    switch (action.type) {
        case "BUYER_PROFILE_DETAILS":
            return { ...state, buyerProfileDetails: action.payload }
        case "BUYER_PREFERENCES":
            return { ...state, buyerPreferences: action.payload }
        default:
            return state;
    }
}