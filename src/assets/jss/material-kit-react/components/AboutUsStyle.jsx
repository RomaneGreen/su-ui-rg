import { container } from "../../material-kit-react.jsx";
  
const aboutUsStyle = theme => ({
    container:{
        ...container
      },
      root:{
        
      },
      aboutUs:{
        paddingTop:35,
        [theme.breakpoints.down("sm")]: {
          paddingTop:0,
        },
      },
      pageTitle:{
            textAlign: 'center',
            marginBottom: '75px',
            [theme.breakpoints.down("xs")]: {
                marginBottom: '40px',
            },
            '& > h2':{
                fontWeight: '700',
                lineHeight: '60px',
                fontSize: '44px',
                color: '#0d83dd',
            },
        },
        aboutContent:{
            maxWidth: '980px',
            margin: '0 auto',
            [theme.breakpoints.down("sm")]: {
                maxWidth: '663px',
            },
            [theme.breakpoints.down("xs")]: {
                maxWidth: '291px',
            },
            '& > p' :{
                color: '#545454',
                fontSize: '28.5px',
                lineHeight: '38px',
                marginBottom: '38px',
                fontWeight: '400',
                [theme.breakpoints.down("sm")]: {
                    fontSize: '24px',
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: '17px',
                    lineHeight: '30px',
                    marginBottom: '35px',
                },
                '& >  span' :{
                    fontWeight: '500',
                },
            },
        },
        sellerInfo:{
            maxWidth: '1024px',
            padding: '38px 60px 24px',
            margin: '0 auto',
            boxShadow: '0px 5px 20px 0px rgba(128, 128, 128, 0.3)', 
            backgroundColor: '#fff',
            marginBottom: '60px',
            marginTop: '56px',
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down("sm")]: {
                maxWidth: '712px',
                padding: '60px 33px 42px 33px',
            },
            [theme.breakpoints.down("xs")]: {
                display: 'block',
                padding: '35px 27px 15px 27px',
                maxWidth: '338px',
            },
        },
        sellerBlock:{
            [theme.breakpoints.down("xs")]: {
                '& > :last-child':{
                    marginBottom: '10px',
                },
            },
            '& > h3':{
                fontSize: '24px',
                fontWeight: '700',
                textTransform: 'uppercase',
                lineHeight: '38px',
                position: 'relative',
                '& > img':{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50px',
                    [theme.breakpoints.down("sm")]: {
                        left: '40px',
                    },
                    [theme.breakpoints.down("xs")]: {
                        left: '30px',
                    },
                },
                [theme.breakpoints.down("sm")]: {
                    fontSize: '21px',
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: '18px',
                },
            },
            '& ul > li':{
                padding: '11px 0',
                fontSize: '30px',
                lineHeight: '38px',
                color: '#0d83dd',
                fontWeight: '700',
                position: 'relative',
                [theme.breakpoints.down("sm")]: {
                    fontSize: '26px',
                    padding: '6px 0',
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: '24px',
                    padding: '10px 0',
                },
            },
            '& ul > li:last-child':{
                paddingBottom: '0',
                [theme.breakpoints.down("xs")]: {
                    paddingBottom: '15px',
                },
            },
        },
        sellerDots:{
            paddingTop:13,
            '& > li:before':{
                content: '""',
                width: '20px',
                height: '20px',
                backgroundColor: '#0d83dd',
                borderRadius: '50%',
                marginRight: '18px',
                [theme.breakpoints.down("sm")]: {
                    width: '18px',
                    height: '18px',
                },
                [theme.breakpoints.down("xs")]: {
                    width: '15px',
                    height: '15px',
                },
            },
        },
        sellerCircle:{
            '& > li:before':{
                content: '""',
                width: '16px',
                height: '16px',
                border: '2px solid #0d83dd',
                borderRadius: '50%',
                marginRight: '18px',
                [theme.breakpoints.down("sm")]: {
                    width: '18px',
                    height: '18px',
                },
                [theme.breakpoints.down("xs")]: {
                    width: '15px',
                    height: '15px',
                },
            },
        },
        sellButton:{
            maxWidth: '980px',
            margin: '57px auto 150px auto',
            [theme.breakpoints.down("sm")]: {
                maxWidth: '663px',
                margin: '25px auto 100px auto',
            },
            [theme.breakpoints.down("xs")]: {
                maxWidth: '291px',
                margin: '25px auto 90px auto',
            },
            '& > span':{
                display: 'inline-block',
                marginRight: '16px',
                fontSize: '28.5px',
                color: '#545454',
                fontWeight: '400',
                [theme.breakpoints.down("sm")]: {
                    fontSize: '24px',
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: '17px',
                },
                '& > b':{
                    fontWeight: '500',
                    color: '#50a942',
                    marginLeft: '9px',
                },
            },
            '& > a':{
                '& > a':{
                    fontWeight: '700',
                    fontSize: '24px',
                    marginLeft: '5px',
                    minWidth: '389px',
                    padding: '23px 15px',
                    '&:hover':{
                        backgroundColor: '#1e900c',
                    },
                    [theme.breakpoints.down("sm")]: {
                        minWidth: '309px',
                        padding: '18px 15px',
                        fontSize: '19px',
                    },
                    [theme.breakpoints.down("xs")]: {
                        minWidth: '285px',
                        padding: '16px 15px',
                        fontSize: '17.37px',
                        marginLeft: '0',
                        marginTop: '25px',
                    },
                },
            },
        },
    etymologyBox: {
        background: '#DAEDF8',
        width: 480,
        margin: 'auto',
        padding: '28px 38px',
        marginBottom: '77px'
    },
    etymologyWord: {
        fontWeight: 700,
        fontSize: 34,
        marginRight: 20
    },
    etymologyTranscription: {
        fontSize: 22,
    },
    etymologyVerb: {
        fontSize: 20,
        marginTop: 3,
        fontStyle: 'italic',
        marginBottom: 38,
        fontWeight: 500,
        color: '#606263'
    },
    etymologyDefenitionTitle: {
        fontSize: 15,
        '& b': {
            fontWeight: 500,
        }
    },
    etymologyDefenition: {
        fontSize: 20,
        fontWeight: 500,
        marginTop: 12,
        lineHeight: '30px'
    }
})

export default aboutUsStyle;