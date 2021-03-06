import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Stepper, Step, StepLabel, StepConnector, Typography } from '@material-ui/core';
import Button from "../uiComponent/CustomButtons/Button";
import { staticData } from "../../common";
import classNames from 'classnames';
import { Info, Preferences, DirectPay, Sucess, Upload } from ".";
import { validateAgentFormData, validateBuyerInfo, validateBuyerProfile } from './validation';
import { onboardingActions } from '../../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import onBoardingStyle from "./onBoardingStyle";

function getStepContent(step, isAgentOnboarding, handleChange, formData, invalidBuyerFormFields, handleInput, handlButtonToggle, validBuyerFormFields, handleDoneClick_buyerInfo, handleDoneClick_buyerProfile, setBuyerInfoValidated, handleFormEdit, handleNext, setBuyerProfileValidated) {
  switch (step) {
    case 0:
      return (
        <Info isAgentOnboarding={isAgentOnboarding} handleChange={handleChange} handleInput={handleInput} handlButtonToggle={handlButtonToggle}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} validBuyerFormFields={validBuyerFormFields}
          handleDoneClick_buyerInfo={handleDoneClick_buyerInfo} setBuyerInfoValidated={setBuyerInfoValidated} />
      );
    case 1:
      return (
        <Preferences handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} validBuyerFormFields={validBuyerFormFields}
          setBuyerProfileValidated={setBuyerProfileValidated} handleDoneClick_buyerProfile={handleDoneClick_buyerProfile} />
      );
    case 2:
      return (
        <DirectPay handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} validBuyerFormFields={validBuyerFormFields}
          setBuyerProfileValidated={setBuyerProfileValidated} handleDoneClick_buyerProfile={handleDoneClick_buyerProfile} />
      );
    case 3:
      return (
        <Upload handleChange={handleChange}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} handleFormEdit={handleFormEdit} handleNext={handleNext} />
      );
    default:
      return (
        <Sucess isAgentOnboarding={isAgentOnboarding} />
      );
  }
}

