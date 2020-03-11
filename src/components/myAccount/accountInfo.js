import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Stepper, Step, StepLabel, StepConnector, Typography } from '@material-ui/core';
import Button from "../uiComponent/CustomButtons/Button";
import { staticData } from "../../common";
import classNames from 'classnames';
import { BuyerPlan, BuyerInfo, ProfileType, BuyerCheckout, BuyerSucess } from "../buyer/buyer";
import { validateBuyerFormData } from '../buyer/validation';
import SnackbarContent from "../uiComponent/Snackbar/SnackbarContent";

import buyerStyle from "./buyer/buyerStyle";

function getStepContent(step, handleChange, formData, invalidBuyerFormFields, handleInput, handlButtonToggle, validBuyerFormFields) {
  switch (step) {
    case 0:
      return (
        <BuyerPlan handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} />
      );
    case 1:
      return (
        <BuyerInfo handleChange={handleChange} handleInput={handleInput} handlButtonToggle={handlButtonToggle}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} validBuyerFormFields={validBuyerFormFields} />
      );
    case 2:
      return (
        <ProfileType handleChange={handleChange} handleInput={handleInput}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} />
      );
    case 3:
      return (
        <BuyerCheckout handleChange={handleChange}
          formData={formData} invalidBuyerFormFields={invalidBuyerFormFields} />
      );
    default:
      return (
        <BuyerSucess />
      );
  }
}

class AccountInfo extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    buyerFormData: staticData.buyerFormData,
    completedSteps: [],
    invalidBuyerFormFields: [],
    validBuyerFormFields: []
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

  handlButtonToggle = (event, value) => {
    if (value === "MALE" || value === "FEMALE" || value === "CUSTOM") {
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
    this.setState({
      buyerFormData: {
        ...this.state.buyerFormData, [event.target.name]: event.target.value,
      },
    });
  }

  handleChange = event => {
    let { invalidBuyerFormFields, validBuyerFormFields } = this.state;
    this.setState({
      buyerFormData: {
        ...this.state.buyerFormData, [event.target.name]: event.target.value,
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

  validateEmail(value) {
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

  render() {
    const steps = staticData.buyerFormSteps;    
    let isMobileView = window.matchMedia("(max-width: 767px)").matches;

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
        <Grid item xs={12} className={'form-wrapper'}>
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
          {
            activeStep === 3 &&

            (<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 + 'px' }}>
              <span style={{ fontSize: 34 + 'px', fontWeight: 500 }}>&nbsp; Checkout</span>
              <div>
                <span style={{ color: '#8a8a8a', fontWeight: 600 }}>Order Total: &nbsp;&nbsp;</span>
                <Button style={{ color: 'white' }} color={"primary"} size="medium" className={classNames(classes.buttonSecondry)}>CONFIRM</Button>
              </div>
            </div>)
          }
          <Grid item xs={12}>
            {activeStep === steps.length ? (
              <Grid item xs={12}>
                <BuyerSucess />
                <Button
                  className={classNames(classes.buttonSecondry)}
                  onClick={this.handleReset}>GO TO HOMEPAGE</Button>
              </Grid>
            ) : (
                <Grid item xs={12}>
                  <Grid xs={12} item>
                    {getStepContent(activeStep, this.handleChange, buyerFormData, invalidBuyerFormFields, this.handleInput, this.handlButtonToggle, this.state.validBuyerFormFields)}
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify={`${isMobileView? "center" : (activeStep === 0) ? "flex-end" : "space-between"}`}
                    alignItems="center"
                  >
                    {activeStep !== 0 && !isMobileView && (
                      <Button
                        simple
                        onClick={this.handleBack}
                        className={classNames(classes.buttonSecondryTrans)}
                      >
                        Back
                    </Button>)}

                    <Button
                      color="primary"
                      size="lg"
                      disabled={activeStep === 0 && !this.state.buyerFormData.plan}
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

AccountInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(buyerStyle)(AccountInfo);
