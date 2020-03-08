import { container } from "../../material-kit-react.jsx";
const contactUsStyle = theme => ({
    container: {
        ...container
    },
    root: {

    },
    contactGrid: {
        "@media (min-width:768px) and (max-width:1199px)": {
            display: 'flex',
            flexDirection: 'column-reverse',
        },
    },
    contactTopTitle: {
        textAlign: 'center',
        marginBottom: '70px',
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '30px',
            display: 'block',
        },
        '& > h2': {
            fontSize: '37px',
            color: '#2e77e6',
            fontWeight: '700',
            marginBottom: '18px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '24px',
                marginBottom: '0',
            },
        },
        '& > p': {
            fontSize: '22px',
            color: '#545454',
            fontWeight: '500',
            lineHeight: '32px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '16px',
            },
        },
    },
    contactMain: {
        padding: '92px 0 170px 0',
        [theme.breakpoints.down("sm")]: {
            padding: '66px 0 70px 0',
            maxWidth: '627px',
            margin: '0 auto',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '0px 0 70px 0',
        },
    },
    contactBox: {
        display: 'flex',
        marginBottom: '21px',
        maxWidth: '295px',
        marginLeft: '27px',
    },
    contactIcon: {
        fontSize: '31px',
        color: '#2e77e6',
        paddingRight: '17px',
    },
    contactDetail: {
        flexBasis: '100%',
        marginTop: 3,
        '& > h3': {
            fontSize: '26px',
            color: '#2e77e6',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: '9px',
        },
        '& > p': {
            fontSize: '21px',
            color: '#545454',
            fontWeight: '500',
            lineHeight: '32px',
        },
        '& button': {
            marginTop: 5,
            marginBottom: 16
        }
    },

    contactTitle: {
        display: 'flex',
        marginBottom: '14px',
        marginLeft:39,
        marginTop:4
    },
    formIcon: {
        fontSize: '63px',
        paddingRight: '21px',
        minWidth: '85px',
        color: '#2e77e6',
        display: 'flex',
        '& i':{
            lineHeight: '27px',
            display: 'inline-block',
        },
    },
    formGroup: {
        '& > h3': {
            fontSize: '26px',
            color: '#2e77e6',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: '8px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '24px',
            },
        },
        '& > p': {
            fontSize: '21px',
            color: '#545454',
            fontWeight: '500',
            lineHeight: '32px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '19px',
            },
        },
    },
    sellerBtn: {
        '& >  button': {
            width: '100%',
            fontSize: '19px',
            fontWeight: '700',
            padding: '15px',
            lineHeight: '20px',
        },
    },
    buyerBtn: {
        '& >  button': {
            width: '100%',
            fontSize: '19px',
            fontWeight: '700',
            padding: '15px',
            lineHeight: '20px',
        },
    },
    textCenter: {
        textAlign: 'center',
    },
    contactBtn: {
        textAlign: 'center',
        margin: '0 auto',
        '& > button': {
            fontSize: '19px',
            fontWeight: '900',
            padding: '15px',
            lineHeight: '20px',
            minWidth: '239px',
            backgroundColor: '#609efb',
            ':&:hover': {
                backgroundColor: '#247bff',
            },
        },
    },
    marginNormal: {
        width: '100%',
    },
    contactForm: {
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        marginLeft: '125px',
        maxWidth: '643px',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '580px',
            marginBottom: '50px',
        },
        boxShadow: '0px 5px 12px 0px rgba(181, 181, 181, 0.3)',
        '& > textField': {
            width: '100%',
        },
        '& $textField': {
            paddingTop: 10,
            paddingBottom: 20
        }
    },
    successMsg: {
        maxWidth: '375px',
        margin: '0 auto',
        textAlign: 'center',
        paddingTop:17,
        '& > h4': {
            fontSize: '30px',
            color: '#609efb',
            lineHeight: '60px',
            paddingBottom: '9px',
            marginBottom: '36px',
            borderBottom: '1px solid #609efb',
            fontWeight: '900',
        },
        '& > p': {
            color: '#8a8a8a',
            fontSize: '23px',
            lineHeight: '32px',
            fontWeight: '500'
        },
    },
    sucsBtm: {
        marginTop: '35px',
        marginBottom: '35px',
        '& > h5': {
            color: '#8a8a8a',
            fontSize: '23px',
            lineHeight: '32px',
            fontWeight: '500,',
            marginBottom: '10px',
        },
        '& p': {
            marginBottom:7
        }
    },
    contactListItem: {
        '&:last-child':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '&:last-child i':{
            fontSize: '55px',
            '&:before':{
                fontSize: '55px',
            },
        },
        color: '#2e77e6',
        fontSize: '21px',
        lineHeight: '29px',
        fontWeight: '700',
        marginBottom: '24px',
        textAlign: 'center',
        backgroundColor: '#fff',
        textTransform: 'uppercase',
        maxWidth: '317px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '14px 0',
        '& > i':{
            paddingRight: '0',
            fontSize: '27px',
            lineHeight: '27px',
            display: 'inline-block',
            minWidth: '55px',
            textAlign: 'right',
        },
        '& > span':{
            display: 'inline-block',
            minWidth: '138px',
            textAlign: 'left',
            paddingLeft: '25px',
        },
    },
    
    contactFormModal:{
        marginTop: '20px',
    },
    paper: {
        position: 'absolute',
        maxWidth: '292px',
        padding: '45px 30px',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 5px 12px 0px rgba(181, 181, 181, 0.3)', 
        maxHeight: '70vh',
        overflowY: 'auto',
        '& > h4':{
            color: '#2e77e6',
            fontSize: '21px',
            lineHeight: '29px',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: '23px',
        },
        '& > h5':{
            fontSize: '21px',
            color: '#545454',
            fontWeight: '500',
            lineHeight: '32px',
            marginBottom: 0,
        },
        '& > p':{
            fontSize: '16px',
            color: '#545454',
            fontWeight: '500',
            lineHeight: '20px',
            marginBottom: 0,
        },
    },
    sellerBailoutLogo: {
        textAlign: 'center',
        '& > p': {
            color: "#8a8a8a",
            textAlign: 'center',
            fontSize: '23px',
            fontWeight: '500',
            lineHeight: '1.4',
            marginBottom: '10px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '16px',
            },
        },
        '& > img': {
            width: '67px',
            [theme.breakpoints.down("xs")]: {
                width: '62px',
            },
        }
    },
    linkToFormWrapper: {
        paddingTop: 5
    },
    textField: {}
});

export default contactUsStyle;