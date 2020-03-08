import React, { Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, OutlinedInput, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import Datetime from "react-datetime";
import PropertyInformationStyle from "./PropertyInformationStyle";
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";

const PropertyInformation = (props) => {
    const { classes, handleChange, formData, states, assetTypes, dropDowns,
        invalidSellerFormFields, handleInput, validSellerFormFields } = props;
    // fields bedrooms, bathrooms, stories, units deleted because they unused
    const { loanStatus, lienPosition, interestRate, propertyUsedAs } = dropDowns;
    const assetNotSelected = formData["field-asset-type"] === "";

    const getInputClasses = (fieldName) => {
        return `custom-form-control ${classes.requiredInput} hook-required ${invalidSellerFormFields.includes(fieldName) ? 'error_class' :
            formData[fieldName] !== '' && validSellerFormFields.includes(fieldName) ? 'success_class' : ''}`
    }
    function renderAssetType() {
        let assetType;
        if (formData["field-asset-type"] === 1) { // Commercial
            assetType =
                <Fragment>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-stories')}>
                            {/* <InputLabel htmlFor="field-stories"># Of Stories</InputLabel>
                            <Select value={formData["field-stories"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-stories" id="field-stories"
                                    disabled={assetNotSelected} />}>
                                {stories.map(story => (
                                    <MenuItem key={story.id} value={story.id}>
                                        {story.name}
                                    </MenuItem>
                                ))}
                            </Select> */}
                            <InputLabel htmlFor="field-stories"># Of Stories</InputLabel>
                            <OutlinedInput labelWidth={0} id="field-stories" name="field-stories"
                                value={formData["field-stories"]} onChange={handleInput} onBlur={handleChange} disabled={assetNotSelected} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-units')}>
                            {/* <InputLabel htmlFor="field-units"># Of Units</InputLabel>
                            <Select value={formData["field-units"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-units" id="field-units"
                                    disabled={assetNotSelected} />}>
                                {units.map(unit => (
                                    <MenuItem key={unit.id} value={unit.id}>
                                        {unit.name}
                                    </MenuItem>
                                ))}
                            </Select> */}
                            <InputLabel htmlFor="field-units"># Of Units</InputLabel>
                            <OutlinedInput labelWidth={0} id="field-units" name="field-units"
                                value={formData["field-units"]} onChange={handleInput} onBlur={handleChange} disabled={assetNotSelected} />

                        </FormControl>
                    </Grid>
                </Fragment>
        } else {
            assetType =
                <Fragment>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        {/* <FormControl variant="outlined" required fullWidth className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-bedrooms')}>
                            <InputLabel htmlFor="field-bedrooms">Bedrooms</InputLabel>
                            <Select value={formData["field-bedrooms"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-bedrooms" id="field-bedrooms"
                                    disabled={assetNotSelected} />}>
                                {bedrooms.map(bedroom => (
                                    <MenuItem key={bedroom.id} value={bedroom.id}>
                                        {bedroom.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                        <FormControl variant="outlined" required fullWidth className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-square-feet')}>
                            <InputLabel htmlFor="field-bedrooms">Bedrooms</InputLabel>
                            <OutlinedInput labelWidth={0} id="field-bedrooms" name="field-bedrooms"
                                value={formData["field-bedrooms"]} onChange={handleInput} onBlur={handleChange} disabled={assetNotSelected} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" required fullWidth className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-bathrooms')}>
                            {/* <InputLabel htmlFor="field-bathrooms">Bathrooms</InputLabel>
                            <Select value={formData["field-bathrooms"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-bathrooms" id="field-bathrooms"
                                    disabled={assetNotSelected} />}>
                                {bathrooms.map(bathroom => (
                                    <MenuItem key={bathroom.id} value={bathroom.id}>
                                        {bathroom.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                            <InputLabel htmlFor="field-bathrooms">Bathrooms</InputLabel>
                            <OutlinedInput labelWidth={0} id="field-bathrooms" name="field-bathrooms"
                                value={formData["field-bathrooms"]} onChange={handleInput} onBlur={handleChange} disabled={assetNotSelected} />
                        </FormControl>
                    </Grid>
                </Fragment>
        }
        return assetType;
    }
    function renderProductType() {
        let productType;
        if (formData["field-product-type"] === 1) { //Real Estate            
            productType =
                <Fragment>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-property-used')}>
                            <InputLabel htmlFor="field-property-used">Property Used As</InputLabel>
                            <Select value={formData["field-property-used"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-property-used" id="field-property-used"
                                    disabled={assetNotSelected} />}>
                                {propertyUsedAs.map(usedAs => (
                                    <MenuItem key={usedAs.id} value={usedAs.id}>
                                        {usedAs.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    {renderAssetType()}
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" required fullWidth className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-square-feet')}>
                            <InputLabel htmlFor="field-square-feet">Total Square Feet</InputLabel>
                            <OutlinedInput labelWidth={0} id="field-square-feet" name="field-square-feet"
                                value={formData["field-square-feet"]} onChange={handleInput} onBlur={handleChange} disabled={assetNotSelected} />
                        </FormControl>
                    </Grid>
                </Fragment>
        }
        else {
            productType =
                <Fragment>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-loan-status')}>
                            <InputLabel htmlFor="field-loan-status">Loan Status</InputLabel>
                            <Select value={formData["field-loan-status"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-loan-status" id="field-loan-status"
                                    disabled={assetNotSelected} />}>
                                {loanStatus.map(loan => (
                                    <MenuItem key={loan.id} value={loan.id}>
                                        {loan.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-lien-position')}>
                            <InputLabel htmlFor="field-lien-position">Lien Position</InputLabel>
                            <Select value={formData["field-lien-position"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-lien-position" id="field-lien-position"
                                    disabled={assetNotSelected} />}>
                                {lienPosition.map(lien => (
                                    <MenuItem key={lien.id} value={lien.id}>
                                        {lien.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-interest-rate')}>
                            <InputLabel htmlFor="field-interest-rate">Interest Rate</InputLabel>
                            <Select value={formData["field-interest-rate"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="field-interest-rate" id="field-interest-rate"
                                    disabled={assetNotSelected} />}>
                                {interestRate.map(intrest => (
                                    <MenuItem key={intrest.id} value={intrest.id}>
                                        {intrest.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid + ' datePickerInput '}>
                        <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + (getInputClasses('field-maturity-date') + ' datePickerInput ')}>
                            <Datetime
                                id="field-maturity-date"
                                name="field-maturity-date"
                                closeOnSelect={true}
                                timeFormat={false}
                                className={formData["field-maturity-date"] === '' ? 'empty' : 'hasValue'}
                                onChange={(event) => handleChange({
                                    target: {
                                        name: "field-maturity-date",
                                        value: event.toDate().toLocaleDateString()
                                    }
                                })}
                                inputProps={{ disabled: assetNotSelected }}
                            />
                            <InputLabel htmlFor="field-maturity-date">Maturity Date</InputLabel>
                        </FormControl>
                    </Grid>
                </Fragment>
        }
        return productType;
    }

    return (
        <Grid className={classes.container}>
            <Grid container
                className={["form__heading-wrapper", classes.formHeader].join(' ')}
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography className="form__heading" noWrap>
                        Property Information
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
                        ADDRESS
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                <Grid item xs={12} sm={6} lg={8} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-address')}>
                        <InputLabel htmlFor="field-address">Property Address</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-address" name="field-address"
                            value={formData["field-address"]} onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth className="custom-form-control">
                        <InputLabel htmlFor="field-suite">Floor/Unit/Suite</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-suite" name="field-suite"
                            value={formData["field-suite"]} onChange={handleInput} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-city')}>
                        <InputLabel htmlFor="field-city">City</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-city" name="field-city"
                            value={formData["field-city"]} onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl fullWidth variant="outlined" required className={getInputClasses('field-state')}>
                        <InputLabel htmlFor="field-state">State</InputLabel>
                        <Select value={formData["field-state"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-state" id="field-state" />}>
                            {states.map(state => (
                                <MenuItem key={state.code} value={state.code}>
                                    {state.code} - {state.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-zip')}>
                        <InputLabel htmlFor="field-zip">Zip Code</InputLabel>
                        <OutlinedInput labelWidth={0} id="field-zip" name="field-zip"
                            value={formData["field-zip"]} onChange={handleInput} onBlur={handleChange} />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={["space-reset", classes.formSubtitleWrapper].join(' ')}>
                <Grid item xs={12} sm={12} lg={12} className={classes.formSubtitle}>
                    <Typography variant="h6" color="inherit" noWrap className={'mt-10 ' + classes.sectionHeader}>
                        Details
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={getInputClasses('field-asset-type')}>
                        <InputLabel htmlFor="field-asset-type">Asset Type</InputLabel>
                        <Select value={formData["field-asset-type"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-asset-type" id="field-asset-type" />}>
                            {assetTypes.map(assetType => (
                                <MenuItem key={assetType.id} value={assetType.id}>
                                    {assetType.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                    <FormControl variant="outlined" fullWidth required className={assetNotSelected ? (classes.disabled + " custom-form-control requiredInput") : '' + getInputClasses('field-property-type')}>
                        <InputLabel htmlFor="field-property-type">Property Type</InputLabel>
                        <Select value={formData["field-property-type"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="field-property-type" id="field-property-type"
                                disabled={assetNotSelected} />}>
                            {dropDowns.propertyTypes && dropDowns.propertyTypes.map(propertyType => (
                                <MenuItem key={propertyType.id} value={propertyType.id}>
                                    {propertyType.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {renderProductType()}
            </Grid>
        </Grid>
    )
}

const style = {
    ...customInputStyle,
    ...PropertyInformationStyle
};
export default withStyles(style)(PropertyInformation);