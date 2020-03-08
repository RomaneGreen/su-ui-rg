import React from "react";
import {withStyles} from "@material-ui/core";
import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";

class SocialFooter extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <p className={classes.secondFooter}>Copyright &copy; 2020 Sell Up. All Rights Reserved.<br />The material on this site can not be reproduced.
                </p>
                <p>COPYTIGHT ICONS FOOTER <span className="sb-icon-google-plus"></span> 
                <span className="sb-icon-youtube"></span><span className="sb-icon-pintrest"></span></p>
            </div>
        )
    }
};

export default withStyles(footerStyle)(SocialFooter);