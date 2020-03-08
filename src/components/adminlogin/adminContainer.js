import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminLogin, AgentLogin, BloggerLogin, SalesLogin } from "./index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticateActions } from "../../actions";

class AdminContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      rememberMe: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked
    });
  };

  handleLogin = () => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  handleSubmitEmail = () => {
    this.props.submitEmail({ email: this.state.email });
  };

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/admin-login`}
          render={() => <AdminLogin url={match.url} />}
        />
        <Route
          exact
          path={`${match.url}/agent-login`}
          render={() => <AgentLogin />}
        />
        <Route
          exact
          path={`${match.url}/blogger-login`}
          render={() => <BloggerLogin />}
        />
        <Route
          exact
          path={`${match.url}/sales-login`}
          render={() => <SalesLogin />}
        />
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authenticateReducer
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
)(AdminContainer);
