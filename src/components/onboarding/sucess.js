import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';import Logo from "../../assets/images/logo-circular.svg";
import { Link } from 'react-router-dom'

const styles = theme => ({
    containerMain: {
        display: 'flex',
        backgroundColor: '#fff',
        maxWidth: 600,
        margin: '0 auto 40px',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0 5px 20px rgba(128, 128, 128, 0.3)',
        padding: '34px 70px 40px',
        [theme.breakpoints.down("xs")]: {
            padding: '30px 15px 40px',
        },
    },
    sectionHeader: {
        fontSize: 16,
        color: '#5b96ef',
        fontWeight: 700
    },
    agentFormHeadingSuccess: {
        paddingBottom: '17px',
        borderBottom: '2px solid rgba(111,0,255,.5)',
        width: '100%',
        textAlign: 'center',
        marginBottom: '43px',
        '& > p': {
            color: '#6e00ff',
            fontSize: '30px',
            fontWeight: '900',
            [theme.breakpoints.down("xs")]: {
                fontSize: '24px',
            },
        }
    },
    teamFormHeadingSuccess: {
        paddingBottom: '20px',
        borderBottom: '2px solid #f8d082',
        width: '100%',
        textAlign: 'center',
        marginBottom: '40px',
        '& > p': {
            color: '#f2a105',
            fontSize: '30px',
            fontWeight: '900',
            [theme.breakpoints.down("xs")]: {
                fontSize: '24px',
            },
        }
    },
    successMessage: {
        color: "#8a8a8a",
        textAlign: 'center',
        fontSize: '23px',
        fontWeight: '500',
        lineHeight: '1.4',
        marginBottom: '23px',
        maxWidth: '370px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '16px',
            marginBottom: '28px',
        },
    },
    successMessageIcon:{
        fontSize:126,
        textAlign:'center',
        color:'#a1a1a1',
        lineHeight:'1',
        marginBottom: '23px',
        marginTop: '10px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '100px',
            marginBottom: '20px',
            marginTop: '0',
        },
    },
    sellerBailoutLogo: {
        textAlign: 'center',
        paddingTop:22,
        '& > p': {
            color: "#8a8a8a",
            textAlign: 'center',
            fontSize: '23px',
            fontWeight: '500',
            lineHeight: '1.4',
            marginBottom: '10px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '16px',
            },
        },
        '& > img': {
            width: '67px',
            [theme.breakpoints.down("xs")]: {
                width: '62px',
            },
        }
    },
    agentButtonSecondry: {
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        textTransform: 'uppercase',
        fontSize: 21,
        padding: '22px 20px',
        width: '100%',
        maxWidth: '411px',
        
        borderRadius:'5px',
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        transition:'all 200ms ease-in-out',
        [theme.breakpoints.down("xs")]: {
            padding: '16px 20px',
            maxWidth: '260px',
        },
        backgroundColor: '#6f00ff',
        '&:hover, &:focus, &:active':{
            boxShadow: '0 14px 26px -12px rgba(91, 46, 230, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(100, 46, 230, 0.2)',
            backgroundColor: '#6302e0',
            color:'#fff'
        }
    },
    teamButtonSecondry: {
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        textTransform: 'uppercase',
        fontSize: 21,
        padding: '22px 20px',
        width: '100%',
        maxWidth: '411px',
        
        borderRadius:'5px',
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        transition:'all 200ms ease-in-out',
        [theme.breakpoints.down("xs")]: {
            padding: '16px 20px',
            maxWidth: '260px',
        },
        backgroundColor: '#f2a105',
        '&:hover, &:focus, &:active':{
            boxShadow: '0 14px 26px -12px rgba(230, 165, 46, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(230, 182, 46, 0.2)',
            backgroundColor: '#e29603',
            color:'#fff'
        }
    },
})

const Sucess = (props) => {
    const { classes, isAgentOnboarding } = props;
    console.log(isAgentOnboarding);
    return (
        <div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerMain}>
                <Grid item xs={12} className={isAgentOnboarding ? classes.agentFormHeadingSuccess : classes.teamFormHeadingSuccess}>
                    <Typography noWrap>
                    WELL DONE!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.successMessageIcon}>
                        <i className="sb-icon-clap"></i>
                    </Typography>
                    <Typography className={classes.successMessage}>
                    Thank you for completing <br />the Agent Onboarding
                    </Typography>
                    <Typography className={classes.successMessage}>
                    Tha Admin Office will be<br /> in touch with you shortly<br /> after verifying your account
                    </Typography>
                    
                </Grid>
                <Grid item xs={12} className={classes.sellerBailoutLogo}>
                    <Typography noWrap>
                    Sincerely,
                    </Typography>
                    <img src={Logo} alt="Sell Up" title="Sell Up" />
                </Grid>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerButton}>

                <Link to={`${process.env.PUBLIC_URL}/`} color="warning" className={classNames(isAgentOnboarding ? classes.agentButtonSecondry : classes.teamButtonSecondry)}>GO TO HOMEPAGE</Link>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Sucess);