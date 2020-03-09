import React from "react";
import { withStyles, List, ListItem, Typography } from "@material-ui/core";
import aboutUsStyle from "../assets/jss/material-kit-react/components/AboutUsStyle";

import GridContainer from "./uiComponent/Grid/GridContainer";
import GridItem from "./uiComponent/Grid/GridItem";
import Button from "./uiComponent/CustomButtons/Button";
import { Link } from "react-router-dom";

import titleDash from "../assets/images/title-dash.png";







class AboutUs extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.aboutUs}>
                <div className={classes.container}>
                    <GridContainer className={classes.elementCenter}>
                        <GridItem xs={12} sm={12} md={12} lg={12} className={classes.sectionInfo}>
                            <div className={classes.pageTitle}>
                                <Typography variant="h2">About Us.</Typography>
                            </div>
                            <div className={classes.etymologyBox}>
                                <div className={classes.etymologyWordWrapper}>
                                    <span className={classes.etymologyWord}>
                                        sell up
                                    </span>
                                    <span className={classes.etymologyTranscription}>
                                        /sel up/
                                    </span>
                                </div>
                                <div className={classes.etymologyVerb}>
                                    verb
                                </div>
                                <div className={classes.etymologyDefenitionTitle}>
                                    <b>DEFINITION:</b>
                                </div>
                                <div className={classes.etymologyDefenition}>
                                    <i>Old English</i> - To sell your house or property fast in order to move or do something else.
                                </div>
                            </div>
                            <div className={classes.aboutContent}>
                                <p>Life happens.</p>
                                <p>Sometimes you <b style={{color: 'black'}}>need</b> to sell fast.</p>
                                <p>Most times you just <b style={{color: 'black'}} ><i><u>want</u></i></b> to sell fast.</p>
                                <p>No matter your reason, we’ll get you to SOLD faster at a lower-cost.</p>
                                <p>SellUp is a new patent pending, technology-driven company that provides<br/> a time-sensitive real estate marketplace and highly specialized brokerage<br/> to help stressed, distressed, and non-distressed sellers match with qualified buyers quicker than anyone else.</p>
                                <p>Our sellers get to list privately first, so they can make a sale discreetly and quietly, often before their listings even make it on the market. </p>
                                <p>Our buyers see off-market listings first. They also subscribe to our platform <br/> which gives them the exclusive right to make offers on your property first,<br/> leading to faster sales during this coveted period. </p>
                                
                            </div>
                            <div className={classes.sellerInfo}>
                                <div className={classes.sellerBlock}>
                                    <Typography variant="h3">FOR DISTRESSED SELLERS:</Typography>
                                    <List component='ul' className={classes.sellerDots}>
                                        <ListItem component='li' className={classes.listItem}>
                                            Stop Foreclosure
                                        </ListItem>
                                        <ListItem component='li' className={classes.listItem}>
                                            Avoid Bankruptcy
                                        </ListItem>
                                        <ListItem component='li' className={classes.listItem}>
                                            Save Your Credit
                                        </ListItem>
                                        <ListItem component='li' className={classes.listItem}>
                                            Get Paid Fast
                                        </ListItem>
                                    </List>
                                </div>
                                <div className={classes.sellerBlock}>
                                    <Typography variant="h3">FOR NON-DISTRESSED SELLERS: <img src={titleDash} alt="About Us" /></Typography>
                                    <List component='ul' className={classes.sellerCircle}>
                                        <ListItem component='li' className={classes.listItem}>
                                            Attract More Buyers
                                        </ListItem>
                                        <ListItem component='li' className={classes.listItem}>
                                            Pay Lower Fees
                                        </ListItem>
                                        <ListItem component='li' className={classes.listItem}>
                                            Waste Less Time
                                        </ListItem>
                                        <ListItem component='li' className={classes.listItem}>
                                            Move-on With Life
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                            <div className={classes.aboutContent}>
                                <p>Using our proprietary marketplace, we generate multiple offers in the <br/>shortest time and present them to you. Here, you can decide which is  the best offer for you.</p>
                                <p>Sound good? There's more.</p>
                                <p>Whether you are selling real estate or mortgage notes, we know your time<br/> is limited, that is why all types of property are always sold AS-IS.</p>
                                <p>As a seller, you are not required to make expensive property repairs,<br/> time-consuming renovations or even turn your notes back to re-performing before a sale.</p>
                                <p>Your time is most valuable.</p>
                                <p>Let us move you to a faster closing.</p>
                                <p><span style={{color: 'black'}}>Welcome to SellUp.</span></p>
                            </div>
                            <div className={classes.sellButton}>
                                <Typography variant="span">Ready to Sell? <b>Submit Here:</b></Typography>
                                <Link to={`${process.env.PUBLIC_URL}/seller-form`}>
                                    <Button color={"success"} size="lg" href="true" className={classes.btn}>SELLER  FORM</Button>
                                </Link>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div >
        )
    }
}


export default withStyles(aboutUsStyle)(AboutUs);