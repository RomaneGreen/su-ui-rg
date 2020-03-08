import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, FormControl } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import SellerBailoutTooltip from '../common/sellerBailoutTooltip';
import { profileTooltips } from "./tooltips/profileTooltips";
import Button from "../uiComponent/CustomButtons/Button";

import buyer1 from '../../assets/images/buyer-profile-1.png';
import buyer2 from '../../assets/images/buyer-profile-2.png';
import buyer3 from '../../assets/images/buyer-profile-3.png';
import buyer4 from '../../assets/images/buyer-profile-4.png';
import buyer5 from '../../assets/images/buyer-profile-5.png';
import buyer6 from '../../assets/images/buyer-profile-6.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 0,
        margin: 'auto',
        maxWidth: 500,
        border: '#8a8a8a solid 2px',
        boxShadow: ' 0 5px 10px rgba(151, 151, 151, 0.2)',
        borderRadius: 6,
        '&.selected': {
            borderColor: '#296bcf'
        }
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        overflow: 'hidden',
        borderRadius: '0 0 4px',
        paddingTop: '2px'
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    profileBox: {

    },
    profileName: {
        fontWeight: '500',
        fontSize: 19,
        color: '#296bcf',
        width: '100%',
        margin: '10px auto 11px',
        textAlign: 'center',
        lineHeight: '24px'
    },
    profileType: {
        fontWeight: '500',
        fontSize: 14,
        color: '#339ad0',
        width: '100%',
        margin: '10px auto',
        lineHeight: '1',
        textAlign: 'center',
        textTransform: 'uppercase',
        "& i": {
            color: '#8b8b8b',
            fontSize: 15,
            lineHeight: '14px',
            marginLeft: 7
        }
    },
    profileInfo: {
        padding: '18px 0 15px 22px !important',
        [theme.breakpoints.down("xs")]: {
            padding: '15px 0 15px 21px !important',
        },
    },
    profileTxt: {
        width: '100%',
        textAlign: 'center',
        '& i': {
            color: '#8b8b8b'
        }
    },
    fullWidth: {
        width: '100%'
    },
    panelMain: {
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        [theme.breakpoints.down("xs")]: {
            '&:not(.panelMainMyaccount)':{
                boxShadow: '0 5px 20px rgba(128,128,128,.3)',
            },
            '&.panelMainMyaccount':{
                '& .lastWrapper > div > div:first-child':{
                    marginBottom: 30,
                    '& > div:last-child':{
                        display: 'none'
                    },
                    '& > div > div':{
                        paddingRight: 0
                    }
                },
                '& + div > div':{
                    padding: '24px 20px !important',
                    '& div[class*="expansionPanelSummaryAS"]':{
                        marginBottom: 30,
                        '& [class*="MuiExpansionPanelSummary-expanded"] > div':{
                            paddingRight: 0
                        },
                        '& [class*="MuiExpansionPanelSummary-expanded"] + div':{
                            display: 'none',
                        }
                    }
                }
            },
            '&.panelMainMyaccountPlain':{
                marginBottom: -40,
                '& + div > div':{
                    marginBottom: '0 !important',
                    padding: '24px 20px',
                    '&:last-child':{
                        marginBottom: '40px !important',
                    }
                }
            }
        },
    },
    panelWrapperBox: {
        padding: '38px 36px 50px',
        background: '#fff',
        marginBottom: '40px !important',
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        width: '100%',
        '& + &': {
            [theme.breakpoints.down("xs")]: {
                borderTop: '1px solid #e8e8e8',
            },
        },
        '&:last-of-type': {
            marginBottom: '40px !important',
            [theme.breakpoints.down("xs")]: {
                position: 'relative',
                zIndex: 1,
                borderBottom: '1px solid #e8e8e8',
            },
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '0 !important',
            boxShadow: 'none',
            padding: '24px 20px',
        },
        '&.lastWrapper': {
            paddingBottom: '20px !important'
        }
    },
    expansionPanelAS: {
        padding: 0,
        backgroundColor: 'transparent',
        margin: 0,
        boxShadow: 'none',
    },
    expansionPanelSummaryAS: {
        padding: 0,
        backgroundColor: 'transparent',
        margin: 0,
        minHeight: 'auto !important',
        '&> div:first-child': {
            margin: 0,
            '&> div:last-child': {
                [theme.breakpoints.up("sm")]: {
                    paddingRight: 0
                },
            }
        },
        '&> div:last-child': {
            display: 'none',
            [theme.breakpoints.down("xs")]: {
                display: 'block',
                padding: 0,
                right: 0,
                fontSize: 17,
            },
        },
        '& .form__heading': {
            color: '#8a8a8a',
            fontSize: '22px',
            fontWeight: '500',
            textTransform: 'uppercase',
            lineHeight: '1.04',
            [theme.breakpoints.down("xs")]: {
                fontSize: '16px',
            },
        },
        "& .form__sub-heading": {
            textAlign: 'right',
            fontSize: '14px',
            fontWeight: '500',
            [theme.breakpoints.down("xs")]: {
                textAlign: 'left',
                fontSize: '12px',
                marginTop: '5px'
            },
        }
    },
    expansionPanelDetailsAS: {
        padding: 0,
        backgroundColor: 'transparent',
        margin: 0,
        flexWrap: 'wrap',
        [theme.breakpoints.up("sm")]: {
            marginTop: 46
        },
        '& .form__sub-heading': {
            marginBottom: 40
        }
    },
    cutomInputGridWrapper: {
        margin: '-19px -25px !important',
        [theme.breakpoints.down("xs")]: {
            margin: '-12px -25px !important'
        },

    },
    cutomInputGrid: {
        padding: '19px 25px !important',
        [theme.breakpoints.down("xs")]: {
            padding: '12px 25px !important'
        },
        '& .radio-container': {
            margin: '29px auto 96px',
        }
    },
    sbIconPanelSuccess: {
        fontFamily: ' "SB-icon" !important',
        '&:after': {
            content: '"\\e948"',
            background: '#50a942',
            width: 24,
            fontSize: 14,
            lineHeight: '26px',
            height: 24,
            borderRadius: '100%',
            display: 'block',
            color: '#fff',
            marginRight: '-3px'
        }
    },
    containerMyaccount:{
        paddingRight: '0 !important',
        
        [theme.breakpoints.down("xs")]: {
          marginBottom: 28,
        },
      },
      btnMyAccount:{
        backgroundColor: '#bebbbb',
        fontSize: 18,
        maxWidth: '100%',
        fontWeight: '700',
        padding: '6px 22px',
        [theme.breakpoints.down("xs")]: {
          fontSize: 14,
        },
        "&.save":{
          backgroundColor: '#39b525'
        }
      }

});


