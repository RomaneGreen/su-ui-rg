import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Stepper, Step, StepLabel, StepConnector, Typography } from '@material-ui/core';
import Button from "../uiComponent/CustomButtons/Button";
import { staticData } from "../../common";
import classNames from 'classnames';
import { BuyerPlan, BuyerInfo, ProfileType, BuyerCheckout, BuyerSucess } from "../buyer";
import { validateBuyerFormData, validateBuyerInfo, validateBuyerProfile } from './validation';
import SnackbarContent from "../uiComponent/Snackbar/SnackbarContent";
// import {buyerActions} from '../../actions';  
import buyerStyle from "./buyerStyle";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { buyerActions } from '../../actions';

function getStepContent(step, handleChange, formData, invalidBuyerFormFields, handleInput, handlButtonToggle, validBuyerFormFields, handleDoneClick_buyerInfo, handleDoneClick_buyerProfile, setBuyerInfoValidated, handleFormEdit, handleNext, setBuyerProfileValidated, submitBuyerFormData) {
  switch (step) {
    case 0:
      return (
        <BuyerPlan handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} />
      );
    case 1:
      return (
        <BuyerInfo handleChange={handleChange} handleInput={handleInput} handlButtonToggle={handlButtonToggle}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} validBuyerFormFields={validBuyerFormFields}
          handleDoneClick_buyerInfo={handleDoneClick_buyerInfo} setBuyerInfoValidated={setBuyerInfoValidated} />
      );
    case 2:
      return (
        <ProfileType handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} validBuyerFormFields={validBuyerFormFields}
          setBuyerProfileValidated={setBuyerProfileValidated} handleDoneClick_buyerProfile={handleDoneClick_buyerProfile} />
      );
    case 3:
      return (
        <BuyerCheckout handleChange={handleChange}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} handleFormEdit={handleFormEdit} handleNext={handleNext} submitBuyerFormData={submitBuyerFormData} />
      );
    default:
      return (
        <BuyerSucess />
      );
  }
}

