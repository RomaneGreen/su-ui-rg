import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Grid, InputLabel, OutlinedInput, FormControl, Select, MenuItem, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import buyerStyle from "./onBoardingStyle";
import { staticData } from "../../common";
// import visa from "../../assets/images/visa-mc.png";
// import amex from "../../assets/images/amex.png";
import MaskedInput from 'react-text-mask';
import Button from "../uiComponent/CustomButtons/Button";
// import classNames from 'classnames';
import Datetime from "react-datetime";

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


class TeamInfo extends React.Component {
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
        const { classes, handleChange, formData, invalidBuyerFormFields, handleInput, handlButtonToggle, validBuyerFormFields, isMyAccount,
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
                    Please complete basic information to setup account.
                </div>
                <Grid className={classes.panelWrapperBox}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'buyerInfo'} onChange={this.handleChange('buyerInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("buyerInfo") && expanded !== "buyerInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>

                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''}>
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        TEAM MEMBER INFORMATION
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
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-first-name") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">First Name</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="field-first-name" name="field-first-name" value={formData["field-first-name"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-last-name") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Last Name</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="field-last-name" name="field-last-name" value={formData["field-last-name"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Hidden mdDown>
                                        <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                    </Hidden>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-home-phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Home Phone</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="field-home-phone" name="field-home-phone" value={formData["field-home-phone"]}
                                                inputComponent={TextMaskCustom} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-mobile-phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Mobile</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="field-mobile-phone" name="field-mobile-phone" value={formData["field-mobile-phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-home-email") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Personal Email</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="field-home-email" name="field-home-email" value={formData["field-home-email"]} onChange={handleInput} onBlur={handleChange}
                                                 />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>DATE OF BIRTH</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("birth-month") + ' requiredInput smallInput'} >
                                                    <InputLabel htmlFor="component-filled">MM</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="birth-month" name="birth-month" value={isMyAccount && formData.buyer ? formData.buyer["dob"].split('-')[2] : formData["birth-month"]} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("birth-date") + ' requiredInput smallInput'}>
                                                    <InputLabel htmlFor="component-filled">DD</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="birth-date" name="birth-date" value={isMyAccount && formData.buyer ? formData.buyer["dob"].split('-')[1]: formData["birth-date"]} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("birth-year") + ' requiredInput smallInput'}>
                                                    <InputLabel htmlFor="component-filled">YYYY</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="birth-year" name="birth-year" value={isMyAccount && formData.buyer ? formData.buyer["dob"].split('-')[0] : formData["birth-year"]} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>GENDER</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-12">
                                                <ToggleButtonGroup value={formData["gender"]} exclusive onChange={handlButtonToggle} className="toggleCustom">
                                                    <ToggleButton color="primary" value="MALE">MALE</ToggleButton>
                                                    <ToggleButton color="primary" value="FEMALE">FEMALE</ToggleButton>
                                                </ToggleButtonGroup>
                                            </div>
                                        </div>
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
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'billingAddress'} onChange={this.handleChange('billingAddress')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' :  <i className={this.state.validPanels.includes("billingAddress") && expanded !== "billingAddress" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''} >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        HOME ADDRESS
                                        </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6}  className={'text-right'}>
                                        <Button name='billingAddressEdit' onClick={onClick} className={classes.btnMyAccount + (billingAddressEdit? " save": " edit")}>
                                            { billingAddressEdit ? "Save" : "Edit"}
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
                                    <Grid item xs={12} sm={6} lg={8} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-address") + ' requiredInput'}>
                                            <InputLabel htmlFor="address">Street Address</InputLabel>
                                            <OutlinedInput autoComplete='nope' labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="field-address" name="field-address" value={getInputValue("field-address")} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl variant="outlined" fullWidth className={'custom-form-control'}>
                                            <InputLabel htmlFor="component-filled">Floor/Unit/Suit</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="address-suit" name="address-suit" value={getInputValue("address-suit")} onChange={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-city") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">City</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="field-city" name="field-city" value={getInputValue("field-city")} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-state") + ' requiredInput'}>
                                            <InputLabel htmlFor="state">State</InputLabel>
                                            <Select id="field-state" disabled={isMyAccount && !billingAddressEdit} name="field-state" value={getInputValue("field-state")} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="state" id="state" />}>
                                                {staticData.states && staticData.states.map(state => (
                                                    <MenuItem key={state.code} value={state.code}>
                                                        {state.code} - {state.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-zip") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Zip Code</InputLabel>
                                            <OutlinedInput autoComplete='nope' labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="field-zip" name="field-zip" value={formData["field-zip"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <div className="col-as-12">
                                            <p className="info-label"></p>
                                        </div>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-country") + ' requiredInput'}>
                                            <InputLabel htmlFor="field-country">Country</InputLabel>
                                            <Select disabled={isMyAccount && !billingAddressEdit} value={getInputValue("field-country")} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="field-country" id="field-country" />}>
                                                {staticData.countries.map(country => (
                                                    <MenuItem key={country.code} value={country.code}>
                                                        {country.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>MATCHES DRIVER'S LICENSE?</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-12">
                                                <ToggleButtonGroup value={isMyAccount && formData.buyer && formData.buyer.also_mailing_address === 1 ? "yes": formData["field-matches-drivers-license"]} exclusive onChange={handlButtonToggle} className="toggleCustom">
                                                    <ToggleButton value="yes">YES</ToggleButton>
                                                    <ToggleButton value="no">NO</ToggleButton>
                                                </ToggleButtonGroup>
                                            </div>
                                        </div>
                                    </Grid>
                                    {window.SB_IsMobileView && !isMyAccount &&
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth>
                                                <Button color="success" size="lg" onClick={() => this.handleDone("billingAddress")} className="done_button">Done</Button>
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
                                        LICENSE INFORMATION
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
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("real-estate-license") + ' requiredInput'}>
                                            <InputLabel htmlFor="real-estate-license">Have a Real Estate License?</InputLabel>
                                            <Select id="real-estate-license" disabled={isMyAccount && !billingAddressEdit} name="real-estate-license" value={getInputValue("real-estate-license")} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="state" id="state" />}>
                                                {staticData.haveRealEstateLicense && staticData.haveRealEstateLicense.map(license => (
                                                    <MenuItem key={license.value} value={license.value}>
                                                        {license.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Hidden mdDown>
                                        <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                    </Hidden>
                                    <Hidden mdDown>
                                        <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                    </Hidden>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-licence-type") + ' requiredInput'}>
                                            <InputLabel htmlFor="field-licence-type">License Type?</InputLabel>
                                            <Select disabled={isMyAccount && !paymentInfoEdit} value={formData["field-licence-type"]} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="field-licence-type" id="field-licence-type" />}>
                                                {staticData.License_Type.map(licenseType => (
                                                    <MenuItem key={licenseType.value} value={licenseType.value}>
                                                        {licenseType.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-license-state") + ' requiredInput'}>
                                            <InputLabel htmlFor="state">License State</InputLabel>
                                            <Select id="field-license-state" disabled={isMyAccount && !billingAddressEdit} name="field-license-state" value={getInputValue("field-license-state")} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="state" id="state" />}>
                                                {staticData.states && staticData.states.map(state => (
                                                    <MenuItem key={state.code} value={state.code}>
                                                        {state.code} - {state.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("field-licence-number") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">License Number</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !paymentInfoEdit} id="field-licence-number" name="field-licence-number" value={formData["field-licence-number"]} onChange={handleInput}
                                                onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid + ' datePickerInput '}>
                                        <FormControl variant="outlined" fullWidth required className={"custom-form-control requiredInput" + (getInputClasses('field-expiration-date') + ' datePickerInput ')}>
                                            <Datetime
                                                id="field-expiration-date"
                                                name="field-expiration-date"
                                                closeOnSelect={true}
                                                timeFormat={false}
                                                className={formData["field-expiration-date"] === ''? 'empty' :'hasValue'}
                                                onChange={(event) => handleChange({
                                                    target: {
                                                        name: "field-expiration-date",
                                                        value: event.toDate().toLocaleDateString()
                                                    }
                                                })}
                                            />
                                            <InputLabel htmlFor="field-expiration-date">Expiration Date?</InputLabel>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid + ' datePickerInput '}>
                                        <FormControl variant="outlined" fullWidth required className={"custom-form-control requiredInput" + (getInputClasses('field-license-issued') + ' datePickerInput ')}>
                                            <Datetime
                                                id="field-license-issued"
                                                name="field-license-issued"
                                                closeOnSelect={true}
                                                timeFormat={false}
                                                // value={formData["field-licence-issued"] === "" ? "" : new Date(formData["field-licence-issued"])}
                                                className={formData["field-license-issued"] === ''? 'empty' :'hasValue'}
                                                onChange={(event) => handleChange({
                                                    target: {
                                                        name: "field-license-issued",
                                                        value: event.toDate().toLocaleDateString()
                                                    }
                                                })}
                                            />
                                            <InputLabel htmlFor="field-license-issued">Original Date License Issued?</InputLabel>
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

export default withStyles(buyerStyle, customInputStyle)(TeamInfo);