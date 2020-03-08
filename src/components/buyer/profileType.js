import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem, InputLabel, OutlinedInput, FormControl, Grid, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { staticData } from "../../common";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import BuyerProfileType from "./buyerProfileType";
import Button from "../uiComponent/CustomButtons/Button";
import buyerStyle from "./buyerStyle";

class ProfileType extends React.Component {

    state = {
        expanded: "profileType",
        validPanels: []
    };

    handlePanelChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    panels = ["profileType", "investingExperience", "generalInfo"];

    handleDone = (panel) => {
        let isPanelValid = this.props.handleDoneClick_buyerProfile(panel);
        if (isPanelValid) {
            window.scrollTo({ top: 250, left: 0, behavior: "smooth" });

            let { validPanels } = this.state;
            if (!validPanels.includes(panel)) {
                validPanels.push(panel);
                this.setState({ validPanels });
            }

            let currentPanelIndex = this.panels.indexOf(panel);

            if (currentPanelIndex === 2) {
                this.setState({ expanded: null });
            }
            else {
                this.setState({ expanded: this.panels[currentPanelIndex + 1] });
            }

            if (validPanels.length === this.panels.length) {
                this.props.setBuyerProfileValidated();
            }
        }
    };

    render() {
        const { expanded } = this.state;
        const { classes, handleChange, handleInput, formData, isMyAccount, invalidBuyerFormFields, validBuyerFormFields, investingExpEdit, genralInfoEdit, profileTypeEdit } = this.props;
        const getInputClasses = (fieldName) => {
            return `custom-form-control ${classes.requiredInput} hook-required ${invalidBuyerFormFields.includes(fieldName) ? 'error_class' :
                formData[fieldName] !== '' && validBuyerFormFields.includes(fieldName) ? 'success_class' : ''}`
        }
        const getInputValue = (fieldName) => {
            if (isMyAccount && formData.buyer && !formData[fieldName]) {
                if (fieldName === 'buy_in') {
                    let value = formData.buyer[fieldName];
                    if (value === 0) {
                        value = '0';
                    } else if (value === 30) {
                        value = '1';
                    } else if (value === 60) {
                        value = '2';
                    } else if (value === 90) {
                        value = '3';
                    }
                    return staticData[fieldName].find(item => item.id.toString() === value.toString()).value;
                } else if (fieldName === 'are_you_agent') {
                    let value = formData.buyer[fieldName];
                    return staticData[fieldName].find(item => item.value.toString() === value.toString()).value;
                } else if(fieldName === 'heard') {
                    return staticData[fieldName].find(item => item.value.toString() === formData.buyer['heard_id'].toString()).value;
                } else {
                    if (formData.buyer[fieldName] !== undefined && ["are_you_cash_buyer", "closing_period", "buy_in","purchase", "are_you_agent", "heard"].includes(fieldName)) {
                        return staticData[fieldName].find(item => item.id === formData.buyer[fieldName].toString()).value;

                    }
                }
            } else {
                return formData[fieldName]
            }
        }
        return (
            <Grid xs={12}>

                <BuyerProfileType handleChange={handleChange} handlePanelChange={this.handlePanelChange} formData={formData} handleDone={this.handleDone} expanded={expanded} validPanels={this.state.validPanels} isMyAccount={isMyAccount} profileTypeEdit={profileTypeEdit} onClick={this.props.onClick} />

                <div className={classes.panelMain}>
                    <Grid className={classes.panelWrapperBox}>
                        <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView ? true : expanded === 'investingExperience' || isMyAccount} onChange={this.handlePanelChange('investingExperience')} >
                            <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={<i className={this.state.validPanels.includes("investingExperience") && expanded !== "investingExperience" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={isMyAccount ? 9 : 12}  sm={6} lg={6}>
                                        <Typography className="form__heading" noWrap>
                                            INVESTING EXPERIENCE
                                    </Typography>
                                    </Grid>
                                    {isMyAccount ?
                                        <Grid item xs={3} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                            <Button name='investingExpEdit' onClick={this.props.onClick}   
                                            className={classes.btnMyAccount + ( investingExpEdit ? " save": " edit")}>
                                                {investingExpEdit ? "Save" : "Edit"}
                                            </Button>
                                        </Grid>
                                    :
                                    <Hidden xsDown>
                                        <Grid item xs={12} sm={6} lg={6}>
                                            <Typography className="form__sub-heading" color="primary" noWrap>
                                            Blue fields mandatory.
                                            </Typography>
                                        </Grid>
                                    </Hidden>
                                    }
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <div className={classes.fullWidth}>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                            Blue fields mandatory.
                                        </Typography>
                                    </div>
                                </Hidden>
                            }
                                <div className={classes.fullWidth}>
                                    <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth className={getInputClasses("purchase") + ' requiredInput'} >
                                                <InputLabel htmlFor="purchase">Purchases in Last 12 Months?</InputLabel>
                                                <Select disabled={isMyAccount && !investingExpEdit} value={getInputValue("purchase")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}>
                                                    {staticData.purchase.map(purchase => (
                                                        <MenuItem key={purchase.value} value={purchase.value}>
                                                            {purchase.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth className={getInputClasses("are_you_cash_buyer") + ' requiredInput'}>
                                                <InputLabel htmlFor="are_you_cash_buyer">Are you an All Cash Buyer?</InputLabel>
                                                <Select disabled={isMyAccount && !investingExpEdit} value={getInputValue("are_you_cash_buyer")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="are_you_cash_buyer" id="all-cash-buyer" />}>
                                                    {staticData.are_you_cash_buyer.map(allCash => (
                                                        <MenuItem key={allCash.value} value={allCash.value}>
                                                            {allCash.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth className={getInputClasses("closing_period") + ' requiredInput'}>
                                                <InputLabel htmlFor="closing_period">Typical Closing Period?</InputLabel>
                                                <Select disabled={isMyAccount && !investingExpEdit} value={getInputValue("closing_period")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="closing_period" id="closing-period" />}>
                                                    {staticData.closing_period.map(typicalClosingPeriod => (
                                                        <MenuItem key={typicalClosingPeriod.value} value={typicalClosingPeriod.value}>
                                                            {typicalClosingPeriod.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        {window.SB_IsMobileView &&
                                            <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth>
                                                    <Button color="success" size="lg" className="done_button" onClick={() => this.handleDone("investingExperience")}>Done</Button>
                                                </FormControl>
                                            </Grid>
                                        }
                                    </Grid>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid className={classes.panelWrapperBox}>
                        <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView ? true : expanded === 'generalInfo' || isMyAccount} onChange={this.handlePanelChange('generalInfo')} >
                            <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={<i className={this.state.validPanels.includes("generalInfo") && expanded !== "generalInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={isMyAccount ? 9 : 12}  sm={6} lg={6}>
                                        <Typography className="form__heading" noWrap>
                                            GENERAL INFORMATION
                                    </Typography>
                                    </Grid>
                                    {isMyAccount ?
                                        <Grid item xs={3} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                            <Button name='genralInfoEdit' onClick={this.props.onClick}   
                                            className={classes.btnMyAccount + ( genralInfoEdit ? " save": " edit")}>
                                                {genralInfoEdit ? "Save" : "Edit"}
                                            </Button>
                                        </Grid>
                                    :
                                    <Hidden xsDown>
                                        <Grid item xs={12} sm={6} lg={6}>
                                            <Typography className="form__sub-heading" color="primary" noWrap>
                                            Blue fields mandatory.
                                            </Typography>
                                        </Grid>
                                    </Hidden>
                                    }
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <div className={classes.fullWidth}>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                                Blue fields mandatory.
                                        </Typography>
                                    </div>
                                </Hidden>
                            }
                                <div className={classes.fullWidth}>
                                    <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth className={getInputClasses("buy_in") + ' requiredInput'}>
                                                <InputLabel htmlFor="buy_in">Looking to Buy In?</InputLabel>
                                                <Select disabled={isMyAccount && !genralInfoEdit} value={getInputValue("buy_in")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="buy_in" id="buy_in" />}>
                                                    {staticData.buy_in.map(buyIn => (
                                                        <MenuItem key={buyIn.value} value={buyIn.value}>
                                                            {buyIn.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth className={getInputClasses("are_you_agent") + ' requiredInput'}>
                                                <InputLabel htmlFor="are_you_agent">Are you a Real Estate Agent?</InputLabel>
                                                <Select disabled={isMyAccount && !genralInfoEdit} value={getInputValue("are_you_agent")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="are_you_agent" id="are_you_agent" />}>
                                                    {staticData.are_you_agent.map(agent => (
                                                        <MenuItem key={agent.value} value={agent.value}>
                                                            {agent.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth className={getInputClasses("heard") + ' requiredInput'}>
                                                <InputLabel htmlFor="heard">How you Heard About Us?</InputLabel>
                                                <Select disabled={isMyAccount && !genralInfoEdit} value={getInputValue("heard")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="heard" id="heard" />}>
                                                    {staticData.heard.map(source => (
                                                        <MenuItem key={source.value} value={source.value}>
                                                            {source.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        {window.SB_IsMobileView &&
                                            <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth>
                                                    <Button color="success" size="lg" className="done_button" onClick={() => this.handleDone("generalInfo")}>Done</Button>
                                                </FormControl>
                                            </Grid>
                                        }

                                    </Grid>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </div>
            </Grid>
        )
    }
}

export default withStyles(buyerStyle, customInputStyle)(ProfileType);