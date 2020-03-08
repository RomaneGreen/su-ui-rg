import React, { Component } from "react";
import {
  Grid,
  Button,
  withStyles,
  InputLabel,
  OutlinedInput,
  FormControl,
  Typography
} from "@material-ui/core";
import forgetStyle from "./authenticationStyle";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";

class ForgotPassword extends Component {
  render() {
    const {
      classes,
      email,
      handleChange,
      handleSubmitEmail,
      forgotPassword,
      validLoginFormFields,
      invalidLoginFormFields,
      handleInput,
      loginType,
      onBackToLogin
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
      <React.Fragment>
        {/* these are two views i.e. for forget password - screen 18 & 19 which toggle on the basis on API call for forget password */}
        <div
          className={[classes.boxMain, classes.forgotPasswordWrapper].join(" ")}
        >
          <div className={classes.boxTitle}>
            <Typography variant="h2">{loginMessage}</Typography>
          </div>
          <div className={classes.boxReset}>
            <Typography variant="h3">Forgot Password?</Typography>

            {forgotPassword.failed ? (
              <div className={classes.lockImg}>
                <i className="sb-icon-lock"></i>
              </div>
            ) : (
              <div className={classes.lockImg}>
                <i className="sb-icon-unlock"></i>
              </div>
            )}

            {forgotPassword.failed ? (
              <Typography variant="h5">
                Enter your email
                <br />
                below to recieve your
                <br />
                password reset instructions
              </Typography>
            ) : (
              <div className={classes.boxReset1}>
                <Typography variant="h4">On IT'S WAY!</Typography>
                <Typography variant="h5">
                  Your password reset
                  <br /> request is sent to:
                </Typography>
              </div>
            )}

            {forgotPassword.failed ? (
              <div>
                {forgotPassword.message && <p>{forgotPassword.message}</p>}
                <Grid item xs={12} className={classes.cutomInputGrid}>
                  <FormControl
                    required
                    variant="outlined"
                    fullWidth
                    className={getInputClasses("email")}
                  >
                    <InputLabel htmlFor="component-filled">
                      E-Mail Address
                    </InputLabel>
                    <OutlinedInput
                      labelWidth={0}
                      id="email"
                      name="email"
                      value={email}
                      onChange={event => handleInput(event)}
                      onBlur={handleChange}
                    />
                    <i className={"sb-icon-envelope-alt"}></i>
                  </FormControl>
                </Grid>
              </div>
            ) : (
              <div className={classes.resetuser}>
                <Typography variant="p">{email}</Typography>
              </div>
            )}

            {forgotPassword.failed ? (
              <Button
                disabled={invalidLoginFormFields.length > 0}
                variant="contained"
                color="primary"
                onClick={() => handleSubmitEmail()}
              >
                SUBMIT
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.btnGray}
                onClick={() => onBackToLogin()}
              >
                BACK TO LOGIN
              </Button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(forgetStyle, customInputStyle)(ForgotPassword);
