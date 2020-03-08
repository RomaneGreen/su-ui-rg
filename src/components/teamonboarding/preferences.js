import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem, InputLabel, OutlinedInput, FormControl, Grid, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { staticData } from "../../common";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import Button from "../uiComponent/CustomButtons/Button";
import buyerStyle from "./onBoardingStyle";

class Preferences extends React.Component {

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
        const { classes, handleChange, handleInput, formData, isMyAccount, investingExpEdit, genralInfoEdit } = this.props;
        // const getInputClasses = (fieldName) => {
        //     return `custom-form-control non-required ${classes.requiredInput} ${invalidBuyerFormFields.includes(fieldName) ? 'error_class' :
        //         formData[fieldName] !== '' && validBuyerFormFields.includes(fieldName) ? 'success_class' : ''}`
        // }
        const getInputValue = (fieldName) => {
            if (isMyAccount && formData.buyer) {
                if (["are_you_cash_buyer", "closing_period", "buy_in","purchase", "are_you_agent", "heard"].includes(fieldName)) {
                    return staticData[fieldName].find(item => item.id === formData.buyer[fieldName]).value;
                }
            }
            else {
                return formData[fieldName]
            }
        }
        return (
                <div className={classes.panelMain}>
                    <div className={classes.adgentPanelTagBar}>
                    Please provide the position you are applying for.
                    </div>
                    <Grid className={classes.panelWrapperBox}>
                        <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView ? true : expanded === 'investingExperience' || isMyAccount} onChange={this.handlePanelChange('investingExperience')} >
                            <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={<i className={this.state.validPanels.includes("investingExperience") && expanded !== "investingExperience" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={isMyAccount ? 9 : 12}  sm={6} lg={6}>
                                        <Typography className="form__heading" noWrap>
                                        MY POSITION
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
                                    null
                                    }
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                                {!isMyAccount &&
                                    <Hidden smUp>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                        {/* dont remove this */}
                                        </Typography>
                                    </Hidden>
                                }
                                <div className={classes.fullWidth}>
                                    <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'} >
                                                <InputLabel htmlFor="department-name">Department Name</InputLabel>
                                                <Select disabled={isMyAccount && !investingExpEdit} value={getInputValue("department-name")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="department-name" id="department-name" />}>
                                                    {staticData.Department_Name.map(department => (
                                                        <MenuItem key={department.value} value={department.value}>
                                                            {department.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="component-filled">Position Name</InputLabel>
                                                <OutlinedInput labelWidth={0} id="position-name" name="position-name" value={formData["position-name"]} onChange={handleInput} onBlur={handleChange} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="who-i-report">Who I Report To?</InputLabel>
                                                <OutlinedInput labelWidth={0} id="who-i-report" name="who-i-report" value={formData["who-i-report"]} onChange={handleInput} onBlur={handleChange} />
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
                    
                    <div className={classes.adgentPanelTagBar}>
                    If selling Real Estate or Mortgage Notes, select top choices to get matched.
                    </div>
                    <Grid className={classes.panelWrapperBox}>
                        <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView ? true : expanded === 'generalInfo' || isMyAccount} onChange={this.handlePanelChange('generalInfo')} >
                            <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={<i className={this.state.validPanels.includes("generalInfo") && expanded !== "generalInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={isMyAccount ? 9 : 12}  sm={6} lg={6}>
                                        <Typography className="form__heading" noWrap>
                                        MY TERRITORIES
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
                                    null
                                    }
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                                {!isMyAccount &&
                                    <Hidden smUp>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                        {/* dont remove this */}
                                        </Typography>
                                    </Hidden>
                                }
                                <div className={classes.fullWidth}>
                                    <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <div className={classes.staticLabels}>1ST - PREFERENCE</div>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="first-preference-state">State</InputLabel>
                                                <Select value={getInputValue("first-preference-state")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="first-preference-state" id="all-cash-buyer" />}>
                                                    {staticData.states.map(state => (
                                                        <MenuItem key={state.name} value={state.name}>
                                                            {state.code}-{state.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <div className={classes.staticLabels}></div>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="first-preference-country">Country</InputLabel>
                                                <Select value={getInputValue("first-preference-country")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="first-preference-country" id="all-cash-buyer" />}>
                                                    {staticData.countries.map(country => (
                                                        <MenuItem key={country.name} value={country.name}>
                                                            {country.code}-{country.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Hidden mdDown>
                                            <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                        </Hidden>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <div className={classes.staticLabels}>2ND - PREFERENCE</div>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="second-preference-state">State</InputLabel>
                                                <Select value={getInputValue("second-preference-state")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="second-preference-state" id="all-cash-buyer" />}>
                                                    {staticData.states.map(state => (
                                                        <MenuItem key={state.name} value={state.name}>
                                                            {state.code}-{state.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <div className={classes.staticLabels}></div>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="second-preference-country">Country</InputLabel>
                                                <Select value={getInputValue("second-preference-country")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="second-preference-country" id="all-cash-buyer" />}>
                                                    {staticData.countries.map(country => (
                                                        <MenuItem key={country.name} value={country.name}>
                                                            {country.code}-{country.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Hidden mdDown>
                                            <Grid item lg={4} className={classes.cutomInputGrid}></Grid>
                                        </Hidden>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <div className={classes.staticLabels}>3RD - PREFERENCE</div>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="third-preference-state">State</InputLabel>
                                                <Select value={getInputValue("third-preference-state")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="third-preference-state" id="third-preference-state" />}>
                                                    {staticData.states.map(state => (
                                                        <MenuItem key={state.value} value={state.value}>
                                                            {state.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <div className={classes.staticLabels}></div>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="third-preference-country">Country</InputLabel>
                                                <Select value={getInputValue("third-preference-country")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="third-preference-country" id="all-cash-buyer" />}>
                                                    {staticData.countries.map(country => (
                                                        <MenuItem key={country.name} value={country.name}>
                                                            {country.code}-{country.name}
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

                    <div className={classes.adgentPanelTagBar}>
                    If selling Real Estate or Mortgage Notes, select highest level of experience.
                    </div>
                    <Grid className={classes.panelWrapperBox}>
                        <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView ? true : expanded === 'generalInfo' || isMyAccount} onChange={this.handlePanelChange('generalInfo')} >
                            <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={<i className={this.state.validPanels.includes("generalInfo") && expanded !== "generalInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={isMyAccount ? 9 : 12}  sm={6} lg={6}>
                                        <Typography className="form__heading" noWrap>
                                        MY EXPERIENCE
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
                                    null
                                    }
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                                {!isMyAccount &&
                                    <Hidden smUp>
                                        <Typography className="form__sub-heading" color="primary" noWrap>
                                        {/* dont remove this */}
                                        </Typography>
                                    </Hidden>
                                }
                                <div className={classes.fullWidth}>
                                    <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="product-type">Product Type</InputLabel>
                                                <Select value={getInputValue("product-type")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="product-type" id="product-type" />}>
                                                    {staticData.Product_Types.map(productType => (
                                                        <MenuItem key={productType.value} value={productType.value}>
                                                            {productType.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl variant="outlined" fullWidth className={'custom-form-control non-required'}>
                                                <InputLabel htmlFor="asset-type">Asset Type</InputLabel>
                                                <Select disabled={isMyAccount && !investingExpEdit} value={getInputValue("asset-type")} onChange={handleInput} onBlur={handleChange}
                                                    input={<OutlinedInput labelWidth={0} name="asset-type" id="closing-period" />}>
                                                    {staticData.Asset_Types.map(assetTypes => (
                                                        <MenuItem key={assetTypes.value} value={assetTypes.value}>
                                                            {assetTypes.label}
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
            
        )
    }
}

export default withStyles(buyerStyle, customInputStyle)(Preferences);