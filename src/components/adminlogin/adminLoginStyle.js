const adminLoginStyle = theme => ({
    authenticationRoot: {
        maxWidth: '600px',
        margin: '0 auto',
        paddingBottom: '80px',
        paddingTop: '15px',
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            paddingTop: '0',
            marginTop: '-40px',
            paddingBottom: '56px',
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: '0',
            marginTop: '-5px',
        },
        '& > h2':{
            fontSize: '44px',
            fontWeight: 700,
            color : '#0d83dd',
            marginBottom: '40px',
            lineHeight: '60px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '22px',
                marginBottom: '25px',
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: '34px',
                marginBottom: '25px',
            },
        },
       
      }, 
      shadowBox:{
        boxShadow: '0 0 50px rgba(73, 43, 0, 0.2)',
        maxWidth: '320px',
        margin: '0 auto',
        background: '#dee5e8',
        borderRadius: '20px',
        [theme.breakpoints.down("xs")]: {
            maxWidth: '283px',
        },
      },
      loginBox:{
        background: '#fff',
        margin: '0 auto',
        padding: '48px 28px 37px 28px',
        borderRadius: '20px',
        marginBottom: '9px',
        position: 'relative',
        [theme.breakpoints.down("xs")]: {
            padding: '31px 25px 33px 25px',
        },
        '& > i':{
            marginBottom: 25,
            fontSize: '140px',
            color: '#0d83dd',
            display: 'block',
            [theme.breakpoints.down("xs")]: {
                fontSize: '125px',
            },
        },
        '& > a > button':{
            display: 'block',
            margin: '15px auto 0 auto',
            width: '100%',
            backgroundColor: '#efb317',
            padding: '11px 16px',
            fontSize: '15px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '13.22px',
                padding: '10px 16px',
            },
           '&:hover': {
            backgroundColor: '#ffb800',
           }
        },
        '& > a > span':{
            fontSize: 14,
            color: '#636363',
            fontWeight: 500,
            [theme.breakpoints.down("xs")]: {
                fontSize: '12.34px',
            },
        },
        '& > h3':{
            fontSize: 24.5,
            fontWeight: 700,
            color: '#0d83dd',
            marginBottom: '35px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '21.59px',
                padding: '10px 16px',
                marginBottom: '30px',
            },
        }
    },
    loginOption:{
        position: 'absolute',
        bottom: '-25px',
        left: 0,
        right: 0,
        margin: '0 auto',
        '& span':{
            fontSize: '14px',
            fontWeight: '900',
            color: '#fff',
            background: '#717171',
            display: 'inline-block',
            borderRadius: '50%',
            width: '49px',
            height: '49px',
            lineHeight: '33px',
            textTransform: 'uppercase',
            border: '9px solid #ddd',
            textAlign: 'center',
        },
    },
    buyerBox:{
        background: '#fff',
        margin: '0 auto',
        padding: '31px 28px 33px 28px',
        borderRadius: '20px',
        marginBottom: '9px',
        [theme.breakpoints.down("xs")]: {
            padding: '31px 25px 33px 25px',
        },
        '& > a > button':{
            display: 'block',
            margin: '15px auto 0 auto',
            width: '100%',
            padding: '11px 16px',
            backgroundColor: '#0d83dd',
            fontSize: '15px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '13.22px',
                padding: '10px 16px',
            },
            '&:hover': {
                backgroundColor: '#008df9',
            }
        },
        '& > a > span':{
            fontSize: 14,
            color: '#636363',
            fontWeight: 500,
        },
    },

    boxPanel:{
        '& div[class*="customInputStyle-card"] label[class*="customInputStyle-check"]':{
            margin: '-7px auto 6px auto',
        },
        '& > h2':{
            fontSize:'44px',
            lineHeight: '60px',
            color: '#0d83dd',
            marginBottom: '40px',
            textAlign: 'center',
            fontWeight: 700,
            [theme.breakpoints.down("sm")]: {
                fontSize:'34px',
                marginBottom: '30px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize:'22px',
                marginBottom: '2px',
            },
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: '-20px',
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '-40px',
        },
    },
    card:{
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto',
        padding: '48px 28px 20px',
        marginTop: '30px',
        marginBottom: '80px',
        borderRadius: '20px',
        background: '#fff',
        textAlign: 'center',
        boxShadow: '0 0 50px rgba(73, 43, 0, 0.2)',
        [theme.breakpoints.down("xs")]: {
            maxWidth: '281px',
            padding: '44px 24px 20px',
        },
        '& > button':{
            display: 'block',
            width: '100%',
            marginBottom: '15px',
            backgroundColor: '#efb317',
            padding: '11px 16px',
            fontSize: '15px',
            '&:hover': {
            backgroundColor: '#ffb800',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '13.22px',
                padding: '10px 16px',
            },
        }
    },
    cardHeaeder:{
        textAlign: 'center',
        '& > h3':{
        fontSize: '24.5px',
        color: '#0d83dd',
        fontWeight: '900',
        marginBottom: '34px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '21.39px',
            marginBottom: '28px',
        },
        }
    },
    cardImg:{
        fontSize: '140px',
        color: '#0d83dd',
        textAlign: 'center',
        marginBottom: '10px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '123px',
        },
    },
    boxFooter:{
        textAlign: 'center',
        color: '#5f6670',
        fontSize: '12px',
        margin: '30px 0',
        '& > a':{
            color: '#0166ff',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginLeft: '5px',
        }
    },
    forgetPassword: {
        fontSize: '11.5px',
        color: '#296bcf',
    },
    cutomInputGrid:{
        padding: '9px 0 !important',
    },
    check:{
        marginTop: '5px',
        '& > span':{
            paddingRight: '3px',
            fontSize: '12px',
            color: '#626262',
            fontWeight: 400,
            '& > span > svg':{
                fill: '#d6e6ff',
            }
        }
    },
    boxTitle:{
        textAlign: 'center',
        '& > h2':{
            fontSize:'44px',
            lineHeight: '60px',
            color: '#0d83dd',
            marginBottom: '40px',
            textAlign: 'center',
            fontWeight: 700,
            [theme.breakpoints.down("sm")]: {
                fontSize:'34px',
                marginBottom: '30px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize:'22px',
                marginBottom: '2px',
            },
        },
    },
    boxMain:{
        [theme.breakpoints.down("xs")]: {
            marginTop: '-50px',
        },
    },
    boxReset:{
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto 80px auto',
        padding: '42px 28px 20px',
        borderRadius: '20px',
        background: '#fff',
        boxShadow: '0 0 50px rgba(73, 43, 0, 0.2)',
        [theme.breakpoints.down("xs")]: {
            maxWidth: '281px',
            padding: '44px 24px 20px',
        },
        '& > h3' : {
            fontSize: '25px',
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: '30px',
            color: '#4b83da',
        },
        '& > h4' : {
            fontSize: '16px',
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: '23px',
            color: '#000000',
            textTransform: 'uppercase',
            marginBottom: '25px',
        },
        '& > h5' : {
            fontSize: '18px',
            fontWeight: '300',
            color: '#777777 !important',
            lineHeight: '23px',
            textAlign: 'center',
            marginBottom: '25px',
        },
        '& > button':{
            display: 'block',
            width: '100%',
            marginBottom: '30px',
            marginTop: '9px',
            backgroundColor: '#efb317',
            padding: '11px 16px',
            fontSize: '15px',
            '&:hover': {
            backgroundColor: '#ffb800',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '13.22px',
                padding: '10px 16px',
            },
        }
    },
    lockImg :{
        padding: '38px 0 20px 0',
        fontSize: '140px',
        textAlign: 'center',
        color: '#4b83da',
    },
    resetuser:{
        textAlign: 'center',
        marginBottom:'20px',
        '& > span':{
            fontSize: '16px',
            fontWeight: '500',
            color: '#3964fb',
        }
    },
    csBlock:{
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto 80px auto',
        padding: '50px 40px 50px',
        borderRadius: '20px',
        background: '#fff',
        boxShadow: '0 0 50px rgba(73, 43, 0, 0.2)',
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            maxWidth: '280px',
            padding: '50px',
        },
        '& > h2':{
            fontSize: '25px',
            color: '#0d83dd',
            fontWeight: '900',
            marginBottom: '42px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '22px',
                marginBottom: '32px',
            },
        },
        '& > h4':{
            fontSize: '24px',
            color: '#636363',
            fontWeight: '400',
            lineHeight: '36px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '18px',
                lineHeight: '32px',
            },
        }
    },
})
export default adminLoginStyle;