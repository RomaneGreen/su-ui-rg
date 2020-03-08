import _ from "lodash";

const stepMapping = {
    0: 'agentInfoWithLicense',
    3: 'agentInfoWithoutLicense',
    2: 'directPayYes',
    4: 'directPayNo'
}

const requiredFields = {
    agentInfoWithLicense: ["field-first-name","field-last-name","field-home-phone","field-mobile-phone","field-home-email","gender","field-address","birth-month","birth-date","birth-year","field-city","field-state","field-country","field-zip","real-estate-license","field-licence-type","field-license-state","field-licence-number","field-expiration-date","field-license-issued"],
    agentInfoWithoutLicense: ["field-first-name","field-last-name","field-home-phone","field-mobile-phone","field-home-email","gender","field-address","birth-month","birth-date","birth-year","field-city","field-state","field-country","field-zip","real-estate-license"],
    directPayYes: ["direct-pay", "field-bank-name", "field-account-number", "field-routing-number", "field-bank-address", "field-directPay-city", "field-bank-state", "field-directPay-zip", "field-bank-phone", "field-same-as-home-address"],
    directPayNo: ["direct-pay"],
}

export const validateAgentFormData = (activeStep, formData) => {
    let activeStepName;
    if(activeStep === 0 && formData["real-estate-license"] === "1") {
        activeStep = 0;
    } else if (activeStep === 0 && formData["real-estate-license"] === "0") {
        activeStep = 3;
    } else if(activeStep === 2 && formData["direct-pay"] === "1") {
        activeStep = 2;
    } else if (activeStep === 2 && formData["direct-pay"] === "0") {
        activeStep = 4;
    }
    activeStepName = stepMapping[activeStep];

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