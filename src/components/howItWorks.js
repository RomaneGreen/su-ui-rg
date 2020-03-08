import React from "react";
import { withStyles, List, ListItem, Hidden } from "@material-ui/core";
import howItWorksStyle from "../assets/jss/material-kit-react/components/howItWorksStyle";

import GridContainer from "./uiComponent/Grid/GridContainer";
import GridItem from "./uiComponent/Grid/GridItem";
import Button from "./uiComponent/CustomButtons/Button";
import { Link } from "react-router-dom";

import howItWorksImg from "../assets/images/how-it-works.png";
class HowItWorks extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.howItWorks}>
                <div className={classes.container}>
                    <GridContainer className={classes.elementCenter}>
                        <Hidden mdUp>
                            <div className={classes.sectionHeading}>
                                <span>Five Simple Steps to</span> <i className="sb-icon-sold-square"></i> <span>:</span>
                            </div>
                        </Hidden>
                        <GridItem xs={12} sm={12} md={7} lg={7} className={classes.sectionImg}>
                            <img src={howItWorksImg} alt="How It Works" />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5} lg={5} className={classes.sectionContent}>
                            <Hidden mdDown>
                                <div className={classes.sectionHeading}>
                                    <span>Five Simple Steps to</span> <i className="sb-icon-sold-square"></i> <span>:</span>
                                </div>
                            </Hidden>
                            <List component='ul' className={classes.listChecks}>
                                <ListItem component='li' className={classes.listChecksItem}>
                                    <span>1</span>
                                    <span>Submit online:&nbsp;
										<Link className="left-padding" to={`${process.env.PUBLIC_URL}/seller-form`}>
                                            <Button color={"success"} size="lg" href="true" className={classes.btn}>SELLER&nbsp;&nbsp;FORM</Button>
                                        </Link>
                                    </span>                                        
                                </ListItem>
                                <ListItem component='li' className={classes.listChecksItem}>
                                    <span>2</span>
                                    <span>Next, an Agent will contact you<br /> to review and create a listing.</span>
                                </ListItem>
                                <ListItem component='li' className={classes.listChecksItem}>
                                    <span>3</span>
                                    <span>Then, Buyers are introduced<br /> and matched to your listing.</span>
                                </ListItem>
                                <ListItem component='li' className={classes.listChecksItem}>
                                    <span>4</span>
                                    <span>Receive multiple offers and<br /> accept the best one for you.</span>
                                </ListItem>
                                <ListItem component='li' className={classes.listChecksItem}>
                                    <span>5</span>
                                    <span>Secure your closing date.</span>
                                </ListItem>
                            </List>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        )
    }
}

export default withStyles(howItWorksStyle)(HowItWorks);