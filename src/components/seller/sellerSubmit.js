import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, OutlinedInput, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import SellerSubmitStyle from "./sellerSubmitStyle";
import {Link} from 'react-router-dom';

const SellerSubmit = (props) => {
    const { classes, handleChange, formData, idealClosingDate, heard, reasonSelling,
        invalidSellerFormFields, handleInput, validSellerFormFields } = props;
    const sortedReasons = reasonSelling.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });

    const getInputClasses = (fieldName) => {
        return `custom-form-control ${classes.requiredInput} hook-required ${invalidSellerFormFields.includes(fieldName) ? 'error_class' :
            formData[fieldName] !== '' && validSellerFormFields.includes(fieldName) ? 'success_class' : ''}`
    }
    return (
        <Grid item xs={12} className={classes.container}>
            <Grid container
                className="form__heading-wrapper"
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__heading" noWrap>GENERAL INFORMATION</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__sub-heading" color="primary" noWrap>Blue fields mandatory.</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" required fullWidth className={getInputClasses('field-closing-date')}>
                        <InputLabel htmlFor="field-closing-date">Ideal Closing Date?</InputLabel>
                        <Select value={formData["field-closing-date"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-closing-date" id="field-closing-date" />}>
                            {idealClosingDate.map(IsAgent => (
                                <MenuItem key={IsAgent.id} value={IsAgent.id}>
                                    {IsAgent.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" required fullWidth className={getInputClasses('field-reason-selling')}>
                        <InputLabel htmlFor="field-reason-selling">Reason Selling? *</InputLabel>
                        <Select value={formData["field-reason-selling"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-reason-selling" id="field-reason-selling" />}>
                            {sortedReasons.map(IsAgent => (
                                <MenuItem key={IsAgent.id} value={IsAgent.id}>
                                    {IsAgent.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" required fullWidth className={getInputClasses('field-heard-about-us')}>
                        <InputLabel htmlFor="field-heard-about-us">How You Heard About Us?</InputLabel>
                        <Select value={formData["field-heard-about-us"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-heard-about-us" id="field-heard-about-us" />}>
                            {heard.map(IsAgent => (
                                <MenuItem key={IsAgent.id} value={IsAgent.id}>
                                    {IsAgent.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography noWrap className={classes.sectionHelper}>
                    * Not shared with Buyers; Office Use Only. See <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}><u>Privacy Policy</u></Link>.
                    </Typography>
            </Grid>
        </Grid>
    )
}

export default withStyles(SellerSubmitStyle)(SellerSubmit);