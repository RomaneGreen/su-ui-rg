import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, OutlinedInput, FormControl, Typography, MenuItem, Select, Hidden } from '@material-ui/core';
import { staticData } from "../../common";
import MaskedInput from 'react-text-mask';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import LoaderHOC from "../hoc/loaderHOC";
import SellerInformationStyle from "./SellerInformationStyle";
// import {getInputClasses} from '../../common/helperMethods';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}


const SellerInformation = (props) => {
    const { classes, handleChange, formData, productType, invalidSellerFormFields, handleInput, varifyPromoCode, isInvalidPromoCode, validSellerFormFields } = props;
    const getInputClasses = (fieldName) => {
        return `custom-form-control ${classes.requiredInput} hook-required ${invalidSellerFormFields.includes(fieldName) ? 'error_class' :
            formData[fieldName] !== '' && validSellerFormFields.includes(fieldName) ? 'success_class' : ''}`
    }

    return (
        <Grid className={classes.container}>
            <Grid container
                className={["form__heading-wrapper", classes.formHeader].join(' ')}
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__heading" noWrap>SELLER INFORMATION</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__sub-heading" color="primary" noWrap>Blue fields mandatory.</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-first-name")}>
                        <InputLabel htmlFor="field-first-name">First Name</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-first-name" name="field-first-name" value={formData["field-first-name"]}
                            onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl required error variant="outlined" fullWidth className={getInputClasses('field-last-name')}>
                        <InputLabel htmlFor="field-last-name">Last Name</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-last-name" name="field-last-name" value={formData["field-last-name"]}
                            onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={4} className={classes.cutomInputGrid}>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className={getInputClasses('field-product-type')}>
                        <InputLabel htmlFor="field-product-type">Product Type</InputLabel>
                        <Select value={formData["field-product-type"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-product-type" id="field-product-type" />}>
                            {productType.map(product => (
                                <MenuItem key={product.id} value={product.id}>
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className={getInputClasses('field-owner-yet')}>
                        <InputLabel htmlFor="field-owner-yet">Are you the Owner ?</InputLabel>
                        <Select value={formData["field-owner-yet"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-owner-yet" id="field-owner-yet" />}>
                            {staticData.owner.map(product => (
                                <MenuItem key={product.value} value={product.value}>
                                    {product.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={4} className={classes.cutomInputGrid}>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" required fullWidth className={getInputClasses('field-work-phone')}>
                        <InputLabel htmlFor="field-work-phone">Work Phone</InputLabel>
                        <OutlinedInput inputComponent={TextMaskCustom} labelWidth={0} id="field-work-phone" name="field-work-phone" value={formData["field-work-phone"]}
                            onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" required success="true" fullWidth className={getInputClasses('field-mobile-phone')}>
                        <InputLabel htmlFor="field-mobile-phone">Mobile</InputLabel>
                        <OutlinedInput inputComponent={TextMaskCustom} labelWidth={0} id="field-mobile-phone" name="field-mobile-phone" value={formData["field-mobile-phone"]}
                            onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" required fullWidth error className={getInputClasses('field-email')}>
                        <InputLabel htmlFor="field-email">Email</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-email" name="field-email" value={formData["field-email"]}
                            onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth className={'custom-form-control ' + (isInvalidPromoCode ? ('error_class ' + classes.requiredInput) : '')}>
                        <InputLabel htmlFor="field-promo-code">Have A Promo Code?</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-promo-code" name="field-promo-code" value={formData["field-promo-code"]}
                            onChange={handleInput} onBlur={varifyPromoCode} />
                    </FormControl>
                    {isInvalidPromoCode &&
                        <Grid item xs={12} sm={12} lg={12}>
                            <Typography align={'right'} noWrap className={classes.errorMsg}>Invalid Promo Code</Typography>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

const style = {
    ...customInputStyle,
    ...SellerInformationStyle
};
export default withStyles(style)(LoaderHOC('productType')(SellerInformation));