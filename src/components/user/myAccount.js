import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { staticData } from "../../common";
import { BuyerPlan, BuyerInfo, ProfileType } from "../buyer/index";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { myAcccountActions } from '../../actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from '@material-ui/lab/Slider'
import Button from "../uiComponent/CustomButtons/Button";
import myAccountStyle from "./myAccountStyle";
import SetPreference from './setPreference';
import SellerBailoutTooltipAlt from '../common/sellerBailoutTooltipAlt';
import { FeaturedListing } from './tooltips/alertsTooltips';

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `0px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        cursor: 'pointer',
        top: '-16px',
        right: '-16px',
        color: '#fff',
        background: '#8d8d8d',
        width: '31px',
        height: '31px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '32px',
        fontSize: '15px',

    }
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <span className={classes.closeButton} onClick={onClose}><i className="sb-icon-popup-close"></i></span>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 1,
    },
}))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//     root: {
//         borderTop: `1px solid ${theme.palette.divider}`,
//         margin: 0,
//         padding: theme.spacing.unit,
//     },
// }))(MuiDialogActions);

function TabContainer(props) {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class MyAccount extends React.Component {
    state = {
        value: 0,
        buyerFormData: staticData.buyerFormData,
        invalidBuyerFormFields: [],
        validBuyerFormFields: [],
        loginEdit: false,
        buyerInfoEdit: false,
        billingAddressEdit: false,
        paymentInfoEdit: false,
        investingExpEdit: false,
        genralInfoEdit: false,
        profileTypeEdit: false,
        alertEdit:false,
        openDeleteModal: false,
        siderValueFeatures: 2,
        siderValueFavorites: 2,
        siderValueBlogs: 2,
        alertData: {
            news_alert_frequency: "",
            news_alert_email: 0,
            news_alert_sms:0,
            newlisting_alert_frequency:"",
            newlisting_alert_email:0,
            newlisting_alert_sms:0,
            featuredlisting_alert_frequency:"",
            featuredlisting_alert_email:0,
            featuredlisting_alert_sms:0,
            favourite_alert_frequency:"",
            favourite_alert_email:0,
            favourite_alert_sms:0,
            blog_alert_frequency:"",
            blog_alert_email:0,
            blog_alert_sms:0,
        }
        // active: false
    };

    componentDidMount() {
        this.props.getBuyerProfileDetails();
        this.props.getPreferences();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.buyerProfileDetails) {
            this.setState({ buyerFormData: nextProps.buyerProfileDetails })
            this.setState({ buyerPreferences: nextProps.buyerPreferences })
            this.setState({
                alertData: {
                    ...this.state.alertData, "news_alert_frequency": nextProps.buyerProfileDetails.news_alert_frequency,
                    "news_alert_email": nextProps.buyerProfileDetails.news_alert_email,
                    "news_alert_sms": nextProps.buyerProfileDetails.news_alert_sms,
                    "newlisting_alert_frequency": nextProps.buyerProfileDetails.newlisting_alert_frequency,
                    "newlisting_alert_email": nextProps.buyerProfileDetails.newlisting_alert_email,
                    "newlisting_alert_sms": nextProps.buyerProfileDetails.newlisting_alert_sms,
                    "featuredlisting_alert_frequency": nextProps.buyerProfileDetails.featuredlisting_alert_frequency,
                    "featuredlisting_alert_email": nextProps.buyerProfileDetails.featuredlisting_alert_email,
                    "featuredlisting_alert_sms": nextProps.buyerProfileDetails.featuredlisting_alert_sms,
                    "favourite_alert_frequency": nextProps.buyerProfileDetails.favourite_alert_frequency,
                    "favourite_alert_email": nextProps.buyerProfileDetails.favourite_alert_email,
                    "favourite_alert_sms": nextProps.buyerProfileDetails.favourite_alert_sms,
                    "blog_alert_frequency": nextProps.buyerProfileDetails.blog_alert_frequency,
                    "blog_alert_email": nextProps.buyerProfileDetails.blog_alert_email,
                    "blog_alert_sms": nextProps.buyerProfileDetails.blog_alert_sms,
                },
            });
            if (nextProps.buyerProfileDetails.featuredlisting_alert_frequency) {
                this.setState({ siderValueFeatures: this.getSliderValue(nextProps.buyerProfileDetails.featuredlisting_alert_frequency)}); 
            }
            if (nextProps.buyerProfileDetails.favourite_alert_frequency) {
                this.setState({ siderValueFavorites:this.getSliderValue(nextProps.buyerProfileDetails.favourite_alert_frequency)}); 
            }
            if (nextProps.buyerProfileDetails.blog_alert_frequency) {
                this.setState({ siderValueBlogs:this.getSliderValue(nextProps.buyerProfileDetails.blog_alert_frequency)}); 
            }
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleCheckbox = (event) => {
        if (this.state.alertEdit) {      
            this.setState({
                alertData: {
                    ...this.state.alertData, [event.target.id]: Number(event.target.checked),
                },
            });
        }
    }

    getSliderValue = (siderValue) => { 
        let alertFrequency = 2
        if (siderValue === 'Instant') {
            alertFrequency = 1
        } else if (siderValue === 'Weekly'){
            alertFrequency = 2
        }else if (siderValue === 'Monthly') {
            alertFrequency = 3
        }
        return alertFrequency;
    }

    setAlertFrequency = (siderValue) => { 
        let alertFrequency = ''
        if (siderValue === 1) {
            alertFrequency = 'Instant'
        } else if (siderValue === 2){
            alertFrequency = 'Weekly'
        }else if (siderValue === 3) {
            alertFrequency = 'Monthly'
        }
        return alertFrequency;
    }
    handleSliderChangeFeaturedListing = (event, siderValueFeatures) => {
        this.setState({ siderValueFeatures });
        const alertFrequency = this.setAlertFrequency(siderValueFeatures)
        this.setState({
            alertData: {
                ...this.state.alertData, "featuredlisting_alert_frequency": alertFrequency,
            },
        });
    };

    handleSliderChangeFavorites = (event, siderValueFavorites) => {
        this.setState({ siderValueFavorites });
        const alertFrequency = this.setAlertFrequency(siderValueFavorites);
        this.setState({
            alertData: {
                ...this.state.alertData, "favourite_alert_frequency": alertFrequency,
            },
        });
    };

    handleSliderChangeBlogs = (event, siderValueBlogs) => {
        this.setState({ siderValueBlogs });
        const alertFrequency = this.setAlertFrequency(siderValueBlogs);
        this.setState({
            alertData: {
                ...this.state.alertData, "blog_alert_frequency": alertFrequency,
            },
        });        
    };

    onClick = event => {
        const buttonName = event.target.parentElement.name || event.target.name;
        if (buttonName === 'investingExpEdit') {
            if (this.state.investingExpEdit) {
                this.props.updateInvestingExperienceDetails(this.state.buyerFormData.buyer);
            }
            this.setState({ investingExpEdit: !this.state.investingExpEdit })
        }
        if (buttonName === 'genralInfoEdit') {
            if (this.state.genralInfoEdit) {
                let data = this.state.buyerFormData;
                data["buy_in"] = this.state.buyerFormData.buy_in || this.state.buyerFormData.buyer.buy_in;
                data["are_you_agent"] = this.state.buyerFormData.are_you_agent || this.state.buyerFormData.buyer.are_you_agent;
                data["heard"] = this.state.buyerFormData.heard || this.state.buyerFormData.buyer.heard_id;
                this.props.updateGeneralInformation(data);
            }
            this.setState({ genralInfoEdit: !this.state.genralInfoEdit })
        }

        if (buttonName === 'loginEdit') {
            if (this.state.loginEdit) {
                if (this.state.buyerFormData.password && this.state.buyerFormData.password_confirmation) {
                    let data = {}
                    data['password'] = this.state.buyerFormData.password;
                    data['password_confirmation'] = this.state.buyerFormData.password_confirmation;
                    this.props.changePassowrd(data);
                } else {
                    if (!this.state.buyerFormData.password) {
                        let invalidBuyerFormFields = this.state.invalidBuyerFormFields;
                        let validBuyerFormFields = this.state.validBuyerFormFields;
                        if (!invalidBuyerFormFields.includes('password')) {
                            invalidBuyerFormFields.push('password');
                            const index = validBuyerFormFields.indexOf('password');
                            if (validBuyerFormFields.includes('password')) {
                                validBuyerFormFields.splice(index, 1);
                            }
                        }
                        this.setState({
                            invalidBuyerFormFields: invalidBuyerFormFields,
                            validBuyerFormFields: validBuyerFormFields
                        });
                    }
                    if (!this.state.buyerFormData.password_confirmation) {
                        let invalidBuyerFormFields = this.state.invalidBuyerFormFields;
                        let validBuyerFormFields = this.state.validBuyerFormFields;
                        if (!invalidBuyerFormFields.includes('password_confirmation')) {
                            invalidBuyerFormFields.push('password_confirmation');
                            const index = validBuyerFormFields.indexOf('password_confirmation');
                            if (validBuyerFormFields.includes('password_confirmation')) {
                                validBuyerFormFields.splice(index, 1);
                            }
                        }
                        this.setState({
                            invalidBuyerFormFields: invalidBuyerFormFields,
                            validBuyerFormFields: validBuyerFormFields
                        });
                    }
                }
            }
            this.setState({ loginEdit: !this.state.loginEdit })
        }

        if (buttonName === 'profileTypeEdit') {
            this.setState({ profileTypeEdit: !this.state.profileTypeEdit })
        }

        if (buttonName === 'alertEdit') {
            if (this.state.alertEdit) {
                this.props.smsAndEmailAlertSettings(this.state.alertData);
            }
            this.setState({ alertEdit: !this.state.alertEdit })
        }

        if (buttonName === 'buyerInfoEdit') {
            if (this.state.buyerInfoEdit) {
                let data = {}
                data = this.state.buyerFormData;
                let dob;
                if (this.state.buyerFormData['birth-month'] && this.state.buyerFormData['birth-date'] && this.state.buyerFormData['birth-year']) {
                    dob = this.state.buyerFormData['birth-month'] + '-' + this.state.buyerFormData['birth-date'] + '-' + this.state.buyerFormData['birth-year'];
                }
                data["dob"] = dob || this.state.buyerFormData.buyer.dob;
                data["gender"] = this.state.buyerFormData.gender || this.state.buyerFormData.buyer.gender;
                data["job_title"] = this.state.buyerFormData.job_title || this.state.buyerFormData.buyer.job_title;
                this.props.updateBuyerInfo(data);
            }
            this.setState({ buyerInfoEdit: !this.state.buyerInfoEdit })
        }

        if (buttonName === 'billingAddressEdit') {
            if (this.state.billingAddressEdit) {
                let data = this.state.buyerFormData;
                 data["address"] = this.state.buyerFormData.address || this.state.buyerFormData.buyer.street1;
                 data["country"] = this.state.buyerFormData.country || this.state.buyerFormData.buyer.country;
                 data["city"] = this.state.buyerFormData.city || this.state.buyerFormData.buyer.city;
                 data["state"] = this.state.buyerFormData.state || this.state.buyerFormData.buyer.state;
                 data["zip"] = this.state.buyerFormData.zip || this.state.buyerFormData.buyer.zip;
                 data["also_mailing_address"] = this.state.buyerFormData.also_mailing_address || this.state.buyerFormData.buyer.also_mailing_address;
                 this.props.updateBillingAddress(data);
             }
             this.setState({ billingAddressEdit: !this.state.billingAddressEdit })
        }

        if (buttonName === 'paymentInfoEdit') {
            this.setState({ paymentInfoEdit: !this.state.paymentInfoEdit })
        }
    }
    handleInput = event => {
        this.setState({
            buyerFormData: {
                ...this.state.buyerFormData, [event.target.name]: event.target.value,
            },
        });
    };
    handleClickDeleteModal = () => {
        this.setState({
            openDeleteModal: !this.state.openDeleteModal,
        });
    };
    handleInputChange = event => {
        let { invalidBuyerFormFields, validBuyerFormFields } = this.state;
        let name = event.target.name;
        let value = event.target.value;
        let buyer = this.state.buyerFormData.buyer;
        if (["are_you_cash_buyer", "closing_period", "buy_in", "purchase", "are_you_agent", "heard"].includes(name)) {
            buyer[name] = staticData[name].find(item => item.value === value).value;
            this.setState({
                buyerFormData: {
                    ...this.state.buyerFormData.buyer, buyer
                },
            });
        }
        else {
            this.setState({
                buyerFormData: {
                    ...this.state.buyerFormData, [name]: value
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
        if (event.target.name === "profile_type_id" && event.target.value !== "") {
            this.props.updateBuyerProfileType(this.state.buyerFormData.buyer);
        }
        this.setState({
            invalidBuyerFormFields: invalidBuyerFormFields,
            validBuyerFormFields: validBuyerFormFields
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

    removePreferencePopup = id => {
        //this.props.removePreference(id);
    }
    getBoxColor = (id) => {
        if (id%4 === 0) {
            return ' greenBox'
        } else if (id%3 === 0){
            return ' yellowBox'
        } else if (id%2 === 0) {
            return ' pinkBox'
        } else {
            return ' primaryBox'
        }
    }
    handlButtonToggle = (event, value) => {
        const name = event.target.parentElement.name;
        if (!((name === 'gender' && this.state.buyerInfoEdit) || (name === 'gender' && this.state.billingAddressEdit))) {
            return;
        }
        if((name === 'also_mailing_address' || name === 'gender') && value !== null) {
            this.setState({
                buyerFormData: {
                    ...this.state.buyerFormData,
                    [name]: value,
                },
            });
        }
    }

    render() {
        const { classes } = this.props;
        const { value, siderValueFeatures, siderValueFavorites, siderValueBlogs, buyerPreferences } = this.state;
        // buyerProfileDetails && this.setState({ buyerFormData: buyerProfileDetails })
        return (
            <div className={classes.root}>
                <h1 className={classes.heading}>My Account</h1>
                <AppBar position="static" classes={{ root: classes.custom_tabsWrapper }}>
                    <Tabs value={value} onChange={this.handleChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
                        <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SETTINGS" />
                        <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="PLAN" />
                        <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="PROFILE" />
                        <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="PREFERENCES" />
                        <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="ALERTS" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                    <TabContainer className={classes.tabContainer}>
                        <BuyerInfo handleChange={this.handleInputChange} handleInput={this.handleInput}
                            formData={this.state.buyerFormData} invalidBuyerFormFields={this.state.invalidBuyerFormFields}
                            validBuyerFormFields={this.state.validBuyerFormFields} isMyAccount={true} onClick={this.onClick}
                            loginEdit={this.state.loginEdit} handlButtonToggle={this.handlButtonToggle} buyerInfoEdit={this.state.buyerInfoEdit} billingAddressEdit={this.state.billingAddressEdit} paymentInfoEdit={this.state.paymentInfoEdit} />
                    </TabContainer>}
                {value === 1 && <TabContainer className={classes.tabContainer}>
                    <BuyerPlan handleChange={this.handleInputChange} handleInput={this.handleInput}
                        formData={this.state.buyerFormData} invalidBuyerFormFields={this.state.invalidBuyerFormFields}
                        validBuyerFormFields={this.state.validBuyerFormFields} isMyAccount={true} changeSubscription={this.props.changeSubscription} 
                        cancelSubscription={this.props.cancelSubscription} uncancelSubscription={this.props.uncancelSubscription} />
                </TabContainer>}
                {value === 2 && <TabContainer className={classes.tabContainer}>
                    <ProfileType handleChange={this.handleInputChange} handleInput={this.handleInput}
                        formData={this.state.buyerFormData} invalidBuyerFormFields={this.state.invalidBuyerFormFields}
                        validBuyerFormFields={this.state.validBuyerFormFields} isMyAccount={true} onClick={this.onClick} investingExpEdit={this.state.investingExpEdit} genralInfoEdit={this.state.genralInfoEdit} profileTypeEdit={this.state.profileTypeEdit} />
                </TabContainer>}
                {value === 3 && <TabContainer className={classes.tabContainer}>
                    <div className={classes.panelMain}>
                        <Grid className={classes.panelWrapperBox}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item xs={10} sm={10} lg={10}>
                                    <Typography className={classes.form__heading} noWrap>
                                        PREFERENCES
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} sm={2} lg={2} className={'text-right'}>
                                    <Typography className={classes.form__heading} noWrap>
                                    {buyerPreferences && buyerPreferences.length}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="left" className={classes.colorBoxContainer}>
                                {buyerPreferences && buyerPreferences.map((data,index) => (
                                <Grid item xs={12} sm={6} lg={4} className={classes.colorBoxBlock}>
                                    <div className={classes.colorBox + this.getBoxColor(index+1)}>
                                        <button type="button" className={classes.blockClearBtn}><i onClick={this.removePreferencePopup(data.id)} className={'sb-icon-popup-close'}></i></button>
                                        <div className={classes.blockHeading}>
                                            {data.product_type && data.product_type.name}
                                        </div>
                                        <div className={classes.blockHeadingContent}>
                                            {data.location_city && data.location_city.city_name}, {data.location_county && data.location_county.county_state_code} <small>({data.location_city && data.location_city.city_name})</small>
                                        </div>
                                        <div className={classes.blockDataTable}>
                                            <div className={classes.tableBlock}>
                                                <span className={classes.blockLabel}>ASSET</span>
                                                <span className={classes.blockContent}>{data.asset_type && data.asset_type.name}</span>
                                            </div>
                                            <div className={classes.tableBlock}>
                                                <span className={classes.blockLabel}>PROPERTY</span>
                                                <span className={classes.blockContent}>{data.property_type && data.property_type.name}</span>
                                            </div>
                                            <div className={classes.tableBlock}>
                                                <span className={classes.blockLabel}>PRICE</span>
                                                <span className={classes.blockContent}>${data.price_range}M <small>max</small></span>
                                            </div>
                                        </div>
                                        <div className={classes.blockDataTable}>
                                            <div className={classes.tableBlock}>
                                                <span className={classes.blockLabel}>BEDS</span>
                                                <span className={classes.blockContent}>{data.bedrooms}</span>
                                            </div>
                                            <div className={classes.tableBlock}>
                                                <span className={classes.blockLabel}>BATHS</span>
                                                <span className={classes.blockContent}>{data.bathrooms}</span>
                                            </div>
                                            <div className={classes.tableBlock}>
                                                <span className={classes.blockLabel}>SQFT</span>
                                                <span className={classes.blockContent}>{data.idealsqft}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                ))
                                }
                                <Grid item xs={12} sm={6} lg={4} className={classes.colorBoxBlock}>
                                    <div className={classes.colorBox + ' addBox'}>
                                        <div className={classes.addBoxBtn}>
                                            <span className={classes.addBtnCircle}>+</span>
                                            <span>ADD</span>
                                        </div>
                                    </div>
                                </Grid>

                                {/* Change Plan Dialog */}

                                {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.changePlanModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                        <div className={classes.changePlan}>
                                            <Typography variant="h3">Your Plan is about to chnage to:</Typography>
                                            <div className={classes.planWrapper}>
                                                <div className={classes.planImg}>
                                                    <img src={basicPlan} alt="" />
                                                </div>
                                                <div className={classes.planName}>
                                                PREFERRED <br />INVESTOR
                                                </div>
                                                <div className={classes.planPrice}>
                                                    <span className={classes.priceSymbol}>$</span>
                                                    <span className={classes.priceMain}>109</span>
                                                    <span className={classes.priceDot}>.</span>
                                                    <span className={classes.priceDecimals}>99</span>
                                                    <span className={classes.priceTenor}>
                                                        <span className={classes.priceCondition}>*</span>
                                                        <span className={classes.priceDuration}>/MONTH</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <Typography variant="h2">Change summary</Typography>
                                            <div className={classes.changePlanContent}>
                                                <p>You will be charged $24.96 now.</p>
                                                <p>This amount is prorated to your current billing period.</p>
                                            </div>
                                            <div className={classes.changePlanInfoAction}>
                                                <Button color="primary" size="lg" className={classes.buttonCancel}>Cancel</Button>
                                                <Button color="primary" size="lg" className={classes.buttonChangePlan}>Change Plan</Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog> */}

                                {/* End Change Plan Dialog */}

                                {/* Plan Changed Dialog */}
                                {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.planChangedModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                        <div className={classes.changedSuccessMsg}>
                                            Plan change confirmed.
                                        </div>
                                    </DialogContent>
                                </Dialog> */}
                                {/* End Plan Changed Dialog */}

                                {/* Cancel Plan Modal */}
                                 {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.calcelPlandModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                    <div className={classes.deleteFavInfo}>
                                        <Typography variant="h3">Are you sure you want <br />to cancel your plan?</Typography>
                                        <p>You will lose all your Data, Settings<br />and Marketplace Access.</p>
                                        <div className={classes.favAction}>
                                            <Link to="/" className={classes.btnYes}>Yes</Link>
                                            <Link to="/" className={classes.btnNo}>No</Link>
                                        </div>
                                    </div>
                                    </DialogContent>
                                </Dialog> */}
                                {/* End Cancel Plan Modal */}

                                {/* Plan Set to cancel Modal */}
                                {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.PlanSetCalcelModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                    <div className={classes.setCancelInfo}>
                                        <Typography variant="h3">Your plan is set to cancel on:</Typography>
                                        <Typography variant="h2">May 11, 2018</Typography>                                        
                                        <p>After this day you will no longer<br />be billed for the service, nor have <br />access to your login credentials.</p>
                                        <div className={classes.chnagePlanSet}>
                                            <Link to="/" className={classes.chnagePlanbtn}>Change Plan</Link>
                                            <Link to="/" className={classes.unchangePlanbtn}>Uncancel Plan</Link>
                                        </div>
                                    </div>
                                    </DialogContent>
                                </Dialog> */}
                                {/* End Plan Set to cancel Modal */}

                                {/* Plan uncancel Modal */}
                                {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.planUncancelModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                        <div className={classes.changedUncancelMsg}>
                                        Your plan is uncanceled.
                                        </div>
                                    </DialogContent>
                                </Dialog> */}
                                {/* End Plan uncancel Modal */}

                                {/* Plan canceled Modal */}
                                {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.planCanceledModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                        <div className={classes.canceledPlanMsg}>
                                            <Typography variant="h2">Your plan is canceled.</Typography>
                                            <p>please create a new account to<br />regain access to the service.</p>
                                        </div>
                                    </DialogContent>
                                </Dialog> */}
                                {/* End Plan canceled Modal */}

                                {/* Admin Welcome Modal */}
                                {/* <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.adminWelcomeModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                        <div className={classes.adminWelcomeInfo}>
                                            <Typography variant="h2">Welcome Back:<br /><span>Shilen Amin</span></Typography>
                                            <p>In order to reactivate your account and regain access to the service ...</p>
                                            <p>Please select a new Plan, review and update your previous Buyer and Profile information on file before checkout. </p>
                                            <Link to="/" className={classes.continuebtn}>Continue</Link>
                                        </div>
                                    </DialogContent>
                                </Dialog> */}
                                {/* End Admin Welcome Modal */}

                                {/* set preferences Modal */}
                                <Dialog
                                    scrollBody
                                    onClose={this.handleClickDeleteModal}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.openDeleteModal} className={classes.setPreferencesModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                                    </DialogTitle>
                                    <DialogContent className={classes.customModalContent}>
                                        <div className={classes.setPreferencesInfo}>
                                            <Typography variant="h2">Set Preferences</Typography>
                                            {/* <div className={classes.preferencesSteps}>
                                                Steps
                                            </div> */}
                                            <div className={classes.preferencesForm}>
                                                <div className={classes.formGrid}>
                                                    <SetPreference classes={classes}/>
                                                </div>
                                                {/* <Button color="primary" size="lg" className={classes.btnNext}>Next</Button> */}
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                {/* End set preferences Modal */}




                            </Grid>
                        </Grid>
                    </div>
                </TabContainer>}
                {value === 4 && <TabContainer className={classes.tabContainer}>
                    <div className={classes.panelMain}>
                        <Grid className={classes.panelWrapperBox}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item xs={10} sm={10} lg={10}>
                                    <Typography className={classes.form__heading} noWrap>
                                        ALERTS & EMAIL SETTINGS
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} sm={2} lg={2} className={'text-right'}>
                                    <Button onClick={this.onClick} name="alertEdit" className={classes.btnMyAccount + ( this.state.alertEdit ? " save": " edit")}>
                                        {this.state.alertEdit ? "Save" : "Edit"}
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="left" className={classes.alertSettingContainer}>
                                <Grid item xs={12} sm={12} lg={12} className={classes.alertSettingWrapper}>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertDetails}>
                                        <div className={classes.alertHeading}>
                                            Newsletters
                                        </div>
                                        <div className={classes.alertDetailText}>
                                            Company News, My Account, Action Steps and Support.
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertControlWrapper}>
                                        <Grid item xs={12} sm={6} lg={6} className={classes.alertPrefrence}>
                                            <div >Occasionally</div>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.news_alert_sms ? " active" : "")}>
                                                <input type='checkbox' id='news_alert_sms' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mobile-chat"></i>
                                                <span>{this.state.alertData.news_alert_sms ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.news_alert_email ? " active" : "")}>
                                                <input type='checkbox' id='news_alert_email' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mail-solid"></i>
                                                <span>{this.state.alertData.news_alert_email ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12} lg={12} className={classes.alertSettingWrapper}>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertDetails}>
                                        <div className={classes.alertHeading}>
                                            New Listings
                                        </div>
                                        <div className={classes.alertDetailText}>
                                            A weekly collection of new inventory formated in a single email based
                                            on your location preferences only.
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertControlWrapper}>
                                        <Grid item xs={12} sm={6} lg={6} className={classes.alertPrefrence}>
                                            <label>
                                                <input type='radio' /><span>WEEKLY</span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.newlisting_alert_sms ? " active" : "")}>
                                                <input type='checkbox' id='newlisting_alert_sms' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mobile-chat"></i>
                                                <span>{this.state.alertData.newlisting_alert_sms ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.newlisting_alert_email ? " active" : "")}>
                                                <input type='checkbox' id='newlisting_alert_email' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mail-solid"></i>
                                                <span>{this.state.alertData.newlisting_alert_email ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12} lg={12} className={classes.alertSettingWrapper}>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertDetails}>
                                        <div className={classes.alertHeading}>
                                            Featured Listing
                                        </div>
                                        <div className={classes.alertDetailText}>
                                            An individual listing specifically matched to you based on both
                                            your location and detail preferences.
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertControlWrapper}>
                                        <Grid item xs={12} sm={6} lg={6} className={classes.alertPrefrence}>
                                            <SellerBailoutTooltipAlt className={classes.alertPrefrenceTooltip} tooltipContent={FeaturedListing()}/>
                                            <div className={classes.sliderPoint}>
                                                <span>Instant</span>
                                                <span>WEEKLY</span>
                                                <span>MONTHLY</span>
                                            </div>
                                            <Slider
                                                classes={{ container: classes.slider }}
                                                value={siderValueFeatures}
                                                min={1}
                                                max={3}
                                                step={1}
                                                onChange={this.handleSliderChangeFeaturedListing}
                                                disabled={!this.state.alertEdit}
                                            ></Slider>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.featuredlisting_alert_sms ? " active" : "")}>
                                                <input type='checkbox' id='featuredlisting_alert_sms' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mobile-chat"></i>
                                                <span>{this.state.alertData.featuredlisting_alert_sms ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.featuredlisting_alert_email ? " active" : "")}>
                                                <input type='checkbox' id='featuredlisting_alert_email' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mail-solid"></i>
                                                <span>{this.state.alertData.featuredlisting_alert_email ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12} className={classes.alertSettingWrapper}>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertDetails}>
                                        <div className={classes.alertHeading}>
                                            Favorites
                                        </div>
                                        <div className={classes.alertDetailText}>
                                            An alert based on your saved listings.
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertControlWrapper}>
                                        <Grid item xs={12} sm={6} lg={6} className={classes.alertPrefrence}>
                                        <SellerBailoutTooltipAlt tooltipContent={FeaturedListing()}/>
                                            <div className={classes.sliderPoint}>
                                                <span>Instant</span>
                                                <span>WEEKLY</span>
                                                <span>MONTHLY</span>
                                            </div>
                                            <Slider
                                                classes={{ container: classes.slider }}
                                                value={siderValueFavorites}
                                                min={1}
                                                max={3}
                                                step={1}
                                                onChange={this.handleSliderChangeFavorites}
                                                disabled={!this.state.alertEdit}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.favourite_alert_sms ? " active" : "")}>
                                                <input type='checkbox' id='favourite_alert_sms' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mobile-chat"></i>
                                                <span>{this.state.alertData.favourite_alert_sms ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.favourite_alert_email ? " active" : "")}>
                                                <input type='checkbox' id='favourite_alert_email' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mail-solid"></i>
                                                <span>{this.state.alertData.favourite_alert_email ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12} className={classes.alertSettingWrapper}>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertDetails}>
                                        <div className={classes.alertHeading}>
                                            Blogs
                                        </div>
                                        <div className={classes.alertDetailText}>
                                            Latest News, Stories, Articles and Guides.
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={6} className={classes.alertControlWrapper}>
                                        <Grid item xs={12} sm={6} lg={6} className={classes.alertPrefrence}>
                                            <SellerBailoutTooltipAlt tooltipContent={FeaturedListing()}/>
                                            <div className={classes.sliderPoint}>
                                                <span>Instant</span>
                                                <span>WEEKLY</span>
                                                <span>MONTHLY</span>
                                            </div>
                                            <Slider
                                                classes={{ container: classes.slider }}
                                                value={siderValueBlogs}
                                                min={1}
                                                max={3}
                                                step={1}
                                                onChange={this.handleSliderChangeBlogs}
                                                disabled={!this.state.alertEdit}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.blog_alert_sms ? " active" : "")}>
                                                <input type='checkbox' id='blog_alert_sms' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mobile-chat"></i>
                                                <span>{this.state.alertData.blog_alert_sms ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                            <label className={classes.alertCheckboxBtn + (this.state.alertData.blog_alert_email ? " active" : "")}>
                                                <input type='checkbox' id='blog_alert_email' onChange={this.handleCheckbox} />
                                                <i className="sb-icon-mail-solid"></i>
                                                <span>{this.state.alertData.blog_alert_email ? "ON" : "OFF"}</span>
                                            </label>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </div>
                </TabContainer>}
            </div>
        );
    }
}

MyAccount.propTypes = {
    classes: PropTypes.object.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(myAccountStyle)(MyAccount));