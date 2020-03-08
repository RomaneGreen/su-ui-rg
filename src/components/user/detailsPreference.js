import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, OutlinedInput, FormControl, MenuItem, Select } from '@material-ui/core';
import { staticData } from "../../common";
// import MaskedInput from 'react-text-mask';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";


const DetailsPreference = (props) => {
    // fields invalidSellerFormFields, validSellerFormFields deleted because they unused
    const { classes, handleChange, formData,  handleInput } = props;
    // unused variables must be deleted
    // const getInputClasses = (fieldName) => {
    //     return `custom-form-control ${classes.requiredInput} hook-required ${invalidSellerFormFields.includes(fieldName) ? 'error_class' :
    //         formData[fieldName] !== '' && validSellerFormFields.includes(fieldName) ? 'success_class' : ''}`
    // }

    return (
        <Grid className={classes.container}>
            <Grid container
                className="form__heading-wrapper"
                direction="row"
                justify="space-between"
                alignItems="center">
            </Grid>
            <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                {/* <Hidden mdDown>
                    <Grid item lg={4} className={classes.cutomInputGrid}>
                    </Grid>
                </Hidden> */}
                <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                        <InputLabel htmlFor="price_range">Price Range</InputLabel>
                        <Select value={formData["price_range"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="price_range" id="price_range" />}>
                            {staticData["Filter Price Range"].map(price => (
                                <MenuItem key={price.id} value={price.id}>
                                    {price.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {
                    formData["asset_type_id"] === 1 && formData["product_type_id"] === 1 &&
                    [

                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="stories"># of Stories</InputLabel>
                                <Select value={formData["stories"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="stories" id="stories" />}>
                                    {staticData["Filter_#_Of_Stories"].map(stories => (
                                        <MenuItem key={stories.id} value={stories.id}>
                                            {stories.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>,
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="units"># Of Units</InputLabel>
                                <Select value={formData["units"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="units" id="units" />}>
                                    {staticData["Filter_Units"].map(unit => (
                                        <MenuItem key={unit.id} value={unit.id}>
                                            {unit.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>,
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                            <InputLabel htmlFor="idealsqft">Ideal Square Feet</InputLabel>
                            <Select value={formData["idealsqft"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="idealsqft" id="idealsqft" />}>
                                {staticData["Ideal Square Feet"].map(item => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                        
                    ]}
                {
                    formData["asset_type_id"] === 2 && formData["product_type_id"] === 1 &&
                    [
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="bedrooms">Bedrooms</InputLabel>
                                <Select value={formData["bedrooms"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="bedrooms" id="bedrooms" />}>
                                    {staticData["Bedrooms"].map(bedroom => (
                                        <MenuItem key={bedroom.id} value={bedroom.id}>
                                            {bedroom.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>,
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="bathrooms">Bathrooms</InputLabel>
                                <Select value={formData["bathrooms"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="bathrooms" id="bathrooms" />}>
                                    {staticData["Bathrooms"].map(bathroom => (
                                        <MenuItem key={bathroom.id} value={bathroom.id}>
                                            {bathroom.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>,
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                            <InputLabel htmlFor="idealsqft">Ideal Square Feet</InputLabel>
                            <Select value={formData["idealsqft"]} onChange={handleInput} onBlur={handleChange}
                                input={<OutlinedInput labelWidth={0} name="idealsqft" id="idealsqft" />}>
                                {staticData["Ideal Square Feet"].map(item => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    ]}
                {
                    formData["product_type_id"] === 2 &&
                    [
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="loan_status">Loan Status</InputLabel>
                                <Select value={formData["loan_status"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="loan_status" id="loan_status" />}>
                                    {staticData["Filter_Loan_Status"].map(loan => (
                                        <MenuItem key={loan.id} value={loan.id}>
                                            {loan.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>,
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="lien_position">Lien Position</InputLabel>
                                <Select value={formData["lien_position"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="lien_position" id="lien_position" />}>
                                    {staticData["Filter_Lien_Position"].map(lien => (
                                        <MenuItem key={lien.id} value={lien.id}>
                                            {lien.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>,
                        <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                            <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                <InputLabel htmlFor="interest_rate">Interest Rate</InputLabel>
                                <Select value={formData["interest_rate"]} onChange={handleInput} onBlur={handleChange}
                                    input={<OutlinedInput labelWidth={0} name="interest_rate" id="interest_rate" />}>
                                    {staticData["Filter_Interest_Rate"].map(interest => (
                                        <MenuItem key={interest.id} value={interest.id}>
                                            {interest.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ]}
            </Grid>
        </Grid>
    )
}

export default withStyles(customInputStyle)(DetailsPreference);