import _ from "lodash";

const stepMapping = {
    1: 'buyerInfo',
    2: 'profileType'
}

const requiredFields = {
    buyerInfo: ["email", "first_name", "last_name", "phone", "work_phone", "password", "password_confirmation", "gender", "country",
        "address", "city", "state", "zip", "also_mailing_address", "card-number", "card-type", "name-on-card", "cvc",
        "birth-month", "birth-date", "birth-year"],
    profileType: ["profile_type_id", "closing_period", "buy_in", "are_you_cash_buyer", "are_you_agent", "purchase", "heard"],
}

export const validateBuyerFormData = (activeStep, formData) => {
    let activeStepName = stepMapping[activeStep];

    if (!activeStepName) return;
    let invalidFields = [];
    _.each(formData, (value, field) => {
        if (requiredFields[activeStepName].includes(field) && value === '') {
            invalidFields.push(field);
        }
    });

    return invalidFields;
}

export const validateBuyerInfo = (stepName, formData) => {
    const buyerInfoRequiredFields = {
        buyerLogin: ["email", "password", "password_confirmation"],
        buyerInfo: ["first_name", "last_name", "phone", "work_phone", "birth-month", "birth-date", "birth-year", "gender"],
        billingAddress: ["address", "city", "state", "zip", "country", "also_mailing_address"],
        paymentInfo: ["card-number", "card-type", "name-on-card", "cvc",]
    }

    let invalidFields = [];
    _.each(formData, (value, field) => {
        if (buyerInfoRequiredFields[stepName].includes(field) && value === '') {
            invalidFields.push(field);
        }
    });

    return invalidFields;

}

export const validateBuyerProfile = (stepName, formData) => {
    const buyerInfoRequiredFields = {
        profileType: ["profile_type_id"],
        investingExperience: ["purchase", "all-cash-buyer", "closing-period"],
        generalInfo: ["buy-in", "real-estate-agent", "heard-about"]
    }

    let invalidFields = [];
    _.each(formData, (value, field) => {
        if (buyerInfoRequiredFields[stepName].includes(field) && value === '') {
            invalidFields.push(field);
        }
    });

    return invalidFields;
}