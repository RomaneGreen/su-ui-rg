import React from "react";
import { withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import { Grid, InputLabel, OutlinedInput, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { staticData } from "../../common";
import FinancialInformationStyle from "./financialInformationStyle";


function NumberFormatCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            thousandSeparator
            prefix="$ "
        />
    );
}

const FinancialInformation = (props) => {
    const { classes, formData, handleChange, invalidSellerFormFields, handleInput, validSellerFormFields } = props;
    const getInputClasses = (fieldName) => {
        return `custom-form-control ${classes.requiredInput} hook-required ${invalidSellerFormFields.includes(fieldName) ? 'error_class' :
            formData[fieldName] !== '' && validSellerFormFields.includes(fieldName) ? 'success_class' : ''}`
    }
    return (
        <Grid className={classes.container}>
            <Grid container
                className="form__heading-wrapper"
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__heading" noWrap>
                        Financial Information
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__sub-heading" color="primary" noWrap>
                        Blue fields mandatory.
                        </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={["space-reset", classes.formSubtitleWrapper].join(' ')}>
                <Grid item xs={12} sm={12} lg={12} className={classes.formSubtitle}>
                    <Typography color="inherit" noWrap className={classes.sectionHeader}>
                        VALUE
                        </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-asking-price')}>
                        <InputLabel htmlFor="field-asking-price">$ Your Asking Price</InputLabel>
                        <OutlinedInput value={formData["field-asking-price"]} inputComponent={NumberFormatCustom} labelWidth={0}
                            id="field-asking-price" name="field-asking-price" onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-listed')}>
                        <InputLabel htmlFor="field-listed">
                            Listed with Real Estate Agent?
                            </InputLabel>
                        <Select value={formData["field-listed"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-listed" id="field-listed" />}>
                            {staticData.isListedWithRealEstateAgent.map(listed => (
                                <MenuItem key={listed.value} value={listed.value}>
                                    {listed.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth className="custom-form-control">
                        <InputLabel htmlFor="field-what-price">$ If Yes, What Price?</InputLabel>
                        <OutlinedInput value={formData["field-what-price"]} inputComponent={NumberFormatCustom} labelWidth={0}
                            id="field-what-price" name="field-what-price" onChange={handleInput} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth className="custom-form-control">
                        <InputLabel htmlFor="field-mortgage-balance">$ Mortage Balance</InputLabel>
                        <OutlinedInput inputComponent={NumberFormatCustom} labelWidth={0} value={formData["field-mortgage-balance"]}
                            id="field-mortgage-balance" name="field-mortgage-balance" onChange={handleInput} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth className="custom-form-control" >
                        <InputLabel htmlFor="field-annual-taxes">$ Annual Taxes</InputLabel>
                        <OutlinedInput inputComponent={NumberFormatCustom} labelWidth={0} value={formData["field-annual-taxes"]}
                            id="field-annual-taxes" name="field-annual-taxes" onChange={handleInput} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-taxes-current')}>
                        <InputLabel htmlFor="field-taxes-current">
                            Are Taxes Current
                            </InputLabel>
                        <Select value={formData["field-taxes-current"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-taxes-current" id="field-taxes-current" />}>
                            {staticData.areTaxesCurrent.map(currentTaxes => (
                                <MenuItem key={currentTaxes.value} value={currentTaxes.value}>
                                    {currentTaxes.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(FinancialInformationStyle)(FinancialInformation);