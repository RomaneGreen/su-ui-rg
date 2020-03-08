import { container } from "../../material-kit-react.jsx";

const unsubscribeStyle = theme => ({
    container: {
        ...container
    },
    root: {
        
    },
    unsubscribeSec:{
        padding: '50px 0',
    },
    boxContainer:{
        maxWidth: '673px',
        padding: '0 15px',
        margin: '0 auto',
        textAlign: 'center',
    },
    form__heading: {
        color: '#8a8a8a',
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '1.04',
        textTransform: 'uppercase',
    },
    savedContent:{
        '& h3':{
            fontSize: '34px',
            color: '#0d83dd',
            lineHeight: '36px',
            fontWeight: '700',
            marginBottom: '14px',
        },
        '& h4':{
            fontSize: '30px',
            color: '#101010',
            lineHeight: '36px',
            fontWeight: '500',
            marginBottom: '25px',
        },
    },
    shadeBox:{
        boxShadow: '0px 5px 20px 0px rgba(128, 128, 128, 0.3)', 
        background: '#fff',
        padding: '51px 90px 30px 90px',
        textAlign: 'center',
        '& h3':{
            padding: '0 45px',
            fontSize: '34px',
            color: '#0d83dd',
            lineHeight: '36px',
            fontWeight: '700',
            marginBottom: '35px',
        },
        '& h4':{
            fontSize: '30px',
            color: '#101010',
            lineHeight: '36px',
            fontWeight: '500',
            marginBottom: '38px',
        },
        '& p':{
            fontSize: '30px',
            color: '#909090',
            lineHeight: '36px',
            fontWeight: '500',
            marginBottom: '24px',
        },
    },
    btnBlue: {
        '& button':{
            background: '#1a69d2',
            fontSize: '27px',
            color: '#fff',
            lineHeight: '36px',
            borderRadius: '4px',
            padding: '21px 29px',
            margin: '14px 0',
            '&:hover':{
                background: '#1a69d2',
            }
        },
    },
    btnUnsubscribe:{
        marginTop: '15px',
        display: 'inline-block',
        '& button':{
            fontSize: '16px',
            color: '#fff',
            background: '#f94b4b',
            borderRadius: '4px',
            padding: '7px 19px',
            lineHeight: '23px',
            '&:hover':{
                background: '#f94b4b',
            },
        },
    },
    successBox:{
        fontSize: '30px',
        color: '#f94b4b',
        padding: '53px 0 61px',
        background: '#ffe2e2',
        border: '2px solid #f94b4b',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: '0 30px 38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& i':{
            fontSize: '46px',
            marginRight: '20px',
        }
    },
    savedBox:{
        fontSize: '30px',
        color: '#4ca316',
        padding: '52px 36px 62px 0',
        background: '#e9f9df',
        border: '2px solid #4da417',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: '51px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& i':{
            fontSize: '46px',
            marginRight: '20px',
        }
    },
    goHomeBtn: {
        '& button':{
            color: '#fff',
            background: '#bfbbbc',
            fontSize: '24px',
            padding: '10px 23px',
            '&:hover':{
                background: '#bfbbbc',
            },
        },
    },
    nonMember: {
        '& $btnBlue button': {
            margin: '26px 0 14px',
            padding: '21px 130px'
        }
    },
    success: {
        '& $shadeBox h3': {
            padding: '0',
            marginBottom: 52
        }
    },
    saved: {
        '&$unsubscribeSec': {
            padding: '41px 0'
        },
        '& $shadeBox': {
            padding: '55px 122px 30px'
        },
        '& $goHomeBtn button': {
            marginBottom: 20
        }
    },
})
export default unsubscribeStyle;