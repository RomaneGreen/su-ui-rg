/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint no-script-url: "off" */
/* eslint no-useless-escape: "off" */
import React from "react";
import { Hidden, List, ListItem, Typography, Grid, FormControl, OutlinedInput, InputLabel } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import propertyDetailStyle from "../../assets/jss/material-kit-react/components/propertyDetail";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { propertyActions, myAcccountActions } from '../../actions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "../uiComponent/CustomButtons/Button";
import userImg from "../../assets/images/profile-avatar-6.png";
import galleryPlaceholder from "../../assets/images/no-img.jpg";
import noFloorPlan from "../../assets/images/no-plan.jpg";
import noVideo from "../../assets/images/no-video.jpg";
import PropertyDetailsTable from "./propertyDetailsTable";
import NoteDetailsTable from "./noteDetailsTable";
import Slider from "react-slick";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import { staticData } from "../../common";
import PropertyIcons from "./propertyIcons";
import { formatMoney } from '../../common/helperMethods';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
} from 'react-share';
import OverlayLoader from "../common/overlayLoader";
import { setTimeout } from "timers";
import { setGoogleMaps } from "../../common/helperMethods";
import {MEDIA_STORAGE_URL} from '../../common/config';

class PropertyDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            CurrentSlide: 1,
            value: 0,
            showListingReferModal: false,
            formData: {},
            referEmailData: {
                "end_user_name": "",
                "message": ""
            }
        };
    }

    componentDidMount() {
        this.props.fetchPropertyDetails(this.props.match.params.id);
        this.props.getBuyerProfileDetails();
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            fetchingPropertyDetails: true
        });
    }

    componentWillReceiveProps(nextProps) {
        nextProps.propertyDetails && this.setState({ fetchingPropertyDetails: false })
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeEmailAgent = (event) => {
        this.setState({
            formData: {
                ...this.state.formData, [event.target.name]: event.target.value,
            },
        });
    };

    openListingRefer = () => {
        this.setState({ showListingReferModal: !this.state.showListingReferModal });
        this.setState({
            referEmailData: {
                ...this.state.referEmailData, "end_user_name": "", "message": ""
            },
        });
        if (this.props.showSuccessRefer) {
            this.props.showSuccessReferModal();
        }
    };

    referEmailListing = () => {
        this.props.referEmailListing(this.state.referEmailData)
    }

    handleChangeReferEmail = (event) => {
        this.setState({
            referEmailData: {
                ...this.state.referEmailData, [event.target.name]: event.target.value,
            },
        });
    }

    handlePreviousArrowClick = () => {
        var slideIndex = this.state.CurrentSlide;
        this.slider2.slickGoTo(slideIndex);
        this.slider1.slickGoTo(slideIndex);
        this.setState({ CurrentSlide: slideIndex - 1 })
        console.log(this.state.CurrentSlide);
    }

    handleNextArrowClick = () => {
        var slideIndex = this.state.CurrentSlide;
        this.slider2.slickGoTo(slideIndex);
        this.slider1.slickGoTo(slideIndex);

        this.setState({ CurrentSlide: slideIndex + 1 })
        console.log(this.state.CurrentSlide);
    }

    getNumberWithOrdinal = (n) => {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    openEmailForm = () => {
        this.props.changeShowEmailForm();
        this.setState({
            formData: {
                ...this.state.formData, "field-contact-info": this.props.propertyDetails.lead_agent.id,
            }
        })
    }

    contactAgent = () => {
        this.props.contactAgent(this.state.formData);
    }

    slider1Change(nextSlideIndex) {
        this.slider2.slickGoTo(nextSlideIndex);
        this.setState({ CurrentSlide: nextSlideIndex + 1 })
    }

    slider2Change(nextSlideIndex) {
        this.slider1.slickGoTo(nextSlideIndex);
        this.setState({ CurrentSlide: nextSlideIndex + 1 })
    }

    setGoogleMapViews(propertyDetails, index) {
        setGoogleMaps(propertyDetails, index);
    }

    getVideo = (propertyDetails) => {
        if (!(propertyDetails.youtube_url && propertyDetails.video_upload)) {
            return <img src={noVideo} alt="" />
        }
        else {
            return propertyDetails.video_type === 2 ?
                <video width="100%" height="auto" controls>
                    <source src={`${MEDIA_STORAGE_URL}/${propertyDetails.video_upload}`} type="video/mp4" />
                </video>
                :
                <iframe width="560" height="315" title="video" src={propertyDetails.youtube_url} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
    }

    render() {
        const { value, fetchingPropertyDetails } = this.state;
        const currentUrl = window.location.href;
        const { classes } = this.props;
        const { propertyDetails } = this.props;

        if (propertyDetails.length === 0 || fetchingPropertyDetails) {
            return <OverlayLoader />
        }

        let photos = [...propertyDetails.photos];
        if (photos.length < 5) {
            for (let i = 0; i < (5 - propertyDetails.photos.length); i++) {
                photos.push(galleryPlaceholder);
            }
        }

        if (!Object.keys(this.state.formData).length && this.props.buyerProfileDetails) {
            this.setState({
                formData: {
                    ...this.state.formData,
                    "field-contact-info": "",
                    "field-name": this.props.buyerProfileDetails.full_name,
                    "field-phone": this.props.buyerProfileDetails.phone,
                    "field-email": this.props.buyerProfileDetails.email,
                    "field-interested": ""
                }
            })
        }

        if (this.props.showEmailSuccess && this.state.formData["field-interested"]) {
            this.setState({ formData: { ...this.state.formData, "field-interested": "" } })
        }

        let FeatureList = propertyDetails.property_features_list &&
            propertyDetails.property_features_list.replace(/\<li\>/g, '')
                .replace('<ul>', '')
                .replace('</ul>', '')
                .split('</li>');
        let propertyFeatureList = undefined;
        if (FeatureList && FeatureList.length > 0) {
            propertyFeatureList = FeatureList.filter(function (el) {
                return el !== "";
            });
        }

        if (this.state.value === 3 || this.state.value === 4 || this.state.value === 5) {
            setTimeout(() => this.setGoogleMapViews(propertyDetails, this.state.value), 1000)
        }

        return (
            <div className={classes.propertyRoot}>
                <div className={classes.propertyContainer}>
                    <Grid container spacing={32}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <div className={classes.backBreadcrumb}>
                                <Link to={`${process.env.PUBLIC_URL}/listing`} className={classes.backButton}><i className="sb-icon-back-solid"></i> Back To Listings</Link>
                                <List component='ul' className={classes.breadcrumbList}>
                                    <ListItem component='li'>
                                        <Link to="">{propertyDetails.state}</Link>
                                    </ListItem>
                                    <ListItem component='li'>
                                        <Link to="">{propertyDetails.city}</Link>
                                    </ListItem>
                                    <ListItem component='li'>
                                        <Link to="">{propertyDetails.zip}</Link>
                                    </ListItem>
                                    <ListItem component='li'>
                                        <Link to="">{propertyDetails.street1}{propertyDetails.street2 && `, #${propertyDetails.street2}`}</Link>
                                    </ListItem>
                                </List>
                                <div className={classes.activeListing}>
                                    {propertyDetails.listing_sales_status.is_active &&
                                        <>Active Listing <span>|</span></>}
                                    <Link to="">CONTRACT OUT</Link>
                                </div>
                            </div>
                            <div className={classes.titleInfo}>
                                <div className={classes.propertyTitle}>
                                    <Typography variant="h5">{propertyDetails.address_title}</Typography>
                                    <Typography variant="h2">{propertyDetails.street1}{propertyDetails.street2 && `, #${propertyDetails.street2}`}</Typography>
                                    <Typography variant="h4">{propertyDetails.city}, {propertyDetails.state} {propertyDetails.zip}
                                        <Link to="" className={classes.propertId}>PROPERTY ID #{propertyDetails.property_id}</Link>
                                    </Typography>
                                </div>
                                <div className={classes.propertyTags}>
                                    {propertyDetails.listing_product_note && propertyDetails.listing_product_note.note_status_id &&
                                        <div className={classes.propertyStatus}>
                                            <span className={`status ${staticData.noteStatus.find(item => { return item.id === propertyDetails.listing_product_note.note_status_id }).class}`}>
                                                {staticData.noteStatus.find(item => { return item.id === propertyDetails.listing_product_note.note_status_id }).label} </span>
                                        </div>}
                                    <PropertyIcons property={propertyDetails} classes={classes} />
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} lg={8}>
                            <div className={classes.productContent}>
                                <div className={classes.socialBox}>
                                    <p className={classes.ShareTitle}>Share</p>
                                    <List component='ul' className={classes.socialList}>
                                        <ListItem component='li' className="circle cursor-pointer">
                                            <FacebookShareButton component='a' url={currentUrl}>
                                                <i className="sb-icon-facebook"></i>
                                            </FacebookShareButton>
                                        </ListItem>                                        
                                        <ListItem component='li' className="circle cursor-pointer">
                                            <TwitterShareButton url={currentUrl}>
                                                <i className="sb-icon-twitter"></i>
                                            </TwitterShareButton>
                                        </ListItem>
                                        <ListItem component='li' className="circle cursor-pointer">
                                            <LinkedinShareButton url={currentUrl}>
                                                <i className="sb-icon-linkedin"></i>
                                            </LinkedinShareButton>
                                        </ListItem>
                                        <ListItem component='li' className="circle cursor-pointer">
                                            <PinterestShareButton url={currentUrl} media={`${MEDIA_STORAGE_URL}/${propertyDetails.photos ? propertyDetails.photos[0].file_name : `listing_files/${propertyDetails.floor_plan}`}`}>
                                                <i className="sb-icon-pintrest"></i>
                                            </PinterestShareButton>
                                        </ListItem>
                                        <ListItem component='li' className="circle cursor-pointer">
                                            <GooglePlusShareButton url={currentUrl}>
                                                <i className="sb-icon-google-plus"></i>
                                            </GooglePlusShareButton>
                                        </ListItem>
                                        <ListItem component='li' className="sm-hidden">
                                            <Link to=""><i className="sb-icon-sub-menu"></i></Link>
                                        </ListItem>
                                        <ListItem component='li' className="sm-hidden">
                                            <Link to="" onClick={() => window.print()} ><i className="sb-icon-printer"></i></Link>
                                        </ListItem>
                                        <ListItem component='li' className="sm-hidden"  >
                                            <a href="javascript:void(0);" onClick={this.openListingRefer}><i className="sb-icon-envelope-alt"></i></a>
                                        </ListItem>
                                    </List>
                                    {/* <Link to="/" className={classes.mobActive}>
                                        <i className="sb-icon-google-plus"></i>
                                    </Link> */}
                                </div>
                                <Dialog
                                    onClose={this.openListingRefer}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.showListingReferModal} className={classes.emailModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.openListingRefer}>
                                        <div className={classes.modalHeader}>
                                            Email This Listing
                                                                    </div>
                                    </DialogTitle>
                                    <DialogContent>
                                        {!this.props.showSuccessRefer ?
                                            <div className={classes.emailForm}>
                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.saleLabel}>For Sale:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <div className={classes.saleAddress}>203-209 11th Street williamsburg, NY 23185</div>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.formLabel}>From:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="name">From</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="memID" name="memID" />
                                                        </FormControl>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="email">Email</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="email" name="email" />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.formLabel}>To:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="name">Name</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="end_user_name" name="end_user_name" value={this.state.referEmailData.end_user_name} onChange={this.handleChangeReferEmail} />
                                                        </FormControl>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="email">Email</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="email" name="email" />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.formLabel}>Message:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9} className={classes.cutomInputGrid}>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="email">I’m interested in...</InputLabel>
                                                            <OutlinedInput multiline value={this.state.referEmailData.message} onChange={this.handleChangeReferEmail}
                                                                rows="10" labelWidth={0} id="message" name="message" />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.submitlabel}>&nbsp;</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <span className={classes.contactBtn} >
                                                            <Button color={"primary"} size="lg" className={classes.btn} onClick={this.referEmailListing}>Send</Button>
                                                        </span>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            :
                                            <div className={classes.emailSent}>
                                                <div className={classes.emailmsg}>
                                                    <div className={classes.emailmsgIcon}>
                                                        <i className="sb-icon-mail-fast"></i>
                                                    </div>
                                                </div>
                                                <div className={classes.emailThanks}>
                                                    <p>Thank You!</p>
                                                    <p>Your message has been sent to:</p>
                                                    <p>{this.state.referEmailData.end_user_name}</p>
                                                </div>
                                            </div>}

                                    </DialogContent>
                                </Dialog>
                                <div className={classes.proTabs}>

                                    <div className={classes.tabBody}>
                                        {value === 0 && <TabContainer>
                                            <div className={classes.tabGallery} id="testingId">
                                                <Slider
                                                    asNavFor={this.state.nav2}
                                                    slidesToShow={1}
                                                    ref={slider => (this.slider1 = slider)}
                                                    beforeChange={(current, next) => this.slider1Change(next)}
                                                >
                                                    {photos.map((photo, index) => (
                                                        <div className="sliderThumb" key={photo.id || index}>
                                                            {photo && typeof photo === 'object' && photo.constructor === Object ?
                                                                <div className="sliderThumbImg"><img alt="" src={`${MEDIA_STORAGE_URL}/${photo.file_name}`} /></div> :
                                                                <div className="sliderThumbImg"><img alt="" src={photo} /></div>
                                                            }
                                                        </div>
                                                    ))}
                                                </Slider>
                                                <p className={classes.SlideCount}>{this.state.CurrentSlide} of {photos.length}</p>
                                                <label className={classes.prorate}>
                                                    <input type="checkbox" /> <span><i className="sb-icon-star-empty"></i></span>
                                                </label>
                                                <Hidden lgUp>
                                                    <div className={classes.socialToggle}>
                                                        <div className={classes.toggleBtn}><a href="javascript:void(0)"><i className="sb-icon-sub-menu"></i></a></div>
                                                        <List component='ul' className={classes.toggleSocialList}>
                                                            <ListItem component='li'>
                                                                <a href="javascript:void(0);" onClick={this.openListingRefer}><i className="sb-icon-envelope-alt"></i></a>
                                                            </ListItem>
                                                            <ListItem component='li'>
                                                                <FacebookShareButton url={currentUrl}>
                                                                    <i className="sb-icon-facebook"></i>
                                                                </FacebookShareButton>
                                                            </ListItem>
                                                            <ListItem component='li'>
                                                                <TwitterShareButton>
                                                                    <i className="sb-icon-twitter"></i>
                                                                </TwitterShareButton>
                                                            </ListItem>                                                            
                                                            <ListItem component='li'>
                                                                <LinkedinShareButton url={currentUrl}>
                                                                    <i className="sb-icon-linkedin"></i>
                                                                </LinkedinShareButton>
                                                            </ListItem>
                                                            <ListItem component='li'>
                                                                <PinterestShareButton url={currentUrl} media={`${MEDIA_STORAGE_URL}/${propertyDetails.photos ? propertyDetails.photos[0].file_name : `listing_files/${propertyDetails.floor_plan}`}`}>
                                                                    <i className="sb-icon-pintrest"></i>
                                                                </PinterestShareButton>
                                                            </ListItem>
                                                            <ListItem component='li'>
                                                                <GooglePlusShareButton url={currentUrl}>
                                                                    <i className="sb-icon-google-plus"></i>
                                                                </GooglePlusShareButton>
                                                            </ListItem>
                                                        </List>
                                                    </div>
                                                </Hidden>
                                            </div>
                                        </TabContainer>}
                                        {value === 1 && <TabContainer>
                                            <div className={classes.tabVideo}>
                                                <div className={classes.tabFrame}>
                                                    <div className={classes.video}>
                                                        {this.getVideo(propertyDetails)}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>}
                                        {value === 2 && <TabContainer>
                                            <div className={classes.tabPlan}>
                                                <div className={classes.tabFrame}>
                                                    <div className={classes.tabImage}>
                                                        {propertyDetails.floor_plan ?
                                                            <img src={`${MEDIA_STORAGE_URL}/${propertyDetails.floor_plan}`} alt="" />
                                                            :
                                                            <img src={noFloorPlan} alt="" />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>}
                                        {value === 3 && <TabContainer>
                                            <div className={classes.tabLocation}>
                                                <div className={classes.tabFrame}>
                                                    <div className={classes.map} id="mapMarker">
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>}
                                        {value === 4 && <TabContainer>
                                            <div className={classes.tabView}>
                                                <div className={classes.tabFrame}>
                                                    <div className={classes.map} id="streetView">
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>}
                                        {value === 5 && <TabContainer>
                                            <div className={classes.tabDirection}>
                                                <div className={classes.tabFrame}>
                                                    <div className={classes.map}>
                                                        <div className={classes.map} id="directions">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>}
                                    </div>
                                    <div className={classes.tabsHead}>
                                        <Tabs value={value} onChange={this.handleChange}>
                                            <Tab icon={<i className="sb-icon-photo-frame"></i>} />
                                            <Tab icon={<i className="sb-icon-play-button"></i>} />
                                            <Tab icon={<i className="sb-icon-floor-plan"></i>} />
                                            <Tab icon={<i className="sb-icon-pin-solid"></i>} />
                                            <Tab icon={<i className="sb-icon-human-marker"></i>} />
                                            <Tab icon={<i className="sb-icon-direction-path"></i>} />
                                        </Tabs>
                                    </div>
                                </div>
                                <div className={classes.slider}>
                                    <Slider
                                        asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        slidesToShow={5}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                        infinite={true}
                                        centerMode={false}
                                        beforeChange={(current, next) => this.slider2Change(next)}
                                    >
                                        {photos.map((photo, index) => (
                                            <div className="sliderThumb" key={photo.id || index}>
                                                {photo && typeof photo === 'object' && photo.constructor === Object ?
                                                    <div className="sliderThumbImg"><img alt="" src={`${MEDIA_STORAGE_URL}/${photo.file_name}`} /></div> :
                                                    <div className="sliderThumbImg"><img alt="" src={photo} /></div>
                                                }
                                            </div>
                                        ))}
                                    </Slider>
                                    {
                                        photos && photos.length === 5 &&

                                        <div className={classes.customSliderArrow}>
                                            <a className={classes.arrowLeft}><i className="sb-icon-left-arrow" onClick={this.handlePreviousArrowClick}></i></a>
                                            <a className={classes.arrowRight}><i className="sb-icon-right-arrow" onClick={this.handleNextArrowClick}></i></a>
                                        </div>
                                    }
                                </div>

                            </div>
                            <Hidden lgUp>
                                <div className={classes.propertyAside}>
                                    <List component='ul' className={classes.socialList}>
                                        <ListItem component='li' className={classes.widget}>
                                            <div className={classes.widgetYellow}>
                                                <div className={classes.widgetHead}>
                                                    <h6>Price</h6>
                                                </div>

                                                <div className={classes.widgetBody}>
                                                    <h4>{formatMoney(propertyDetails.price, 0)}</h4>
                                                </div>
                                            </div>
                                        </ListItem>
                                        <ListItem component='li' className={classes.widget}>
                                            <div className={classes.widgetGrey}>
                                                <div className={classes.timerDays}>
                                                    <div className={classes.widgetTimer}>
                                                        Timer<span>FIRST-MOVER</span>
                                                    </div>
                                                    <div className={classes.widgetDays}>
                                                        Days Left<span>7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListItem>
                                        <ListItem component='li' className={classes.widget}>
                                            <div className={classes.widgetWhite}>
                                                <div className={classes.widgetProfile}>
                                                    <div className={classes.widgetHeadProfile}>
                                                        <Typography variant="h6">Contact Agent</Typography>
                                                    </div>
                                                    <div className={classes.widgetBody}>
                                                        <List component='ul' className={classes.profiles}>
                                                            {/* {propertyDetails.map(property => ( */}
                                                            <ListItem component='li' className={classes.progfileLarge}>
                                                                <div className={classes.profileInner}>
                                                                    <div className={classes.profileImage}>
                                                                        <img src={propertyDetails.lead_agent.profile_image ?
                                                                            `${MEDIA_STORAGE_URL}/listing_files/${propertyDetails.lead_agent.profile_image}` : userImg} alt="" />
                                                                    </div>
                                                                    <div className={classes.profileContent}>
                                                                        <Typography variant="h6">{propertyDetails.lead_agent.full_name}</Typography>
                                                                        <List component='ul' className={classes.contactList}>
                                                                            <ListItem component='li'>
                                                                                <i className="sb-icon-phone-vertical"></i>
                                                                                <Link to="tel:+3104501234">{propertyDetails.lead_agent.work_phone}</Link>
                                                                            </ListItem>
                                                                            <ListItem component='li'>
                                                                                <i className="sb-icon-mobile"></i>
                                                                                <Link to="tel:+2129953600">{propertyDetails.lead_agent.phone}</Link>
                                                                            </ListItem>
                                                                        </List>
                                                                        {!(this.props.showEmailForm || this.props.showEmailSuccess) &&
                                                                            <span className={classes.emailBtn} onClick={() => this.openEmailForm()}>Email Me</span>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </ListItem>
                                                            {/* ))}*/}
                                                        </List>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListItem>
                                    </List>
                                </div>
                            </Hidden>                        
                            <div className={classes.productContent}>
                                <div className={classes.productGroup}>
                                    <Typography variant="h4">Description</Typography>
                                    <div className={classes.productEntry}>{propertyDetails.property_description}</div>
                                </div>
                                {propertyDetails.product_type.id === 2 && <div className={classes.productGroup}>
                                    <h4>Note Details</h4>

                                    <div className={classes.tableBox}>
                                        <NoteDetailsTable property={propertyDetails} />
                                    </div>
                                </div>}

                                <div className={classes.productGroup}>
                                    <h4>Property Details</h4>

                                    <div className={classes.tableBox}>
                                        <PropertyDetailsTable property={propertyDetails} />
                                    </div>
                                </div>

                                <div className={classes.productGroup}>
                                    <h4>Features</h4>
                                    {propertyDetails.property_features_list &&
                                        <div className={classes.productEntry}>
                                            <List component='ul' className={classes.listFeatures}>
                                                {propertyFeatureList.map((feature, index) => (
                                                    <ListItem component='li' key={index} style={{ width: "100%" }}>
                                                        <p>{feature}</p>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </div>
                                    }
                                    {propertyDetails.asset_features &&
                                        <div className={classes.productEntry}>
                                            <List component='ul' className={classes.listFeatures}>
                                                {propertyDetails.asset_features.map(feature => (
                                                    <ListItem component='li' key={feature.id}>
                                                        <p>{feature.asset_feature.name}</p>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </div>
                                    }
                                </div>
                                <div className={classes.backListBtn}>
                                    <Link to={`${process.env.PUBLIC_URL}/listing`}>BACK TO LISTINGS</Link>
                                </div>

                            </div>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={12} sm={12} lg={4}>
                                <div className={classes.propertyAside}>
                                    <List component='ul' className={classes.socialList}>
                                        <ListItem component='li' className={classes.widget}>
                                            <div className={classes.widgetYellow}>
                                                <div className={classes.widgetHead}>
                                                    <h6>Price</h6>
                                                </div>

                                                <div className={classes.widgetBody}>
                                                    <h4>{formatMoney(propertyDetails.price, 0)}</h4>
                                                </div>
                                            </div>
                                        </ListItem>
                                        <ListItem component='li' className={classes.widget}>
                                            <div className={classes.widgetGrey}>
                                                <div className={classes.timerDays}>
                                                    <div className={classes.widgetTimer}>
                                                        Timer<span>FIRST-MOVER</span>
                                                    </div>
                                                    <div className={classes.widgetDays}>
                                                        Days Left<span>7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListItem>
                                        <ListItem component='li' className={classes.widget}>
                                            <div className={classes.widgetWhite}>
                                                <div className={classes.widgetProfile}>
                                                    <div className={classes.widgetHeadProfile}>
                                                        <Typography variant="h6">Contact Agent</Typography>
                                                    </div>
                                                    <div className={classes.widgetBody}>
                                                        <List component='ul' className={classes.profiles}>
                                                            {/* {propertyDetails.map(property => ( */}
                                                            <ListItem component='li' className={classes.progfileLarge}>
                                                                <div className={classes.profileInner}>
                                                                    <div className={classes.profileImage}>
                                                                        <img src={propertyDetails.lead_agent.profile_image ?
                                                                            `${MEDIA_STORAGE_URL}/listing_files/${propertyDetails.lead_agent.profile_image}` : userImg} alt="" />
                                                                    </div>
                                                                    <div className={classes.profileContent}>
                                                                        <Typography variant="h6">{propertyDetails.lead_agent.full_name}</Typography>
                                                                        <List component='ul' className={classes.contactList}>
                                                                            <ListItem component='li'>
                                                                                <i className="sb-icon-phone-vertical"></i>
                                                                                <Link to="tel:+3104501234">{propertyDetails.lead_agent.work_phone}</Link>
                                                                            </ListItem>
                                                                            <ListItem component='li'>
                                                                                <i className="sb-icon-mobile"></i>
                                                                                <Link to="tel:+2129953600">{propertyDetails.lead_agent.phone}</Link>
                                                                            </ListItem>
                                                                        </List>
                                                                        {/* {!this.props.showEmailForm && */}
                                                                        {!(this.props.showEmailForm || this.props.showEmailSuccess) &&

                                                                            <span className={classes.emailBtn} onClick={() => this.openEmailForm()}>Email Me</span>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className={classes.emailForm}>

                                                                    {this.props.showEmailForm &&
                                                                        <Grid container spacing={24}>
                                                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                                                <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                                                    <InputLabel htmlFor="field-contact-info">Member ID</InputLabel>
                                                                                    <OutlinedInput labelWidth={0} id="field-contact-info" name="field-contact-info" disabled
                                                                                        onChange={this.handleChangeEmailAgent} value={this.state.formData["field-contact-info"]} />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                                                <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                                                    <InputLabel htmlFor="field-name">Name</InputLabel>
                                                                                    <OutlinedInput labelWidth={0} id="field-name" name="field-name" disabled
                                                                                        onChange={this.handleChangeEmailAgent} value={this.state.formData["field-name"]} />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                                                <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                                                    <InputLabel htmlFor="field-phone">Phone</InputLabel>
                                                                                    <OutlinedInput labelWidth={0} id="field-phone" name="field-phone"
                                                                                        onChange={this.handleChangeEmailAgent} value={this.state.formData["field-phone"]} />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                                                <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                                                    <InputLabel htmlFor="field-email">Email</InputLabel>
                                                                                    <OutlinedInput labelWidth={0} id="field-email" name="field-email"
                                                                                        onChange={this.handleChangeEmailAgent} value={this.state.formData["field-email"]} />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                                                <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                                                    <InputLabel htmlFor="field-interested">I’m interested in...</InputLabel>
                                                                                    <OutlinedInput multiline rows="3" labelWidth={0} id="field-interested" name="field-interested"
                                                                                        onChange={this.handleChangeEmailAgent} value={this.state.formData["field-interested"]} />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                                                <div className={classes.textCenter}>
                                                                                    <span className={classes.contactBtn} to="">
                                                                                        <Button color={"primary"} size="lg" className={classes.btn} onClick={this.contactAgent}>Send</Button>
                                                                                    </span>
                                                                                </div>
                                                                            </Grid>
                                                                        </Grid>}
                                                                    {this.props.showEmailSuccess
                                                                        && <div className={classes.emailSuccess}>
                                                                            <span className={classes.closeMsg}><i className="sb-icon-popup-close" onClick={this.props.changeEmailSuccess}></i></span>
                                                                            <Typography variant="h5">EMAIL SENT !</Typography>
                                                                            <div className={classes.msgIcon}>
                                                                                <i className="sb-icon-mail-fast"></i>
                                                                            </div>
                                                                            <p>Agent will contact you shortly.</p>
                                                                        </div>}
                                                                </div>
                                                            </ListItem>
                                                            {/* ))} */}
                                                        </List>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListItem>
                                    </List>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>
                </div >
            </div >
        )
    }
}

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: '11px',
    },
    closeButton: {
        position: 'absolute',
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
        cursor: 'pointer',
        [theme.breakpoints.down("xs")]: {
            right: '-16px',
            top: '-16px',
            color: '#fff',
            position: 'absolute',
            background: '#8d8d8d',
            width: '31px',
            height: '31px',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '32px',
            fontSize: '15px',
            cursor: 'pointer'
        }
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
        padding: 0,
        width: '576px',
        [theme.breakpoints.down("xs")]: {
            width: '319px',
        },
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
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


// Please check this method not used anywhere
// const LeftNavButton = (props) => {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className="slick-arrow"
//             style={{ ...style, display: 'block' }}
//             onClick={onClick}
//         >
//             {/* <img src={floorplan} alt="arrow_left"/> */}
//         </div>
//     );
// }

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return {
        ...state.propertyReducer,
        ...state.myAccountReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ ...propertyActions, ...myAcccountActions }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(propertyDetailStyle)(PropertyDetails));