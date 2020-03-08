import { combineReducers } from "redux";
import { sellerReducer, sellerFormDataReducer, authenticateReducer, propertyReducer, myAccountReducer, buyerReducer } from "../reducers";

const rootReducer = combineReducers({
    sellerReducer,
    sellerFormDataReducer,
    authenticateReducer,
    propertyReducer,
    myAccountReducer,
    buyerReducer,
})

export default rootReducer;
