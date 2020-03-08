import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import Logo from "../../assets/images/logo-circular.svg";
import { Link } from 'react-router-dom'

const styles = theme => ({
    containerMain: {
        display: 'flex',
        backgroundColor: '#fff',
        maxWidth: 600,
        margin: '0 auto 48px',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0 5px 20px rgba(128, 128, 128, 0.3)',
        padding: '41px 70px 52px',
        [theme.breakpoints.down("xs")]: {
            padding: '30px 15px 40px',
        },
    },
    sectionHeader: {
        fontSize: 16,
        color: '#5b96ef',
        fontWeight: 700
    },
    formHeadingSuccess: {
        paddingBottom: '17px',
        borderBottom: '2px solid rgba(80,169,66,.5)',
        width: '100%',
        textAlign: 'center',
        marginBottom: '36px',
        '& > p': {
            color: '#50a942',
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
        marginBottom: '27px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '16px',
        },
    },
    sellerBailoutLogo: {
        textAlign: 'center',
        '& > p': {
            color: "#8a8a8a",
            textAlign: 'center',
            fontSize: '23px',
            fontWeight: '500',
            lineHeight: '1.4',
            marginBottom: '7px',
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
    buttonSecondry: {
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
        textTransform: 'uppercase',
        fontSize: 21,
        padding: '22px 20px',
        width: '100%',
        maxWidth: '411px',
        backgroundColor:'#50a942',
        borderRadius:'5px',
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        transition:'all 200ms ease-in-out',
        [theme.breakpoints.down("xs")]: {
            padding: '16px 20px',
        },
        '&:hover': {
            backgroundColor: '#2d8a1f',
            borderColor: '#2d8a1f',
            color:'#fff'
        },
        '&:active': {
            backgroundColor: '#2d8a1f',
            borderColor: '#2d8a1f',
            color:'#fff'
        },
        '&:focus': {
            backgroundColor: '#2d8a1f',
            boxShadow: '0 0 0 0.2rem rgba(134,189,70,.5)',
            color:'#fff'
        },
    },
})
const SellerSuccess = (props) => {
    const { classes } = props;
    return (
        <div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerMain}>
                <Grid item xs={12} className={classes.formHeadingSuccess}>
                    <Typography noWrap>
                        GOOD JOB !
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.successMessage}>
                        One of our Agents will be touch<br />with you shortly to discuss next steps.
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.sellerBailoutLogo}>
                    <Typography noWrap>
                        Sincerely
                    </Typography>
                    <img src={Logo} alt="Sell Up" title="Sell Up" />
                </Grid>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerButton}>
                <Link to={`${process.env.PUBLIC_URL}/`} color="success" className={classNames(classes.buttonSecondry)}>GO TO HOMEPAGE</Link>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SellerSuccess);