import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, OutlinedInput, FormControl, MenuItem, Select } from '@material-ui/core';
import { staticData } from "../../common";
// import MaskedInput from 'react-text-mask';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
// import LoaderHOC from "../hoc/loaderHOC";
// import {getInputClasses} from '../../common/helperMethods';

// function TextMaskCustom(props) {
//     const { inputRef, ...other } = props;

//     return (
//         <MaskedInput
//             {...other}
//             ref={inputRef}
//             mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
//             placeholderChar={'\u2000'}
//         />
//     );
// }


const ProductPreference = (props) => {
    const { classes, handleChange, formData, handleInput } = props;
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
                        <InputLabel htmlFor="product_type_id">Product Type</InputLabel>
                        <Select value={formData["product_type_id"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="product_type_id" id="product_type_id" />}>
                            {staticData["Product Type"].map(product => (
                                <MenuItem key={product.id} value={product.id}>
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                        <InputLabel htmlFor="asset_type_id">Asset Type</InputLabel>
                        <Select value={formData["asset_type_id"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="asset_type_id" id="asset_type_id" />}>
                            {staticData["Asset Type"].map(product => (
                                <MenuItem key={product.id} value={product.id}>
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid><Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                        <InputLabel htmlFor="property_type_id">Property Type</InputLabel>
                        <Select value={formData["property_type_id"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="property_type_id" id="property_type_id" />}>
                            {staticData[formData["asset_type_id"]===1 ? "CommercialPropertyType":"ResidentialPropertyType"].map(product => (
                                <MenuItem key={product.id} value={product.id}>
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(customInputStyle)(ProductPreference);