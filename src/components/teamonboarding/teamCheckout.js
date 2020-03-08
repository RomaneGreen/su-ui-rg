import React from "react";
import { withStyles } from '@material-ui/core/styles';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Grid, InputLabel, OutlinedInput, FormControl, Select, MenuItem, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import buyerStyle from "./onBoardingStyle";
import { staticData } from "../../common";
// import visa from "../../assets/images/visa-mc.png";
// import amex from "../../assets/images/amex.png";
import MaskedInput from 'react-text-mask';
import Button from "../uiComponent/CustomButtons/Button";
// import classNames from 'classnames';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

// function creditCardInputMask(props) {
//     const { inputRef, ...other } = props;
//
//     return (
//         <MaskedInput
//             {...other}
//             ref={inputRef}
//             mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
//             placeholderChar={'\u2000'}
//         />
//     );
// }


class TeamCheckout extends React.Component {
    state = {
        expanded: "buyerLogin",
        validPanels: []
    };

    panels = ["buyerLogin", "buyerInfo", "billingAddress", "paymentInfo"];

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleDone = (panel) => {
        let isPanelValid = this.props.handleDoneClick_buyerInfo(panel);
        if (isPanelValid) {
            window.scrollTo({ top: 250, left: 0, behavior: "smooth" });
            
            let { validPanels } = this.state;
            if (!validPanels.includes(panel)) {
                validPanels.push(panel);
                this.setState({ validPanels });
            }

            let currentPanelIndex = this.panels.indexOf(panel);

            if (currentPanelIndex === 3) {
                this.setState({ expanded: null });
            }
            else {
                this.setState({ expanded: this.panels[currentPanelIndex + 1] });
            }

            if (validPanels.length === this.panels.length) {
                this.props.setBuyerInfoValidated();
            }
        }
    };

