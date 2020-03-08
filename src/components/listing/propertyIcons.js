import React from 'react'
import { formatArea, formatMoneyInRomans } from '../../common/helperMethods';
import { staticData } from "../../common";

const PropertyIcons = ({ property, classes }) => {

    const getNumberWithOrdinal = (n) => {
        if (!n) return '';
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    const formatDate = (date) => {
        if (!date) return '--';
        let formattedDate = new Date(date);
        return `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}/${formattedDate.getFullYear()%100}`;
    }

    const getSecondIcon = () => {
        let secondIcon;
        // Real Estate and Residential
        if (property.product_type_id === 1 && property.asset_type.id === 2) {
            secondIcon = <div className={classes.productVarientType}>
                <i className="sb-icon-bed"></i>
                <p>{property.listing_residential.bedrooms}</p>
            </div>
        }
        // Real Estate and Commercial
        if (property.product_type_id === 1 && property.asset_type.id === 1) {
            secondIcon = <div className={classes.productVarientType}>
                <i className="sb-icon-cash"></i>
                <p>{formatMoneyInRomans(property.listing_commercial.gross_income)}</p>
            </div>
        }
        // Mortgage Note
        else if (property.product_type_id === 2) {
            secondIcon = <div className={classes.productVarientType}>
                <i className="sb-icon-lien"></i>
                <p>{getNumberWithOrdinal(property.listing_product_note && property.listing_product_note.lien_position) || '--'}</p>
            </div>
        }
        return secondIcon;
    }

    const getThirdIcon = () => {
        let thirdIcon;
        // Real Estate and Residential 
        if (property.product_type_id === 1 && property.asset_type.id === 2) {
            thirdIcon = <div className={classes.productVarientType}>
                <i className="sb-icon-bath"></i>
                <p>{property.listing_residential.bathrooms}</p>
            </div>
        }
        // Real Estate and Commercial
        if (property.product_type_id === 1 && property.asset_type.id === 1) {
            // Net Lease
            if (property.listing_product_note && property.listing_product_note.note_status_id === 4) {
                thirdIcon = <div className={classes.productVarientType}>
                    <i className="sb-icon-year"></i>
                    <p>620</p>
                </div>
            }
            else {
                if (property.property_type.name === "Farm" || property.property_type.name === "Land") {
                    thirdIcon = <div className={classes.productVarientType}>
                        <i className="sb-icon-inuse"></i>
                        <p>10%</p>
                    </div>
                }
                else if (property.property_type.name === "Hotel") {
                    thirdIcon = <div className={classes.productVarientType}>
                        <i className="sb-icon-rooms"></i>
                        <p>{property.listing_commercial.rooms}</p>
                    </div>
                }
                else {
                    thirdIcon = <div className={classes.productVarientType}>
                        <i className="sb-icon-unit"></i>
                        <p>{property.listing_commercial.units}</p>
                    </div>
                }
            }
        }
        // Mortgage Note
        else if (property.product_type_id === 2) {
            thirdIcon = <div className={classes.productVarientType}>
                <i className="sb-icon-rate"></i>
                <p>{(property.listing_product_note && property.listing_product_note.interest_rate) ? property.listing_product_note.interest_rate + '%' : '--'}</p>
            </div>
        }
        return thirdIcon;
    }

    const getFourthIcon = () => {
        let fourthIcon;
        // Real Estate and Residential + Commercial
        if (property.product_type_id === 1) {
            // Commercial + Net Lease + Farm/Land
            if ((property.asset_type.id === 1 && property.listing_product_note && property.listing_product_note.note_status_id === 4)
                && (property.property_type.name === "Farm" || property.property_type.name === "Land")) {
                fourthIcon = <div className={classes.productVarientType}>
                    <i className="sb-icon-acres"></i>
                    <p>$109K</p>
                </div>
            }
            else {
                fourthIcon = <div className={classes.productVarientType}>
                    <i className="sb-icon-sqft"></i>
                    <p>{formatArea(property.asset_type.id === 1 ? property.listing_commercial.total_square_feet : property.listing_residential.total_square_feet)}</p>
                </div>
            }
        }
        // Mortgage Note
        else if (property.product_type_id === 2) {
            fourthIcon = <div className={classes.productVarientType}>
                <i className="sb-icon-date"></i>
                <p>{formatDate(property.listing_product_note && property.listing_product_note.maturity_date) || '--'}</p>
            </div>
        }
        return fourthIcon;
    }
    return (
        <>
            <div className={classes.productVarientType}>
                <i className="sb-icon-type"></i>
                <p>{staticData.propertyTypeMapping[property.property_type.name]}</p>
            </div>
            {getSecondIcon()}
            {getThirdIcon()}
            {getFourthIcon()}
        </>
    )
}

export default PropertyIcons