class OnboardingForm extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    agentOnBoardFormData: staticData.agentOnBoardFormData,
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
    invalidBuyerFormFields = [];
    const invalidFields = validateAgentFormData(activeStep, this.state.agentOnBoardFormData);
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
    if(completedSteps.length === 4){
      // this.props.agentOnboarding(this.state.agentOnBoardFormData);
    }

  };

  handleDoneClick_buyerInfo = (stepName) => {
    let { invalidBuyerFormFields } = this.state;
    const invalidFields = validateBuyerInfo(stepName, this.state.agentOnBoardFormData);
    invalidBuyerFormFields = Object.assign(invalidBuyerFormFields, invalidFields);
    if (invalidBuyerFormFields.length) {
      this.setState({ invalidBuyerFormFields });
      return;
    }
    return true;
  };

  handleDoneClick_buyerProfile = (stepName) => {
    let { invalidBuyerFormFields } = this.state;
    const invalidFields = validateBuyerProfile(stepName, this.state.agentOnBoardFormData);
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
    if (value === "MALE" || value === "FEMALE") {
      this.setState({
        agentOnBoardFormData: {
          ...this.state.agentOnBoardFormData, "gender": value,
        },
      });
    } else {
      this.setState({
        agentOnBoardFormData: {
          ...this.state.agentOnBoardFormData, "field-matches-drivers-license": value,
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
    if ((event.target.name === "field-directPay-zip" || event.target.name === "field-zip" || event.target.name === "field-routing-number" || event.target.name === "field-account-number"
      || event.target.name === "birth-month" || event.target.name === "birth-date" || event.target.name === "birth-year") && (isNaN(event.target.value))) {
      return;
    }
    this.setState({
      agentOnBoardFormData: {
        ...this.state.agentOnBoardFormData, [event.target.name]: event.target.value,
      },
    });
  }

  handleChange = event => {
    let { invalidBuyerFormFields, validBuyerFormFields } = this.state;
    this.setState({
      agentOnBoardFormData: {
        ...this.state.agentOnBoardFormData, [event.target.name]: event.target.value,
      },
    });
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
    if (event.target.name === "field-home-email" && event.target.value !== "") {
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
    if ((event.target.name === "field-directPay-zip" || event.target.name === "field-zip") && event.target.value !== "") {
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
    return value === this.state.agentOnBoardFormData.password;
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
    const icon1 = this.props.isAgentOnboarding ? <i className="sb-icon-agent"></i> : <i className="sb-icon-admin"></i>
    const icon2 = <i className="sb-icon-flag"></i>
    const icon3 = <i className="sb-icon-bank"></i>
    const icon4 = <i className="sb-icon-upload"></i>
    const stepCompletedIcon = <i className="sb-icon-tick-bold"></i>

    if (this.state.completedSteps.indexOf(stepIndex) > -1) {
      return stepCompletedIcon;
    }

    switch (step.step) {
      case this.props.isAgentOnboarding ? "AGENT" : "TEAM" : return icon1;
      case "PREFERENCES": return icon2;
      case "DIRECT PAY": return icon3;
      case "UPLOAD": return icon4;
      default:
    }
  };

  isValidStep = () => {
    if (this.state.activeStep === 0) {
      return this.state.agentOnBoardFormData.plan;
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

  render() {
    const steps = this.props.isAgentOnboarding ? staticData.agentFormSteps : staticData.teamFormSteps;
    // let SB_IsMobileView = window.matchMedia("(max-width: 767px)").matches;
    const { activeStep, agentOnBoardFormData, invalidBuyerFormFields } = this.state;
    const { classes } = this.props;
    const connector = (
      <StepConnector
        classes={{
          active: this.props.isAgentOnboarding ? classes.agentConnectorActive : classes.teamConnectorActive,
          completed: this.props.isAgentOnboarding ? classes.agentConnectorCompleted : classes.teamConnectorCompleted,
          disabled: this.props.isAgentOnboarding ? classes.agentConnectorDisabled : classes.teamConnectorDisabled,
          line: this.props.isAgentOnboarding ? classes.agentConnectorLine : classes.teamConnectorLine,
        }}
      />
    );

    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={12} className={'form-wrapper'}>
          <div className={classes.stepperHead}>
            <Typography variant="h5" align='center'>{this.props.isAgentOnboarding ? 'Agent' : 'Team'} Onboarding.</Typography>
            <Stepper activeStep={activeStep} className={this.props.isAgentOnboarding ? classes.stepperAgent : classes.stepperTeam} alternativeLabel connector={connector}>
              {steps.map((step, index) => {
                const props = {};
                const labelProps = {};
                return (
                  <Step key={step} {...props}>
                    <StepLabel
                      className={this.props.isAgentOnboarding ? classes.agentStepperLabel : classes.teamStepperLabel}
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
                <Sucess isAgentOnboarding={this.props.isAgentOnboarding}/>
              </Grid>
            ) : (
                <Grid item xs={12}>
                  <Grid xs={12} item>
                    {getStepContent(activeStep, this.props.isAgentOnboarding, this.handleChange, agentOnBoardFormData, invalidBuyerFormFields, this.handleInput, this.handlButtonToggle, this.state.validBuyerFormFields, this.handleDoneClick_buyerInfo, this.handleDoneClick_buyerProfile, this.setBuyerInfoValidated, this.handleFormEdit, this.handleNext, this.setBuyerProfileValidated)}
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
                        className={classNames(this.props.isAgentOnboarding ? classes.agentButtonSecondryTrans : classes.teamButtonSecondryTrans)}
                      >
                        Back
                    </Button>)}

                    <Button
                      color="primary"
                      size="lg"
                      // disabled={!this.isValidStep()}
                      onClick={this.handleNext}
                      className={classNames(this.props.isAgentOnboarding ? classes.agentButtonSecondry : classes.teamButtonSecondry)}
                    >
                      {activeStep === steps.length - 1 ? 'UPLOAD' : 'NEXT'}
                    </Button>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify='center'
                    alignItems="center"
                    className={classNames(classes.notification)}
                  >
                  </Grid>
                </Grid>
              )}
          </Grid>
        </Grid>
      </Grid>

    );
  }
}

OnboardingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
      ...bindActionCreators({ ...onboardingActions }, dispatch)
  }
};

export default connect(mapDispatchToProps)(withStyles(onBoardingStyle)(OnboardingForm));