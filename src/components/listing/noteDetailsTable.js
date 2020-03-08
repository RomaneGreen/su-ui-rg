/* eslint jsx-a11y/heading-has-content: "off" */
import React from 'react';
import { withStyles, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import propertyDetailStyle from "../../assets/jss/material-kit-react/components/propertyDetail";
import { staticData } from "../../common";
import { formatMoney } from '../../common/helperMethods';

const NoteDetailsTable = ({ property, classes }) => {
    const { listing_product_note } = property;
    const getNumberWithOrdinal = (n) => {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    const mapping = {
        "note_status_id": "NOTE STATUS",
        "lien_position": "LIEN POSITION",
        "current_balance": "CURRENT BALANCE (UPB)",
        "original_balance": "ORIGINAL BALANCE",
        "down_payment": "DOWN PAYMENT",
        "monthly_payment": "MONTHLY BALANCE",
        "interest_rate": "INTEREST RATE",
        "default_interest_rate": "DEFAULT INTEREST RATE",
        "accured_late_charges": "ACCRUED LATE CHARGES",
        "balloon_payment": "BALLOON PAYMENT",
        "balloon_amount": "BALLOON AMOUNT",
        "BALLOON DATE": "",
        "payments_made": "# OF PAYMENTS MADE",
        "payments_remaining": "# OF PAYMENTS REMAINING",
        "origination_date": "ORIGINATION DATE",
        "last_payment_date": "LAST PAYMENT DATE",
        "maturity_date": "MATURITY DATE",
        "in_foreClosure": "IN FORECLOSURE",
        "are_current_taxes": "BORROWER IS A"
    }


    const getValidValues = () => {
        let result = {};
        for (const key in listing_product_note) {
            if (listing_product_note[key] && mapping.hasOwnProperty(key)) {
                result[key] = listing_product_note[key];
            }
        }
        return result;
    }
    const validValues = getValidValues();
    const validValues_keys = Object.keys(validValues);
    const isEvenCollection = validValues_keys.length % 2 === 0;
    const leftHalfTableKeys = validValues_keys.slice(0,
        isEvenCollection ?
            validValues_keys.length / 2
            : validValues_keys.length / 2 + 1
    )

    const rightHalfTableKeys = validValues_keys.slice(leftHalfTableKeys.length, validValues_keys.length);

    const getValue = (key) => {
        switch (key) {
            case "note_status_id":
                return staticData.noteStatus.find(item => { return item.id === listing_product_note.note_status_id }).label;
            case "lien_position":
                return getNumberWithOrdinal(listing_product_note.lien_position);
            case "interest_rate":
            case "default_interest_rate":
                return `${listing_product_note[key]}%`;
            case "current_balance":
            case "original_balance":
            case "down_payment":
            case "monthly_payment":
            case "accured_late_charges":
            case "balloon_amount":
                return `${formatMoney(listing_product_note[key])}`
            default:
                return listing_product_note[key];
        }
    }
    const TableRowComponent = (props) => {
        return (
            <TableRow>
                <TableCell><p>{mapping[props.item]} :</p></TableCell>
                <TableCell><h6>{getValue(props.item)}</h6></TableCell>
            </TableRow>)
    }
    return (
        <React.Fragment>
            <div className={classes.table}>
                <Table className={classes.tableNote}>
                    <TableBody>
                        {
                            leftHalfTableKeys && leftHalfTableKeys.length &&
                            leftHalfTableKeys.map(keyName => <TableRowComponent key={keyName} item={keyName} />)
                        }

                    </TableBody>
                </Table>
            </div>
            <div className={classes.table}>
                <Table className={classes.tableNote}>
                    <TableBody>
                        {
                            rightHalfTableKeys && rightHalfTableKeys.length &&
                            rightHalfTableKeys.map(keyName => <TableRowComponent key={keyName} item={keyName} />)
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

export default withStyles(propertyDetailStyle)(NoteDetailsTable)
