/* eslint jsx-a11y/heading-has-content: "off" */
import React from 'react'
import { withStyles, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import propertyDetailStyle from "../../assets/jss/material-kit-react/components/propertyDetail";
import { formatMoney, formatArea } from '../../common/helperMethods';

const PropertyDetailsTable = ({ property, classes }) => {

    const { listing_commercial, listing_residential } = property;

    let commercialMap = {};
    let residentialMap = {};

    if (property.asset_type.id === 1) {

        commercialMap = {
            "ASSET TYPE": property.asset_type.name,
            "PROPERTY TYPE": property.property_type.name,
            "# OF BUILDINGS": listing_commercial.buildings,
            "# OF STORIES": listing_commercial.stories,
            "# OF UNITS": listing_commercial.units,
            "# OF ROOMS": listing_commercial.rooms,
            "TOTAL SQFT": listing_commercial.total_square_feet,
            "LOT SQFT": listing_commercial.lot_square_feet ? formatArea(listing_commercial.lot_square_feet) + " ft" : "",
            "LOT SIZE": listing_commercial.lot_size ? formatArea(listing_commercial.lot_size) + " ft" : "",
            "ACRES": listing_commercial.acres,
            "YEAR BUILT": listing_commercial.year_built,
            "YEAR RENOVATED": listing_commercial.year_renovated,
            "BUILDING CLASS": listing_commercial.building_class,
            "GROSS INCOME": formatMoney(listing_commercial.gross_income),
            "NET INCOME": formatMoney(listing_commercial.net_income),
            "YEARLY TAXES": formatMoney(listing_commercial.annual_taxes),
            "MONTHLY CHARGES": formatMoney(listing_commercial.monthly_charges),
            "OCCUPANCY": listing_commercial.occupancy_type_id,
            "OCCUPANCY RATE": listing_commercial.occupancy_rate ? listing_commercial.occupancy_rate + '%' : "",
            "OCCUPANCY DATE OF": listing_commercial.occupancy_date,
            "PROPERTY ID": property.property_id,
            "MLS ID": property.mls_id
        }

    }
    else {
        residentialMap = {
            "ASSET TYPE": property.asset_type.name,
            "PROPERTY TYPE": property.property_type.name,
            "BEDROOMS": listing_residential.bedrooms,
            "BATHROOMS": listing_residential.bathrooms,
            "TOTAL SQFT": listing_residential.total_square_feet ? formatArea(listing_residential.total_square_feet) : "",
            "LOT SIZE": listing_residential.lot_size ? formatArea(listing_residential.lot_size) : "",
            "YEAR BUILT": listing_residential.year_built,
            "YEAR RENOVATED": listing_residential.year_renovated,
            "YEARLY TAXES": formatMoney(listing_residential.annual_taxes),
            "MONTHLY CHARGES": formatMoney(listing_residential.monthly_charges),
            "OCCUPANCY": listing_residential.occupancy_type_id,
            "PROPERTY ID": property.property_id,
            "MLS ID": property.mls_id
        }
    }

    const propertyDetailValues = property.asset_type.id === 1 ? commercialMap : residentialMap;
    const getValidValues = () => {
        let result = {};
        for (const key in propertyDetailValues) {
            if (propertyDetailValues[key] && propertyDetailValues[key] !== "NA") {
                result[key] = propertyDetailValues[key];
            }
        }
        return result;
    }
    const validValues = getValidValues();
    const validValues_keys = Object.keys(validValues);
    const isEvenCollection = validValues_keys.length % 2 === 0;
    const midIndex = Math.ceil(validValues_keys.length / 2);

    const leftHalfTable = {};
    const rightHalfTable = {};

    let index = 0;
    for (const key in validValues) {
        if (index < midIndex) {
            leftHalfTable[key] = validValues[key];
        }
        else {
            rightHalfTable[key] = validValues[key];
        }
        index++;
    }

    const TableRowComponent = (props) => {
        return (
            <TableRow>
                <TableCell><p>{props.item} :</p></TableCell>
                <TableCell><h6>{props.value}</h6></TableCell>
            </TableRow>)
    }

    return (
        <React.Fragment>
            <div className={classes.table}>
                <Table className={classes.tablePD}>
                    <TableBody>
                        {
                            Object.keys(leftHalfTable).length > 0 &&
                            Object.keys(leftHalfTable).map(keyName => <TableRowComponent key={keyName} item={keyName} value={leftHalfTable[keyName]} />)
                        }
                    </TableBody>
                </Table>
            </div>
            <div className={classes.table}>
                <Table className={classes.tablePD}>
                    <TableBody>
                        {
                            Object.keys(rightHalfTable).length > 0 &&
                            Object.keys(rightHalfTable).map(keyName => <TableRowComponent key={keyName} item={keyName} value={rightHalfTable[keyName]} />)
                        }
                        {
                            !isEvenCollection &&
                            <TableRow>
                                <TableCell><p></p></TableCell>
                                <TableCell><h6></h6></TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </div>
        </React.Fragment>
    )
}

export default withStyles(propertyDetailStyle)(PropertyDetailsTable); 
