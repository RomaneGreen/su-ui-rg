import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Authentication,
  ForgotPassword,
  Login,
  ResetPassword,
  ComingSoon
} from "../authentication";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticateActions } from "../../actions";

class AuthenticationContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      invalidLoginFormFields: [],
      validLoginFormFields: []
    };
  }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate", this.state);
  // }

  handleInput = event => {
    event.persist();
    this.setState(prevState => {
      let { invalidLoginFormFields, validLoginFormFields } = prevState;
      const { name, value } = event.target;
      if (name === "email") {
        if (this.validateEmail(value)) {
          if (!validLoginFormFields.includes(name)) {
            validLoginFormFields.push(event.target.name);
          }
          if (invalidLoginFormFields.includes(name)) {
            invalidLoginFormFields.splice(
              invalidLoginFormFields.indexOf(name),
              1
            );
          }
        } else {
          if (!invalidLoginFormFields.includes(name)) {
            invalidLoginFormFields.push(event.target.name);
          }
          if (validLoginFormFields.includes(name)) {
            validLoginFormFields.splice(validLoginFormFields.indexOf(name), 1);
          }
        }
      }

      if (name === "password") {
        if (this.validatePassword(value)) {
          if (!validLoginFormFields.includes(name)) {
            validLoginFormFields.push(event.target.name);
          }
          if (invalidLoginFormFields.includes(name)) {
            invalidLoginFormFields.splice(
              invalidLoginFormFields.indexOf(name),
              1
            );
          }
        } else {
          if (!invalidLoginFormFields.includes(name)) {
            invalidLoginFormFields.push(event.target.name);
          }
          if (validLoginFormFields.includes(name)) {
            validLoginFormFields.splice(validLoginFormFields.indexOf(name), 1);
          }
        }
      }

      return {
        ...prevState,
        invalidLoginFormFields,
        validLoginFormFields,
        [event.target.name]: event.target.value
      };
    });
  };

  // handleChange = event => {
  //   event.persist();
  //   console.log("handleChange", event.target.name);
  //   this.validate(event);
  // };

  validateEmail(value) {
    /* eslint no-useless-escape: "off" */
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value.toLowerCase());
  }

  validatePassword(value) {
    return value.length >= 6;
  }

  handleLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleSubmitEmail = () => {
    const { email } = this.state;
    this.props.submitEmail({ email });
  };

  handleSubmitPassword = () => {
    let { password, email } = this.state;
    this.props.submitPassword({ email, password });
  };

  render() {
    const {
      match,
      loginStatus,
      forgotPassword,
      resetPassword,
      loginType
    } = this.props;
    const {
      email,
      password,
      validLoginFormFields,
      invalidLoginFormFields
    } = this.state;
    return (
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          render={() => (
            <Authentication url={match.url} loginType={loginType} />
          )}
        />
        <Route
          exact
          path={`${match.url}/login-buyer`}
          render={() => (
            <Login
              email={email}
              url={match.url}
              loginStatus={loginStatus}
              invalidLoginFormFields={invalidLoginFormFields}
              validLoginFormFields={validLoginFormFields}
              password={password}
              handleInput={this.handleInput}
              handleLogin={this.handleLogin}
              loginType={loginType}
            />
          )}
        />
        <Route
          exact
          path={`${match.url}/forgot-password`}
          render={() => (
            <ForgotPassword
              email={email}
              forgotPassword={forgotPassword}
              handleInput={this.handleInput}
              handleSubmitEmail={this.handleSubmitEmail}
              invalidLoginFormFields={invalidLoginFormFields}
              validLoginFormFields={validLoginFormFields}
              loginType={loginType}
              onBackToLogin={() => this.props.history.goBack()}
            />
          )}
        />
        <Route
          exact
          path={`${match.url}/reset-password`}
          render={() => (
            <ResetPassword
              password={password}
              handleSubmitPassword={this.handleSubmitPassword}
              resetPassword={resetPassword}
              loginType={loginType}
            />
          )}
        />
        <Route
          exact
          path={`${match.url}/coming-soon`}
          render={() => <ComingSoon loginType={loginType} />}
        />
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authenticateReducer,
    loginType: state.propertyReducer.loginType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(authenticateActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationContainer);
