import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {  Stepper, Step, StepLabel, StepConnector, Typography, StepButton} from '@material-ui/core';
import ProductPreference from './productPreference';
import LocationPreference from './locationPreference';
import DetailsPreference from './detailsPreference';
import { staticData } from "../../common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {myAcccountActions} from '../../actions'

const styles = theme => ({
    root: {
        width: '90%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        width:'100%'
    },
    setStep:{
        padding: 0,
        margin: '5px -15px 0',
        width: 'calc(100% + 30px)',
        position: 'relative',
    },
    steps:{
        fontSize: 14,
        position: 'static',
        '&  > div:first-child':{
            top: 0,
            left: 0,
            right: '0',
            position: 'absolute',
            width: '75%',
            margin: '0 auto',
            '&  span':{
                border:'4px solid #0d83dd',
                marginTop: 8
            }
        }
    },
    stepLabel:{
        '&  > span:first-child':{
            display: 'none',
        },
        '&  > span:last-child':{
            position: 'relative',
            '&:before':{
                content: '""',
                width: 22,
                height: 22,
                backgroundColor: '#fff',
                borderRadius: '100%',
                border:'1px solid #0d83dd',
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: '1',
                margin: '0 auto 0',
            },
            '& button':{
                paddingTop: 40,
                position: 'relative',
                zIndex: '2',
                paddingBottom: 5,
                marginBottom: 10
            },
            '& button span':{
                color: '#5f5f5f',
                fontWeight: '500'
            }
        }
    },
    iconContainer:{
        display: 'none',
    },
    stepperActive:{
        color:'#0d83dd !important',
        position: 'relative',
        '& button span':{
            color:'#0d83dd !important',
        },
        '&:before':{
            content: '""',
            width: 14,
            height: 14,
            backgroundColor: '#0d83dd',
            borderRadius: '100%',
            display: 'flex',
            zIndex: '1',
            margin: '0 auto 0',
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-11px',
        }
    },
});

function getSteps() {
    return ['PRODUCT', 'LOCATION', 'DETAILS'];
}



class SetPreference extends React.Component {
    state = {
        activeStep: 0,
        invalidSellerFormFields: [],
        validSellerFormFields: [],
        formData: staticData.preferenceFormData,
        completedSteps: []
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <ProductPreference classes={this.props.classes} formData={this.state.formData} handleInput={this.handleInput} handleChange={this.handleChange} />;
            case 1:
                return <LocationPreference classes={this.props.classes} formData={this.state.formData} handleInput={this.handleInput} handleChange={this.handleChange} />;
            case 2:
                return <DetailsPreference classes={this.props.classes} formData={this.state.formData} handleInput={this.handleInput} handleChange={this.handleChange} />;
            default:
                return '';
        }
    }

    componentDidMount() {
        // Loads inital data required for every case
        // staticData.sellerInitialData.forEach(datalist_type => {
        //   this.props.fetchformData(datalist_type);
        // });
    }

    handleNext = () => {
        let { activeStep, completedSteps } = this.state;
        // const invalidFields = validateformData(activeStep, this.state.formData);
        // invalidSellerFormFields = Object.assign(invalidSellerFormFields, invalidFields);
        // if (invalidSellerFormFields.length) {
        //   this.setState({ invalidSellerFormFields });
        //   return;
        // }
        completedSteps.push(activeStep);
        // let { skipped } = this.state;
        // if (this.isStepSkipped(activeStep)) {
        //   skipped = new Set(skipped.values());
        //   skipped.delete(activeStep);
        // }
        this.setState({
            activeStep: activeStep + 1,
            completedSteps
        });
        if (completedSteps.length === 3) {
            //   event.preventDefault();
              this.props.addPreference(this.state.formData);
        }
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleInput = event => {
        if (event.target.name === "field-square-feet" && (isNaN(event.target.value))) {
            return;
        }
        this.setState({
            formData: {
                ...this.state.formData, [event.target.name]: event.target.value,
            },
        });
        // let { invalidSellerFormFields, validSellerFormFields } = this.state;
        // if (event.target.name === "field-promo-code" && event.target.value !== "") {
        //   if (!invalidSellerFormFields.includes(event.target.name)) {
        //     invalidSellerFormFields.push(event.target.name);
        //     this.setState({
        //       isInvalidPromoCode: false,
        //       invalidSellerFormFields: invalidSellerFormFields
        //     });
        //     const index = validSellerFormFields.indexOf(event.target.name);
        //     if (validSellerFormFields.includes(event.target.name)) {
        //       validSellerFormFields.splice(index, 1);
        //     }
        //   }
        // } else {
        //   const index = invalidSellerFormFields.indexOf(event.target.name);
        //   if (invalidSellerFormFields.includes(event.target.name)) {
        //     invalidSellerFormFields.splice(index, 1);
        //     this.setState({
        //       isInvalidPromoCode: false,
        //       invalidSellerFormFields: invalidSellerFormFields
        //     });
        //   }
        // }
    }

    handleChange = event => {
        let { invalidSellerFormFields, validSellerFormFields } = this.state;
        if (event.target.name === "field-maturity-date") {
            this.setState({
                formData: {
                    ...this.state.form, [event.target.name]: event.target.value,
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
        if (this.state.formData["field-asset-type"] === 1 && this.state.formData["field-product-type"] === 1) {
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
        if (this.state.formData["field-asset-type"] === 2 && this.state.formData["field-product-type"] === 1) {
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
    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };
    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
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
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel className={classes.setStep} connector={connector}>
                    {steps.map((label, index) => {
                        const buttonProps = {};
                        return (
                        <Step key={label} className={classes.steps}>
                            <StepLabel
                            className={classes.stepLabel}
                            classes={{
                                active: classes.stepperActive,
                                completed: classes.stepperCompleted,
                                disabled: classes.stepperDisabled,
                                line: classes.stepperLine,
                            }}
                            >
                                <StepButton
                                onClick={this.handleStep(index)}
                                {...buttonProps}
                                >
                                {label}
                                </StepButton>
                            </StepLabel>
                        </Step>
                        )
                    })}
                </Stepper>
                {this.state.activeStep === steps.length ? (
                    <Typography className={classes.instructions}>setting Preference</Typography>
                ) : (
                    <React.Fragment>
                        <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                        {/* { activeStep !== 0 &&
                            <Button
                                disabled={activeStep === 0}
                                onClick={this.handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                        } */}
                        <div className="clearfix"></div>
                        <Button variant="contained" className={classes.setPreBtn} color="primary" onClick={this.handleNext}>
                            {activeStep === steps.length - 1 ? 'Set' : 'Next'}
                        </Button>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

SetPreference.propTypes = {
    classes: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        ...state.myAccountReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(myAcccountActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SetPreference));
