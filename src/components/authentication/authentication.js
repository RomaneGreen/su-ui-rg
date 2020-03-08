import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import authenticationStyle from "./authenticationStyle";

class Authentication extends React.Component {
    render() {
        const { classes, loginType } = this.props;
        const loginMessage = loginType === "listing" ? "Please login to view:": "See unmatched listings first:"
        return (
            <React.Fragment>
                <div className={classes.authenticationRoot}>
                    <Typography variant="h2" className={classes.introTitle}>{loginMessage}</Typography>
                    <div className={classes.shadowBox}>
                        <div className={classes.loginBox}>
                            <Typography variant="h3" className={classes.buyerLogintitle}> Buyer Login</Typography>
                            <i className="sb-icon-buyer"></i>
                            <Link to={`${this.props.url}/login-buyer`}>
                                <Typography variant="h4" component='span'>Have password?</Typography>
                                <Button variant="contained" color="primary">LOGIN</Button>
                            </Link>
                            <div className={classes.loginOption}>
                                <Typography variant="h4" component='span'>Or</Typography>
                            </div>
                        </div>
                        <div className={classes.buyerBox}>
                            <Link to={`${process.env.PUBLIC_URL}/buyer-form`}>
                                <Typography variant="h4" component='span'>First Time? Create Account</Typography>
                                <Button variant="contained" color="primary">BUYER FORM</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
Authentication.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(authenticationStyle)(Authentication);