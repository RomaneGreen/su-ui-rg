import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

function arrowGenerator(color) {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent #373737 transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `#373737 transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent #373737 transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent #373737`,
            },
        },
    };
}

const styles = theme => ({
    tooltipContainer: {
        display: 'inline',
        marginLeft: '4px'
    },

    button: {
        margin: theme.spacing.unit,
    },

    arrowPopper: arrowGenerator('#373737'),
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    bootstrapPopper: {
        ...arrowGenerator('#373737'),
        opacity: 1,
        fontSize: 14,
        maxWidth: 274
    },
    bootstrapTooltip: {
        backgroundColor: '#373737',
        fontSize: 14,
        maxWidth: 274
    },
    bootstrapPlacementLeft: {
        margin: '0 8px',
        backgroundColor: '#373737',
        opacity: '1 !important'
    },
    bootstrapPlacementRight: {
        margin: '0 8px',
        backgroundColor: '#373737',
        opacity: '1 !important'
    },
    bootstrapPlacementTop: {
        margin: '8px 0',
        backgroundColor: '#373737',
        opacity: '1 !important'
    },
    bootstrapPlacementBottom: {
        margin: '8px 0',
        backgroundColor: '#373737',
        opacity: '1 !important'
    },
});
// const test =()=>{ return <div><i className="sb-icon-info-alt"></i><img  src="" width="20px" height="20px"/></div>};

class SellerBailoutTooltip extends React.Component {
    state = {
        arrowRef: null
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };

    render() {
        const { classes, tooltipText, position, tooltipContent } = this.props;

        return (
            <div className={classes.tooltipContainer}>
                <Tooltip
                    title={
                        <div>
                            {tooltipText}
                            <span className={classes.arrow} ref={this.handleArrowRef} />
                            {tooltipContent}
                        </div>
                    }
                    interactive
                    disableFocusListener = {false}
                    placement={position || "top"}
                    // children = {test}
                    classes={{
                        tooltip: classes.bootstrapTooltip,
                        popper: classes.bootstrapPopper,
                        tooltipPlacementLeft: classes.bootstrapPlacementLeft,
                        tooltipPlacementRight: classes.bootstrapPlacementRight,
                        tooltipPlacementTop: classes.bootstrapPlacementTop,
                        tooltipPlacementBottom: classes.bootstrapPlacementBottom,
                    }}
                    PopperProps={{
                        popperOptions: {
                            modifiers: {
                                arrow: {
                                    enabled: Boolean(this.state.arrowRef),
                                    element: this.state.arrowRef,
                                },
                            },
                        },
                    }}
                >
                    <i className="sb-icon-info-alt"></i>
                    {/* <Button className={classes.button}>Bootstrap</Button> */}
                </Tooltip >
            </div >
        );
    }
}

SellerBailoutTooltip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SellerBailoutTooltip);
