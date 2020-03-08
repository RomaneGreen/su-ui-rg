import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";

const FinancialInformationStyle = theme => ({
    ...customInputStyle(theme),
    formSubtitleWrapper: {
        '& $formSubtitle': {
            padding: '15px 26px 10px'
        },
    },
    formSubtitle: {},
    cutomInputGridWrapper: {}
});
export default FinancialInformationStyle;