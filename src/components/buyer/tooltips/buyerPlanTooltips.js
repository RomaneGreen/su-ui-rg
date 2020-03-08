import React from "react";
import titleDash from "../../../assets/images/tool-tip1.png";

export const ListingAccess = () => {
    return (
        <div className="tooltip-info">
            <h3>Listing Access</h3>
            <img alt="Sell Up" src={titleDash}  /> <br /> <br />
            <h4>BASIC INVESTOR: </h4>
            <p>See Off-Market Listings before<br />
            the Market for 7 days; including<br />
            all Pre-MLS Listings here first.</p><br />
            <h4>PREFERRED INVESTOR: </h4>
            <p>See Off-Market Listings before <br />
            the Market for 14 days.</p><br />
            <h4>FIRST-MOVER INVESTOR: </h4>
            <p>See Off-Market Listings before <br />
            the Market for 21 days.</p>
        </div>
    )
}

export const preferences = () => {
    return (
        <div className="tooltip-info">
            <p>Buyers can Set Preferences in order of importance for our algorithms to swiftly match them to New Listings as they become readily available on the marketplace.</p>
            <br />
            <p>Preferences can be set by multiple filter types.</p>
        </div>
    )
}

export const favorities = () => {
    return (
        <div className='tooltip-info'>
        <p>Save listings to your Favorites folder for fast and easy access.</p>
        </div>
    )
}

export const finalCommisions = () => {
    return (
        <div className="tooltip-info tooltip-point">
           <p> <span>1</span>Plan costs credited back toward final commissions at the closing up to $5M. Credits to be issued in $5K increments per $1M closed. For example: Investor receives $25K (100% plan costs) in commission credits for deals closed up to $5M on purchases of eitherreal property and/or mortgage notes. Full plan costs are credited when $5M is closed.</p>  <br />    <p><span>2</span> Investors receive 1 Year (365 Days) from date of plan purchase (or prorated amount) to redeem full credit at closings.</p>
        </div>
    );
}

export const accountManager = () => {
    return (
        <div className="tooltip-info">
            <p>This plan includes a dedicated<br />
            (C-SAM) customer-success<br />
            Account Manager to help you<br />
            track, manage and achieve<br />
            your annual investment goals.<br />
            Your C-SAM will be intouch<br />
            once your account is created.</p>
        </div>
    );
}