class BuyerProfileType extends React.Component {

    render() {
        const { classes, isMyAccount, formData, handleDone, handleChange, handlePanelChange, expanded, validPanels, profileTypeEdit, onClick } = this.props;
        let selectedProfile = null;
        if (formData["profile_type_id"]) {
            selectedProfile = formData["profile_type_id"];
        } else if (formData.buyer) {
            selectedProfile = formData.buyer["profile_type_id"];
        }
        selectedProfile = selectedProfile.toString();

        const RadioContainer = (props) => {
            return (
                <label className="radio-container">
                    <input type="radio" name="profile_type_id" value={props.value} onChange={handleChange} checked={selectedProfile === props.value.toString()} />
                    <span className="radio-checkmark"></span>
                </label>
            )
        };

        return (
            <div className={classes.panelMain + (isMyAccount ? ' panelMainMyaccount' : ' panelMainMyaccountPlain')}>
                <Grid className={classes.panelWrapperBox + ' lastWrapper'}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView ? true : expanded === 'profileType' || isMyAccount} onChange={handlePanelChange('profileType')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={<i className={validPanels.includes("profileType") && expanded !== "profileType" ? classes.sbIconPanelSuccess + ' sb-icon-panel-success' : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                        PROFILE TYPE
                                </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                        <Button name="profileTypeEdit" onClick={onClick}    
                                        className={classes.btnMyAccount + ( profileTypeEdit ? " save": " edit")}>
                                            {profileTypeEdit ? "Save" : "Edit"}{/* change this condition for save/edit text */}
                                        </Button>
                                    </Grid>
                                :
                                <Hidden xsDown>
                                    <Grid item xs={12} sm={6} lg={6}>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                            Select one.
                                        </Typography>
                                    </Grid>
                                </Hidden>
                                }
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                        {!isMyAccount &&
                            <Hidden smUp>
                                <div className={classes.fullWidth}>
                                    <Typography className="form__sub-heading" color="primary" noWrap>
                                        Select one.
                                    </Typography>
                                </div>
                            </Hidden>
                        }
                            <div className={classes.fullWidth}>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Paper name="profile_type_id" value={1} onClick={handleChange} className={`cursor-pointer ${classes.paper} ${selectedProfile === "1" ? ' selected' : ""}`}>
                                            <Grid container spacing={16} >
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={16}>
                                                        <Grid item xs className={classes.profileInfo}>
                                                            <Typography className={classes.profileName}>
                                                                Home<br />Buyer
                                                            </Typography>
                                                            <div className={classes.profileTxt}>
                                                                <span className={classes.profileType}>Personal</span>
                                                                <SellerBailoutTooltip position="top" tooltipText={profileTooltips.homeBuyer} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image} disableRipple>
                                                            <img className={classes.img} alt="complex" src={buyer1} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <RadioContainer value={1} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Paper name="profile_type_id" value={2} onClick={handleChange} className={`cursor-pointer ${classes.paper} ${selectedProfile === "2" ? ' selected' : ""}`}>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={16}>
                                                        <Grid item xs className={classes.profileInfo}>
                                                            <Typography className={classes.profileName}>
                                                                Individual<br />Investor
                                                        </Typography>
                                                            <div className={classes.profileTxt}>
                                                                <span className={classes.profileType}>NON-ACCREDITED</span>
                                                                <SellerBailoutTooltip position="top" tooltipText={profileTooltips.individualInverstor1} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image} disableRipple>
                                                            <img className={classes.img} alt="complex" src={buyer2} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <RadioContainer value={2} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Paper name="profile_type_id" value={3} onClick={handleChange} className={`cursor-pointer ${classes.paper} ${selectedProfile === "3" ? ' selected' : ""}`}>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={16}>
                                                        <Grid item xs className={classes.profileInfo}>
                                                            <Typography className={classes.profileName}>
                                                                Individual<br />Investor
                                                        </Typography>
                                                            <div className={classes.profileTxt}>
                                                                <span className={classes.profileType}>ACCREDITED</span>
                                                                <SellerBailoutTooltip position="top" tooltipText={profileTooltips.individualInverstor2} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image} disableRipple>
                                                            <img className={classes.img} alt="complex" src={buyer3} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <RadioContainer value={3} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Paper name="profile_type_id" value={4} onClick={handleChange} className={`cursor-pointer ${classes.paper} ${selectedProfile === "4" ? ' selected' : ""}`}>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={16}>
                                                        <Grid item xs className={classes.profileInfo}>
                                                            <Typography className={classes.profileName}>
                                                                Small Business<br />Investor
                                                        </Typography>
                                                            <div className={classes.profileTxt}>
                                                                <span className={classes.profileType}>Company</span>
                                                                <SellerBailoutTooltip position="top" tooltipText={profileTooltips.smallBusinessInvestor} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image} disableRipple>
                                                            <img className={classes.img} alt="complex" src={buyer4} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <RadioContainer value={4} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Paper name="profile_type_id" value={5} onClick={handleChange} className={`cursor-pointer ${classes.paper} ${selectedProfile === "5" ? ' selected' : ""}`}>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={16}>
                                                        <Grid item xs className={classes.profileInfo}>
                                                            <Typography className={classes.profileName}>
                                                                Large Business<br />Investor
                                                        </Typography>
                                                            <div className={classes.profileTxt}>
                                                                <span className={classes.profileType}>Company</span>
                                                                <SellerBailoutTooltip position="top" tooltipText={profileTooltips.largeBusinessInvestor} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image} disableRipple>
                                                            <img className={classes.img} alt="complex" src={buyer5} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <RadioContainer value={5} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                        <Paper name="profile_type_id" value={6} onClick={handleChange} className={`cursor-pointer ${classes.paper} ${selectedProfile === "6" ? ' selected' : ""}`}>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={16}>
                                                        <Grid item xs className={classes.profileInfo}>
                                                            <Typography className={classes.profileName}>
                                                                Institutional<br />Investor
                                                        </Typography>
                                                            <div className={classes.profileTxt}>
                                                                <span className={classes.profileType}>Company</span>
                                                                <SellerBailoutTooltip position="top" tooltipText={profileTooltips.institutionalInvestor} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image} disableRipple>
                                                            <img className={classes.img} alt="complex" src={buyer6} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <RadioContainer value={6} />
                                    </Grid>
                                    {window.SB_IsMobileView &&
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth>
                                                <Button color="success" size="lg" className="done_button" onClick={() => handleDone("profileType")}>Done</Button>
                                            </FormControl>
                                        </Grid>
                                    }

                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </div>

        );
    }
}

BuyerProfileType.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuyerProfileType);
