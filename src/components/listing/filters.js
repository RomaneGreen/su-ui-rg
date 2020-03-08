import React from "react";
import { Typography, FormControl, OutlinedInput } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from "../uiComponent/CustomButtons/Button";
import { staticData } from "../../common";

class Filters extends React.Component {
    state = {
        advanceFiltersVisible: false
    }

    handleChange = event => {
        this.props.filterChangeHandler(event);
    };
    handleAdvanceFilter = () => {
        this.setState({ advanceFiltersVisible: !this.state.advanceFiltersVisible })
        this.state.advanceFiltersVisible && window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    render() {

        const { classes, filters, filterChangeHandler } = this.props;

        const showAdvancedFilters = filters["Product Type"] && filters["Asset Type"];
        const filter_states = staticData["filter_States"];
        const states = filter_states.map(state => { return state.name });

        const counties = filters["state"] ? filter_states.find(state => {
            return state.name === filters["state"]
        }).counties : [];

        const selectedCounty = filters["county"] ? counties.find(county => {
            return county.name === filters["county"]
        }) : "";

        const cities = selectedCounty ? selectedCounty.cities : [];
        const neighbourhood = selectedCounty && selectedCounty.neighbourhood ? selectedCounty.neighbourhood : [];
        // const territories = selectedCounty ? selectedCounty.territories : [];


        return (
            <div className={classes.filterBlock}>
                <div className={classes.filterBlockTitle}>
                    <Typography variant="h2">Filters</Typography>
                </div>
                <form className={classes.root} autoComplete="off">
                    <div className={classes.filterMain}>
                    <div className={classes.filterType}>
                            <label>Investor Type:</label>
                            <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                <Select
                                    value={filters["Investor Type"] || "All"}
                                    onChange={(event) => { filterChangeHandler(event) }}
                                    input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                    name="Investor Type"
                                    className={classes.selectEmpty}
                                >
                                    {staticData["Investor Type"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.filterType}>
                            <label>Product Type:</label>
                            <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                <Select
                                    value={filters["Product Type"] || "All"}
                                    onChange={(event) => { filterChangeHandler(event) }}
                                    input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                    name="Product Type"
                                    className={classes.selectEmpty}
                                >
                                    {staticData["Product Type"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.filterType}>
                            <label>Asset Type:</label>
                            <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                <Select
                                    value={filters["Asset Type"] || "All"}
                                    onChange={(event) => { filterChangeHandler(event) }}
                                    input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                    name="Asset Type"
                                    MenuProps={{
                                        getContentAnchorEl: null,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }
                                    }}
                                    className={classes.selectEmpty}
                                >
                                    {staticData["Asset Type"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.filterType}>
                            <label>Property Type:</label>
                            <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                <Select
                                    value={filters["Property Type"] || "All"}
                                    onChange={(event) => { filterChangeHandler(event) }}
                                    input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                    name="Property Type"
                                    MenuProps={{
                                        getContentAnchorEl: null,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }
                                    }}
                                    className={classes.selectEmpty}
                                    disabled = {filters["Asset Type"] ? false: true}
                                >
                                    {(filters["Asset Type"] ? (filters["Asset Type"] === 1 ? staticData["CommercialPropertyType"] : staticData["ResidentialPropertyType"])
                                        : staticData["CommercialPropertyType"])
                                        .map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                </Select>
                            </FormControl>
                        </div>

                        <div className={classes.dotLine}></div>

                        {
                            // showAdvancedFilters &&
                            this.state.advanceFiltersVisible && (
                                <div>
                                    <div className={classes.filterType} style={{ marginTop: 16 + 'px' }}>
                                        <label>Location:</label>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control location-filter'}>
                                            <Select
                                                value={filters["state"] || "All States"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="state" id="state" />}
                                                name="state"
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value="All States">All States</MenuItem>
                                                {states.map(item => { return (<MenuItem value={item}>{item}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["county"] || "All Counties"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="county" id="county" />}
                                                name="county"
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value="All Counties">All Counties</MenuItem>
                                                {counties.map(item => { return (<MenuItem value={item.name}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["city"] || "All Cities"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="city" id="city" />}
                                                name="city"
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value="All Cities">All Cities</MenuItem>
                                                {cities.map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["neighbourhood"] || "All Neighborhoods"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="neighbourhood" id="neighbourhood" />}
                                                name="neighbourhood"
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value="All Neighborhoods">All Neighborhoods</MenuItem>
                                                {neighbourhood.map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className={classes.filterType}>
                                        <label>Price:</label>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["Price"] || "$Min - $Max"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                name="Price"
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value="$Min - $Max">$Min - $Max</MenuItem>
                                                {staticData["Price"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    {/* only visible for AssetType =Residential */}
                                    {
                                        filters["Asset Type"] === 2 &&
                                        <>
                                            <div className={classes.filterType}>
                                                <label>Bedrooms:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["Bedrooms"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="Bedrooms"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["Bedrooms"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={classes.filterType}>
                                                <label>Bathrooms:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["Bathrooms"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="Bathrooms"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["Bathrooms"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </>
                                    }

                                    {/* only visible for AssetType = Commercial */}
                                    {
                                        filters["Asset Type"] === 1 &&

                                        <>
                                            <div className={classes.filterType}>
                                                <label># Of Stories</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["# Of Stories"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="# Of Stories"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["# Of Stories"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={classes.filterType}>
                                                <label># Of Units:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["# Of Units"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="# Of Units"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["# Of Units"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </>
                                    }
                                    {/* only visible for product type = Mortgage Note */}
                                    {
                                        filters["Product Type"] === 2 &&
                                        <>

                                            <div className={classes.filterType}>
                                                <label>Note Status:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["noteStatus"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="noteStatus"
                                                        className={classes.selectEmpty}
                                                    >
                                                        <MenuItem value="All">All</MenuItem>
                                                        {staticData["noteStatus"].map(item => { return (<MenuItem value={item.id}>{item.label}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={classes.filterType}>
                                                <label>Lien Position:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["Lien Position"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="Lien Position"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["Lien Position"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </>
                                    }
                                    
                                    <div className={classes.filterType}>
                                        <label>Total SQFT:</label>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["Total SQFT"] || "All"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                name="Total SQFT"
                                                className={classes.selectEmpty}
                                            >
                                                {staticData["Total SQFT"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    {/* only visible for AssetType = Commercial */}
                                    {
                                        filters["Asset Type"] === 1 &&
                                        <div className={classes.filterType}>
                                            <label>Lot Area SQFT (Floorplate):</label>
                                            <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                <Select
                                                    value={filters["Lot Area SQFT (Floorplate)"] || "All"}
                                                    onChange={(event) => { filterChangeHandler(event) }}
                                                    input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                    name="Lot Area SQFT (Floorplate)"
                                                    className={classes.selectEmpty}
                                                >
                                                    {staticData["Lot Area SQFT (Floorplate)"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }

                                    {/* only visible for product type = Mortgage Note */}
                                    {
                                        filters["Product Type"] === 2 &&
                                        <>
                                            <div className={classes.filterType}>
                                                <label>Maturity Date:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["Maturity Date"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="Maturity Date"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["Maturity Date"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={classes.filterType}>
                                                <label>Interest Rate:</label>
                                                <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                    <Select
                                                        value={filters["Interest Rate"] || "All"}
                                                        onChange={(event) => { filterChangeHandler(event) }}
                                                        input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                        name="Interest Rate"
                                                        className={classes.selectEmpty}
                                                    >
                                                        {staticData["Interest Rate"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </>
                                    }


                                    <div className={classes.filterType}>
                                        <label>Year Built:</label>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["Year Built"] || "All"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                name="Year Built"
                                                className={classes.selectEmpty}
                                            >
                                                {staticData["Year Built"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className={classes.filterType}>
                                        <label>Occupancy:</label>
                                        <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                            <Select
                                                value={filters["Occupancy"] || "All"}
                                                onChange={(event) => { filterChangeHandler(event) }}
                                                input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                name="Occupancy"
                                                className={classes.selectEmpty}
                                            >
                                                {staticData["Occupancy"].map(item => { return (<MenuItem value={item.id}>{item.name}</MenuItem>) })}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className={classes.dotLine}></div>
                                </div>

                            )}
                    </div>
                </form>

                <div className={classes.moreFilter}>
                    <Button variant="contained" color="primary" onClick={this.handleAdvanceFilter}
                        style={{
                            backgroundColor: `${this.state.advanceFiltersVisible || showAdvancedFilters ? '#0166ff' : ''}`,
                            // pointerEvents: `${showAdvancedFilters ? 'auto' : 'none'}`
                        }}>
                        <i className="sb-icon-plus-circular"></i>{this.state.advanceFiltersVisible ? "Close" : "Advance"}
                    </Button>
                </div>
            </div>

        )
    }
}

export default Filters; 