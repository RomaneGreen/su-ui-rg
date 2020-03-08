import React from "react";
import { Typography, Grid } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider'
import Button from "../uiComponent/CustomButtons/Button";

import SellerBailoutTooltipAlt from '../common/sellerBailoutTooltipAlt';
import { FeaturedListing } from '../user/tooltips/alertsTooltips';


const styles = theme => ({
    container: {
        
    },
    root: {
        
    },
    savedContent:{
        '& h3':{
            fontSize: '34px',
            color: '#0d83dd',
            lineHeight: '36px',
            fontWeight: '700',
            marginBottom: '14px',
            textAlign: 'center'
        },
        '& h4':{
            fontSize: '30px',
            color: '#101010',
            lineHeight: '36px',
            fontWeight: '500',
            marginBottom: '26px',
            textAlign: 'center'
        },
    },
    unsubscribeSec:{
        padding: '58px 0',
    },
    boxContainer:{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'left',
    },
    form__heading: {
        color: '#8a8a8a',
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '1.04',
        textTransform: 'uppercase',
        paddingLeft: 3
    },
    panelMain: {
        width: '100%',
        [theme.breakpoints.down("xs")]: {
          boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        },
      },
      panelWrapperBox: {
        padding: '38px 33px 44px',
        background: '#fff',
        marginBottom: '44px !important',
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        width: '100%',
        '& + &': {
          [theme.breakpoints.down("xs")]: {
            borderTop: '1px solid #e8e8e8'
          },
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: '0 !important',
          boxShadow: 'none',
          padding: '24px 20px',
        },
        '&:last-of-type': {
          marginBottom: '44px !important',
          [theme.breakpoints.down("xs")]: {
            marginBottom: "30px !important",
          },
        }
      },
      colorBoxContainer: {
        marginLeft: -15,
        marginRight: -15,
        justifyContent: 'flex-start',
        width: 'auto'
      },
      alertSettingContainer: {
        justifyContent: 'flex-start',
        width: 'auto',
        marginTop: 39,
      },
      alertSettingWrapper: {
        flexWrap: 'wrap',
        borderRadius: 5,
        border: '1px solid #ececec',
        marginBottom: 23,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        '&:last-child': {
          marginBottom: 0
        }

      },
      alertDetails: {
        borderRight: '1px solid #ececec',
          padding: '34px 20px 20px',
        backgroundColor: '#faf8f8',
        [theme.breakpoints.down("sm")]: {
          borderRight: 'none',
        },
      },
      colorBoxBlock: {
        marginTop: 35,
        paddingLeft: 15,
        paddingRight: 15,
        position: 'relative',
      },
      alertControlWrapper: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
          height: '98px',
        },
      },
      alertPrefrence: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRight: '1px solid #ececec',
        color:'#181818',
        fontSize: 14,
        lineHeight: '1',
        fontWeight: '500',
        padding: 10,
          textTransform:'uppercase',
        '& label':{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column-reverse',
          justifyContent: 'center',
          flexWrap: 'wrap',
          color:'#181818',
          fontSize: 14,
          lineHeight: '1',
          fontWeight: '500',
          '& [type="radio"]':{
            width:0,
            height: 0,
            overflow: 'hidden',
            visibility: 'hidden',
            opacity: 0,
            margin: 0,
          '& + span':{
            position: 'relative',
          },
           '& + span:after':{
             content: '""',
             borderRadius: '100%',
             width: 15,
             height: 15,
             background: '#fff',
             border:'5px solid #0166ff',
            display: 'block',
            margin:'15px auto 0'
           },
           '&:checked + span:before':{
            // content: '""',
            // borderRadius: '100%',
            // width: 12,
            // height: 12,
            // background: '#0166ff',
            // display: 'block',
            // margin:'15px auto 0',
            // position: 'absolute',
            // bottom: 9,
            // left: '50%',
            // transform: 'translateX(-50%)'
          }
          },
        },
        '& div[class*="tooltipContainer"]':{
          display: 'inline-flex',
          alignSelf: 'flex-end',
          marginTop: '-20px',
          marginBottom: '10px',
          '& i':{
            color:'#8b8b8b'
          }
        }
      },
    alertControls: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    borderRight: '1px solid #ececec',
    '&:last-child':{
        borderRight: 'none'
    }
    },
    alertCheckboxBtn: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    cursor: 'pointer',
    '& [type="checkbox"]':{
        width:0,
        height: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        opacity: 0,
        margin: 0,
    },
    '& i':{
        color:'#a5a5a5',
        fontSize: 45,
        paddingTop: 6
    },
    '& span':{
        width:'100%',
        textAlign: 'center',
        color:'#a5a5a5',
        fontSize: 17,
        fontWeight: '700',
        marginTop: 8,
        lineHeight: '1'
    },
    '&.active': {
        backgroundColor: '#e8f9df',
        '& span, & i':{
        color:'#97c481',
        },
    }
    },
    btnNext:{
    fontSize: '20px',
    fontWeight: '900',
    color: '#fff',
    height: '63px',
    lineHeight: '30px',
    borderRadius: '4px',
    background: '#0d83dd',
    minWidth: '161px',
    margin: '100px auto 0 auto',
    display: 'block',
    '&:hover':{
        background: '#0d83dd',
        color: '#fff',
    },
    '&:focus':{
        background: '#0d83dd',
        color: '#fff',
    },
    },
    alertHeading:{
    color: '#181818',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8
    },
    alertDetailText:{
    color: '#7e7e7e',
    fontSize: 14,
    fontWeight: '700',
        height:'36px',
        paddingRight: 40,
        lineHeight:'18px'
    },
    slider: {
    padding: '14px 20px 0',
    alignItems: 'center',
    maxWidth: 205,
    margin: '0 auto',
    '& button':{
        borderRadius: '100%',
        width: 25,
        height: 25,
        background: '#fff',
        border:'5px solid #0166ff',
        display: 'block',
    },
    '& [class*="trackBefore"]':{
        background: '#c9c9c9',
        height: 5,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        top: '5px !important',
    },
    '& [class*="trackAfter"]':{
        background: '#c9c9c9',
        height: 5,
        opacity: 1,
        position: 'relative',
        alignItems: 'center',
    }
    },
    thumbIcon: {
    borderRadius: '50%',
    },
    thumbIconWrapper: {
    backgroundColor: '#fff',
    },
    sliderPoint:{
    display: 'flex',
    maxWidth: '205px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    '& span':{
        display: 'inline-flex',
        color: '#000000',
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
        position: 'relative',
        '&:after':{
        borderRadius: 4,
        width: 7,
        height: 16,
        backgroundColor: "#c9c9c9",
        position: 'absolute',
        bottom: -27,
        left: '50%',
        transform: 'translateX(-50%)',
        content: "''",
        }
    } 
    },
    saveBtnGreen:{
        backgroundColor: "#33b712",
        width: '100%',
        maxWidth: '410px',
        margin: '0 auto',
        display: 'flex',
        height: '68px',
        fontSize: '20px',
        fontWeight: '700',
        '&:hover':{
            backgroundColor: "#259803",
        }
    }
});

