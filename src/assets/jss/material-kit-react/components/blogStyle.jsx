import { container } from "../../material-kit-react.jsx";

const blogStyle = theme => ({
    container: {
        ...container
    },
    root: {

    },
    sectionHead:{
        marginBottom: '50px',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '30px',
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '30px',
        },
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
    [theme.breakpoints.down("xs")]: {
        blogSearch: {
            padding: '0 10px',
            '& div[class*="MuiGrid-item"]': {
                padding: '9px',
            },
            '& div[class*="BlogSearch-blogCard"]': {
                padding: '0',
            },
            '& div[class*="MuiCardContent"] h1': {
                textAlign: 'center',
                fontSize: '11px',
                color: '#000000',
                fontWeight: '400',
                lineHeight: '15px',
                padding: '0',
            },
            '& div[class*="MuiCardContent"] p': {
                display: 'none',
            },
            '& div[class*="MuiCardContent"]': {
                padding: '10px',
            },
            '& div[class*="MuiCardContent"] h2': {
                position: 'relative',
                padding: 0,
            },
            '& div[class*="MuiCardContent"] h2 span': {
                position: 'relative',
                display: 'inline-block',
                padding: '0 ',
            },
            '& div[class*="MuiCardContent"] h2 span:after': {
                content: '""',
                position: 'absolute',
                width: '15px',
                height: '1px',
                background: '#757575',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
            },
            '& div[class*="MuiCardContent"] h2 span:before': {
                content: '""',
                position: 'absolute',
                width: '15px',
                height: '1px',
                background: '#757575',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
            },
        },
    },
    [theme.breakpoints.up("sm")]: {
        blogSearch: {
            '& div[class*="BlogSearch-container"]': {
                maxWidth: '800px',

            },
            '& div[class*="MuiPaper"]': {
                boxShadow: 'none',
                background: '#fff',
            },
            '& div[class*="blogSearch-blogCard"]': {
                padding: '3px 6px',
            },
            '& div[class*="MuiPaper-root"]': {
                background: 'transparent !important',
                boxShadow: 'none !important',
                overflow: 'inherit !important',
            },
            '& button[class*="MuiCardActionArea"]': {
                display: 'flex',
                alignItems: 'center',
                transition: '0.3s',
                '&:hover': {
                    background: '#e1e1e1',
                },
                '& span[class*="MuiCardActionArea-focusHighlight"]': {
                    opacity: '0',
                },
            },
            '& div[class*="MuiCardMedia-root"]': {
                width: '274px',
                minWidth: '274px',
                height: '167px',
                float: 'left',
                boxShadow: '0px 5px 15px 0px rgba(127, 127, 127, 0.3)',
                marginRight: '40px',

            },
            '& div[class*="MuiCardContent"]': {
                padding: '0',
            },
            '& div[class*="MuiCardActionArea-root"]:hover div[class*="MuiCardActionArea-focusHighlight"]': {
                opacity: '0',
            },
            '& div[class*="MuiCardContent"] h2': {
                textAlign: 'left',
                marginBottom: '19px',
                marginTop: '0px',
                paddingLeft: 0,
                fontSize: '16px',
            },
            '& div[class*="MuiCardContent"] h1': {
                textAlign: 'left',
                fontSize: '24px',
                lineHeight: '32px',
                color: '#000000',
                fontWeight: '400',
                marginBottom: '15px',
            },
            '& div[class*="MuiCardContent"] p': {
                textAlign: 'left',
                fontSize: '19px',
                color: '#868686',
                fontWeight: '400',
                lineHeight: '23px',
                padding: '0',
                height: 'auto'
            },
            '& div[class*="MuiCardContent"] h2 span': {
                padding: 0,
            },
            '& div[class*="MuiCardContent"] h2 span:after': {
                display: 'none',
            },
            '& div[class*="MuiCardContent"] h2 span:before': {
                display: 'none',
            },
            
        },
    },

    cutomInputGrid: {
        position: 'relative',
        [theme.breakpoints.down("xs")]: {
            maxWidth: '316px',
            margin: '0 auto',
        },
    },
    removeSearch: {
        position: 'absolute',
        top: '4px',
        right: '4px',
        width: '24px',
        height: '24px',
        background: '#8e8e8e',
        borderRadius: '50%',
        lineHeight: '25px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#fff',
        zIndex: '9',
        [theme.breakpoints.down("xs")]: {
            top: '-4px',
            right: '-4px',
        },
        '& > i':{
            position: 'relative',
            left: '1px',
        },
        '&:hover': {
            color: '#fff',
        },
        '&:focus': {
            color: '#fff',
        },
    },
    searchBtn:{
        position: 'absolute',
        right: '0',
        top: '0',
        padding: '0',
        height: '100%',
        fontSize: '23px',
        background: '#0166ff',
        borderRadius: '0',
        color: '#fff',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        minWidth: '50px',
        '&:hover':{
            background: '#0166ff',
            color: '#fff',
        },
    },
    blogSec: {
        padding: '8px 0',
        [theme.breakpoints.down("sm")]: {
            padding: '8px 23px',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '8px 18px',
        },
    },
    blogCard: {
        padding: '16px 6px',
        position: 'relative',
        zIndex: '2',
        '& button[class*="MuiCardActionArea"]': {
            transition: '0.3s',
            '&:hover': {
                background: '#e1e1e1',
            },
        },
        '& span[class*="MuiCardActionArea-focusHighlight"]':{
            display: 'none',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '8px 0px',
        },
        '& div[class*="MuiPaper"]': {
            boxShadow: '0px 5px 15px 0px rgba(147, 147, 147, 0.4)',
            background: '#f6f6f6',
        },
        '& div[class*="MuiCardMedia"]': {
            height: '214px',
            [theme.breakpoints.down("sm")]: {
                height: '192px',
                width: '100%',
            },
            [theme.breakpoints.down("xs")]: {
                height: '102px',
                width: '100%',
            },

        },
        '& h2': {
            fontSize: '14px',
            color: '#757575',
            position: 'relative',
            padding: '0 30px',
            lineHeight: '1.2',
            fontWeight: '500',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '19px',
            marginTop: '4px',
            '& span': {
                position: 'relative',
                display: 'inline-block',
                padding: '0 8px',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: '30px',
                    height: '1px',
                    background: '#757575',
                    left: '-30px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '30px',
                    height: '1px',
                    background: '#757575',
                    right: '-30px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
            },
            
        },
        '& p': {
            fontSize: '16px',
            fontWeight: '400',
            color: '#000000',
            lineHeight: '19px',
            padding: '0 25px 25px',
            textAlign: 'center',
            height: '58px',
            marginBottom:5,
            overflow:'hidden'
        },

    },

    mostRecent: {
        position: 'relative',
        margin: '-2px -10px',
        padding: '10px 8px',
        background: '#ffffff',
        border: '8px solid #0d83dd',
        '& $blogCard': {
            padding: 0,
        }
    },
    recentTitle: {
        fontSize: '16px',
        fontWeight: ' 500',
        color: '#fff',
        textAlign: 'center',
        width: '123px',
        height: '58px',
        background: '#0d83dd',
        display: 'inline-block',
        lineHeight: '48px',
        left: '-8px',
        position: 'absolute',
        top: '-58px',
        [theme.breakpoints.down("xs")]: {
            left: '-6px',
        },
        [theme.breakpoints.down("sm")]: {
            left: '-6px',
            top: '-60px',
        },
    },
    blogGrid: {
        '& div[class*="MuiGrid-grid-lg-9"]':{
            padding: '14px',
            maxWidth: '73%',
            flexBasis: '73%',
            [theme.breakpoints.down("sm")]: {
                maxWidth: '100%',
                flexBasis: '100%',
                padding: '0',
            },
            [theme.breakpoints.down("xs")]: {
                maxWidth: '100%',
                flexBasis: '100%',
            },
        },
        '& div[class*="MuiGrid-grid-lg-3"]':{
            padding: '14px',
            maxWidth: '27%',
            flexBasis: '27%',
            [theme.breakpoints.down("sm")]: {
                padding: '8px 15px',
            },
            [theme.breakpoints.down("xs")]: {
                padding: '8px 15px',
            },
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+1) div[class*="blogCard"] h2': {
            color: '#fe0000',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+2) div[class*="blogCard"] h2': {
            color: '#fe8900',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+3) div[class*="blogCard"] h2': {
            color: '#e7c900',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+4) div[class*="blogCard"] h2': {
            color: '#53ba00',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+5) div[class*="blogCard"] h2': {
            color: '#02c0a7',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+6) div[class*="blogCard"] h2': {
            color: '#0189e9',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+7) div[class*="blogCard"] h2': {
            color: '#8408db',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+8) div[class*="blogCard"] h2': {
            color: '#f500be',
        },
        '& div[class*="MuiGrid-grid"]:nth-child(9n+9) div[class*="blogCard"] h2': {
            color: '#f93757',
        },
        [theme.breakpoints.down("xs")]: {
            '& div[class*="custom-form-control"]': {
                marginBottom: '16px',
                marginTop: '8px',
            },
        },
    },
    moreArticles: {
        textAlign: 'center',
        marginTop: '28px',
        marginBottom: '108px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '80px',
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '80px',
        },
    },
    btnOa: {
        '& button': {
            fontSize: '14px',
            color: '#fff',
            background: '#0d83dd',
            boxShadow: '0px 5px 12px 0px rgba(151, 151, 151, 0.35)',
            textTransform: 'uppercase',
            fontWeight: '500',
            borderRadius: '4px',
            padding: '16px 18px',
            margin: '0 12px',
            minWidth: '150px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '10px',
                minWidth: '100px',
            },
            '&:hover': {
                background: '#006bbd',
            },
        },
    },
    searchHeader: {
        textAlign: 'right',
    },
    btnVa: {
        '& button': {
            fontSize: '14px',
            color: '#fff',
            background: '#747474',
            boxShadow: '0px 5px 12px 0px rgba(151, 151, 151, 0.35)',
            textTransform: 'uppercase',
            fontWeight: '500',
            borderRadius: '4px',
            padding: '16px 18px',
            margin: '0 12px',
            minWidth: '150px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '10px',
                minWidth: '100px',
            },
            '&:hover': {
                background: '#5e5e5e',
            },
        },
    },

    blogPagination: {
        textAlign: 'center',
        marginTop: '60px',
        marginBottom: '70px',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down("xs")]: {
            marginTop: '30px',
        },
        '& ul': {
            border: '1px solid #aaa',
            borderRadius: '5px',
            display: 'flex',
            padding: '0',
        },
        '& ul li': {
            display: 'inline-block',
            width: 'auto',
            borderRight: '1px solid #aaa',
            padding: '0',
        },
        '& ul li a': {
            display: 'inline-block',
            fontSize: '16px',
            fontWeight: '500',
            color: '#000',
            textTransform: 'uppercase',
            padding: '11px 17px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '11px',
                padding: '11px 12px',
            },
        },
        '& ul li.active': {
            background: '#3183ff',
            margin: '0 -1px',
            borderColor: '#3183ff',
        },
        '& ul li.active a': {
            color: '#fff',
            background: '#3183ff',
        },
        '& ul li:last-child': {
            borderRight: '0',
        },
        '& ul li:first-child a': {
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '18px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '10px',
                lineHeight: 'inherit',
            },
        },
        '& ul li:last-child a': {
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '18px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '10px',
                lineHeight: 'inherit',
            },
        },
    },
    blogDetail: {
        marginBottom: '100px',
        marginTop: '37px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '54px',
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '0',
        },
    },
    articleHead: {
        paddingLeft: '93px',
        marginBottom: '60px',
        paddingTop: '20px',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: '60px',
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: '20px',
            marginBottom: '50px',
        },
        '& > a': {
            color: '#76aeff',
            position: 'relative',
            padding: '2px 14px',
            border: ' 2px solid #76aeff',
            fontWeight: '900',
            fontSize: '12px',
            lineHeight: '22px',
            textTransform: 'uppercase',
            borderRadius: '4px',
            '&:hover':{
                color: '#fff',
                background: '#76aeff',
                borderColor: '#76aeff',
            },
            '& > i':{
                marginRight: '5px',
                fontSize:'11px'
            },
        },
    },
    blogDetailLeft: {
        position: 'relative',
        paddingLeft: '96px',
        paddingRight: '27px',
        [theme.breakpoints.down("sm")]: {
            padding: '0',
        },
    },
    blogCat: {
        marginBottom: '18px',
        fontSize: '14px',
        fontWeight: '900',
        textTransform: 'uppercase',
        [theme.breakpoints.down("sm")]: {
            fontSize: '18px',
            padding: '0 60px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '12px',
            padding: '0 35px',
        },
    },
    titleRed: {
        color: '#fc030f',
    },
    blogTitle: {
        [theme.breakpoints.down("sm")]: {
            padding: '0 60px',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '0 35px',
        },
        '& > h2': {
            fontSize: '40px',
            lineHeight: '1.2',
            color: '#000',
            fontWeight: '500',
            [theme.breakpoints.down("sm")]: {
                fontSize: '42px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '24px',
                lineHeight: '29px',
            },
        },
    },
    blogBannerSocial: {
        position: 'relative',

    },
    blogSocialList: {
        position: 'absolute',
        left: '-60px',
        textAlign: 'center',
        '& > p': {
            marginBottom: '5px',
            textAlign: 'center',
            fontWeight: '900',
            fontSize: '10px',
            lineHeight: '1.5',
            letterSpacing: '0.05em',
            color: '#bcbcbc',
            textTransform: 'uppercase',
            '& > b': {
                display: 'block',
                fontSize: '18px',
                lineHeight: '1.2',
                color: '#000',
            },
        },
    },
    socialShare: {
        '& > a, & > div': {
            position: 'relative',
            fontSize: '16px',
            color: '#bdbdbd',
            lineHeight: '36px',
            marginBottom: '10px',
            display: 'block',
            width: '36px',
            height: '36px',
            border: '2px solid #ddd',
            background: '#fff',
            borderRadius: '50%',
            cursor:'pointer'
        },   
        '& a[class*="fb"]:hover, & [class*="facebook"]:hover':{
            borderColor: '#3b5998',
            background: '#3b5998',
            color: '#fff',
        },
        '& a[class*="insta"]:hover':{
            borderColor: '#517fa4',
            background: '#517fa4',
            color: '#fff',
        }, 
        '& a[class*="twitter"]:hover, & [class*="twitter"]:hover':{
            borderColor: '#00aced',
            background: '#00aced',
            color: '#fff',
        }, 
        '& a[class*="linkedin"]:hover, & [class*="linkedin"]:hover':{
            borderColor: '#007bb6',
            background: '#007bb6',
            color: '#fff',
        }, 
        '& a[class*="pinterest"]:hover, & [class*="pinterest"]:hover':{
            borderColor: '#cb2027',
            background: '#cb2027',
            color: '#fff',
        }, 
        
        '& a[class*="gplus"]:hover, & [class*="googlePlus"]:hover':{
            borderColor: '#dd4b39',
            background: '#dd4b39',
            color: '#fff',
        },    
        '& a[class*="gplus"]':{
            marginBottom: 0,
        }, 
    },
    socialDots: {
        border: '0 !important',
        height: '20px !important',
        lineHeight: '2px !important',
        fontSize: '31px !important',
        marginTop:-3,
        marginBottom: '6px !important',
        background: 'transparent !important',
    },
    noCircle: {
        border: '0 !important',
        height: '30px !important',
        lineHeight: 'inherit !important',
        fontSize: '25px !important',
        background: 'transparent !important',
        '&:hover': {
            fontSize: '30px !important',
        }
    },
    articleImage: {
        marginBottom: '25px',
        maxHeight: '485px',
        overflow: 'hidden',
        [theme.breakpoints.down("xs")]: {
            margin: '0 0',
            maxHeight: '252px',
        },
        '& > img': {
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
        },
    },
    articleUserInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '44px',
        padding: '0 20px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 60px',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '0 19px',
            marginTop: '30px',
            marginBottom: '25px',
        },
    },
    auName: {
        display: 'flex',
        alignItems: 'center',
        '& > a': {
            fontSize: '16px',
            fontWeight: '500',
            color: '#76aeff',
            [theme.breakpoints.down("xs")]: {
                fontSize: '14px',
            },
        },
        '& > img': {
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: '15px',
            width: '84px',
            height: '84px',
            [theme.breakpoints.down("xs")]: {
                width: '56px',
                height: '56px',
            },
        },
    },
    auDate:{
        fontSize: '16px',
        fontWeight: '400',
        color: '#000000',
        [theme.breakpoints.down("xs")]: {
            fontSize: '14px',
        },
    },
    articleContent: {
        padding: '0 20px',
        fontSize: '19px',
        lineHeight: '29px',
        color: '#545454',
        [theme.breakpoints.down("sm")]: {
            padding: '0 60px',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '0 19px',
            fontSize: '16px',
            lineHeight: '21px',
        },
        '&  p': {
            marginBottom: '28px',
            fontSize: '19px',
            lineHeight: '29px',
            color: '#545454',
            maxWidth: '660px',
            margin: '0 auto',
            [theme.breakpoints.down("sm")]: {
                maxWidth: '100%', 
            },
            [theme.breakpoints.down("xs")]: {
                maxWidth: '100%',
                fontSize: '16px',
                lineHeight: '21px',
            },
        },
        '& > p > img': {
            maxWidth: '100%',
        },
    },
    backBlogBtn: {
        textAlign: 'center',
        marginTop: '50px',
        [theme.breakpoints.down("sm")]: {
            marginTop: '45px',
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '45px',
        },
        '& button': {
            fontSize: '25px',
            fontWeight: '700',
            color: '#fff',
            background: '#0584de',
            lineHeight: '52px',
            boxShadow: '0px 5px 12px 0px rgba(138, 138, 138, 0.75)',
            padding: '8px 25px',
            [theme.breakpoints.down("xs")]: {
                fontSize: '21px',
                lineHeight: '55px',
                padding: '0px 22px',
            },
            '&:hover': {
                background: '#1659bf',
            }
        },
    },
    articleSidebarLeft: {
        paddingRight: 10,
        [theme.breakpoints.down("sm")]: {
            padding: '0 15px 0 15px',
        },
    },
    articlesTab:{
        '& a:last-child div[class*="BlogDetail-widgetArticle"]':{
            marginBottom: 0,
        }
    },
    [theme.breakpoints.down("sm")]: {
        articlesTab: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 -15px',
        },
    },
    widgetWhite: {
        background: '#fff',
        boxShadow: '0 5px 15px rgba(147,147,147,.4)',
        padding: '20px 18px 20px',
        marginBottom: '40px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '20px', 
        },
        '& h4': {
            fontSize: '16px',
            color: '#000',
            fontWeight: '500',
            marginBottom: '18px',
            flexBasis: '100%'
        },
        '& a': {
            color: '#000000',
            display: 'block',
            [theme.breakpoints.down("sm")]: {
                padding: '0 15px',
            },
        },
        '& a:last-child div[class*="blogDetail"]': {
            marginBottom: '0',
        },

    },
    widgetArticleImg: {
        height: '188px',
        boxShadow: '0 5px 12px rgba(143,143,143,.3)',
        '& img': {
            maxWidth: '100%',
            height: '100%',
        }
    },
    widgetArticle: {
        position: 'relative',
        marginBottom: '26px',
        display: 'block',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '5px',
        background: '#f6f6f6',
        textDecoration: 'none',
        boxShadow: '0 5px 12px rgba(143,143,143,.3)',
        textAlign: 'center',
        transition: '0.3s',
        '&:hover':{
            background: '#eae9e9',
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: '0px',
        },
    },
    widgetArticleInfo: {
        padding: '12px 19px',
        fontSize: '12px',
        lineHeight: '16px',
        '& p': {
            fontSize: '12px',
            lineHeight: '16px',
            color: '#000',
            margin: 0,
        },
        '& h5': {
            position: 'relative',
            fontSize: '11px',
            lineHeight: '1.2',
            fontWeight: '500',
            textTransform: 'uppercase',
            color: '#757575',
            paddingBottom: '12px',
            '& span': {
                position: 'relative',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '-35px',
                    width: '29px',
                    height: '2px',
                    background: ' #a9a9a9',
                    transform: 'translateY(-50%)',
                },
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    right: '-35px',
                    width: '29px',
                    height: '2px',
                    background: ' #a9a9a9',
                    transform: 'translateY(-50%)',
                }
            }
        }
    },
    textRed: {
        color: '#ff0000',
    },
    textBlue: {
        color: '#0080da',
    },
    textOrange: {
        color: '#ff7e00',
    },
    textPurple: {
        color: '#dc00ca',
    },
    searchIcon: {
        fontSize: '34px',
        color: '#929292',
        position: 'relative',
        top: '26px',
        right: '24px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '26px',
            top: '26px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '42px',
            top: '26px',
        },
    },
    emailForm: {
        margin: '30px 0 0',
        position: 'relative',
        padding: '0 50px 30px 50px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 29px 30px 29px',
        },
        '& div[class*="MuiGrid-container"]': {
            margin: 0,
            width: '100%',
        },
        '& .custom-form-control label[class*="MuiFormLabel-required"] + div[class*="MuiInputBase-formControl"] fieldset': {
            borderColor: '#c3c3c3',
            boxShadow: 'none',
        },
        '& .custom-form-control label[class*="MuiFormLabel-required"]': {
            color: '#8b8b8b',
        }
    },
    emailModal: {

        '& div[class*="MuiDialogTitle"]': {
            background: '#5a9afc',
            [theme.breakpoints.down("sm")]: {
                borderBottom: '1px solid #fff',
            },
            '& h6': {
                textAlign: 'center',
                color: '#fff',
                fontWeight: '900',
                fontSize: '24px',
                [theme.breakpoints.down("sm")]: {
                    fontSize: '20px',
                },
            },
        },
        '& div[class*="MuiDialog-paper"]': {
            overflowY: 'inherit',
        },
        '& div[class*="MuiFormControl"]': {
            marginBottom: '16px',
        },
        '& div[class*="MuiGrid-container"]': {
            marginBottom: '30px',
        },
    },
    formLabel: {
        textTransform: 'uppercase',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '15px',
            display: 'block',
            fontWeight: '700',
        },
    },
    saleLabel: {
        textTransform: 'uppercase',
        fontWeight: '500',
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '15px',
            display: 'block',
        },
    },
    submitlabel: {
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
    },
    saleAddress: {
        fontSize: '18px',
        color: '#000000',
        marginBottom: '22px',
        fontWeight: '500',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '0',
        },
    },
    emailSent: {
        display: 'flex',
        background: '#5a9afc',
        alignItems: 'center',
        padding: '30px 0',
        [theme.breakpoints.down("xs")]: {
            display: 'block',
            textAlign: 'center',
        },
    },
    emailmsg: {
        margin: '0 55px',
        [theme.breakpoints.down("xs")]: {
            paddingBottom: '30px',
        },
    },
    emailmsgIcon: {
        width: '174px',
        height: '174px',
        display: 'inline-block',
        border: '3px solid #fff',
        borderRadius: '50%',
        textAlign: 'center',
        color: '#fff',
        fontSize: '129px',
        lineHeight: '195px',
        transform: 'rotate(-20deg)',
    },
    emailThanks: {
        [theme.breakpoints.down("xs")]: {
            maxWidth: '210px',
            margin: '0 auto',
        },
        '& p': {
            fontSize: '24px',
            color: '#fff',
            lineHeight: '30px',
            fontWeight: '500',
            marginBottom: '30px',
            [theme.breakpoints.down("xs")]: {
                marginBottom: '25px',
            },
        },
    },
    prorate: {
        position: 'absolute',
        top: '9px',
        right: '14px',
        zIndex: '9',
        '& input': {
            width: '100%',
            display: 'inline-block',
            height: '100%',
            position: 'absolute',
            left: '-4px',
            top: '-4px',
            opacity: '0',
        },
        '& input:checked + span': {
            color: '#fbdb00',
        },
        '& input:checked + span i:before': {
            content: '"\\e93f"',
        },
        '& span': {
            fontSize: '30px',
            color: '#fff',
        },
    },
    propertyStatus: {
        position: 'absolute',
        top: '-42px',
        left: '13px',
        '& > .status': {
            fontSize: '12px',
            fontWeight: '500',
            color: '#fff',
            display: 'inline-block',
            padding: '4px 17px',
            lineHeight: '17px',
            borderRadius: '15px',
            textTransform: 'uppercase'            
        },
        '& > .statusNL': {
            background: '#595959',
        },
        '& > .statusNF': {
            background: '#f43838',
        },
        '& > .statusSB': {
            background: '#f7941d',
        },
        '& > .statusP': {
            background: '#3bb34c',
        },
    },
    socialToggle: {
        position: 'absolute',
        zIndex: '99',
        background: '#fff',
        padding: '8px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        left: '12px',
        top: '15px',
        '& ul': {
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            '& li': {
                padding: 0,
                '& a,& div': {
                    width: '29px',
                    height: '29px',
                    display: 'inline-block',
                    border: '1px solid #ddd',
                    borderRadius: '50%',
                    textAlign: 'center',
                    lineHeight: '29px',
                    color: '#ddd',
                    margin: '0 6px',
                    [theme.breakpoints.down("xs")]: {
                        margin: '0 3px',
                    },
                },
            },
            '& li:first-child': {
                '& a,& div': {
                    border: 0,
                    fontSize: '25px',
                }
            },
            '& li:nth-child(2)': {
                '& a,& div': {
                    background: '#3b5998',
                    borderColor: '#3b5998',
                    color: '#fff',
                }
            },
            '& li:nth-child(3)': {
                '& a,& div': {
                    background: '#00aced',
                    borderColor: '#00aced',
                    color: '#fff',
                }
            },
            '& li:nth-child(4)': {
                '& a,& div': {
                    background: '#517fa4',
                    borderColor: '#517fa4',
                    color: '#fff',
                }
            },
            '& li:nth-child(5)': {
                '& a,& div': {
                    background: '#007bb6',
                    borderColor: '#007bb6',
                    color: '#fff',
                }
            },
            '& li:nth-child(6)': {
                '& a,& div': {
                    background: '#cb2027',
                    borderColor: '#cb2027',
                    color: '#fff',
                }
            },
            '& li:nth-child(7)': {
                '& a,& div': {
                    background: '#dd4b39',
                    borderColor: '#dd4b39',
                    color: '#fff',
                }
            },
        },
    },
    toggleBtn: {
        '& a': {
            width: '29px',
            height: '29px',
            display: 'inline-block',
            border: '1px solid #ddd',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '29px',
            color: '#ddd',
        },
    },
    searchBoxWrapper: {
        paddingBottom: '32px !important'
    },
    blogSearchCard: {
        padding: '5px 0',
        '& h2': {
            fontSize: '16px'
        }
    },
    blogSearch: {
        '& $blogCard div[class*="MuiCardMedia"]': {
            height: 168,
            marginRight: 44
        }
    },
    titleWrapper: {
        paddingLeft: 96
    }
})
export default blogStyle;