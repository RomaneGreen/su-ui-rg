import { container } from "../../material-kit-react.jsx";

const staticPageStyle = theme => ({
    container: {
        ...container
    },
    root: {
        
    },
    sectionInner:{
        maxWidth: '1012px',
        margin: '40px auto 200px auto',
        paddingRight:10,
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto 100px auto',
        },
        [theme.breakpoints.down("xs")]: {
            margin: '0 auto 120px auto',
        },
    },
    sectionHead:{
        marginBottom: '43px',
        textAlign: 'center',
        '& h3':{
            color: '#0d83dd',
            fontSize: '43px',
            fontWeight: '700',
            lineHeight: '1.2',
            [theme.breakpoints.down("sm")]: {
                fontSize: '37px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '24px',
            },
        },
    },
    sectionBody:{
        fontSize: '18px',
        lineHeight: '2.15',
        color: '#545454',
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            fontSize: '18px',
            lineHeight: '30px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '16px',
            lineHeight: '30px',
        },
    },
    sectionGroup:{
        '& p':{
            marginBottom: '30px',
            fontSize: '18px',
            lineHeight: '1.7',
            color: '#545454',
            fontWeight: '400',
            wordBreak: 'break-word',
            [theme.breakpoints.down("sm")]: {
                fontSize: '16px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '16px',
            },

        },
        '& a':{
            textDecoration: 'underline',
        },
        '& p:last-child()':{
            marginBottom: '0',
        },
    },
    listDots:{
        '& li':{
            display: 'block',
            padding: '0',
        },
        '& span':{
            position: 'relative',
            display: 'block',
            paddingLeft: '38px',
            marginBottom: '40px',
            '&:before':{
                content: "''",
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                marginTop: '-2px',
                background: '#545454',
            },
        },
    },
    pointNumber:{
        width: '57px',
        display: 'inline-block',
    },
    listAlpha:{
        '& p':{
            marginBottom: 0,
        },
        '& p:last-child':{
            marginBottom: '37px',
        },
        '& p span':{
            marginLeft: '57px',
            display: 'inline-block',
        },
    },
    sbAddress:{
        marginLeft: '57px',
    }
    
})
export default staticPageStyle;