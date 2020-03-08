import React from "react";
import {withStyles} from "@material-ui/core";
import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";

class CopyRightFooter extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <p className={classes.secondFooter}>Copyright &copy; 2020 Sell Up. All Rights Reserved.<br />The material on this site can not be reproduced.</p>
        )
    }
};

export default withStyles(footerStyle)(CopyRightFooter);