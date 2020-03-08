import React from "react";
import { withStyles, Typography, Hidden, List, ListItem } from "@material-ui/core";
import homeStyle from "../../assets/jss/material-kit-react/components/homeStyle.jsx";
import GridContainer from "../uiComponent/Grid/GridContainer";
import GridItem from "../uiComponent/Grid/GridItem";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

// core components
import Button from "../uiComponent/CustomButtons/Button";

import {intoImg, intoImgSm, repairImg, assetImg1, assetImg2, assetImg3, assetImg4,
        assetImg5, assetImg6, assetImg7, assetImg8, assetImg9, assetImg10, assetImg11,
        assetImg12, userAvtar1, userAvtar2, userAvtar3, userAvtar4} from "../../assets/images";

class home extends React.Component {
    responsive = {
        0: { items: 1 },
        766: { items: 1 },
        767: { items: 2 },
        1024: { items: 2 },
    };
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.homeRoot}>
                <div className={classes.intro}>
                    <div className={classes.container}>
                        <div className={classes.introInner}>
                            <div className={classes.introContent}>
                                <div className={classes.introHead}>
                                    <Typography variant="h2" className={classes.introTitle}>Get Offers Fast.</Typography>
                                    <Typography variant="h4" className={classes.introSubText}>
                                    A new time-sensitive <br/>real estate marketplace.
                                    </Typography>
                                </div>
                                <Hidden mdUp>
                                    <div className={classes.introImage}>
                                        <img src={intoImgSm} alt="" width="333" height="492" />
                                    </div>
                                </Hidden>
                                <div className={classes.introBody}>
                                    <List component='ul' className={classes.listChecks}>
                                        <ListItem component='li' className={classes.listChecksItem}>
                                            <span>
                                                <i className="sb-icon-tick-small"></i>
                                            </span>
                                            <span>Sell AS-IS.</span>
                                        </ListItem>
                                        <ListItem component='li' className={classes.listChecksItem}>
                                            <span>
                                                <i className="sb-icon-tick-small"></i>
                                            </span>
                                            <span>Sell property and loans.</span>
                                        </ListItem>
                                        <ListItem component='li' className={classes.listChecksItem}>
                                            <span>
                                                <i className="sb-icon-tick-small"></i>
                                            </span>
                                            <span>Receive multiple offers.</span>
                                        </ListItem>
                                        <ListItem component='li' className={classes.listChecksItem}>
                                            <span>
                                                <i className="sb-icon-tick-small"></i>
                                            </span>
                                            <span>Move on with life.</span>
                                        </ListItem>
                                    </List>
                                </div>
                                <div className={classes.introActions}>
                                    <div className={classes.callout}>
                                        <p>Get Started :</p>
										<Link className="left-padding" to={`${process.env.PUBLIC_URL}/seller-form`}>
                                            <Button color={"success"} size="lg" className={classes.btn}>SELLER FORM</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Hidden mdDown>
                                <div className={classes.introImage}>
                                    <img src={intoImg} alt="" width="867" />
                                </div>
                            </Hidden>
                        </div>
                    </div>
                </div>
                <div className={classes.main}>
                    <section className={classes.sectionService}>
                        <div className={classes.container}>
                            <GridContainer className={classes.elementCenter}>
                                <Hidden mdUp>
                                    <GridItem xs={12} sm={12} lg={6}>
                                        <div className={classes.protectionTextContent}>
                                            <Typography className={classes.sectionHeading}>Seller Protection.</Typography>
                                            <Typography className={classes.sectionText}>
                                                We help stressed, distressed, and non-distressed property owners sell fast due to life-changing circumstances (including lenders seeking to recoup).
                                            </Typography>
                                        </div>
                                    </GridItem>
                                </Hidden>
                                <GridItem xs={12} sm={12} lg={6} className={classes.serviceLeft}>
                                    <div className={classes.yellowBlockWrapper}>
                                        <div className={classes.blockRow}>
                                            <div className={classes.yellowBlock + ' extra-shadow'}>
                                                <div className={classes.yellowBoxInner}>
                                                    <i className="sb-icon-home-bid"></i>
                                                </div>
                                                <Typography>Foreclosure / Bankruptcy</Typography>
                                            </div>
                                            <div className={classes.yellowBlock}>
                                                <div className={classes.yellowBoxInner}>
                                                    <i className="sb-icon-rings"></i>
                                                </div>
                                                <Typography>Divorce</Typography>
                                            </div>
                                            <Hidden xsDown implementation="css">
                                                <div className={classes.yellowBlock}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-walking-men"></i>
                                                    </div>
                                                    <Typography>Moving /<br />Job Relocation</Typography>
                                                </div>
                                            </Hidden>
                                        </div>
                                        <div className={classes.blockRow}>
                                            <Hidden smUp implementation="css">
                                                <div className={classes.yellowBlock}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-walking-men"></i>
                                                    </div>
                                                    <Typography>Moving /<br />Job Relocation</Typography>
                                                </div>
                                            </Hidden>
                                            <div className={classes.yellowBlock + ' extra-shadow'}>
                                                <div className={classes.yellowBoxInner}>
                                                    <i className="sb-icon-open-door"></i>
                                                </div>
                                                <Typography>Job Loss</Typography>
                                            </div>
                                            <Hidden xsDown implementation="css">
                                                <div className={classes.yellowBlock}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-heart-beat"></i>
                                                    </div>
                                                    <Typography>Health Issues</Typography>
                                                </div>
                                            </Hidden>
                                        </div>
                                        <div className={classes.blockRow}>
                                            <Hidden smUp>
                                                <div className={classes.yellowBlock}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-heart-beat"></i>
                                                    </div>
                                                    <Typography>Health Issues</Typography>
                                                </div>
                                            </Hidden>
                                            <div className={classes.yellowBlock}>
                                                <div className={classes.yellowBoxInner}>
                                                    <i className="sb-icon-money-hand"></i>
                                                </div>
                                                <Typography>Money Issues</Typography>
                                            </div>
                                            <Hidden xsDown>
                                                <div className={classes.yellowBlock}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-home-care"></i>
                                                    </div>
                                                    <Typography>Inheritance</Typography>
                                                </div>
                                                <div className={classes.yellowBlock + ' extra-shadow'}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-big-to-small-home"></i>
                                                    </div>
                                                    <Typography>Downsizing / Tired Landlord or Lender</Typography>
                                                </div>
                                            </Hidden>
                                        </div>
                                        <Hidden smUp>
                                            <div className={classes.blockRow}>
                                                <div className={classes.yellowBlock}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-home-care"></i>
                                                    </div>
                                                    <Typography>Inheritance</Typography>
                                                </div>
                                                <div className={classes.yellowBlock + ' extra-shadow'}>
                                                    <div className={classes.yellowBoxInner}>
                                                        <i className="sb-icon-big-to-small-home"></i>
                                                    </div>
                                                    <Typography>Downsizing / Tired Landlord or Lender</Typography>
                                                </div>
                                            </div>
                                        </Hidden>
                                    </div>
                                </GridItem>
                                <Hidden smDown>
                                    <GridItem xs={12} sm={12} lg={6} className={classes.serviceRight}>
                                        <div className={classes.protectionTextContent}>
                                            <Typography className={classes.sectionHeading}>Seller Protection.</Typography>
                                            <Typography className={classes.sectionText}>
                                                We help stressed, distressed, and non-distressed property owners sell fast due to life-changing circumstances (including lenders seeking to recoup).
                                            </Typography>
                                        </div>
                                    </GridItem>
                                </Hidden>
                            </GridContainer>
                        </div>
                    </section>
                    <section className={classes.sectionAsset}>
                        <div className={classes.container}>
                            <GridContainer className={classes.elementCenter}>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <div className={classes.assetTextContent}>
                                        <Typography className={classes.sectionHeading}>Every Asset Sold.</Typography>
                                        <Typography className={classes.sectionText}>
                                            We sell all types of real estate (even net<wbr/> leases) and mortgage notes.
                                        </Typography>
                                    </div>
                                </GridItem>
                                <div className={classes.assetWrapper}>
                                    <div className={classes.assetKind}>
                                        <span>RESIDENTIAL</span>
                                    </div>
                                    <div className={classes.assetTypesWrapper}>
                                        <div className={classes.assetType}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg1} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                                CONDOS
                                            </Typography>
                                        </div>
                                        <div className={classes.assetType}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg2} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                                CO-OPS
                                            </Typography>
                                        </div>
                                        <div className={classes.assetType}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg3} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                                SINGLE-FAMILY
                                            </Typography>
                                        </div>
                                        <div className={classes.assetType}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg4} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            BROWNSTONES
                                            </Typography>
                                        </div>
                                        <div className={classes.assetType}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg5} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            TOWNHOUSES
                                            </Typography>
                                        </div>
                                        <div className={classes.assetType}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg6} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            LUXURY
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.assetWrapper}>      
                                    <Hidden mdUp>
                                        <div className={classes.assetKind + ' right'}>
                                            <span>COMMERCIAL</span>
                                        </div>
                                    </Hidden>                             
                                    <div className={classes.assetTypesWrapper2}>
                                        <div className={classes.assetTypeCommercial}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg7} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            MULTI-FAMILY
                                            </Typography>
                                        </div>
                                        <div className={classes.assetTypeCommercial}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg8} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                                RETAIL
                                            </Typography>
                                        </div>
                                        <div className={classes.assetTypeCommercial}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg9} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                                OFFICE
                                            </Typography>
                                        </div>
                                        <div className={classes.assetTypeCommercial}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg10} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            HOTELS
                                            </Typography>
                                        </div>
                                        <div className={classes.assetTypeCommercial}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg11} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            LAND
                                            </Typography>
                                        </div>
                                        <div className={classes.assetTypeCommercial}>
                                            <div className={classes.assetImg}> 
                                                <img src={assetImg12} alt="" />
                                            </div>
                                            <Typography className={classes.assetName}>
                                            INDUSTRIAL
                                            </Typography>
                                        </div>
                                    </div>
                                    <Hidden mdDown>
                                        <div className={classes.assetKind + ' right'}>
                                            <span>COMMERCIAL</span>
                                        </div>
                                    </Hidden>
                                </div>
                            </GridContainer>
                        </div>
                    </section>
                    <section className={classes.sectionRepair}>
                    <div className={classes.scaleContent}>
                        <div className={classes.container}>
                            <GridContainer className={classes.elementCenter}>
                                <Hidden mdUp>
                                    <GridItem xs={12} sm={12} md={6} lg={6} className={classes.serviceRight}>
                                        <div className={classes.repairTextContent}>
                                            <Typography className={classes.sectionHeading}>Without Repairs.</Typography>
                                            <Typography className={classes.sectionText}>
                                            We always sell AS-IS and our Agents and Buyers do not require you to fix, repair, or renovate your property before a sale; or turn your Non-Performing loans back to Re-Performing.
                                            </Typography>
                                        </div>
                                    </GridItem>
                                </Hidden>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <div className={classes.sectionImage}>
                                        <span>
                                            <img src={repairImg} alt="" width="392" />
                                        </span>
                                    </div>
                                </GridItem>
                                <Hidden mdDown>
                                    <GridItem xs={12} sm={12} md={6} lg={6} className={classes.serviceRight}>
                                        <div className={classes.repairTextContent}>
                                            <Typography className={classes.sectionHeading}>Without Repairs.</Typography>
                                            <Typography className={classes.sectionText}>
                                            We always sell AS-IS and our Agents and Buyers do not require you to fix, repair, or renovate your property before a sale; or turn your Non-Performing loans back to Re-Performing.
                                            </Typography>
                                        </div>
                                    </GridItem>
                                </Hidden>
                            </GridContainer>
                        </div>
                    </div>
                    </section>
                    <section className={classes.sectionTestimonials}>
                        <div className={classes.testimoniaScale}>
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <div className={classes.testimonialsTextContent}>
                                        <Typography className={classes.sectionHeading}>Some of our happy customers.</Typography>
                                    </div>
                                </GridItem>
                                <Hidden mdUp>
                                    <GridItem xs={12} sm={12} md={12} lg={12} className={classes.testimonialSlider}>
                                        <AliceCarousel buttonsDisabled={true} responsive={this.responsive} mouseDragEnabled >
                                            <div className={classes.testimonialsBox}>
                                                <Typography className={classes.testimonialsText}>
                                                "We contacted Sell Up when our apartment went into foreclosure and needed to find a buyer very fast. I was terrified if we could sell in time or walk away with any money. A massive  thank you to David (Agent) for a speedy sale and helping my family."
                                                </Typography>
                                                <div className={classes.profile}>
                                                    <div className={classes.profileImg}>
                                                        <img src={userAvtar1} alt="" />
                                                    </div>
                                                    <div className={classes.profileInfo}>
                                                        <div className={classes.profileName}>Jonathon P.</div>
                                                        <div className={classes.profileCompany}>New York, NY</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes.testimonialsBox}>
                                                <Typography className={classes.testimonialsText}>
                                                "I inherited my grandparents house but, it needed much repairs before I could use it or rent it. The expensive costs of renovations and ongoing maintenance was a huge burden, so it made sense to sell ASAP. I love your service, and have told friends; my Agent was a gem and the offers were higher than I expected." 
                                                </Typography>
                                                <div className={classes.profile}>
                                                    <div className={classes.profileImg}>
                                                        <img src={userAvtar2} alt="" />
                                                    </div>
                                                    <div className={classes.profileInfo}>
                                                        <div className={classes.profileName}>Heather B.</div>
                                                        <div className={classes.profileCompany}>East Hampton, NY</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes.testimonialsBox}>
                                                <Typography className={classes.testimonialsText}>
                                                "Unfortunately, I bought into a new luxury  development that wasn't to be completed for another 2 years and during the time my company asked me to relocate to Asia. Thank you for matching me with a buyer so quickly and making this situation almost stress-free. Your service is a real life-saver."
                                                </Typography>
                                                <div className={classes.profile}>
                                                    <div className={classes.profileImg}>
                                                        <img src={userAvtar3} alt="" />
                                                    </div>
                                                    <div className={classes.profileInfo}>
                                                        <div className={classes.profileName}>Caroline T.</div>
                                                        <div className={classes.profileCompany}>Brooklyn, NY</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes.testimonialsBox}>
                                                <Typography className={classes.testimonialsText}>
                                                "Our divorce took a long time and the court finally mandated the sale of all our real estate holdings at once. It could have taken months, if not atleast over a year to sell all within a short time. My friend recommended me to your service and I could not be any happier with how fast offers came in and we accepted. Thank you so much." 
                                                </Typography>
                                                <div className={classes.profile}>
                                                    <div className={classes.profileImg}>
                                                        <img src={userAvtar4} alt="" />
                                                    </div>
                                                    <div className={classes.profileInfo}>
                                                        <div className={classes.profileName}>Michael H.</div>
                                                        <div className={classes.profileCompany}>Miami, FL</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AliceCarousel>
                                    </GridItem>
                                </Hidden>
                                <Hidden mdDown>
                                    <GridItem xs={12} sm={12} md={12} lg={12}>
                                        <div className={classes.testimonialsWrapper}>
                                            <div className={classes.testimonialsRow}>
                                                <div className={classes.testimonialsBox}>
                                                    <Typography className={classes.testimonialsText}>
                                                    "We contacted Sell Up when our apartment went into foreclosure and needed to find a buyer very fast. I was terrified if we could sell in time or walk away with any money. A massive  thank you to David (Agent) for a speedy sale and helping my family."
                                                    </Typography>
                                                    <div className={classes.profile}>
                                                        <div className={classes.profileImg}>
                                                            <img src={userAvtar1} alt="" />
                                                        </div>
                                                        <div className={classes.profileInfo}>
                                                            <div className={classes.profileName}>Jonathon P.</div>
                                                            <div className={classes.profileCompany}>New York, NY</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classes.testimonialsBox}>
                                                    <Typography className={classes.testimonialsText}>
                                                    "I inherited my grandparents house but, it needed much repairs before I could use it or rent it. The expensive costs of renovations and ongoing maintenance was a huge burden, so it made sense to sell ASAP. I love your service, and have told friends; my Agent was a gem and the offers were higher than I expected." 
                                                    </Typography>
                                                    <div className={classes.profile}>
                                                        <div className={classes.profileImg}>
                                                            <img src={userAvtar2} alt="" />
                                                        </div>
                                                        <div className={classes.profileInfo}>
                                                            <div className={classes.profileName}>Heather B.</div>
                                                            <div className={classes.profileCompany}>East Hampton, NY</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.testimonialsWrapper}>
                                            <div className={classes.testimonialsRow}>
                                                <div className={classes.testimonialsBox}>
                                                    <Typography className={classes.testimonialsText}>
                                                    "Unfortunately, I bought into a new luxury  development that wasn't to be completed for another 2 years and during the time my company asked me to relocate to Asia. Thank you for matching me with a buyer so quickly and making this situation almost stress-free. Your service is a real life-saver."
                                                    </Typography>
                                                    <div className={classes.profile}>
                                                        <div className={classes.profileImg}>
                                                            <img src={userAvtar3} alt="" />
                                                        </div>
                                                        <div className={classes.profileInfo}>
                                                            <div className={classes.profileName}>Caroline T.</div>
                                                            <div className={classes.profileCompany}>Brooklyn, NY</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classes.testimonialsBox}>
                                                    <Typography className={classes.testimonialsText}>
                                                    "Our divorce took a long time and the court finally mandated the sale of all our real estate holdings at once. It could have taken months, if not atleast over a year to sell all within a short time. My friend recommended me to your service and I could not be any happier with how fast offers came in and we accepted. Thank you so much." 
                                                    </Typography>
                                                    <div className={classes.profile}>
                                                        <div className={classes.profileImg}>
                                                            <img src={userAvtar4} alt="" />
                                                        </div>
                                                        <div className={classes.profileInfo}>
                                                            <div className={classes.profileName}>Michael H.</div>
                                                            <div className={classes.profileCompany}>Miami, FL</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </GridItem>
                                </Hidden>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <div className={classes.elementCenter}>
                                        <Typography className={classes.sectionHeading}>Are You Ready To Sell?</Typography>
                                    </div>
                                    <div className={classes.testimonialsActions}>
                                        <div className={classes.callout}>
                                            <p>Get Started :</p>
                                            <Button color={"success"} size="lg" href="seller-form" className={classes.btn}>Seller  Form</Button>
                                        </div>
                                        <i className="sb-icon-door"></i>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default withStyles(homeStyle)(home);