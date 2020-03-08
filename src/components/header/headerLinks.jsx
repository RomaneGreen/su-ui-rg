/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

// core components
import Button from "../uiComponent/CustomButtons/Button";
import CustomDropdown from "../uiComponent/CustomDropdown/CustomDropdown";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";
import "../../assets/scss/icons/icons.scss"
import { authenticateActions } from '../../actions';
import { Link } from "react-router-dom";



function HeaderLinks({ ...props }) {
  const { classes } = props;
  if (document.cookie.split(';').filter((item) => item.includes('access_token=')).length) {
    var loggedIn = true;
  }
  const logout = () => {
    props.dispatch(authenticateActions.logout());
  }
  return (
    <div className="navigation-wrapper">
      <Hidden mdDown>
        <List className={classes.list}>
          {/* ******* User not logged in ********* */}
          <React.Fragment>
            {/* <ListItem className={classes.listItem}>
              <NavLink exact to="/">
                <Button color="transparent" component='span' className={classes.navLink}>
                  Home
              </Button>
              </NavLink>
            </ListItem> */}
            <ListItem className={classes.listItem}>
              <NavLink exact to={`${process.env.PUBLIC_URL}/how-it-works`}>
                <Button color="transparent" component='span' className={classes.navLink}>
                  How it Works
              </Button>
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <NavLink exact to={`${process.env.PUBLIC_URL}/seller-form`}>
                <Button color="transparent" component='span' className={classes.navLink}>
                  Sellers
              </Button>
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem} aria-current={(window.location.pathname === `${process.env.PUBLIC_URL}/buyer-form`) ? "active" : null}>
              <NavLink exact to={`${process.env.PUBLIC_URL}/buyers`} aria-current={(window.location.pathname === '/buyer-form') ? "active" : null}>
                <Button color="transparent" className={classes.navLink}>
                  Buyers
                </Button>
              </NavLink>
            </ListItem>
            <ListItem className={classes.listItem} aria-current={(window.location.pathname.indexOf('/authenticate') > -1) && props.loginType === "listing" ? "active" : null}>
              <NavLink to={`${process.env.PUBLIC_URL}/listing`} isActive={() => window.location.pathname.indexOf('/authenticate') > -1 && props.loginType === "listing"}>
                <Button color="transparent" component='span' className={classes.navLink}>
                  Listings
              </Button>
              </NavLink>
            </ListItem>
            {/* <ListItem className={classes.listItem}>
              <NavLink exact to="/contact-us">
                <Button color="transparent" component='span' className={classes.navLink}>
                  Contact
              </Button>
              </NavLink>
            </ListItem> */}


            {/* ******* User not logged in ********* */}
            {!loggedIn &&
              <ListItem className={classes.listItem} aria-current={(window.location.pathname.indexOf('/authenticate') > -1) && props.loginType !== "listing" ? "active" : null}>
                <NavLink exact to={`${process.env.PUBLIC_URL}/authenticate`} isActive={() => window.location.pathname.indexOf('/authenticate') > -1 && props.loginType !== "listing"}>
                  <Button color="transparent" component='span' className={classes.navLinkButton} onClick={() => props.setLoginType("buyer")}>
                    Buyer Login
                </Button>
                </NavLink>
              </ListItem>}
          </React.Fragment>
          {/* ******* User not logged in ********* */}

          {/* Only when user is logged in */}
          {loggedIn && <ListItem className={classes.listItem}>
            <div className={classes.userdropdownn}>
              <CustomDropdown
                buttonText={props.userInitials}
                caret={false}
                buttonProps={{
                  className: classes.userDropDownBtn
                }}
                dropdownList={
                  [
                    <Link to={`${process.env.PUBLIC_URL}/seller-form`} className={classes.sellLink} onClick={(e)=>console.log(e)}>Sell</Link>,
                    <Link to={`${process.env.PUBLIC_URL}/favourite`} className={classes.favouriteLink}>Favorites</Link>,
                    <Link to={`${process.env.PUBLIC_URL}/my-account`} className={classes.accountLink}>My Account</Link>,
                    <span onClick={logout} className={classes.logOutLink}>Log out</span>
                  ]
                }
              />
            </div>
          </ListItem>}
          {/* Only when user is logged in */}

        </List>
      </Hidden>
      <Hidden mdUp>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-menu-mobile"></span>
                <span>Home</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/how-it-works`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-setting"></span>
                <span>How it Works</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/seller-form`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-user"></span>
                <span>Sellers</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem} aria-current={(window.location.pathname === `${process.env.PUBLIC_URL}/buyer-form`) ? "active" : null}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/buyers`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-buyer"></span>
                <span>Buyers</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem} aria-current={(window.location.pathname.indexOf('/authenticate') > -1) && props.loginType === "listing" ? "active" : null}>
            {/* <ListItem className={classes.listItem}> */}
            <NavLink to={`${process.env.PUBLIC_URL}/listing`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-list"></span>
                <span>Listings</span>
              </Button>
            </NavLink>
          </ListItem>



          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/about-us`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-info"></span>
                <span>About Us</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/blog`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-blog"></span>
                <span>Blogs</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/contact-us`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-contact"></span>
                <span>Contact</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/terms-of-service`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-terms"></span>
                <span>Terms of Service</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/privacy`}>
              <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                <span className="sb-icon-shield"></span>
                <span>Privacy Policy</span>
              </Button>
            </NavLink>
          </ListItem>
          <ListItem className={classes.socialBar}>
            <div className={classes.socialBarHead}>
              <span className="sb-icon-binocular"></span>
              <span>Follow Us</span>
            </div>
            <List className={classes.socialList}>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-facebook"></span>
                </IconButton>
              </ListItem>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-twitter"></span>
                </IconButton>
              </ListItem>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-instagram"></span>
                </IconButton>
              </ListItem>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-linkedin"></span>
                </IconButton>
              </ListItem>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-pintrest"></span>
                </IconButton>
              </ListItem>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-google-plus"></span>
                </IconButton>
              </ListItem>
              <ListItem className={classes.socialListItem}>
                <IconButton round="true" className={classes.socialLink}>
                  <span className="sb-icon-youtube"></span>
                </IconButton>
              </ListItem>
            </List>
          </ListItem>


          {!loggedIn ?
            <ListItem className={classes.bottomBar}>
              <NavLink exact to={`${process.env.PUBLIC_URL}/authenticate`}>
                <Button className={classes.bottomBarButton} onClick={props.handleDrawerToggle}>
                  Buyer Login
                </Button>
              </NavLink>
            </ListItem>
            :
            <React.Fragment>
              <CustomDropdown
                buttonText={props.userInitials}
                caret={false}
                buttonProps={{
                  className: classes.userDropDownBtn
                }}
              />
              <ListItem className={classes.listItem}>
                <NavLink exact to={`${process.env.PUBLIC_URL}/favourite`}>
                  <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                    <span className="sb-icon-star-empty"></span>
                    <span>Favorites</span>
                  </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink exact to={`${process.env.PUBLIC_URL}/my-account`}>
                  <Button color="transparent" component='span' className={classes.navLink} onClick={props.handleDrawerToggle}>
                    <span className="sb-icon-user"></span>
                    <span>My Account</span>
                  </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button color="transparent" component='span' className={classes.navLink} onClick={logout}>
                  <span className="sb-icon-user"></span>
                  <span>Logout</span>
                </Button>
              </ListItem>
            </React.Fragment>
          }

        </List>
      </Hidden>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
