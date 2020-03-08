import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormControl, OutlinedInput, InputLabel } from '@material-ui/core';
import Button from "../uiComponent/CustomButtons/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { staticData } from "../../common";

import visaLogo from '../../assets/images/visa_Logo.png'
import american_express from '../../assets/images/american_express.png'
import mc_Logo from '../../assets/images/mc_Logo.png'
// import prefeeredPlan from "../../assets/images/prefeered-plan.svg"
import basicPlan from "../../assets/images/basic-plan.svg"
// import firstMoverPlan from "../../assets/images/first-mover-plan.svg"
// import axios from "axios";

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 500,
        border: 'solid 1px'
    },
    checkoutHeading: {
        padding: '0 30px 19px',
        [theme.breakpoints.down("xs")]: {
            padding: 20,
        },
    },
    checkoutHeadingMain: {
        fontSize: 36,
        fontWeight: '500',
        color: '#3c3d3f',
        lineHeight: '1',
        [theme.breakpoints.down("xs")]: {
            fontSize: 22,
            marginBottom: 30
        },
    },
    checkoutHeadingRight: {
        textAlign: 'right',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down("xs")]: {
            justifyContent: 'space-between',
        },
    },
    checkoutHeadingRightTxt: {
        color: "#58595b",
        fontSize: '18px',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '1',
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
            display: 'block',
            textAlign: 'left',
        },
        '& span': {
            color: '#3c3d3f',
            fontSize: 29,
            marginLeft: 9,
            [theme.breakpoints.down("xs")]: {
                display: 'block',
                width: '100%',
                fontSize: 20,
                marginLeft: 0,
                marginTop: 10
            },
        }
    },
    buttonPrimary: {
        marginLeft: 37,
        fontSize: 18,
        fontWeight: '900',
        padding: '1.03125rem 2.00625rem',
        [theme.breakpoints.down("xs")]: {
            fontSize: '0.78375rem',
            padding: '0.78375rem 23px',
        },
    },
    checkoutSemiHeading: {
        fontSize: 22,
        color: '#3c3d3f',
        fontWeight: '500',
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
        }
    },
    checkoutSemiHeadingRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    editBtn: {
        color: '#0b82dc',
        fontSize: 17,
        fontWeight: '500',
        padding: 0,
        textTransform: 'none',
        "&:hover, &:focus, &:active": {
            color: '#066bb7'
        },

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    customGridContainer: {
        width: '100%',
        margin: 0,
        alignItems: 'top',
        justifyContent: 'space-between',
    },
    customGridContainerInner: {
        width: '100%',
        margin: 0,
        alignItems: 'center',
        "&.checkoutSemiHeadingWrapper": {
            borderBottom: "1px dashed #8b8b8b",
            paddingBottom: 15,
            marginBottom: 18
        },
    },
    customGridDiv: {
        maxWidth: 'calc(50% - 30px)',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '100%',
            marginBottom: 20
        },
    },
    checkoutUserInfo: {
        fontSize: 20,
        color: '#3c3d3f',
        '& > p': {
            lineHeight: "1",
            marginBottom: 13,
            fontSize: 20,
            textTransform: 'none'
        }
    },
    label: {
        fontSize: 17,
        color: '#3c3d3f',
        textTransform: 'none',
        lineHeight: '1'
    },
    checkoutInfoData: {
        fontSize: 20,
        textTransform: 'none',
        lineHeight: '23px',
        marginBottom: 28,
        '& > img': {
            marginTop: 7,
            maxHeight: 32
        },
        '&.mBzero': {
            marginBottom: 0
        },
        '& p': {
            fontSize: 20,
        }
    },
    planWrapper: {
        border: '2px solid #c6c6c6',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 15px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&.firstMover:after': {
            content: '"25% OFF"',
            backgroundColor: '#e1f5d6',
            color: "#5da657",
            position: 'absolute',
            top: 13,
            right: -32,
            fontSize: 12,
            fontWeight: '900',
            transform: 'rotateZ(45deg)',
            padding: '8px 33px',
            lineHeight: 1,
            [theme.breakpoints.down("xs")]: {
                fontSize: 8,
                padding: '3px 24px',
                top: '7px',
                right: '-25px'
            },
        },
        '&.selected': {
            borderColor: '#0d83dd',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '6px 8px',
        },
    },
    buttonApply: {
        position: 'relative',
        height: '53px !important',
        top: -1
    },
    planImg: {
        '& > img': {
            maxHeight: 83,
            height: 83,
            [theme.breakpoints.down("xs")]: {
                maxHeight: 50,
                height: 50,
            },
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 10
        },
    },
    planName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#3c3d3f',
        paddingRight:30,
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },
    planPrice: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    priceSymbol: {
        fontSize: 19,
        fontWeight: 700,
        color: '#212121',
        lineHeight: 1.6,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    priceMain: {
        fontSize: 41,
        fontWeight: 500,
        color: '#212121',
        lineHeight: 1,
        [theme.breakpoints.down("xs")]: {
            fontSize: 26,
        },
    },
    priceDot: {
        fontSize: 19,
        fontWeight: 500,
        color: '#212121',
        lineHeight: 1.6,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    priceDecimals: {
        fontSize: 19,
        fontWeight: 500,
        color: '#212121',
        lineHeight: 1.6,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    priceTenor: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignSelf: 'center',
        paddingLeft: 5,
        textTransform: 'uppercase',
        [theme.breakpoints.down("xs")]: {
            fontSize: 7,
        },
    },
    priceDuration: {
        fontSize: 11,
        fontWeight: 700,
        color: '#212121',
        lineHeight: 1,
        alignSelf: 'flex-end',
        [theme.breakpoints.down("xs")]: {
            fontSize: 7,
        },
    },
    priceCondition: {
        fontSize: 19,
        fontWeight: 500,
        color: '#212121',
        lineHeight: 1,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    or: {
        fontStyle: 'italic',
        fontSize: 18,
        color: '#5e5e5e',
        textAlign: 'center',
        margin: '16px 0',
        lineHeight: '1'
    },
    promoCodeTb: {
        paddingLeft: 20,
        paddingRight: 33
    },
    tableCheckout: {
        '& tr:nth-child(3)': {
            '& td': {
                paddingBottom: '20px',
            },
        },
        '& tr:last-child': {
            borderTop: '1px solid #b9b9b9',

            '& td': {
                color: '#212121',
                fontWeight: '700',
                padding: '18px 0 0',
                fontStyle: 'normal !important',
            },
        },
        '& tr': {
            height: 'auto',
            '& td:last-child': {
                paddingRight: '0',
            },
        },
        '& td:nth-child(2)': {
            textAlign: 'right',
        },
        '& td': {
            padding: '0',
            borderBottom: '0',
            color: '#5e5e5e',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '30px',
            fontStyle: 'italic',
        },
    },
    applicabletaxes: {
        padding: '35px 0 23px 0',
        fontSize: '13px',
        fontWeight: '400',
        fontStyle: 'italic',
        color: '#212121',
    },
    promoCode: {
        display: 'flex',
        marginBottom: '30px',
        "& fieldset": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
        "& button": {
            borderRadius: '0',
            color: '#c9ba38',
            fontSize: '18px',
            fontWeight: '700',
            background: '#f8f6e6',
            boxShadow: 'none',
            border: '2px solid #ded282',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            height: '52px',
            paddingTop: 0,
            paddingBottom: 0,
            lineHeight: '52px',
            marginLeft: '-2px',
            padding: '0 41px',
            "&:hover, &:active, &:focus": {
                background: '#c9ba38',
                color: '#f8f6e6',
                boxShadow: 'none',
                borderColor: '#c9ba38'
            },
            [theme.breakpoints.down("xs")]: {
                padding: '0 8px',
                fontSize: '12px'
            }
        },
    },
    formControl: {
        width: "100%",
        "& fieldset": {
            borderWidth: 2,
        },
        "&> div:hover fieldset": {
            borderColor: "#ded282 !important"
        },
        "& div[class*='-focused'] fieldset": {
            borderColor: "#ded282 !important"
        },
        "& input": {
            padding: '24px 14px 9px 12px'
        },
        "& label": {
            transform: 'translate(12px, 17px) scale(1)'
        },
        "& div[class*='-focused'] + label": {
            color: 'rgba(0, 0, 0, 0.54)',
        }

    },
    container: {
        '& .form-wrapper-box': {
            padding: '38px 32px 44px'
        }
    },
    cardSecurityInfoWrapper: {
        paddingRight: 100
    }
});

const getLogo = (cardType) => {
    switch (cardType) {
        case "Visa":
            return visaLogo
        case "Amex":
            return american_express
        case "Mastercard":
            return mc_Logo

        default:
            break;
    }
};

class BuyerCheckout extends React.Component {
    state = {
        selectedPlan: "basic"
    };

    handlePlanChange = (selectedPlan) => {
        this.setState({
            selectedPlan,
            amount: 0,
            discount: 0
        })

    }
    render() {
        const { classes, formData, handleFormEdit, submitBuyerFormData } = this.props;

        let buyerplan = staticData.buyerPlans[formData["plan"]];
        const cardNumber = 'xxxx-xxxx-xxxx-' + formData["card-number"].split(' ')[3];

        return (
            <div className={classes.container}>
                <Grid container
                    className={classes.checkoutHeading}
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Grid item xs={12} sm={4} lg={6}>
                        <Typography className={classes.checkoutHeadingMain} noWrap>Checkout</Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} lg={6} className={classes.checkoutHeadingRight}>
                        <Typography className={classes.checkoutHeadingRightTxt} color="primary" noWrap>Order Total : <span>$1,998.99</span></Typography>
                        <Button
                            color="primary"
                            size="lg"
                            className={classes.buttonPrimary}
                            onClick={submitBuyerFormData}
                        >
                            CONFIRM
                    </Button>
                    </Grid>
                </Grid>
                <Grid className={'form-wrapper-box'}>
                    <Grid container className={classes.customGridContainer}>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.customGridDiv}>
                            <Grid container className={classes.customGridContainerInner + " checkoutSemiHeadingWrapper"}>
                                <Grid item xs={10} className={classes.checkoutSemiHeading}>
                                    PLAN TYPE
                                </Grid>
                                <Grid item xs={2} className={classes.checkoutSemiHeadingRight}>
                                    <Button disableRipple={true} color="transparent" size="sm" className={classes.editBtn} onClick={() => handleFormEdit(0)}>Edit</Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    formData["plan"] !== "3" &&
                                    <React.Fragment>
                                        <div className={`${classes.planWrapper} ${this.state.selectedPlan === "basic" ? ' selected' : ''}`}
                                            onClick={() => this.setState({ selectedPlan: "basic" })}>
                                            <div className={classes.planImg}>
                                                <img src={basicPlan} alt="" />
                                            </div>
                                            <div className={classes.planName}>
                                                BASIC <br />INVESTOR
                                            </div>
                                            <div className={classes.planPrice}>
                                                <span className={classes.priceSymbol}>$</span>
                                                <span className={classes.priceMain}>{buyerplan.monthlyAmount.toString().split('.')[0]}</span>
                                                <span className={classes.priceDot}>.</span>
                                                <span className={classes.priceDecimals}>{buyerplan.monthlyAmount.toString().split('.')[1]}</span>
                                                <span className={classes.priceTenor}>
                                                    <span className={classes.priceCondition}>*</span>
                                                    <span className={classes.priceDuration}>/MONTH</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={classes.or}>- or -</div>
                                    </React.Fragment>
                                }
                                <div className={`${classes.planWrapper} firstMover ${this.state.selectedPlan === "advanced" || formData["plan"] === "3" ? ' selected' : ''}`}
                                    onClick={() => this.setState({ selectedPlan: "advanced" })}>
                                    <div className={classes.planImg}>
                                        <img src={basicPlan} alt="" />
                                    </div>
                                    <div className={classes.planName}>
                                        BASIC <br />INVESTOR
                                    </div>
                                    <div className={classes.planPrice}>
                                        <span className={classes.priceSymbol}>$</span>
                                        <span className={classes.priceMain}>{buyerplan.yearlyAmount.toString().split('.')[0]}</span>
                                        <span className={classes.priceDot}>.</span>
                                        <span className={classes.priceDecimals}>{buyerplan.yearlyAmount.toString().split('.')[1]}</span>
                                        <span className={classes.priceTenor}>
                                            <span className={classes.priceCondition}>*</span>
                                            <span className={classes.priceDuration}>/YEAR</span>
                                        </span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.applicabletaxes}>
                                    * Plus Applicable Taxes.
                                </div>
                                <div className={classes.promoCode}>
                                    <FormControl variant="filled" fullWidth className={classes.formControl}>
                                        <OutlinedInput labelWidth={0} id="promoCode" name="promocode" />
                                        <InputLabel htmlFor="email">Have A Promo Code?</InputLabel>

                                    </FormControl>
                                    <Button
                                        color="apply"
                                        size="lg"
                                        className={classes.buttonApply}
                                    >
                                        APPLY
                                    </Button>
                                </div>
                                <div className={classes.promoCodeTb}>
                                    <Table className={classes.tableCheckout}>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell >Subtotal :</TableCell>
                                                <TableCell align="right">$1,998.99</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Discount :</TableCell>
                                                <TableCell align="right">50%</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Taxes :</TableCell>
                                                <TableCell align="right">$0.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Total :</TableCell>
                                                <TableCell align="right">$1,998.99</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.customGridDiv}>
                            <Grid container className={classes.customGridContainerInner + " checkoutSemiHeadingWrapper"}>
                                <Grid item xs={10} className={classes.checkoutSemiHeading}>
                                    BUYER INFORMATION
                            </Grid>
                                <Grid item xs={2} className={classes.checkoutSemiHeadingRight}>
                                    <Button disableRipple={true} color="transparent" size="sm" className={classes.editBtn} onClick={() => handleFormEdit(1)}>Edit</Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1" className={classes.checkoutInfoData}>
                                    <p>{formData['first_name']}</p>
                                    <p>{formData['last_name']}</p>
                                    <p>{formData['phone']} <i>Mobile</i></p>
                                    <p>{formData['work_phone']} <i>Work Phone</i></p>
                                    <p>{formData['email']}</p>
                                    <p>{formData['birth-month']}/{formData['birth-date']}/{formData['birth-year']} <i>DOB</i></p>
                                    <p>{formData['gender']}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={'form-wrapper-box'}>
                    <Grid container className={classes.customGridContainer}>
                        <Grid item xs={12} sm={12} lg={6} className={classes.customGridDiv}>
                            <Grid container className={classes.customGridContainerInner + " checkoutSemiHeadingWrapper"}>
                                <Grid item xs={10} className={classes.checkoutSemiHeading}>
                                    BILLING ADDRESS
                            </Grid>
                                <Grid item xs={2} className={classes.checkoutSemiHeadingRight}>
                                    <Button disableRipple={true} color="transparent" size="sm" className={classes.editBtn} onClick={() => handleFormEdit(1)}>Edit</Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1" className={classes.checkoutUserInfo}>
                                    <p>{formData['company_name']}</p>
                                    <p>{formData['address']}</p>
                                    <p>{formData['address_suit']}</p>
                                    <p>{formData['city']}, {formData['state']} {formData['zip']}</p>
                                    <p>{formData['country']}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} className={classes.customGridDiv}>
                            <Grid container className={classes.customGridContainerInner + " checkoutSemiHeadingWrapper"}>
                                <Grid item xs={10} className={classes.checkoutSemiHeading}>
                                    PAYMENT INFORMATION
                            </Grid>
                                <Grid item xs={2} className={classes.checkoutSemiHeadingRight}>
                                    <Button disableRipple={true} color="transparent" size="sm" className={classes.editBtn} onClick={() => handleFormEdit(1)}>Edit</Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    <p className={classes.label}>Card Type </p>
                                    <p className={classes.checkoutInfoData}><img src={getLogo(formData["card-type"])} alt="" /></p>
                                    <p className={classes.label}>Card Number</p>
                                    <p className={classes.checkoutInfoData}>{cardNumber}</p>
                                    <p className={classes.label}>Name on Card</p>
                                    <p className={classes.checkoutInfoData}>{formData["name-on-card"]}</p>
                                    <Grid container className={classes.cardSecurityInfoWrapper}>
                                        <Grid item xs={6}>
                                            <p className={classes.label}>Exp. Date</p>
                                            <p className={classes.checkoutInfoData + ' mBzero'}>{formData["exp-month"]}/{formData["exp-year"].toString().substring(2, 4)}</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p className={classes.label}>CVC</p>
                                            <p className={classes.checkoutInfoData + ' mBzero'}>{formData["cvc"]}</p>
                                        </Grid>
                                    </Grid>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default withStyles(styles)(BuyerCheckout);