class EmailSetting extends React.Component {
    state = {
        value: 0,
        siderValueFeatures: 2,
        siderValueFavorites: 2,
        siderValueBlogs: 2
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleCheckbox = (event) => {
        console.log("check", event.target.checked);
        this.setState({ [event.target.id]: event.target.checked })
    }

    handleSliderChangeFeaturedListing = (event, siderValueFeatures) => {
        this.setState({ siderValueFeatures });
    };

    handleSliderChangeFavorites = (event, siderValueFavorites) => {
        this.setState({ siderValueFavorites });
    };

    handleSliderChangeBlogs = (event, siderValueBlogs) => {
        this.setState({ siderValueBlogs });
    };
    
    render() {
        const { classes } = this.props;
        const { siderValueFeatures, siderValueFavorites, siderValueBlogs  } = this.state;
        return (
            <div className={classes.unsubscribeSec}>
                <div className={classes.container}>
                    <div className={classes.boxContainer}>
                        <div className={classes.savedContent}>
                            <Typography variant="h3">Update email settings for:</Typography>
                            <Typography variant="h4">shilenamin@gmail.com</Typography>
                        </div>
                        <div className={classes.panelMain}>
                            <Grid className={classes.panelWrapperBox}>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="left">
                                    <Grid item xs={12} sm={12} lg={12}>
                                        <Typography className={classes.form__heading} noWrap>
                                            ALERTS & EMAIL SETTINGS
                                        </Typography>
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
                                                <label className={classes.alertCheckboxBtn + (this.state.newsletterSms ? " active" : "")}>
                                                    <input type='checkbox' id='newsletterSms' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mobile-chat"></i>
                                                    <span>{this.state.newsletterSms ? "ON" : "OFF"}</span>
                                                </label>
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.newsletterEmail ? " active" : "")}>
                                                    <input type='checkbox' id='newsletterEmail' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mail-solid"></i>
                                                    <span>{this.state.newsletterEmail ? "ON" : "OFF"}</span>
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
                                                <label className={classes.alertCheckboxBtn + (this.state.newsletterSms1 ? " active" : "")}>
                                                    <input type='checkbox' id='newsletterSms1' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mobile-chat"></i>
                                                    <span>{this.state.newsletterSms1 ? "ON" : "OFF"}</span>
                                                </label>
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.newsletterEmail1 ? " active" : "")}>
                                                    <input type='checkbox' id='newsletterEmail1' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mail-solid"></i>
                                                    <span>{this.state.newsletterEmail1 ? "ON" : "OFF"}</span>
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
                                                ></Slider>
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.featured ? " active" : "")}>
                                                    <input type='checkbox' id='featured' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mobile-chat"></i>
                                                    <span>{this.state.featured ? "ON" : "OFF"}</span>
                                                </label>
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.featuredEmail ? " active" : "")}>
                                                    <input type='checkbox' id='featuredEmail' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mail-solid"></i>
                                                    <span>{this.state.featuredEmail ? "ON" : "OFF"}</span>
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
                                                />
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.favoritesSms ? " active" : "")}>
                                                    <input type='checkbox' id='favoritesSms' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mobile-chat"></i>
                                                    <span>{this.state.favoritesSms ? "ON" : "OFF"}</span>
                                                </label>
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.favoritesEmail ? " active" : "")}>
                                                    <input type='checkbox' id='favoritesEmail' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mail-solid"></i>
                                                    <span>{this.state.favoritesEmail ? "ON" : "OFF"}</span>
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
                                                />
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " mobile"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.blogSms ? " active" : "")}>
                                                    <input type='checkbox' id='blogSms' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mobile-chat"></i>
                                                    <span>{this.state.blogSms ? "ON" : "OFF"}</span>
                                                </label>
                                            </Grid>
                                            <Grid item xs={6} sm={3} lg={3} className={classes.alertControls + " email"}>
                                                <label className={classes.alertCheckboxBtn + (this.state.blogEmail ? " active" : "")}>
                                                    <input type='checkbox' id='blogEmail' onChange={this.handleCheckbox} />
                                                    <i className="sb-icon-mail-solid"></i>
                                                    <span>{this.state.blogEmail ? "ON" : "OFF"}</span>
                                                </label>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Button className={classes.saveBtnGreen}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(EmailSetting); 