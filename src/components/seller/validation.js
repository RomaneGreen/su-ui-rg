import _ from "lodash";

const stepMapping = {
    0: 'sellerInformation',
    1: 'propertyInformation',
    2: 'financialInformation',
    3: 'generalInformation'
}

const requiredFields = {
    sellerInformation: ['field-first-name', 'field-last-name', 'field-product-type', 'field-owner-yet', 'field-work-phone', 'field-mobile-phone', 'field-email',],
    propertyInformation: ['field-address', 'field-city', 'field-state', 'field-zip', 'field-asset-type', 'field-property-type'],
    // 'field-bedrooms', 'field-property-used', 'field-bathrooms', 'field-square-feet', 'field-loan-status', 'field-lein-position', 'field-interest-rate', 'field-maturity-date'],
    financialInformation: ['field-asking-price', 'field-listed', 'field-taxes-current'],
    generalInformation: ['field-closing-date', 'field-reason-selling', 'field-heard-about-us',]
}

export const validateSellerFormData = (activeStep, formData) => {
    let activeStepName = stepMapping[activeStep];

    // let currentStepEmptyFields = _.map(formData[activeStepName], (value, key) => {
    //     if (!value || value === '') {
    //         return key;
    //     }
    // });

    // return _.map(currentStepEmptyFields, (field) => {
    //     if (requiredFields[activeStepName].includes(field)) {
    //         return field;
    //     }
    // });
    let invalidFields = [];
    _.each(formData, (value,field ) => {
        if (requiredFields[activeStepName].includes(field) && value === '') {
            invalidFields.push(field);
        }
    });
    if(activeStep === 1) {
        if(formData) {
            if(formData["field-product-type"] === 1) {
                if(formData["field-property-used"] === ''){
                    invalidFields.push("field-property-used");
                }
                if(formData["field-square-feet"] === ''){
                    invalidFields.push("field-square-feet");
                }
                if(formData["field-asset-type"] === 1) {
                    if(formData["field-stories"] === ''){
                        invalidFields.push("field-stories");
                    }
                    if(formData["field-units"] === ''){
                        invalidFields.push("field-units");
                    }
                }
                if(formData["field-asset-type"] === 2) {
                    if(formData["field-bedrooms"] === ''){
                        invalidFields.push("field-bedrooms");
                    }
                    if(formData["field-bathrooms"] === ''){
                        invalidFields.push("field-bathrooms");
                    }
                }
            }
            else if(formData["field-product-type"] === 2) {
                if(formData["field-loan-status"] === ''){
                    invalidFields.push("field-loan-status");
                }
                if(formData["field-lien-position"] === ''){
                    invalidFields.push("field-lien-position");
                }
                if(formData["field-interest-rate"] === ''){
                    invalidFields.push("field-interest-rate");
                }
                if(formData["field-maturity-date"] === ''){
                    invalidFields.push("field-maturity-date");
                }
            }
        }
    }
    return invalidFields;
}