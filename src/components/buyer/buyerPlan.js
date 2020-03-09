/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from "react";
import { Grid, withStyles, Typography, List, ListItem } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import Button from "../uiComponent/CustomButtons/Button";
import buyerStyle from "./buyerStyle";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { staticData } from "../../common";

import prefeeredPlan from "../../assets/images/prefeered-plan.svg"
import basicPlan from "../../assets/images/basic-plan.svg"
import firstMoverPlan from "../../assets/images/first-mover-plan.svg"

import SellerBailoutTooltip from '../common/sellerBailoutTooltip';
import { ListingAccess, preferences, favorities, finalCommisions, accountManager } from './tooltips/buyerPlanTooltips';

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

// function TabContainer(props) {
//     return (
//         <React.Fragment>
//             {props.children}
//         </React.Fragment>
//     );
// }
class BuyerPlan extends React.Component {
    state = {
        openDeleteModal: false,
        openChangePlanModal: false,
        openCancelModal: false,
        openConfirmCancelPlanModal: false,
        openUncancelPlanModal: false,
        openConfirmUncancelPlanModal: false,
        plan_id: ''
        // active: false
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    responsive = {
        0: { items: 1 },
        766: { items: 1 },
        767: { items: 2 },
        1024: { items: 3 },
    }
    handleClickDeleteModal = event => {
        this.setState({
            openDeleteModal: !this.state.openDeleteModal,
        });
        if (event.target.name === "plan") {
            this.setState({
                plan_id: event.target.value,
            });
        }
    };
    handleClickUncancelModal = () => {
        this.setState({
            openUncancelPlanModal: !this.state.openUncancelPlanModal,
            openCancelModal: false
        });
    };
    handleConfirmCancelPlan = () => {
        this.setState({
            openConfirmCancelPlanModal: !this.state.openConfirmCancelPlanModal,
            openCancelModal: false
        });
        this.props.cancelSubscription();
    };
    handleUncancelClick = () => {
        this.setState({
            openConfirmUncancelPlanModal: !this.state.openConfirmUncancelPlanModal,
            openUncancelPlanModal: false
        });
        this.props.uncancelSubscription();
    };
    handleClickCancelModal = () => {
        this.setState({
            openCancelModal: !this.state.openCancelModal,
        });
    };
    handleClickchangeConfirmModal = () => {
        this.setState({
            openChangePlanModal: !this.state.openChangePlanModal,
            openDeleteModal: false
        });

        if (this.state.plan_id) {
            this.props.changeSubscription({ plan_id: this.state.plan_id });
        }
    };
    render() {
        const { classes, isMyAccount, formData } = this.props;

        let myAccountCurrentPlan;
        if (isMyAccount) {
            myAccountCurrentPlan = staticData.allBuyerPlans.find(item => item.name === formData["current_plan_id"]).id;
        }
        let isMyaccountCurrentPlan = (planId) => {
            let isCurrentPlan = false
            staticData.allBuyerPlans.forEach(plan => {
                if (plan.name === formData["current_plan_id"]) {
                    isCurrentPlan = planId === plan.id;
                }
            });
            return isCurrentPlan;
        };
        let isCurrentPlan = (planId) => { return this.props.formData["plan"] === planId.toString() }

        let planBoxClasses = (planId) => `${classes.planBox} ${((!isMyAccount && isCurrentPlan(planId)) || (isMyAccount && isMyaccountCurrentPlan(planId))) ? ' selected' : ''} `
        let isDesktopView = window.matchMedia("(min-width: 1025px)").matches;

        const plans = [
            <div className={planBoxClasses(1)}>
                <div className={classes.planHeadingContainer}>
                    <Typography variant={'h4'} className={classes.planHeading}>BASIC INVESTOR</Typography>
                    <Typography className={classes.planSubHeading}>For first-time Home Buyers<br/> and New Investors</Typography>
                </div>
                <div className={classes.planImg}>
                    <img src={basicPlan} alt="" />
                </div>
                <div className={classes.planDiscription}>
                    <div className={classes.planPrice}>
                        <span className={classes.priceSymbol}>$</span>
                        <span className={classes.priceMain}>24</span>
                        <span className={classes.priceDot}>.</span>
                        <span className={classes.priceDecimals}>97</span>
                        <span className={classes.priceTenor}>
                            <span className={classes.priceCondition}>*</span>
                            <span className={classes.priceDuration}>/month</span>
                        </span>
                    </div>
                    <List component='ul' className={classes.listChecks}>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>7 Days Early Access<br /> to Off-Market Listings ahead of the Market<SellerBailoutTooltip tooltipContent={ListingAccess()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Set 3 Preferences <SellerBailoutTooltip tooltipContent={preferences()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Shortlist Favorites <SellerBailoutTooltip tooltipContent={favorities()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Unlimited Access with<br /> full property, notes,<br/> and contact details</span>
                        </ListItem>
                    </List>
                </div>
                {isMyAccount ?
                    <Button name="plan" value="1" disabled={isMyaccountCurrentPlan(1)} color={`${isMyaccountCurrentPlan(1) ? "primary" : "transparent"}`} size="lg" className={classes.btn} onClick={this.handleClickDeleteModal}>{isMyaccountCurrentPlan(1) ? "Current" : "Change"}</Button>
                    :
                    <Button name="plan" value="1" color={`${isCurrentPlan(1) ? "primary" : "transparent"}`} size="lg" className={classes.btn} onClick={this.props.handleChange}>{isCurrentPlan(1) ? "selected" : "Choose"}</Button>
                }
            </div>
            , <div className={planBoxClasses(2)}>
                <div className={classes.planHeadingContainer}>
                    <Typography variant={'h4'} className={classes.planHeading}>PREFERRED INVESTOR</Typography>
                    <Typography className={classes.planSubHeading}>For active Investors and<br/> often All Cash Buyers </Typography>
                </div>
                <div className={classes.planImg}>
                    <img src={prefeeredPlan} alt="" />
                </div>
                <div className={classes.planDiscription}>
                    <div className={classes.planPrice}>
                        <span className={classes.priceSymbol}>$</span>
                        <span className={classes.priceMain}>149</span>
                        <span className={classes.priceDot}>.</span>
                        <span className={classes.priceDecimals}>97</span>
                        <span className={classes.priceTenor}>
                            <span className={classes.priceCondition}>*</span>
                            <span className={classes.priceDuration}>/month</span>
                        </span>
                    </div>
                    <List component='ul' className={classes.listChecks}>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>14 Days Early Access<br /> to Off-Market Listings ahead of the Market<SellerBailoutTooltip tooltipContent={ListingAccess()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Unlimited Preferences <SellerBailoutTooltip tooltipContent={preferences()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-plus-circular"></i>
                            </span>
                            <span>Plus everything in the<br /> Basic Investor plan</span>
                        </ListItem>
                    </List>
                </div>
                {isMyAccount ?
                    <Button name="plan" value="2" disabled={isMyaccountCurrentPlan(2)} color={`${isMyaccountCurrentPlan(2) ? "transparent" : "primary"}`} outline="true" size="lg" className={classes.btn} onClick={this.handleClickDeleteModal}>{isMyaccountCurrentPlan(2) ? "Current" : "Change"}</Button>
                    :
                    <Button name="plan" value="2" color={`${isCurrentPlan(2) ? "primary" : "transparent"}`} outline="true" size="lg" className={classes.btn} onClick={this.props.handleChange}>{isCurrentPlan(2) ? "selected" : "Choose"}</Button>
                }
            </div>
            , <div className={planBoxClasses(3) + ' firstMover'}>
                <div className={classes.planHeadingContainer}>
                    <Typography variant={'h4'} className={classes.planHeading}>FIRST-MOVER INVESTOR</Typography>
                    <Typography className={classes.planSubHeading}>For Institutional and<br/> Professional Investors</Typography>
                </div>
                <div className={classes.planImg}>
                    <img src={firstMoverPlan} alt="" />
                </div>
                <div className={classes.planDiscription}>
                    <div className={classes.planPrice}>
                        <span className={classes.priceSymbol}>$</span>
                        <span className={classes.priceMain}>998</span>
                        <span className={classes.priceDot}>.</span>
                        <span className={classes.priceDecimals}>97</span>
                        <span className={classes.priceTenor}>
                            <span className={classes.priceCondition}>*</span>
                            <span className={classes.priceDuration}>/month</span>
                        </span>
                    </div>
                    <List component='ul' className={classes.listChecks}>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>21 Days Early Access<br /> to Off-Market Listings ahead of the Market<SellerBailoutTooltip tooltipContent={ListingAccess()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Unlimited Preferences<SellerBailoutTooltip tooltipContent={preferences()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-plus-circular"></i>
                            </span>
                            <span>Plus everything in the<br /> Preferred Investor plan</span>
                        </ListItem>
                    </List>
                </div>
                <div onClick={this.props.handleChange}>
                    {isMyAccount ?
                        <Button name="plan" value="3" disabled={isMyaccountCurrentPlan(3)} color={`${isMyaccountCurrentPlan(3) ? "primary" : "transparent"}`} outline="true" size="lg" className={classes.btn} onClick={this.handleClickDeleteModal}>{isMyaccountCurrentPlan(3) ? "Current" : "Change"}</Button>
                        :
                        <Button name="plan" value="3" color={`${isCurrentPlan(3) ? "primary" : "transparent"}`} outline="true" size="lg" className={classes.btn} >{isCurrentPlan(3) ? "selected" : "Choose"}</Button>
                    }
                </div>
            </div>
        ];

        isMyAccount && plans.push(
            <div className={planBoxClasses(2) + ' hasOffer'}>
                <div className={classes.planHeadingContainer}>
                    <Typography variant={'h4'} className={classes.planHeading}>BASIC INVESTOR</Typography>
                    <Typography className={classes.planSubHeading}>For first-time Home Buyers and New Investors</Typography>
                </div>
                <div className={classes.planImg}>
                    <img src={basicPlan} alt="" />
                </div>
                <div className={classes.planDiscription}>
                    <div className={classes.planPrice}>
                        <span className={classes.priceSymbol}>$</span>
                        <span className={classes.priceMain}>225</span>
                        {/* <span className={classes.priceDot}>.</span>
                                <span className={classes.priceDecimals}>99</span> */}
                        <span className={classes.priceTenor}>
                            <span className={classes.priceCondition}>*</span>
                            <span className={classes.priceDuration}>/year</span>
                        </span>
                    </div>
                    <List component='ul' className={classes.listChecks}>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>See ALL Listings and <br />New Pre-MLS Listings ahead of the Market <SellerBailoutTooltip tooltipContent={ListingAccess()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Set 3 Preferences <SellerBailoutTooltip tooltipContent={preferences()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Shortlist Favorites <SellerBailoutTooltip tooltipContent={favorities()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Unlimited Access with<br /> full property, notes,<br/> and contact details</span>
                        </ListItem>
                    </List>
                </div>
                <Button name="plan" value="4" disabled={isMyaccountCurrentPlan(2)} color={`${isMyaccountCurrentPlan(4) ? "primary" : "transparent"}`} size="lg" className={classes.btn} onClick={this.handleClickDeleteModal}>{isMyaccountCurrentPlan(4) ? "Current" : "Change"}</Button>
            </div>
            , <div className={planBoxClasses(4) + ' hasOffer'}>
                <div className={classes.planHeadingContainer}>
                    <Typography variant={'h4'} className={classes.planHeading}>PREFERRED INVESTOR</Typography>
                    <Typography className={classes.planSubHeading}>For active Investors and often All Cash Buyers </Typography>
                </div>
                <div className={classes.planImg}>
                    <img src={prefeeredPlan} alt="" />
                </div>
                <div className={classes.planDiscription}>
                    <div className={classes.planPrice}>
                        <span className={classes.priceSymbol}>$</span>
                        <span className={classes.priceMain}>1,350</span>
                        {/* <span className={classes.priceDot}>,</span>
                                <span className={classes.priceMain}>350</span> */}
                        <span className={classes.priceTenor}>
                            <span className={classes.priceCondition}>*</span>
                            <span className={classes.priceDuration}>/year</span>
                        </span>
                    </div>
                    <List component='ul' className={classes.listChecks}>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>7 Days Early Access<br /> to Off-Market Listings before Basic Investor <SellerBailoutTooltip tooltipContent={ListingAccess()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-check-filled"></i>
                            </span>
                            <span>Unlimited Preferences <SellerBailoutTooltip tooltipContent={preferences()} /></span>
                        </ListItem>
                        <ListItem component='li' className={classes.listChecksItem}>
                            <span>
                                <i className="sb-icon-plus-circular"></i>
                            </span>
                            <span>Plus everything in the<br /> Basic Investor plan</span>
                        </ListItem>
                    </List>
                </div>
                <Button name="plan" value="5" disabled={isMyaccountCurrentPlan(4)} color={`${isMyaccountCurrentPlan(5) ? "transparent" : "primary"}`} outline="true" size="lg" className={classes.btn} onClick={this.handleClickDeleteModal}>{isMyaccountCurrentPlan(5) ? "Current" : "Change"}</Button>
            </div>
        )

        return (
            <div className={classes.container}>
                <Grid className={'form-wrapper-box'}>
                    <Grid container
                        className="form__heading-wrapper"
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        <Grid item xs={12} sm={6} lg={6}>
                            <Typography className="form__heading" noWrap>
                                {isMyAccount ? "CURRENT PLAN" : "PLAN TYPE"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <Typography className="form__sub-heading" color="primary" noWrap>
                                Select One.
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className={classes.planSpace}></div>
                    <Grid container spacing={32} className="space-reset">
                        <Grid item xs={12} sm={12} lg={12} className={classes.planSliderWrapper}>
                            <AliceCarousel buttonsDisabled={true}
                                responsive={this.responsive}
                                className={classes.planSlider}
                                dotsDisabled={isDesktopView && !isMyAccount}
                                startIndex={isMyAccount ? myAccountCurrentPlan - 1 : 0}
                                items={plans}
                                // style={{marginBottom: !isDesktopView?'20px':'0'}}
                            />

                            {isMyAccount &&
                                <div className={classes.selectedPlanTextDetailWrapper}>
                                    <div className={classes.selectedPlanTextDetail}>
                                        <div className={classes.detailHeading}>BILLING PERIOD</div>
                                        <div className={classes.detailText}>Monthly</div>
                                    </div>
                                    <div className={classes.selectedPlanTextDetail}>
                                        <div className={classes.detailHeading}> AUTO-RENEWS</div>
                                        <div className={classes.detailText}>April 12, 2018</div>
                                    </div>
                                    <div className={classes.selectedPlanTextDetail}>
                                        <div className={classes.detailHeading}>TOTAL</div>
                                        <div className={classes.detailText}>$998.98 <span>(TAXES: $123.45)</span></div>
                                    </div>
                                    <div className={classes.divider}></div>
                                    <div className={classes.staticTextWrap}>
                                        <div className={classes.staticTexthead}>CANCEL PLAN</div>
                                        <div className={classes.staticText}>
                                            It is best to change plans than to cancel a plan. If you cancel plan, previous charges will not be refunded and you will lose login credentials and marketplace access, including any saved data such as favorites, preferences and alerts. Please note you will need to create a new account to regain access in the future.
                                    </div>
                                    </div>

                                    <div className={classes.planChangeBtnWrapper}>
                                        <Button name="cancelPlan" onClick={this.handleClickCancelModal} color={"transparent"} outline="true" size="lg" className={classes.btn}>Cancel plan</Button>
                                    </div>
                                </div>
                            }
                            {!isMyAccount && <Typography className={classes.condition}>* Plus Applicable Taxes.</Typography>}

                        </Grid>
                    </Grid>

                </Grid>

                <Dialog
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
                                <Button color="primary" size="lg" onClick={this.handleClickDeleteModal} className={classes.buttonCancel}>Cancel</Button>
                                <Button color="primary" size="lg" onClick={this.handleClickchangeConfirmModal} className={classes.buttonChangePlan}>Change Plan</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog
                    scrollBody
                    onClose={this.handleClickchangeConfirmModal}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.openChangePlanModal} className={classes.planChangedModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickchangeConfirmModal}>

                    </DialogTitle>
                    <DialogContent className={classes.customModalContent}>
                        <div className={classes.changedSuccessMsg}>
                            Plan change confirmed.
                                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog
                    scrollBody
                    onClose={this.handleClickCancelModal}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.openCancelModal} className={classes.calcelPlandModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickCancelModal}>

                    </DialogTitle>
                    <DialogContent className={classes.customModalContent}>
                        <div className={classes.deleteFavInfo}>
                            <Typography variant="h3">Are you sure you want <br />to cancel your plan?</Typography>
                            <p>You will lose all your Data, Settings<br />and Marketplace Access.</p>
                            <div className={classes.favAction}>
                                <a onClick={this.handleConfirmCancelPlan} className={classes.btnYes}>Yes</a>
                                <a onClick={this.handleClickUncancelModal} className={classes.btnNo}>No</a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog
                    scrollBody
                    onClose={this.handleClickUncancelModal}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.openUncancelPlanModal} className={classes.PlanSetCalcelModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickUncancelModal}>

                    </DialogTitle>
                    <DialogContent className={classes.customModalContent}>
                        <div className={classes.setCancelInfo}>
                            <Typography variant="h3">Your plan is set to cancel on:</Typography>
                            <Typography variant="h2">May 11, 2018</Typography>
                            <p>After this day you will no longer<br />be billed for the service, nor have <br />access to your login credentials.</p>
                            <div className={classes.chnagePlanSet}>
                                <Button onClick={this.handleClickUncancelModal} className={classes.chnagePlanbtn}>Change Plan</Button>
                                <Button onClick={this.handleUncancelClick} className={classes.unchangePlanbtn}>Uncancel Plan</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog
                    scrollBody
                    onClose={this.handleUncancelClick}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.openConfirmUncancelPlanModal} className={classes.planUncancelModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleUncancelClick}>

                    </DialogTitle>
                    <DialogContent className={classes.customModalContent}>
                        <div className={classes.changedUncancelMsg}>
                            Your plan is uncanceled.
                                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog
                    scrollBody
                    onClose={this.handleConfirmCancelPlan}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.openConfirmCancelPlanModal} className={classes.planCanceledModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleConfirmCancelPlan}>

                    </DialogTitle>
                    <DialogContent className={classes.customModalContent}>
                        <div className={classes.canceledPlanMsg}>
                            <Typography variant="h2">Your plan is canceled.</Typography>
                            <p>please create a new account to<br />regain access to the service.</p>
                        </div>
                    </DialogContent>
                </Dialog>

            </div >
        )
    }
}

export default withStyles(buyerStyle)(BuyerPlan);