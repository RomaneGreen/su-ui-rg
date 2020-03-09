import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import '../App.scss';
import {
  Header, HowItWorks, SellerForm, BuyerLandingPage, BuyerForm,
  ContactUs, AboutUs, PropertyListing, FavouriteProperty, TermsAndConditions,
  PrivacyPolicy, MyAccount, AuthenticationContainer, AdminContainer, Blog, Footer, BlogDetail,
  BlogSearch, EmailSetting, Member, NonMember, Saved, Success, PropertyDetails, OnboardingForm, ErrorPage, Home
} from "../components"
import { Router, Route, Switch } from "react-router-dom";
import history from "../common/history";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sellerActions } from "../actions";
import componentsStyle from "../assets/jss/material-kit-react/views/components";
import logo from "../assets/images/headerLogo.svg";
import logoSmall from "../assets/images/logo-circular.svg";
import "../assets/scss/material-kit-react.css?v=1.3.0";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { propertyActions } from '../actions';
const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: 'c',
});


class App extends Component {
  render() {
    const { classes, ...rest } = this.props;
    const { pathname } = window.location;
    const showHeaderAndFooter = pathname !== `${process.env.PUBLIC_URL}/user-login/agent-login` &&
      pathname !== `${process.env.PUBLIC_URL}/user-login/admin-login` &&
      pathname !== `${process.env.PUBLIC_URL}/agent-onboarding` &&
      pathname !== `${process.env.PUBLIC_URL}/team-onboarding`;
    var userInitials = "";
    if (this.props.buyerProfileDetails) {
      userInitials = this.props.buyerProfileDetails.first_name[0] + this.props.buyerProfileDetails.last_name[0];
    }
    return (
      <JssProvider generateClassName={generateClassName}>

        <React.Fragment>
          <Router history={history} basename={'/dev'}>
            <React.Fragment>
              {
                <Header
                  brand={logo}
                  brandSmall={logoSmall}
                  fixed
                  color="transparent"
                  changeColorOnScroll={{
                    height: 10,
                    color: "white"
                  }}
                  userInitials={userInitials}
                  loginType={this.props.loginType}
                  setLoginType={this.props.setLoginType}
                  changeLogoOnScroll={true}
                  showHeaderAndFooter={showHeaderAndFooter}
                  {...rest}
                />
              }
              <Switch>
                <Route exact path="/" render={() => <Home {...rest} />} />
                <Route exact path="/dev/" render={() => <Home {...this.props} />} />
                <Route exact path={`${process.env.PUBLIC_URL}/how-it-works`} component={HowItWorks} />
                <Route exact path={`${process.env.PUBLIC_URL}/seller-form`} component={SellerForm} />
                <Route exact path={`${process.env.PUBLIC_URL}/buyers`} component={BuyerLandingPage} />
                <Route exact path={`${process.env.PUBLIC_URL}/buyer-form`} component={BuyerForm} />
                <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={ContactUs} />
                <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={AboutUs} />
                <Route exact path={`${process.env.PUBLIC_URL}/listing`} component={PropertyListing} />
                <Route exact path={`${process.env.PUBLIC_URL}/favourite`} component={FavouriteProperty} />
                <Route exact path={`${process.env.PUBLIC_URL}/terms-and-conditions`} component={TermsAndConditions} />
                <Route exact path={`${process.env.PUBLIC_URL}/privacy-policy`} component={PrivacyPolicy} />
                <Route exact path={`${process.env.PUBLIC_URL}/my-account`} component={MyAccount} />
                <Route path={`${process.env.PUBLIC_URL}/authenticate`} component={AuthenticationContainer} />
                <Route path={`${process.env.PUBLIC_URL}/user-login`} component={AdminContainer} />
                <Route path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
                <Route path={`${process.env.PUBLIC_URL}/blog-detail/:id`} component={BlogDetail} />
                <Route path={`${process.env.PUBLIC_URL}/blog-search`} component={BlogSearch} />
                <Route path={`${process.env.PUBLIC_URL}/unsubscribe-email-setting`} component={EmailSetting} />
                <Route path={`${process.env.PUBLIC_URL}/unsubscribe-member`} component={Member} />
                <Route path={`${process.env.PUBLIC_URL}/unsubscribe-non-member`} component={NonMember} />
                <Route path={`${process.env.PUBLIC_URL}/unsubscribe-saved`} component={Saved} />
                <Route path={`${process.env.PUBLIC_URL}/unsubscribe-success`} component={Success} />
                <Route path={`${process.env.PUBLIC_URL}/property-detail/:id`} component={PropertyDetails} />
                <Route path={`${process.env.PUBLIC_URL}/agent-onboarding`} render={() => <OnboardingForm isAgentOnboarding={true} />} />
                <Route path={`${process.env.PUBLIC_URL}/team-onboarding`} render={() => <OnboardingForm isAgentOnboarding={false} />} />
                <Route component={ErrorPage} />
              </Switch>
              <Footer />
            </React.Fragment>
          </Router>
        </React.Fragment>

      </JssProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    init: { ...state.initReducer },
    ...state.myAccountReducer,
    loginType: state.propertyReducer.loginType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      Object.assign(
        {},
        sellerActions,
        propertyActions
      ),
      dispatch
    ),
    dispatch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(componentsStyle)(App));
