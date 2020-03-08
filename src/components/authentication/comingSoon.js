import React from "react";
import { withStyles, Typography } from '@material-ui/core';
import comingsoonStyle from "./authenticationStyle";

class ComingSoon extends React.Component {
    render() {
        const { classes, loginType } = this.props;
        const loginMessage = loginType === "listing" ? "Please login to view:": "See unmatched listings first:"
        return (
            <div className={classes.comingSoon}>
                <div className={classes.boxTitle}>
                    <Typography variant="h2">{loginMessage}</Typography>
                </div>
                <div className={classes.csBlock}>
                    <Typography variant="h2">Coming Soon!</Typography>
                    <Typography variant="h4">
                        New listings portal<br />in the works, please<br />check back soon to<br />get your early access. 
                    </Typography>
                </div>
            </div>
        )
    }
}



export default withStyles(comingsoonStyle)(ComingSoon);