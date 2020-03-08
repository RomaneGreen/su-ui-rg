import React from "react";

export const FeaturedListing = () => {
    return (
        <div className="tooltip-info myAccount-tooltip-info">
            <div className="tooltipBlock">
                <h3 className="my-account-tooltip-info">INSTANT</h3>
                <p>As it launches on our market place</p>
            </div>
            <div className="tooltipBlock">
                <h3 className="my-account-tooltip-info">WEEKLY</h3>
                <p>Limits to only one email per week</p>
            </div>
            <div className="tooltipBlock">
                <h3 className="my-account-tooltip-info">MONTHLY</h3>
                <p>Limits to only one email per month</p>
            </div>
        </div>
    )
}