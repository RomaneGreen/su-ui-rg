import React from "react";
import { Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import unsubscribeStyle from "../../assets/jss/material-kit-react/components/unsubscribeStyle";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


class Member extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.unsubscribeSec}>
                <div className={classes.container}>
                    <div className={classes.boxContainer}>
                        <div className={classes.shadeBox}>
                            <Typography variant="h3">Are you sure you want to unsubscribe:</Typography>
                            <Typography variant="h4">shilenamin@gmail.com</Typography>
                            <div className={classes.boxContent}>
                                <p>You will no longer receive any alerts, updates or listing matches.</p>
                                <p>Or you can change email setting:</p>
                            </div>
                            <div className={classes.actionUpdate}>
                                <Link className={classes.btnBlue} to="">
                                    <Button color={"blue"} size="lg">update email settings</Button>
                                </Link>
                            </div>
                            <div className={classes.actionUpdate}>
                                <Link className={classes.btnUnsubscribe} to="">
                                    <Button color={"red"} size="lg">unsubscribe</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(unsubscribeStyle)(Member); 