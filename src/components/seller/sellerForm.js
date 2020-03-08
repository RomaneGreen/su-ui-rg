import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Stepper, Step, StepLabel, StepConnector, Typography } from '@material-ui/core';
import Button from "../uiComponent/CustomButtons/Button";
import { staticData } from "../../common";
import classNames from 'classnames';
import { SellerInformation, PropertyInformation, FinancialInformation, SellerSubmit, SellerSuccess } from "../seller";
import SnackbarContent from "../uiComponent/Snackbar/SnackbarContent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sellerActions } from '../../actions';
import { validateSellerFormData } from './validation';
//style
import sellerStyle from "./sellerStyle";
import notificationsStyles from "../../assets/jss/material-kit-react/components/snackbarContentStyle";

function getStepContent(step, handleChange, formData, props, invalidSellerFormFields,
  handleInput, varifyPromoCode, isInvalidPromoCode, validSellerFormFields) {
  switch (step) {
    case 0:
      let { productType } = props;
      return (
        <SellerInformation handleChange={handleChange} handleInput={handleInput} varifyPromoCode={varifyPromoCode}
          formData={formData} productType={productType} invalidSellerFormFields={invalidSellerFormFields}
          isInvalidPromoCode={isInvalidPromoCode} validSellerFormFields={validSellerFormFields} />
      );
    case 1:
      let { states, assetTypes, propertyTypesCommercial, propertyTypesResidential,
        propertyUsedAsCommercial, propertyUsedAsResidential } = props;

      // Move this to a function
      let selectedProductType = formData["field-product-type"];
      let selectedAssetType = formData["field-asset-type"];
      let changedFields = {};
      changedFields.propertyTypes = propertyTypesResidential; // default residential

      if (selectedProductType === 1) { // Real Estate
        changedFields.propertyUsedAs = propertyUsedAsResidential; // default residential
        if (selectedAssetType === 1) { // Commercial
          changedFields.propertyTypes = propertyTypesCommercial;
          changedFields.propertyUsedAs = propertyUsedAsCommercial;
          staticData.commercialInitialData.forEach(commercial => {
            changedFields[commercial] = props[commercial];
          });
        } else {
          changedFields.propertyTypes = propertyTypesResidential;
          changedFields.propertyUsedAs = propertyUsedAsResidential;
          staticData.residentialInitialData.forEach(residential => {
            changedFields[residential] = props[residential];
          });
        }
      } else { // Loan
        staticData.loanInitialData.forEach(loan => {
          changedFields[loan] = props[loan];
        });
      }

      return (
        <PropertyInformation handleChange={handleChange} handleInput={handleInput}
          formData={formData} states={states} assetTypes={assetTypes}
          dropDowns={changedFields} invalidSellerFormFields={invalidSellerFormFields}
          validSellerFormFields={validSellerFormFields} />
      );
    case 2:
      return (
        <FinancialInformation handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidSellerFormFields={invalidSellerFormFields}
          validSellerFormFields={validSellerFormFields} />
      );
    case 3:
      let { idealClosingDate, sourceOfInformation, reasonSelling } = props;
      return (
        <SellerSubmit handleChange={handleChange} handleInput={handleInput}
          formData={formData} idealClosingDate={idealClosingDate}
          heard={sourceOfInformation} reasonSelling={reasonSelling}
          invalidSellerFormFields={invalidSellerFormFields} validSellerFormFields={validSellerFormFields} />
      );
    default:
      return (
        <SellerSuccess />
      );
  }
}

class SellerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      invalidSellerFormFields: [],
      validSellerFormFields: [],
      sellerFormData: staticData.sellerFormData,
      completedSteps: [],
      isInvalidPromoCode: false
    }
  }

  componentDidMount() {
    // Loads inital data required for every case
    staticData.sellerInitialData.forEach(datalist_type => {
      this.props.fetchSellerFormData(datalist_type);
    });
  }

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = (event) => {
    let { activeStep, completedSteps, invalidSellerFormFields } = this.state;
    const invalidFields = validateSellerFormData(activeStep, this.state.sellerFormData);
    invalidSellerFormFields = Object.assign(invalidSellerFormFields, invalidFields);
    if (invalidSellerFormFields.length) {
      this.setState({ invalidSellerFormFields });
      return;
    }
    completedSteps.push(activeStep);
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
      completedSteps
    });
    if (completedSteps.length === 4) {
      event.preventDefault();
      this.props.registerSeller(this.state.sellerFormData);
    }
    window.scrollTo(0, 0);

  };

  handleBack = () => {
    const { activeStep, completedSteps } = this.state;
    const invalidFields = [];
    this.setState({
      invalidSellerFormFields: invalidFields
    });
    completedSteps.splice(completedSteps.indexOf(activeStep - 1));
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      completedSteps
    }));
    window.scrollTo(0, 0);

  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completedSteps: []
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  fetchConditionalData = (assetType) => {
    this.props.fetchPropertyDetails("property_use", assetType);
    if (assetType === 1) {//commercial
      staticData.commercialInitialData.forEach(data => {
        this.props.fetchSellerFormData(data);
      });
    }
    else {//residential        
      staticData.residentialInitialData.forEach(data => {
        this.props.fetchSellerFormData(data);
      });
    }
  }

  fetchProductTypeDetails = (productType) => {
    // replace call with hard coded values to product type loop from api call
    this.props.fetchPropertyDetails("property_type", 2, productType);
    this.props.fetchPropertyDetails("property_type", 1, productType);
    if (productType === 1) { //Real Estate
      this.fetchConditionalData(1);
      this.fetchConditionalData(2);
    } else { // Loan
      staticData.loanInitialData.forEach(data => {
        this.props.fetchSellerFormData(data);
      });
    }

  }

  handleInput = event => {
    const {name, value} = event.target;
    if(event.target.name === "field-zip" && (isNaN(event.target.value))){
      return;
    }
    if ((name === "field-zip" ||
      name === "field-square-feet" ||
      name === "field-units" ||
      name === "field-stories" ||
      name === "field-bedrooms" ||
      name === "field-bathrooms") && (isNaN(value))) {
      return;
    }
    this.setState({
      sellerFormData: {
        ...this.state.sellerFormData, [event.target.name]: event.target.value,
      },
    });
    let { invalidSellerFormFields, validSellerFormFields } = this.state;
    if (event.target.name === "field-promo-code" && event.target.value !== "") {
      if (!invalidSellerFormFields.includes(event.target.name)) {
        invalidSellerFormFields.push(event.target.name);
        this.setState({
          isInvalidPromoCode: false,
          invalidSellerFormFields: invalidSellerFormFields
        });
        const index = validSellerFormFields.indexOf(event.target.name);
        if (validSellerFormFields.includes(event.target.name)) {
          validSellerFormFields.splice(index, 1);
        }
      }
    } else {
      const index = invalidSellerFormFields.indexOf(event.target.name);
      if (invalidSellerFormFields.includes(event.target.name)) {
        invalidSellerFormFields.splice(index, 1);
        this.setState({
          isInvalidPromoCode: false,
          invalidSellerFormFields: invalidSellerFormFields
        });
      }
    }
  }

  varifyPromoCode = event => {
    const that = this;
    let { invalidSellerFormFields } = this.state;
    const componentName = event.target.name;
    if (componentName === "field-promo-code" && event.target.value !== "") {
      this.props.validatePromoCode(event.target.value).then(data => {
        if (!data.response.data.status) {
          invalidSellerFormFields.push(componentName);
          that.setState({
            isInvalidPromoCode: !data.response.data.status,
            invalidSellerFormFields: invalidSellerFormFields
          })
        }
      });
    } else {
      const index = invalidSellerFormFields.indexOf(componentName);
      if (invalidSellerFormFields.includes(componentName)) {
        invalidSellerFormFields.splice(index, 1);
        this.setState({
          isInvalidPromoCode: false,
          invalidSellerFormFields: invalidSellerFormFields
        });
      }
    }
  }

  handleChange = event => {
    let { invalidSellerFormFields, validSellerFormFields } = this.state;
    if(event.target.name === "field-maturity-date") {
      this.setState({
        sellerFormData: {
          ...this.state.sellerFormData, [event.target.name]: event.target.value,
        },
      });
    }
    if (event.target.value === "" || event.target.value === null) {
      if (!invalidSellerFormFields.includes(event.target.name)) {
        invalidSellerFormFields.push(event.target.name);
        const index = validSellerFormFields.indexOf(event.target.name);
        if (validSellerFormFields.includes(event.target.name)) {
          validSellerFormFields.splice(index, 1);
        }
      }
    } else {
      const index = invalidSellerFormFields.indexOf(event.target.name);
      if (invalidSellerFormFields.includes(event.target.name)) {
        invalidSellerFormFields.splice(index, 1);
      }
      if (!validSellerFormFields.includes(event.target.name)) {
        validSellerFormFields.push(event.target.name);
      }
    }
    if (event.target.name === "field-product-type") {
      this.fetchProductTypeDetails(event.target.value);
    }
    if (event.target.name === "field-email" && event.target.value !== "") {
      if (!this.validateEmail(event.target.value)) {
        if (!invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.push(event.target.name);
          const index = validSellerFormFields.indexOf(event.target.name);
          if (validSellerFormFields.includes(event.target.name)) {
            validSellerFormFields.splice(index, 1);
          }
        }
      } else {
        const index = invalidSellerFormFields.indexOf(event.target.name);
        if (invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.splice(index, 1);
        }
        if (!validSellerFormFields.includes(event.target.name)) {
          validSellerFormFields.push(event.target.name);
        }
      }
    }
    if (event.target.name === "field-zip" && event.target.value !== "") {
      if (!this.validateZip(event.target.value)) {
        if (!invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.push(event.target.name);
          const index = validSellerFormFields.indexOf(event.target.name);
          if (validSellerFormFields.includes(event.target.name)) {
            validSellerFormFields.splice(index, 1);
          }
        }
      } else {
        const index = invalidSellerFormFields.indexOf(event.target.name);
        if (invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.splice(index, 1);
        }
        if (!validSellerFormFields.includes(event.target.name)) {
          validSellerFormFields.push(event.target.name);
        }
      }
    }
    if (event.target.name === "field-square-feet" && event.target.value !== "") {
      if (isNaN(event.target.value)) {
        if (!invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.push(event.target.name);
          const index = validSellerFormFields.indexOf(event.target.name);
          if (validSellerFormFields.includes(event.target.name)) {
            validSellerFormFields.splice(index, 1);
          }
        }
      } else {
        const index = invalidSellerFormFields.indexOf(event.target.name);
        if (invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.splice(index, 1);
        }
        if (!validSellerFormFields.includes(event.target.name)) {
          validSellerFormFields.push(event.target.name);
        }
      }
    }
    if ((event.target.name === "field-work-phone" || event.target.name === "field-mobile-phone") &&
      event.target.value !== "") {
      const number = event.target.value.replace(/[^0-9.]/g, "");
      if (number.toString().length < 10) {
        if (!invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.push(event.target.name);
          const index = validSellerFormFields.indexOf(event.target.name);
          if (validSellerFormFields.includes(event.target.name)) {
            validSellerFormFields.splice(index, 1);
          }
        }
      } else {
        const index = invalidSellerFormFields.indexOf(event.target.name);
        if (invalidSellerFormFields.includes(event.target.name)) {
          invalidSellerFormFields.splice(index, 1);
        }
        if (!validSellerFormFields.includes(event.target.name)) {
          validSellerFormFields.push(event.target.name);
        }
      }
    }
    if (this.state.sellerFormData["field-asset-type"] === 1 && this.state.sellerFormData["field-product-type"] === 1) {
      const indexOfStories = invalidSellerFormFields.indexOf("field-stories");
      const indexOfUnits = invalidSellerFormFields.indexOf("field-units");
      if (invalidSellerFormFields.includes("field-stories")) {
        invalidSellerFormFields.splice(indexOfStories, 1);
      }
      if (invalidSellerFormFields.includes("field-units")) {
        invalidSellerFormFields.splice(indexOfUnits, 1);
      }
      if (!validSellerFormFields.includes("field-units")) {
        validSellerFormFields.push("field-units");
      }
    }
    if (this.state.sellerFormData["field-asset-type"] === 2 && this.state.sellerFormData["field-product-type"] === 1) {
      const indexOfbedrooms = invalidSellerFormFields.indexOf("field-bedrooms");
      const indexOfbathrooms = invalidSellerFormFields.indexOf("field-bathrooms");
      if (invalidSellerFormFields.includes("field-bedrooms")) {
        invalidSellerFormFields.splice(indexOfbedrooms, 1);
      }
      validSellerFormFields.push("field-bedrooms");
      if (invalidSellerFormFields.includes("field-bathrooms")) {
        invalidSellerFormFields.splice(indexOfbathrooms, 1);
      }
      if (!validSellerFormFields.includes("field-bedrooms")) {
        validSellerFormFields.push("field-bedrooms");
      }
      if (!validSellerFormFields.includes("field-bathrooms")) {
        validSellerFormFields.push("field-bathrooms");
      }
    }
    this.setState({
      invalidSellerFormFields: invalidSellerFormFields,
      validSellerFormFields: validSellerFormFields
    });

  };

  validateEmail(value) {
    /* eslint no-useless-escape: "off" */
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(value).toLowerCase());
  };

  validateZip(value) {
    const zipRegex = /^[0-9]*$/;
    return zipRegex.test(String(value).toLowerCase()) && value.length === 5;
  };

  getStepIcon = (step, stepIndex) => {
    const icon1 = <i className="sb-icon-user"></i>
    const icon2 = <i className="sb-icon-home-small"></i>
    const icon3 = <i className="sb-icon-money"></i>
    const icon4 = <i className="sb-icon-send"></i>
    const stepCompletedIcon = <i className="sb-icon-tick-bold"></i>

    if (this.state.completedSteps.indexOf(stepIndex) > -1) {
      return stepCompletedIcon;
    }

    switch (step.step) {
      case "SELLER": return icon1;
      case "PROPERTY": return icon2;
      case "FINANCIAL": return icon3;
      case "SUBMIT": return icon4;
      default:
    }
  };

  render() {
    const steps = staticData.sellerFormSteps;
    const { activeStep } = this.state;
    const { classes } = this.props;
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );
    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={12} className={'form-wrapper'}>
          <div className={classes.stepperHead}>
            <Typography variant="h5" align='center'>Seller Form.</Typography>
            <Typography variant="h6" align='center'>Carefully complete.</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel connector={connector}>
              {steps.map((step, index) => {
                const props = {};
                const labelProps = {};
                return (
                  <Step key={step} {...props}>
                    <StepLabel
                      className={classes.stepperLabel}
                      classes={{
                        active: classes.stepperActive,
                        completed: classes.stepperCompleted,
                        disabled: classes.stepperDisabled,
                        line: classes.stepperLine,
                      }}
                      icon={this.getStepIcon(step, index)}{...labelProps}>{step.step}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
          <Grid item xs={12}>
            {activeStep === steps.length ? (
              <Grid item xs={12}>
                <SellerSuccess />
              </Grid>
            ) : (
                <Grid item xs={12}>
                  <Grid xs={12} item className={'form-wrapper-box'}>
                    {getStepContent(activeStep, this.handleChange, this.state.sellerFormData, this.props, this.state.invalidSellerFormFields,
                      this.handleInput, this.varifyPromoCode, this.state.isInvalidPromoCode, this.state.validSellerFormFields)}
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify={(activeStep === 0) ? 'flex-end' : 'space-between'}
                    alignItems="center"
                  >
                    {activeStep !== 0 && <Button
                      onClick={this.handleBack}
                      className={classNames(classes.buttonSecondryTrans)}
                    >
                      Back
                    </Button>}

                    <Button
                      color="success"
                      size="lg"
                      onClick={this.handleNext}
                      className={classNames(classes.buttonSecondry)}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify='center'
                    alignItems="center"
                    className={classNames(classes.notification)}
                  >
                    <SnackbarContent
                      message={
                        <span>Once form is complete, an Agent will contact you to review and create a listing.</span>
                      }
                      close
                      color="info"
                      icon="sb-icon-info"
                    />
                  </Grid>
                </Grid>
              )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SellerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  return {
    ...state.sellerReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(sellerActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(sellerStyle, notificationsStyles)(SellerForm));
