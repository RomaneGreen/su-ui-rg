export default function sellerReducer(state = {}, action) {
    switch (action.type) {
        case "PRODUCT_TYPE":
            return Object.assign({}, state, { productType: action.payload });
        case "ASSET_TYPE":
            return Object.assign({}, state, { assetTypes: action.payload });
        case "STATES":
            return Object.assign({}, state, { states: action.payload });
        case "CLOSING_DAYS":
            return Object.assign({}, state, { idealClosingDate: action.payload });
        case "HEARD":
            return Object.assign({}, state, { sourceOfInformation: action.payload });
        case "SELLING_REASONS":
            return Object.assign({}, state, { reasonSelling: action.payload });
        case "PROPERTY_TYPE_COMMERCIAL":
            return Object.assign({}, state, { propertyTypesCommercial: action.payload });
        case "PROPERTY_USE_COMMERCIAL":
            return Object.assign({}, state, { propertyUsedAsCommercial: action.payload });
        case "PROPERTY_TYPE_RESIDENTIAL":
            return Object.assign({}, state, { propertyTypesResidential: action.payload });
        case "PROPERTY_USE_RESIDENTIAL":
            return Object.assign({}, state, { propertyUsedAsResidential: action.payload });
        case "INTEREST_RATE":
            return Object.assign({}, state, { interestRate: action.payload });
        case "LIEN_POSITION":
            return Object.assign({}, state, { lienPosition: action.payload });
        case "LOAN_STATUS":
            return Object.assign({}, state, { loanStatus: action.payload });
        case "BATHROOMS":
            return Object.assign({}, state, { bathrooms: action.payload });
        case "BEDROOMS":
            return Object.assign({}, state, { bedrooms: action.payload });
        case "STORIES":
            return Object.assign({}, state, { stories: action.payload });
        case "UNITS":
            return Object.assign({}, state, { units: action.payload });
        default:
            return state;
    }
}