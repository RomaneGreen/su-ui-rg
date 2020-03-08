import React from "react";
import { Grid, Button, withStyles, InputLabel, OutlinedInput, FormControl, Typography } from '@material-ui/core';
import resetStyle from "./authenticationStyle";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import SnackbarContent from "../uiComponent/Snackbar/SnackbarContent";
import classNames from 'classnames';

class ResetPassword extends React.Component {
    render() {
        const { classes, password, handleChange, handleSubmitPassword, resetPassword, loginType } = this.props;
        const loginMessage = loginType === "listing" ? "Please login to view:": "See unmatched listings first:"

        return (
            // ...This view is pending as need to discuss wth ali about how will reset passwor dbe implemented, though UI can be done
            <div className={classes.resetMain}>
            <div className={classes.boxMain}>
                <div className={classes.boxTitle}>
                    <Typography variant="h2">{loginMessage}</Typography>
                </div>
                <div className={classes.boxReset}>
                    <Typography variant="h3">Reset Password</Typography>
                    <div className={classes.lockImg}><i className="sb-icon-lock"></i></div>
                    <Typography variant="h4">Welcome Back :</Typography>
                    <div className={classes.resetuser}>
                        <Typography variant="p">Kishan Vikani</Typography>
                        <Typography variant="p">kishanvikani2@gmail.com</Typography>
                    </div>
                    <div>
                        <Grid item xs={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className={'custom-form-control mini-control required'}>
                                <InputLabel htmlFor="password">New password</InputLabel>
                                <OutlinedInput labelWidth={0} id="password" name="password" value={password}
                                    onChange={handleChange} />
                                <i className={'sb-icon-lock'}></i>
                            </FormControl>
                        </Grid>
                    </div>
                    {resetPassword.failed && 
                    <Grid container direction="row" justify='center' alignItems="center"
                        className={classNames(classes.notification)}>
                        <SnackbarContent message={<span>Please try again</span>} close color="danger" icon="sb-icon-info"/>
                    </Grid>}
                    <Button variant="contained" color="primary" onClick={handleSubmitPassword}>SUBMIT</Button>
                </div>
            </div>
            </div>
        )
    }
}



export default withStyles(resetStyle, customInputStyle)(ResetPassword);