import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Button,
  withStyles,
  InputLabel,
  OutlinedInput,
  FormControl,
  Checkbox,
  FormControlLabel,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import loginStyle from "./authenticationStyle";
import SnackbarContent from "../uiComponent/Snackbar/SnackbarContent";
import classNames from "classnames";

class Login extends React.Component {
  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.handleLogin(e);
    }
  };

  render() {
    const {
      classes,
      handleChange,
      handleInput,
      email,
      password,
      handleLogin,
      rememberMe,
      loginStatus,
      validLoginFormFields,
      invalidLoginFormFields,
      loginType
    } = this.props;
    const getInputClasses = fieldName => {
      return `custom-form-control mini-control required ${
        classes.requiredInput
      } ${
        invalidLoginFormFields.includes(fieldName)
          ? "error_class"
          : validLoginFormFields.includes(fieldName)
          ? "success_class"
          : ""
      }`;
    };
    const loginMessage =
      loginType === "listing"
        ? "Please login to view:"
        : "See unmatched listings first:";

    return (
      <div className={classes.boxPanel}>
        <Typography variant="h2" className={classes.introTitle}>
          {loginMessage}
        </Typography>
        <div className={classes.card}>
          <div className={classes.cardHeaeder}>
            <Typography variant="h3">Buyer Login</Typography>
          </div>
          <div className={classes.cardImg}>
            <i className="sb-icon-buyer"></i>
          </div>
          <Grid container justify={"flex-start"} className={"space-reset "}>
            <Grid item xs={12} className={classes.cutomInputGrid}>
              <FormControl
                required
                variant="outlined"
                fullWidth
                className={getInputClasses("email")}
              >
                <InputLabel htmlFor="component-filled">E-Mail</InputLabel>
                <OutlinedInput
                  labelWidth={0}
                  id="email"
                  name="email"
                  onChange={handleInput}
                  onBlur={handleChange}
                  onKeyDown={this.handleKeyDown}
                  value={email}
                />
                <i className={"sb-icon-envelope-alt"}></i>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.cutomInputGrid}>
              <FormControl
                required
                variant="outlined"
                fullWidth
                className={getInputClasses("password")}
              >
                <InputLabel htmlFor="component-filled">Password</InputLabel>
                <OutlinedInput
                  type="password"
                  labelWidth={0}
                  id="passwword"
                  name="password"
                  onChange={handleInput}
                  onBlur={handleChange}
                  onKeyDown={this.handleKeyDown}
                  value={password}
                />
                <i className={"sb-icon-lock"}></i>
              </FormControl>
            </Grid>
          </Grid>
          <FormControlLabel
            className={classes.check}
            control={
              <Checkbox
                checked={rememberMe}
                id="rememberMe"
                name="rememberMe"
                onChange={handleChange}
                color="primary"
              />
            }
            label="Remember Me"
          />
          {loginStatus.failed && (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classNames(classes.notification)}
            >
              <SnackbarContent
                message={<span>Unauthorised</span>}
                close
                color="danger"
                icon="sb-icon-info"
              />
            </Grid>
          )}
          <Button
            disabled={invalidLoginFormFields.length > 0}
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <div className={classes.forgetPassword}>
            <Link to={`${process.env.PUBLIC_URL}/authenticate/forgot-password`}>
              Forgot Password ?
            </Link>
          </div>
        </div>
        <div className={classes.boxFooter}>
          Mistake? Go To:
          <Link to={`${process.env.PUBLIC_URL}/create-account`}>
            <span>CREATE ACCOUNT</span>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginStyle, customInputStyle)(Login);
