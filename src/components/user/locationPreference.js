import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, OutlinedInput, FormControl, MenuItem, Select } from '@material-ui/core';
import { staticData } from "../../common";
// import MaskedInput from 'react-text-mask';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";

const LocationPreference = (props) => {
    const { classes, handleChange, formData, handleInput } = props;
    // const getInputClasses = (fieldName) => {
    //     return `custom-form-control ${classes.requiredInput} hook-required ${invalidSellerFormFields.includes(fieldName) ? 'error_class' :
    //         formData[fieldName] !== '' && validSellerFormFields.includes(fieldName) ? 'success_class' : ''}`
    // }
    const filter_states = staticData["filter_States"];
    const states = filter_states.map(state => { return state.name });
    delete states["State"];
    const counties = formData["location_state"] ? filter_states.find(state => {
        return state.name === formData["location_state"]
    }).counties : [];
        
    const selectedCounty = formData["location_county"] ? counties.find(county => {
        return county.id === formData["location_county"]
    }) : "";

    const cities = selectedCounty ? selectedCounty.cities : [];

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
                        <InputLabel htmlFor="location_state">State</InputLabel>
                        <Select value={formData["location_state"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="location_state" id="location_state" />}>
                            {states.map(state => (
                                <MenuItem key={state} value={state}>
                                    {state}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                        <InputLabel htmlFor="location_county">County</InputLabel>
                        <Select value={formData["location_county"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="location_county" id="location_county" />}>
                            {counties.map(county => (
                                <MenuItem key={county.id} value={county.id}>
                                    {county.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid><Grid item xs={12} sm={12} lg={12} className={classes.cutomInputGrid}>
                    <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                        <InputLabel htmlFor="location_city">City</InputLabel>
                        <Select value={formData["location_city"]} onChange={handleInput} onBlur={handleChange}
                            input={<OutlinedInput labelWidth={0} name="location_city" id="location_city" />}>
                            {cities.map(city => (
                                <MenuItem key={city.id} value={city.id}>
                                    {city.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(customInputStyle)(LocationPreference);