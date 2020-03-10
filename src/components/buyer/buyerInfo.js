import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {
    Grid, InputLabel, OutlinedInput, FormControl, Select, MenuItem, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails,
    ExpansionPanelSummary, InputAdornment, IconButton
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import buyerStyle from "./buyerStyle";
import { staticData } from "../../common";
import visa from "../../assets/images/visa-mc.png";
import amex from "../../assets/images/amex.png";
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

function creditCardInputMask(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

function formatDate(dateString) {
    if (!dateString) return;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let formattedDate = new Date(dateString);
    let month = months[formattedDate.getMonth()];
    let day = formattedDate.getDate();
    let year = formattedDate.getFullYear();
    return `${month} ${day}, ${year}`
}

class BuyerInfo extends React.Component {
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
            loginEdit, buyerInfoEdit, billingAddressEdit, paymentInfoEdit, onClick } = this.props;
        const getInputClasses = (fieldName) => {
            return `custom-form-control ${classes.requiredInput} hook-required ${invalidBuyerFormFields.includes(fieldName) ? 'error_class' :
                formData[fieldName] !== '' && validBuyerFormFields.includes(fieldName) ? 'success_class' : ''}`
        }
        const getInputValue = (fieldName) => {
            if (fieldName === 'also_mailing_address') {
                if (formData['also_mailing_address'] === true || formData['also_mailing_address'] === false) {
                    return formData['also_mailing_address'];
                } else {
                    if (formData.buyer) {
                        return !!formData.buyer['also_mailing_address'];
                    } else {
                        return null;
                    }
                }
            }

            if (fieldName === 'gender') {
                if (formData[fieldName]) {
                    return formData[fieldName];
                } else if (formData.buyer) {
                    return formData.buyer[fieldName];
                }
                return null;
            }

            if (formData[fieldName]) {
                return formData[fieldName];
            }
            if (isMyAccount && formData.buyer && fieldName === 'also_mailing_address') {
                return formData.buyer.also_mailing_address === 1;
            } if (isMyAccount && formData.buyer && ["job_title", "company_name", "city"].includes(fieldName)) {
                return formData.buyer[fieldName];
            }
            else if (isMyAccount && formData.buyer && ["state"].includes(fieldName)) {
                return formData.buyer.state_info["code"];
            }
            else if (isMyAccount && formData.buyer && ["country"].includes(fieldName)) {
                return staticData.countries[0].code;
            } else if (isMyAccount && formData.buyer && ["address"].includes(fieldName)) {
                return formData.buyer["street1"]
            } else if (isMyAccount && formData.buyer && ["address_suit"].includes(fieldName)) {
                return formData.buyer["street2"]
            }
            else {
                return formData[fieldName];
            }
        }

        const getDobValue = (fieldName) => {
            if (formData[fieldName]) {
                return formData[fieldName];
            }
            let index;
            if (fieldName === 'birth-year') {
                index = 0;
            } else if (fieldName === 'birth-date') {
                index = 1;
            } else {
                index = 2;
            }
            return isMyAccount && formData.buyer ? formData.buyer["dob"].split('-')[index] : formData["birth-month"];
        }

        const year = (new Date()).getFullYear();
        const years = Array.from(new Array(20), (val, index) => index + year);

        return (
            <div className={classes.panelMain}>
                {isMyAccount &&
                    <React.Fragment>
                        <div className={classes.userInfoStaticTextWrapper}>
                            <div className={classes.userInfoStaticText}>
                                <div className={classes.buyerUserInfoStaticTextHead}>BUYER</div>
                                <div className={classes.userInfoStaticTextCont}>{formData["first_name"] + ' ' + formData["last_name"]}</div>
                            </div>
                            <div className={classes.userInfoStaticText}>
                                <div className={classes.buyerUserInfoStaticTextHead}>MEMBER ID</div>
                                <div className={classes.userInfoStaticTextCont}>{formData["id"]}</div>
                            </div>
                            <div className={classes.userInfoStaticText}>
                                <div className={classes.buyerUserInfoStaticTextHead}>MEMBER SINCE</div>
                                <div className={classes.userInfoStaticTextCont}>{formatDate(formData.buyer && formData.buyer.created_at)}</div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                <Grid className={[classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : ''), classes.buyerLogin].join(' ')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'buyerLogin'} onChange={this.handleChange('buyerLogin')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("buyerLogin") && expanded !== "buyerLogin" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>

                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''}
                            >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        BUYER LOGIN
                                    </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={isMyAccount ? 3 : 12} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                        <Button name='loginEdit' onClick={onClick} className={classes.btnMyAccount + (loginEdit ? " save" : " edit")}>
                                            {loginEdit ? "Save" : "Edit"}
                                        </Button>
                                    </Grid>
                                    :
                                    <Hidden xsDown>
                                        <Grid item xs={isMyAccount ? 2 : 12} sm={6} lg={6}>
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
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid} style={{marginRight:window.SB_IsTabletView?'1px':'0'}}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("email") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Email</InputLabel>
                                            <OutlinedInput labelWidth={0} id="email" disabled={isMyAccount && !loginEdit} name="email" value={formData["email"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("password") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Password</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !loginEdit} id="password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                               name="password" value={formData["password"]} onChange={handleInput}
                                                onBlur={handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="Toggle password visibility"
                                                            onClick={() => { this.setState({ showPassword: !this.state.showPassword }) }}
                                                        >
                                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                } />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("password_confirmation") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Confirm Password</InputLabel>
                                            <OutlinedInput labelWidth={0} id="password_confirmation"
                                                type={this.state.showConfirmPassword ? 'text' : 'password'}
                                               disabled={isMyAccount && !loginEdit} name="password_confirmation" value={formData["confirm-password"]}
                                                onChange={handleInput} onBlur={handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="Toggle password visibility"
                                                            onClick={() => { this.setState({ showConfirmPassword: !this.state.showConfirmPassword }) }}
                                                        >
                                                            {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                } />
                                        </FormControl>
                                    </Grid>
                                    {window.SB_IsMobileView && !isMyAccount &&
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth>
                                                <Button color="success" size="lg" className="done_button" onClick={() => this.handleDone("buyerLogin")}>Done</Button>
                                            </FormControl>
                                        </Grid>
                                    }
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid className={[classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : ''), classes.buyerInformation].join(' ')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'buyerInfo'} onChange={this.handleChange('buyerInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("buyerInfo") && expanded !== "buyerInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>

                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''}>
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        BUYER INFORMATION
                                        </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={isMyAccount ? 3 : 12} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                        <Button name='buyerInfoEdit' onClick={onClick} className={classes.btnMyAccount + (buyerInfoEdit ? " save" : " edit")}>
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
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("first_name") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">First Name</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="first_name" name="first_name" value={formData["first_name"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("last_name") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Last Name</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="last_name" name="last_name" value={formData["last_name"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl variant="outlined" fullWidth className={'custom-form-control'}>
                                            <InputLabel htmlFor="component-filled">Job Title (If Company)</InputLabel>
                                            <OutlinedInput labelWidth={0} id="job_title" disabled={isMyAccount && !buyerInfoEdit} name="job_title" value={getInputValue("job_title").charAt(0).toUpperCase() + getInputValue("job_title").substring(1)} onChange={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("work_phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Work Phone</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="work_phone" name="work_phone" value={formData["work_phone"]}
                                                inputComponent={TextMaskCustom} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("phone") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Mobile</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="phone" name="phone" value={formData["phone"]} onChange={handleInput} onBlur={handleChange}
                                                inputComponent={TextMaskCustom} />
                                        </FormControl>
                                    </Grid>
                                    <Hidden mdDown>
                                        <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                    </Hidden>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>DATE OF BIRTH</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("birth-month") + ' requiredInput smallInput'} >
                                                    <InputLabel htmlFor="component-filled">MM</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="birth-month" name="birth-month" value={getDobValue('birth-month')} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("birth-date") + ' requiredInput smallInput'}>
                                                    <InputLabel htmlFor="component-filled">DD</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="birth-date" name="birth-date" value={getDobValue('birth-date')} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("birth-year") + ' requiredInput smallInput'}>
                                                    <InputLabel htmlFor="component-filled">YYYY</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !buyerInfoEdit} id="birth-year" name="birth-year" value={getDobValue("birth-year")} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>GENDER</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-12">
                                                <ToggleButtonGroup value={getInputValue('gender')} exclusive onChange={handlButtonToggle} className="toggleCustom">
                                                    <ToggleButton name={'gender'} color="primary" value="male">MALE</ToggleButton>
                                                    <ToggleButton name={'gender'} color="primary" value="female">FEMALE</ToggleButton>
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
                <Grid className={[classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : ''), classes.billingAddress].join(' ')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'billingAddress'} onChange={this.handleChange('billingAddress')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("billingAddress") && expanded !== "billingAddress" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''} >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        BILLING ADDRESS
                                        </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6} className={'text-right'}>
                                        <Button name='billingAddressEdit' onClick={onClick} className={classes.btnMyAccount + (billingAddressEdit ? " save" : " edit")}>
                                            {billingAddressEdit ? "Save" : "Edit"}
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
                                        <FormControl variant="outlined" fullWidth className={'custom-form-control'}>
                                            <InputLabel htmlFor="component-filled">Company</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="company_name" name="company_name" value={getInputValue("company_name")} onChange={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Hidden mdDown>
                                        <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                    </Hidden>
                                    <Grid item xs={12} sm={6} lg={8} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("address") + ' requiredInput'}>
                                            <InputLabel htmlFor="address">Address</InputLabel>
                                            <OutlinedInput autoComplete='nope' labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="address" name="address" value={getInputValue("address")} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl variant="outlined" fullWidth className={'custom-form-control'}>
                                            <InputLabel htmlFor="component-filled">Floor/Unit/Suite</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="address_suit" name="address_suit" value={getInputValue("address_suit")} onChange={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("city") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">City</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="city" name="city" value={getInputValue("city")} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("state") + ' requiredInput'}>
                                            <InputLabel htmlFor="state">State</InputLabel>
                                            <Select id="state" disabled={isMyAccount && !billingAddressEdit} name="state" value={getInputValue("state")} onChange={handleInput} onBlur={handleChange}
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
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("zip") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Zip Code</InputLabel>
                                            <OutlinedInput autoComplete='nope' labelWidth={0} disabled={isMyAccount && !billingAddressEdit} id="zip" name="zip" value={formData["zip"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <div className="col-as-12">
                                            <p className="info-label"></p>
                                        </div>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("country") + ' requiredInput'}>
                                            <InputLabel htmlFor="country">Country</InputLabel>
                                            <Select disabled={isMyAccount && !billingAddressEdit} value={getInputValue("country")} onChange={handleInput} onBlur={handleChange}
                                                input={<OutlinedInput labelWidth={0} name="country" id="country" />}>
                                                {staticData.countries.map(country => (
                                                    <MenuItem key={country.code} value={country.code}>
                                                        {country.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>ALSO MAILING ADDRESS</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-12">
                                                <ToggleButtonGroup value={getInputValue("also_mailing_address")} exclusive onChange={handlButtonToggle} className="toggleCustom">
                                                    <ToggleButton name={'also_mailing_address'} value={true}>YES</ToggleButton>
                                                    <ToggleButton name={'also_mailing_address'} value={false}>NO</ToggleButton>
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
                <Grid className={[classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : ''), classes.paymentInformation].join(' ')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'paymentInfo'} onChange={this.handleChange('paymentInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("paymentInfo") && expanded !== "paymentInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''} >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        PAYMENT INFORMATION
                                        </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6} className={'text-right'}>
                                        <Button name='paymentInfoEdit' onClick={onClick} className={classes.btnMyAccount + (paymentInfoEdit ? " save" : " edit")}>
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
                                            <InputLabel htmlFor="card-type">Card Type</InputLabel>
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
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("card-number") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Card Number</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !paymentInfoEdit} id="card-number" name="card-number" value={formData["card-number"]} onChange={handleInput}
                                                inputComponent={creditCardInputMask} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("name-on-card") + ' requiredInput'}>
                                            <InputLabel htmlFor="component-filled">Name on Card</InputLabel>
                                            <OutlinedInput labelWidth={0} disabled={isMyAccount && !paymentInfoEdit} id="name-on-card" name="name-on-card" value={formData["name-on-card"]} onChange={handleInput} onBlur={handleChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>EXP. DATE</Typography>
                                        <div className={'smallGrid'}>
                                            <div className={'col-as-12'}>
                                                <div className={'smallGrid'}>
                                                    <div className="col-as-6">
                                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("exp-month") + ' requiredInput'}>
                                                            <InputLabel htmlFor="exp-month">Month</InputLabel>
                                                            <Select disabled={isMyAccount && !paymentInfoEdit} value={formData["exp-month"]} onChange={handleInput} onBlur={handleChange}
                                                                input={<OutlinedInput labelWidth={0} name="exp-month" id="exp-month" />}>
                                                                {staticData.months.map(month => (
                                                                    <MenuItem key={month.value} value={month.value}>
                                                                        {month.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className="text-center">
                                                        <Typography variant="h4" className={classes.slash} color="inherit" noWrap>/</Typography>
                                                    </div>
                                                    <div className="col-as-6">
                                                        <FormControl required variant="outlined" fullWidth className={getInputClasses("exp-year") + ' requiredInput'}>
                                                            <InputLabel htmlFor="exp-year">Year</InputLabel>
                                                            <Select disabled={isMyAccount && !paymentInfoEdit} value={formData["exp-year"]} onChange={handleInput} onBlur={handleChange}
                                                                input={<OutlinedInput labelWidth={0} name="exp-year" id="exp-year" />}>
                                                                {years.map(year => (
                                                                    <MenuItem key={year} value={year}>
                                                                        {year}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Typography color="inherit" className="info-label" noWrap>CVC</Typography>
                                        <div className={'smallGrid'}>
                                            <div className="col-as-3">
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("cvc") + ' requiredInput smallInput'}>
                                                    <InputLabel htmlFor="component-filled">CVC</InputLabel>
                                                    <OutlinedInput labelWidth={0} disabled={isMyAccount && !paymentInfoEdit} id="cvc" name="cvc" value={formData["cvc"]} onChange={handleInput} onBlur={handleChange} />
                                                </FormControl>
                                            </div>
                                            <div className="col-as-3 text-center">
                                                <img src={visa} alt="" className={classes.cvcSubImg}/>
                                                <span className={classes.cvcSubTitle}>VISA/MC</span>
                                            </div>
                                            <div className="col-as-3 text-center">
                                                <img src={amex} alt="" className={classes.cvcSubImg}/>
                                                <span className={classes.cvcSubTitle}>AMEX</span>
                                            </div>
                                        </div>
                                    </Grid>
                                    {window.SB_IsMobileView && !isMyAccount &&
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth>
                                                <Button color="success" size="lg" onClick={() => this.handleDone("paymentInfo")} className="done_button">Done</Button>
                                            </FormControl>
                                        </Grid>
                                    }
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </div>
        )
    }
}

export default withStyles(buyerStyle, customInputStyle)(BuyerInfo);