class BuyerForm extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    buyerFormData: staticData.buyerFormData,
    completedSteps: [],
    invalidBuyerFormFields: [],
    validBuyerFormFields: [],
    buyerInfoValidated: false,
    buyerProfileValidated: false
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    let { activeStep, completedSteps, invalidBuyerFormFields } = this.state;
    const invalidFields = validateBuyerFormData(activeStep, this.state.buyerFormData);
    invalidBuyerFormFields = Object.assign(invalidBuyerFormFields, invalidFields);
    if (invalidBuyerFormFields.length) {
      this.setState({ invalidBuyerFormFields });
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
    window.scrollTo(0, 0);

  };

  handleDoneClick_buyerInfo = (stepName) => {
    let { invalidBuyerFormFields } = this.state;
    const invalidFields = validateBuyerInfo(stepName, this.state.buyerFormData);
    invalidBuyerFormFields = Object.assign(invalidBuyerFormFields, invalidFields);
    if (invalidBuyerFormFields.length) {
      this.setState({ invalidBuyerFormFields });
      return;
    }
    return true;
  };

  handleDoneClick_buyerProfile = (stepName) => {
    let { invalidBuyerFormFields } = this.state;
    const invalidFields = validateBuyerProfile(stepName, this.state.buyerFormData);
    invalidBuyerFormFields = Object.assign(invalidBuyerFormFields, invalidFields);
    if (invalidBuyerFormFields.length) {
      this.setState({ invalidBuyerFormFields });
      return;
    }
    return true;
  }

  setBuyerInfoValidated = () => {
    this.setState({ buyerInfoValidated: true })
  }

  setBuyerProfileValidated = () => {
    this.setState({ buyerProfileValidated: true })
  };

  handlButtonToggle = (event, value) => {
    if (value === "male" || value === "female") {
      this.setState({
        buyerFormData: {
          ...this.state.buyerFormData, "gender": value,
        },
      });
    } else {
      this.setState({
        buyerFormData: {
          ...this.state.buyerFormData, "also_mailing_address": value,
        },
      });
    }
  }

  handleBack = () => {
    const { activeStep, completedSteps } = this.state;
    completedSteps.splice(completedSteps.indexOf(activeStep - 1))
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      completedSteps,
      invalidBuyerFormFields: []
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

  handleInput = event => {
    if ((event.target.name === "zip" || event.target.name === "cvc" || event.target.name === "card-number"
      || event.target.name === "birth-month" || event.target.name === "birth-date" || event.target.name === "birth-year") && (isNaN(event.target.value))) {
      return;
    }
    this.setState({
      buyerFormData: {
        ...this.state.buyerFormData, [event.target.name]: event.target.value,
      },
    });
  }

  handleChange = (event) => {
    let { invalidBuyerFormFields, validBuyerFormFields } = this.state;
    if (!event.target.name && !event.target.value) {
      if (event.currentTarget.attributes.name.value && event.currentTarget.attributes.value.value) {
        this.setState({
          buyerFormData: {
            ...this.state.buyerFormData, [event.currentTarget.attributes.name.value]: event.currentTarget.attributes.value.value
          },
        });

      }
    }
    else {
      this.setState({
        buyerFormData: {
          ...this.state.buyerFormData, [event.target.name]: event.target.value,
        },
      });
    }
    if (event.target.value === "" || event.target.value === null) {
      if (!invalidBuyerFormFields.includes(event.target.name)) {
        invalidBuyerFormFields.push(event.target.name);
        const index = validBuyerFormFields.indexOf(event.target.name);
        if (validBuyerFormFields.includes(event.target.name)) {
          validBuyerFormFields.splice(index, 1);
        }
      }
    }
    else {
      const index = invalidBuyerFormFields.indexOf(event.target.name);
      if (invalidBuyerFormFields.includes(event.target.name)) {
        invalidBuyerFormFields.splice(index, 1);
      }
      if (!validBuyerFormFields.includes(event.target.name)) {
        validBuyerFormFields.push(event.target.name);
      }
    }
    if (event.target.name === "email" && event.target.value !== "") {
      if (!this.validateEmail(event.target.value)) {
        if (!invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.push(event.target.name);
          const index = validBuyerFormFields.indexOf(event.target.name);
          if (validBuyerFormFields.includes(event.target.name)) {
            validBuyerFormFields.splice(index, 1);
          }
        }
      }
      else {
        const index = invalidBuyerFormFields.indexOf(event.target.name);
        if (invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.splice(index, 1);
        }
        if (!validBuyerFormFields.includes(event.target.name)) {
          validBuyerFormFields.push(event.target.name);
        }
      }
    }
    if (event.target.name === "zip" && event.target.value !== "") {
      if (!this.validateZip(event.target.value)) {
        if (!invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.push(event.target.name);
          const index = validBuyerFormFields.indexOf(event.target.name);
          if (validBuyerFormFields.includes(event.target.name)) {
            validBuyerFormFields.splice(index, 1);
          }
        }
      }
      else {
        const index = invalidBuyerFormFields.indexOf(event.target.name);
        if (invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.splice(index, 1);
        }
        if (!validBuyerFormFields.includes(event.target.name)) {
          validBuyerFormFields.push(event.target.name);
        }
      }
    }
    if (event.target.name === "cvc" && event.target.value !== "") {
      if (!this.validateCvc(event.target.value)) {
        if (!invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.push(event.target.name);
          const index = validBuyerFormFields.indexOf(event.target.name);
          if (validBuyerFormFields.includes(event.target.name)) {
            validBuyerFormFields.splice(index, 1);
          }
        }
      }
      else {
        const index = invalidBuyerFormFields.indexOf(event.target.name);
        if (invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.splice(index, 1);
        }
        if (!validBuyerFormFields.includes(event.target.name)) {
          validBuyerFormFields.push(event.target.name);
        }
      }
    }
    if ((event.target.name === "work_phone" || event.target.name === "phone") &&
      event.target.value !== "") {
      const number = event.target.value.replace(/[^0-9.]/g, "");
      if (number.toString().length < 10) {
        if (!invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.push(event.target.name);
          const index = validBuyerFormFields.indexOf(event.target.name);
          if (validBuyerFormFields.includes(event.target.name)) {
            validBuyerFormFields.splice(index, 1);
          }
        }
      }
      else {
        const index = invalidBuyerFormFields.indexOf(event.target.name);
        if (invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.splice(index, 1);
        }
        if (!validBuyerFormFields.includes(event.target.name)) {
          validBuyerFormFields.push(event.target.name);
        }
      }
    }
    if (event.target.name === "password_confirmation" && event.target.value !== "") {
      if (!this.matchPassword(event.target.value)) {
        if (!invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.push(event.target.name);
          const index = validBuyerFormFields.indexOf(event.target.name);
          if (validBuyerFormFields.includes(event.target.name)) {
            validBuyerFormFields.splice(index, 1);
          }
        }
      }
      else {
        const index = invalidBuyerFormFields.indexOf(event.target.name);
        if (invalidBuyerFormFields.includes(event.target.name)) {
          invalidBuyerFormFields.splice(index, 1);
        }
        if (!validBuyerFormFields.includes(event.target.name)) {
          validBuyerFormFields.push(event.target.name);
        }
      }
    }
    this.setState({
      invalidBuyerFormFields: invalidBuyerFormFields,
      validBuyerFormFields: validBuyerFormFields
    });
  };

  handleFormEdit = (stepIndex) => {
    this.setState({ activeStep: stepIndex })
  };

  validateEmail(value) {
    /* eslint no-useless-escape: "off" */
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(value).toLowerCase());
  };

  matchPassword(value) {
    return value === this.state.buyerFormData.password;
  }

  validateZip(value) {
    const zipRegex = /^[0-9]*$/;
    return zipRegex.test(String(value).toLowerCase()) && value.length === 5;
  };

  validateCvc(value) {
    const cvcRegex = /^[0-9]{3,4}$/;
    return cvcRegex.test(String(value).toLowerCase());
  };

  getStepIcon = (step, stepIndex) => {
    const icon1 = <i className="sb-icon-plan"></i>
    const icon2 = <i className="sb-icon-buyer"></i>
    const icon3 = <i className="sb-icon-user-check"></i>
    const icon4 = <i className="sb-icon-send"></i>
    const stepCompletedIcon = <i className="sb-icon-tick-bold"></i>

    if (this.state.completedSteps.indexOf(stepIndex) > -1) {
      return stepCompletedIcon;
    }

    switch (step.step) {
      case "PLAN": return icon1;
      case "BUYER": return icon2;
      case "PROFILE": return icon3;
      case "CONFIRM": return icon4;
      default:
    }
  };

  isValidStep = () => {
    if (this.state.activeStep === 0) {
      return this.state.buyerFormData.plan;
    }
    else if (window.SB_IsMobileView) {
      if (this.state.activeStep === 1) {
        return this.state.buyerInfoValidated;
      }
      else if (this.state.activeStep === 2) {
        return this.state.buyerProfileValidated;
      }
    }
    return true;
  };

  submitBuyerFormData = () => {
      let val = {
          ...this.state.buyerFormData,
          'dob': `${this.state.buyerFormData['birth-month']}/${this.state.buyerFormData['birth-date']}/${this.state.buyerFormData['birth-year']}`
      };
    this.props.registerBuyer(val);
  }

  render() {
    const steps = staticData.buyerFormSteps;
    // let SB_IsMobileView = window.matchMedia("(max-width: 767px)").matches;

    const { activeStep, buyerFormData, invalidBuyerFormFields } = this.state;
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
        <Grid item xs={12} className={'form-wrapper'} style={{ paddingBottom: "80px" }}>
          <div className={classes.stepperHead}>
            <Typography variant="h5" align='center'>Buyer Form.</Typography>
            <Typography variant="h6" align='center'>See Off-Market opportunities here first.</Typography>
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
                <BuyerSucess />
              </Grid>
            ) : (
                <Grid item xs={12}>
                  <Grid xs={12} item>
                    {this.props.finished ?
                        (<BuyerSucess />) :
                        (getStepContent(activeStep, this.handleChange, buyerFormData, invalidBuyerFormFields, this.handleInput,
                          this.handlButtonToggle, this.state.validBuyerFormFields, this.handleDoneClick_buyerInfo, this.handleDoneClick_buyerProfile,
                          this.setBuyerInfoValidated, this.handleFormEdit, this.handleNext, this.setBuyerProfileValidated, this.submitBuyerFormData))
                    }
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify={`${window.SB_IsMobileView ? (activeStep === 0 ? "center" : "space-between")
                      : (activeStep === 0 ? "flex-end" : "space-between")}`}
                    alignItems="center"
                  >
                    {activeStep !== 0 && (
                      <Button
                        simple
                        onClick={this.handleBack}
                        className={classNames(classes.buttonSecondryTrans)}
                      >
                        Back
                    </Button>)}
                    {
                      activeStep !== steps.length &&
                      <Button
                        color="primary"
                        size="lg"
                        disabled={!this.isValidStep()}
                        onClick={this.handleNext}
                        className={classNames(classes.buttonSecondry)}
                      >
                        {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                      </Button>
                    }
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
                        <span>Every week we match highly actionable Buyers to Sellers before listings make it on the market.</span>
                      }
                      close
                      color="warning"
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

BuyerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  let finished = false;
  if (state.buyerReducer && state.buyerReducer.res && state.buyerReducer.res.status === 200) {
    finished = true;
  }
  return {
    finished
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(buyerActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(buyerStyle)(BuyerForm));