import React from "react";
import PropTypes from 'prop-types';
import {Grid, Button, withStyles, InputLabel, OutlinedInput, FormControl, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import adminLoginStyle from "./adminLoginStyle";


class AgentLogin extends React.Component {
    render() {
        const { classes, handleChange, handleLogin, rememberMe, url } = this.props;
        return (
            <div className={classes.boxPanel}>
                <div className={classes.card}>
                    <div className={classes.cardHeaeder} >
                        <Typography variant="h3">Agent Login</Typography>
                    </div> 
                    <div className={classes.cardImg}><i className="sb-icon-agent"></i></div>
                    <Grid container  justify={'flex-start'} className={"space-reset "}>
                        <Grid item xs={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className={'custom-form-control mini-control required'}>
                                <InputLabel htmlFor="component-filled">Email</InputLabel>
                                <OutlinedInput labelWidth={0} id="email" name="email"  />
                                <i className={'sb-icon-envelope-alt'}></i>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className={'custom-form-control mini-control required'}>
                                <InputLabel htmlFor="component-filled">Password</InputLabel>
                                <OutlinedInput type="password" labelWidth={0} id="password" name="password"  />
                                <i className={'sb-icon-lock'}></i>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControlLabel className={classes.check}
                       control={<Checkbox checked={rememberMe} id="rememberMe" name="rememberMe" onChange={handleChange} color="primary" />}
                        label="Remember Me"
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleLogin}>
                        Sign In
                    </Button>
                    <div className={classes.forgetPassword}>
                        <Link to={`${process.env.PUBLIC_URL}/${url}/forgot-password`}>
                            Forgot Password ?
                    </Link>
                    </div>
                </div>


            </div>
        )
    }
}

AgentLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(adminLoginStyle, customInputStyle)(AgentLogin);