    render() {
        const { expanded } = this.state;
        const { classes, handleChange, formData, invalidBuyerFormFields, handleInput, validBuyerFormFields, isMyAccount,
             buyerInfoEdit, billingAddressEdit, paymentInfoEdit, onClick } = this.props;
        const getInputClasses = (fieldName) => {
            return `custom-form-control ${classes.requiredInput} hook-required ${invalidBuyerFormFields.includes(fieldName) ? 'error_class' :
                formData[fieldName] !== '' && validBuyerFormFields.includes(fieldName) ? 'success_class' : ''}`
        }
        const getInputValue = (fieldName) => {
            if (isMyAccount && formData.buyer && ["job_title", "company_name","city"].includes(fieldName)) {
                return formData.buyer[fieldName];
            }
            else if (isMyAccount && formData.buyer && ["state"].includes(fieldName)) {
                return formData.buyer.state_info["code"];
            }
            else if (isMyAccount && formData.buyer && ["country"].includes(fieldName)) {
                return staticData.countries[0].code;
            } else if (isMyAccount && formData.buyer && ["address"].includes(fieldName)) {
                return formData.buyer["street1"]
            } else if (isMyAccount && formData.buyer && ["address_suit"].includes(fieldName)){
                return formData.buyer["street2"]
            }
            else {
                return formData[fieldName];
            }
        }
        // const year = (new Date()).getFullYear();
        // const years = Array.from(new Array(20), (val, index) => index + year);

        return (
            <div className={classes.panelMain}>
                {isMyAccount &&
                <React.Fragment>
                    <div className={classes.userInfoStaticTextWrapper}>
                        <div className={classes.userInfoStaticText}>
                            <div className={classes.userInfoStaticTextHead}>BUYER</div>
                            <div className={classes.userInfoStaticTextCont}>{formData["first_name"] + ' ' + formData["last_name"]}</div>
                        </div>
                        <div className={classes.userInfoStaticText}>
                            <div className={classes.userInfoStaticTextHead}>MEMBER ID</div>
                            <div className={classes.userInfoStaticTextCont}>{formData["id"]}</div>
                        </div>
                        <div className={classes.userInfoStaticText}>
                            <div className={classes.userInfoStaticTextHead}>MEMBER SINCE</div>
                            <div className={classes.userInfoStaticTextCont}>Jan 19, 2018</div>
                        </div>
                    </div>
                </React.Fragment>
            }
                <div className={classes.adgentPanelTagBar}>
                Please input your bank details for direct payment.
                </div>
                <Grid className={classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : '')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'buyerInfo'} onChange={this.handleChange('buyerInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("buyerInfo") && expanded !== "buyerInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>

                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''}>
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                    LICENSE INFORMATION
                                    </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={isMyAccount ? 3 : 12} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                        <Button name='buyerInfoEdit' onClick={onClick} className={classes.btnMyAccount + (buyerInfoEdit? " save": " edit")}>
                                            {buyerInfoEdit ? "Save" : "Edit"}
                                        </Button>
                                    </Grid>
                                    :
                                    <Hidden xsDown>
                                        <Grid item xs={12} sm={6} lg={6}>
                                            <Typography className="form__sub-heading" color="primary" noWrap>
                                                Blue fields mandatory.
                                            </Typography>
                                        </Grid>
                                    </Hidden>
                                }
                                
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <Typography className="form__sub-heading" color="primary" noWrap>
                                        Blue fields mandatory.
                                    </Typography>
                                </Hidden>
                            }
                            <div className={classes.fullWidth}>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("card-type") + ' requiredInput'}>
                                            <InputLabel htmlFor="card-type">Do You Want Direct Pay?</InputLabel>
                                            <Select disabled={isMyAccount && !paymentInfoEdit} value={formData["card-type"]} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="card-type" id="card-type" />}>
                                                {staticData.cardTypes.map(cardType => (
                                                    <MenuItem key={cardType.value} value={cardType.value}>
                                                        <img src={cardType.label} alt="" />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={6} lg={8} className={classes.cutomClearfix}></Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("work_phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Bank Name</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="work_phone" name="work_phone" value={formData["work_phone"]}
                                                inputComponent={TextMaskCustom} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Account Number</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Routing Number</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={8} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Bank Address</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl variant="outlined" fullWidth className={'custom-form-control'}>
                                            <InputLabel htmlFor="component-filled">Floor/Unit/Suit</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="address_suit" name="address_suit" value={getInputValue("address_suit")} onChange={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">City</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("card-type") + ' requiredInput'}>
                                            <InputLabel htmlFor="card-type">State</InputLabel>
                                            <Select disabled={isMyAccount && !paymentInfoEdit} value={formData["card-type"]} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="card-type" id="card-type" />}>
                                                {staticData.cardTypes.map(cardType => (
                                                    <MenuItem key={cardType.value} value={cardType.value}>
                                                        <img src={cardType.label} alt="" />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Zip Code</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Bank Telephone</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    {window.SB_IsMobileView && !isMyAccount &&
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth>
                                                <Button color="success" size="lg" onClick={() => this.handleDone("buyerInfo")} className="done_button">Done</Button>
                                            </FormControl>
                                        </Grid>
                                    }
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                
                <Grid className={classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : '')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'paymentInfo'} onChange={this.handleChange('paymentInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("paymentInfo") && expanded !== "paymentInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''} >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                    RECIPIENT’S ADDRESS
                                    </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6} className={'text-right'}>
                                        <Button name='paymentInfoEdit' onClick={onClick} className={classes.btnMyAccount + (paymentInfoEdit? " save": " edit")}>
                                            {paymentInfoEdit ? "Save" : "Edit"}
                                        </Button>
                                    </Grid>
                                :
                                <Hidden xsDown>
                                    <Grid item xs={12} sm={6} lg={6}>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                            Blue fields mandatory.
                                        </Typography>
                                    </Grid>
                                </Hidden>
                                }
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <Typography className="form__sub-heading" color="primary" noWrap>
                                        Blue fields mandatory.
                                    </Typography>
                                </Hidden>
                            }
                            <div className={classes.fullWidth}>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("card-type") + ' requiredInput'}>
                                            <InputLabel htmlFor="card-type">Same As Home Address?</InputLabel>
                                            <Select disabled={isMyAccount && !paymentInfoEdit} value={formData["card-type"]} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="card-type" id="card-type" />}>
                                                {staticData.cardTypes.map(cardType => (
                                                    <MenuItem key={cardType.value} value={cardType.value}>
                                                        <img src={cardType.label} alt="" />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </div>
        )
    }
}

export default withStyles(buyerStyle, customInputStyle)(TeamCheckout);