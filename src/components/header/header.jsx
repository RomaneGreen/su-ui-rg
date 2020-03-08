import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Button from "../uiComponent/CustomButtons/Button";
import HeaderHOC from "../../components/hoc/headerHOC";
import CustomDropdown from "../uiComponent/CustomDropdown/CustomDropdown";
import { authenticateActions } from '../../actions';
import HeaderLinks from './headerLinks';

// core components
import headerStyle from "../../assets/jss/material-kit-react/components/headerStyle.jsx";
import Logo from "../../assets/images/logo-circular.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
      document.body.classList.add("fixedTopBar");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
      document.body.classList.remove("fixedTopBar");

    }
  }
  logout = () => {
    this.props.dispatch(authenticateActions.logout());
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      color,
      leftLinks,
      brand,
      brandSmall,
      fixed,
      absolute,
      headerClass
    } = this.props;
    if (headerClass === 'fixed') {
      document.body.classList.remove('normal');
    }
    else {
      document.body.classList.remove('fixed');
    }
    document.body.classList.add(headerClass);
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });

    if (document.cookie.split(';').filter((item) => item.includes('access_token=')).length) {
      var loggedIn = true;
    }

    const brandComponent = <Link className={classes.title} to={`${process.env.PUBLIC_URL}/`}>
      <Hidden mdUp><img src={brandSmall} className={classes.logoSmall} alt={'Sell Up'} /></Hidden>
      <Hidden mdDown><img src={brand} className={classes.logo} alt={'Sell Up'} /></Hidden>
    </Link>;
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.drawerToggleOpen}
            >
              <i className="sb-icon-menu-mobile"></i>
            </IconButton>
          </Hidden>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
                brandComponent
              )}
          </div>
          <Hidden smDown implementation="css">
            {this.props.showHeaderAndFooter ?
              <HeaderLinks userInitials={this.props.userInitials}
                loginType={this.props.loginType}
                dispatch={this.props.dispatch}
                setLoginType={this.props.setLoginType} />

              :
              null
            }
          </Hidden>
          <Hidden mdUp implementation="css">
            {!loggedIn && <Button color="success" className={classes.rightBtn}>
              Sell
            </Button>}
            {loggedIn &&
              <div className={classes.userdropdownn}>
                <CustomDropdown
                  buttonText={this.props.userInitials}
                  caret={false}
                  buttonProps={{
                    className: classes.userDropDownBtn
                  }}
                  dropdownList={
                    [
                      <Link to={`${process.env.PUBLIC_URL}/seller-form`} className={classes.sellLink} onClick={(e)=>console.log(e)}>Sell</Link>,
                      <Link to={`${process.env.PUBLIC_URL}/favourite`} className={classes.favouriteLink}>Favorites</Link>,
                      <Link to={`${process.env.PUBLIC_URL}/my-account`} className={classes.accountLink}>My Account</Link>,
                      <span onClick={this.logout} className={classes.logOutLink}>Log out</span>
                    ]
                  }
                />
              </div>
            }
          </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={"left"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {this.props.showHeaderAndFooter ?
                <HeaderLinks handleDrawerToggle={this.handleDrawerToggle}
                  userInitials={this.props.userInitials}
                  loginType={this.props.loginType}
                  dispatch={this.props.dispatch}
                  setLoginType={this.props.setLoginType} />
                :
                null
              }
            </div>
            <Hidden mdUp>
              <div className={classes.sideBarStrip}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.drawerToggleOpen}
                >
                  <span className="sb-icon-menu-open"></span>
                </IconButton>
                <img src={Logo} alt='Sell Up' />
              </div>
            </Hidden>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(HeaderHOC(Header));
