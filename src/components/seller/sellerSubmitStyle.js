import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";

const SellerSubmitStyle = theme => ({
    ...customInputStyle(theme),
    container: {
        '& .form__heading-wrapper': {
            marginBottom: 54
        }
    },
    formSubtitleWrapper: {
        '& $formSubtitle': {
            padding: '15px 26px 10px'
        },
    },
    sectionHelper: {
        padding: '25px 14px 0',
        fontSize: 13,
        fontWeight: 500,
    },
    formSubtitle: {},
    cutomInputGridWrapper: {}
});
export default SellerSubmitStyle;