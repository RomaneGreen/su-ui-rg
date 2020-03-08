import React from "react";
import { Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import unsubscribeStyle from "../../assets/jss/material-kit-react/components/unsubscribeStyle";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


class Saved extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={[classes.unsubscribeSec, classes.saved].join(' ')}>
                <div className={classes.container}>
                    <div className={classes.boxContainer}>
                        <div className={classes.savedContent}>
                        <Typography variant="h3">Update email settings for:</Typography>
                        <Typography variant="h4">shilenamin@gmail.com</Typography>
                        </div>
                        <div className={classes.shadeBox}>
                            <div className={classes.savedBox}>
                                <i className="sb-icon-check-filled"></i> Saved!
                            </div>
                            <Link className={classes.goHomeBtn} to={`${process.env.PUBLIC_URL}/`}>
                                <Button color={"blue"} size="lg">Go to homepage</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(unsubscribeStyle)(Saved); 