import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, withStyles, Collapse, ListSubheader, Typography, IconButton } from "@material-ui/core";
import history from "../../common/history";
import './footer.css';

import GridContainer from "../uiComponent/Grid/GridContainer";
import GridItem from "../uiComponent/Grid/GridItem";
import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";
import Button from "../uiComponent/CustomButtons/Button";
import FooterHOC from "../../components/hoc/footerHOC";
import footerLogo from "../../assets/images/footerLogo.svg";
import dmca from "../../assets/images/dmca.png";
import footerUser from "../../assets/images/footer-user.png";


class Footer extends React.Component {
  state = {
    nowServing_open: false,
    realEstate_open: false,
    county_open: false,
    homes_open: false,
    propertyTypes_open: false
  };
  handleClick = (sectionName) => {
    this.setState(state => ({ [sectionName]: !state[sectionName] }));
  };
  render() {
    const { classes } = this.props;
    if (document.cookie.split(';').filter((item) => item.includes('access_token=')).length) {
      var loggedIn = true;
    }
    return (
      <footer >
        <div className={classes.footerListingWrapper}>
          <div className={classes.container}>
            <GridContainer className={classes.footerListing} justify="space-around">
              <GridItem className={classes.footerListingBox} xs={6} sm={4} lg={2}>
                <List
                  component="nav"
                  disablePadding
                  subheader={<ListSubheader className={classes.footerListSubheader} disableGutters disableSticky component="div">NOW SERVING</ListSubheader>}
                  className={classes.footerListWrap}
                >
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New York
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New Jersey
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Florida
                  </ListItem>
                  <Collapse unmountOnExit in={this.state.nowServing_open} timeout="auto">
                    {/* <List component="ul" disablePadding>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        City1
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        City2
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        City3
                      </ListItem>
                    </List> */}
                  </Collapse>
                  <Button variant="outlined" size="sm" onClick={() => this.handleClick("nowServing_open")} className={classes.footerListToggle}>
                    {this.state.nowServing_open ? <span><span>LESS</span><i className="sb-icon-caret-up"></i></span> : <span><span>More</span><i className="sb-icon-caret-down"></i></span>}
                  </Button>
                </List>
              </GridItem>
              <GridItem className={classes.footerListingBox} xs={6} sm={4} lg={2}>
                <List
                  component="nav"
                  disablePadding
                  subheader={<ListSubheader className={classes.footerListSubheader} disableGutters disableSticky component="div">REAL ESTATE</ListSubheader>}
                  className={classes.footerListWrap}
                >
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New York real estate
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Manhattan real estate
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New York City real estate
                  </ListItem>
                  <Collapse unmountOnExit in={this.state.realEstate_open} timeout="auto">
                    <List component="div" disablePadding>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Brooklyn real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Bronx real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Queens real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Long Island real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Hamptons real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        North Fork real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Fire Island real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Westchester real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Jersey City real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Hoboken real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Newport real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Weehawken real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        West New York real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Guttenberg real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Union City real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Edison real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Miami real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Fort Lauderdale real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        West Palm Beach real estate
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Orlando real estate
                      </ListItem>
                    </List>
                  </Collapse>
                  <Button variant="outlined" size="sm" onClick={() => this.handleClick('realEstate_open')} className={classes.footerListToggle}>
                    {this.state.realEstate_open ? <span><span>LESS</span><i className="sb-icon-caret-up"></i></span> : <span><span>More</span><i className="sb-icon-caret-down"></i></span>}
                  </Button>
                </List>
              </GridItem>
              <GridItem className={classes.footerListingBox} xs={6} sm={4} lg={2}>
                <List
                  component="nav"
                  disablePadding
                  subheader={<ListSubheader className={classes.footerListSubheader} disableGutters disableSticky component="div">COUNTY</ListSubheader>}
                  className={classes.footerListWrap}
                >
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New York county
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Kings county
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Queens county
                  </ListItem>
                  <Collapse unmountOnExit in={this.state.county_open} timeout="auto">
                    <List component="ul" disablePadding>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Bronx county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Richmond county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Nassau county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Suffolk county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Westchester county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Hudson county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Middlesex county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Bergen county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Essex county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Union county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Miami-Dade county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Palm Beach county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Broward county
                      </ListItem>
                      <ListItem component="a" className="cursor-pointer" disableGutters>
                        Orange county
                      </ListItem>
                    </List>
                  </Collapse>
                  <Button variant="outlined" size="sm" onClick={() => this.handleClick('county_open')} className={classes.footerListToggle}>
                    {this.state.county_open ? <span><span>LESS</span><i className="sb-icon-caret-up"></i></span> : <span><span>More</span><i className="sb-icon-caret-down"></i></span>}
                  </Button>
                </List>
              </GridItem>
              <GridItem className={classes.footerListingBox} xs={6} sm={4} lg={2}>
                <List
                  component="nav"
                  disablePadding
                  subheader={<ListSubheader className={classes.footerListSubheader} disableGutters disableSticky component="div">HOMES</ListSubheader>}
                  className={classes.footerListWrap}
                >
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New York homes
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Manhattan homes
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    New York City homes
                  </ListItem>
                  <Collapse unmountOnExit in={this.state.homes_open} timeout="auto">
                    <List component="ul" disablePadding>

                      {
                        ["Brooklyn homes", "Bronx homes", "Queens homes", "Long Island homes", "Hamptons homes", "North Fork homes", "Fire Island homes",
                          "Westchester homes", "Jersey City homes", "Hoboken homes", "Newport homes", "Weehawken homes",
                          "West New York homes", "Guttenberg homes", "Union City homes", "Edison homes", "Miami homes",
                          "Fort Lauderdale homes", "West Palm Beach homes", "Orlando homes"].map(item =>
                            <ListItem key={item} component="a" className="cursor-pointer" disableGutters>{item}</ListItem>
                          )
                      }

                    </List>
                  </Collapse>
                  <Button variant="outlined" size="sm" onClick={() => this.handleClick('homes_open')} className={classes.footerListToggle}>
                    {this.state.homes_open ? <span><span>LESS</span><i className="sb-icon-caret-up"></i></span> : <span><span>More</span><i className="sb-icon-caret-down"></i></span>}
                  </Button>
                </List>
              </GridItem>
              <GridItem className={classes.footerListingBox} xs={6} sm={4} lg={2}>
                <List
                  component="nav"
                  disablePadding
                  subheader={<ListSubheader className={classes.footerListSubheader} disableGutters disableSticky component="div">PROPERTY TYPES</ListSubheader>}
                  className={classes.footerListWrap}
                >
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    House
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Single Family Home
                  </ListItem>
                  <ListItem component="a" className="cursor-pointer" disableGutters>
                    Condo
                  </ListItem>
                  <Collapse unmountOnExit in={this.state.propertyTypes_open} timeout="auto">
                    <List component="ul" disablePadding>

                      {
                        ["Multifamily", "Townhouse", "Brownstone", "Co-op", "Cooperative", "Mobile Home", "Apartment", "Manufactured Home", "Housing", "Farm", "Hotel", "Industrial", "Mixed-Used", "Retail", "Office", "Medical", "Self-Storage", "Senior Living", "Loft", "Land"].map(item =>
                          <ListItem key={item} component="a" className="cursor-pointer" disableGutters>{item}</ListItem>
                        )
                      }

                    </List>
                  </Collapse>
                  <Button variant="outlined" size="sm" onClick={() => this.handleClick('propertyTypes_open')} className={classes.footerListToggle}>
                    {this.state.propertyTypes_open ? <span><span>LESS</span><i className="sb-icon-caret-up"></i></span> : <span><span>More</span><i className="sb-icon-caret-down"></i></span>}
                  </Button>
                </List>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.footerMain}>
          <div className={classes.container}>
            <GridContainer className={classes.footerBottom}>
              <GridItem xs={12} sm={12} lg={4}>
                <div className={classes.footerLogo} >
                  <a href="/">
                  <img className="footerLogo"    src={footerLogo} alt="Sell Up" />
                    </a>
                  <Typography>
                    Sell Up is a new technology-driven<br/> real estate marketplace that helps<br/> Sellers and Buyers connect faster.
                  </Typography>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} lg={1}></GridItem>
              <GridItem xs={12} sm={12} lg={7} className={classes.footerBottomMain}>
                <GridItem className={classes.footerBottomBox} xs={6} sm={4} lg={4}>
                  <List
                    component="ul"
                    disablePadding
                    subheader={<ListSubheader className={classes.footerLinksSubheader} disableGutters disableSticky component="li">Services</ListSubheader>}
                    className={classes.footerLinkWrap}
                  >
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/`}>HOME</NavLink>
                    </ListItem>
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/how-it-works`}>HOW IT WORKS </NavLink>
                    </ListItem>
                    {!loggedIn &&
                      <ListItem component="li" disableGutters>
                        <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/seller-form`}>SELLERS </NavLink>
                      </ListItem>}
                    {!loggedIn &&
                      <ListItem component="li" disableGutters>
                        <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/buyers`}>BUYERS </NavLink>
                      </ListItem>}
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/listing`}>LISTINGS </NavLink>
                    </ListItem>
                  </List>
                </GridItem>
                <GridItem className={classes.footerBottomBox} xs={6} sm={4} lg={4}>
                  <List
                    component="ul"
                    disablePadding
                    subheader={<ListSubheader className={classes.footerLinksSubheader} disableGutters disableSticky component="li">Company</ListSubheader>}
                    className={classes.footerLinkWrap}
                  >
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/about-us`}>ABOUT US</NavLink>
                    </ListItem>
                    <ListItem component="li" disableGutters>
                      <NavLink isActive={(match, location) => location.pathname.startsWith('/blog')} component="a" to={`${process.env.PUBLIC_URL}/blog`}>BLOGS</NavLink>
                    </ListItem>
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</NavLink>
                    </ListItem>
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/terms-and-conditions`}>TERMS OF SERVICE</NavLink>
                    </ListItem>
                    <ListItem component="li" disableGutters>
                      <NavLink exact component="a" to={`${process.env.PUBLIC_URL}/privacy-policy`}>PRIVACY POLICY </NavLink>
                    </ListItem>
                  </List>
                </GridItem>
                <GridItem className={classes.footerBottomBox} xs={12} sm={4} lg={4}>
                  <List
                    component="ul"
                    disablePadding
                    subheader={<ListSubheader className={classes.footerLinksSubheader} disableGutters disableSticky component="li">Follow Us</ListSubheader>}
                    className={classes.footerSocialList}
                  >
                    <ListItem className={classes.socialListItem}>
                      <IconButton  disableRipple component="a" onClick={() => window.open('https://www.facebook.com/sellupco/')} className={classes.socialLink}>
                        <span className="sb-icon-facebook"></span>  
                      </IconButton>
                    </ListItem>
                    <ListItem className={classes.socialListItem}>
                      <IconButton disableRipple component="a" onClick={() => window.open('https://www.twitter.com/sellupco/')} className={classes.socialLink}>
                         <span className="sb-icon-twitter"></span> 
                      </IconButton>
    
                    </ListItem>
                    <ListItem className={classes.socialListItem}>
                      <IconButton disableRipple component="a" onClick={() => window.open('https://www.instagram.com/sellupco/')} className={classes.socialLink}>
                       <span className="sb-icon-instagram"></span> 
                      </IconButton>
                    </ListItem>
                    <ListItem className={classes.socialListItem}>
                      <IconButton disableRipple component="a" className={classes.socialLink}>
                      <a href="www.ask.com">  <span className="sb-icon-google-plus"></span> </a>
                      </IconButton>
                    </ListItem>
                    <ListItem className={classes.socialListItem}>
                      <IconButton disableRipple component="a" onClick={() => window.open('https://www.pinterest.com/sellupco/')} className={classes.socialLink}>
                       <span className="sb-icon-pintrest"></span> 
                      </IconButton>
                    </ListItem>
                    <ListItem className={classes.socialListItem}>
                      <IconButton disableRipple component="a" onClick={() => window.open('https://www.linkedin.com/company/sellupco/')} className={classes.socialLink}>
                      <span className="sb-icon-linkedin"></span>
                      </IconButton>
                    </ListItem>
                    <ListItem className={classes.socialListItem}>
                      <IconButton disableRipple component="a" onClick={() => window.open('https://www.youtube.com/channel/UCTZtdhIZ9_gT3BF_ILds4Eg')} className={classes.socialLink}>
                     <span className="sb-icon-youtube"></span>
                      </IconButton>
                    </ListItem>
                  </List>
                </GridItem>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.copyRight}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={7} lg={6}><Typography className={classes.copyRightText}>Copyright &copy; 2020 Sell Up. All Rights Reserved.<br />The material on this site can not be reproduced.</Typography>
                <img src={dmca} alt="DMCA" /></GridItem>
              <GridItem xs={12} sm={5} lg={6} className={classes.sellBulkMain}>
                <div className={classes.sellBulkWrapper}>
                  <div className={classes.sellBulk}>
                    <Typography>Selling in Bulk?</Typography>
                    <Button className={classes.sellBulkButton} color="primary" onClick={() => history.push(`${process.env.PUBLIC_URL}/contact-us`)}>EMAIL US</Button>
                  </div>
                  <img src={footerUser} alt="user" />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </footer>
    );
  }
}

export default withStyles(footerStyle)(FooterHOC(Footer));
