export default function sellerFormDataReducer(state = {}, action) {
    const initialState = {
        sellerInformation : {
            'field-first-name': '',
            'field-last-name': '',
            'field-product-type': '',
            'field-owner-yet': '',
            'field-work-phone': '',
            'field-mobile-phone': '',
            'field-email': '',
        },
        propertyInformation : {
            'field-address': '',
            'field-suite': '',
            'field-city': '',
            'field-state': '',
            'field-zip': '',
            'field-asset-type': '',
            'field-property-type': '',
            'field-property-used': '',
            'field-bedrooms': '',
            'field-bathrooms': '',
            'field-square-feet': '',
            'field-loan-status': '',
            'field-lien-position': '',
            'field-interest-rate': '',
            'field-maturity-date': '',
            'field-stories': '',
            'field-units': ''
        },
        financialInformation : {
            'field-asking-price': '',
            'field-listed': '',
            'field-what-price': '',
            'field-mortgage-balance': '',
            'field-annual-taxes': '',
            'field-taxes-current': '',
        },
        generalInformation : {
            'field-closing-date': '',
            'field-reason-selling': '',
            'field-heard-about-us': '',
        }
    };

    state = initialState;

    switch (action.type) {
        case "test_action":
            return Object.assign({}, state, { data: action.payload });

        default:
            return state;
    }
}