import { container } from "../../material-kit-react.jsx";
const propertyDetailStyle = theme => ({
    container: {
        ...container
    },
    root: {

    },
    propertyContainer: {
        maxWidth: '1080px',
        margin: '70px auto 0',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '730px',
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: 'calc(100% - 32px)',
        },
    },
    customSliderArrow:{
        width:'100%'
    },
    backButton: {
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
    breadcrumbList: {
        display: 'inline-block',
        padding: '0',
        marginLeft: '20px',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
        '& > li': {
            padding: '0',
            display: 'inline-block',
            width: 'auto',
            '& > a': {
                color: '#4c70a4',
                fontSize: '12px',
                fontWeight: '500',
                padding: '0 8px',
                position: 'relative',
                '&:after': {
                    content: '"."',
                    position: 'absolute',
                    right: '-4px',
                    fontSize: '28px',
                    top: '-1px',
                    lineHeight: '0',
                },
            },
            '&:last-child > a:after': {
                display: 'none',
            }
        },
    },
    backBreadcrumb: {
        marginBottom: '0',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '634px',
            margin: '0 auto',
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: '319px',
            margin: '0 auto',
        },
    },
    activeListing: {
        margin: '45px 0 30px 0',
        fontSize: '14px',
        fontWeight: '900',
        lineHeight: '1.2',
        color: '#3bb34c',
        textTransform: 'uppercase',
        '& span': {
            margin: '0 8px',
        },
        '& a': {
            color: '#0266ff',
        },
    },
    titleInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '30px',
        borderBottom: '1px solid #e7e7e7',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
            maxWidth: '634px',
            margin: '0 auto',
            borderBottom: '0',
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: '319px',
            display: 'block',
            margin: '0 auto',
            borderBottom: '0',
            paddingBottom: '0',
        },
    },
    propertyTitle: {
        '& > h5': {
            fontSize: '14px',
            textTransform: 'uppercase',
            marginBottom: '13px',
            fontWeight: '500',
        },
        '& > h2': {
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '1',
            color: '#000',
            marginBottom: '10px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '46px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '26px',
            },
        },
        '& > h4': {
            display: 'inline-block',
            paddingRight: '30px',
            fontSize: '24px',
            fontWeight: '500',
            [theme.breakpoints.down("sm")]: {
                fontSize: '30px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '20px',
            },
            '& > a': {
                boxShadow: '0 0 30px rgba(154,154,154,.6)',
                padding: '7px 10px',
                fontSize: '11px',
                background: '#f4f4f4',
                color: '#7e7e7e',
                marginLeft: '30px',
                [theme.breakpoints.down("sm")]: {
                    marginLeft: '0',
                    display: 'inline-block',
                    textAlign: 'center',
                    marginTop: '16px',
                },
            },
        },
    },
    propertyTags: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'relative',
        [theme.breakpoints.down("sm")]: {
            marginTop: '75px',
            margin: '75px auto 0 auto',
        },
    },
    productVarientType: {
        minWidth: '55px',
        margin: '0 16px',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            margin: '0 6px',
            flexBasis: '25%',
        },
        [theme.breakpoints.down("xs")]: {
            flexBasis: '25%',
        },
        '&:last-child':{
            marginRight: 0,
        },
        '& > i': {
            color: '#0166ff',
            fontSize: '50px',
            marginBottom: '15px',
            display: 'block',
            [theme.breakpoints.down("sm")]: {
                fontSize: '50px',
            },
        },
        '& > p': {
            fontSize: '15px',
            fontWeight: '500',
            color: '#555',
            maxWidth: '80px',
            [theme.breakpoints.down("sm")]: {
                maxWidth: 'inherit',
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: 0,
                maxWidth: 'inherit',
            },
        }
    },
    propertyAside: {
        [theme.breakpoints.down("sm")]: {
            padding: '55px 0 35px 0',
            maxWidth: '634px',
            borderTop: '1px solid rgba(0, 0, 0, 0.10)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
            margin: '50px auto 20px auto',
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: '319px',
            padding: '55px 0 35px 0',
            margin: '50px auto 20px auto',
        },
        '& ul': {
            padding: 0,
            '& li': {
                padding: 0,
                display: 'block',
            }
        },
    },
    widgetYellow: {
        textAlign: 'center',
        padding: ' 27px 15px 21px',
        borderRadius: '6px',
        marginBottom: '30px',
        background: '#fbdb00',
        boxShadow: '0 5px 15px rgba(147,147,147,.4)',
        width: '100%',
        [theme.breakpoints.down("xs")]: {
            padding: ' 5px 15px 5px',
        },
    },
    widgetHead: {
        marginBottom: '9px',
        '& h6': {
            color: '#0166ff',
            fontWeight: '700',
            textTransform: 'uppercase',
            fontSize: '16px',
            margin: 0,
            [theme.breakpoints.down("sm")]: {
                fontSize: '24px',
            },
        },
    },
    widgetBody: {
        '& div[class*="PropertyDetails-emailForm"]': {
            padding: '0 0',
        },
        '& h4': {
            fontSize: '32px',
            fontWeight: '700',
            color: '#0166ff',
            margin: 0,
            [theme.breakpoints.down("sm")]: {
                fontSize: '56px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '33px',
            },
        },
    },
    widgetWhite: {
        borderRadius: '6px',
        padding: '22px 30px 31px',
        background: '#fff',
        boxShadow: '0 5px 15px rgba(147,147,147,.4)',
        width: '100%',
    },
    widgetProfile: {
        textAlign: 'center',
    },
    widgetHeadProfile: {
        textAlign: 'center',
        marginBottom: '26px',
        '& h6': {
            color: '#0166ff',
            fontWeight: '700',
            textTransform: 'uppercase',
            fontSize: '16px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '24px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '18px',
            },
        }
    },
    profileInner: {
        display: 'flex',
        alignItems: 'center',
    },
    profileImage: {
        width: '110px',
        height: '110px',
        display: 'inline-block',
        flexShrink: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        marginRight: '15px',
        '& img': {
            width: '100%',
            height: '100%',
        },
    },
    progfileLarge: {
        marginBottom: '30px',
        '&:last-child': {
            marginBottom: '0',
        },
    },
    profileContent: {
        '& h6': {
            fontSize: '16px',
            fontWeight: '500',
            color: '#000',
            textTransform: 'capitalize',
            [theme.breakpoints.down("sm")]: {
                fontSize: '18px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '16px',
            },
        },
        '& > ul': {
            marginBottom: '6px',
            '& > li': {
                padding: '1px 0 0 18px',
                color: '#000',
                position: 'relative',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '22px',
                margin:'5px 0',
                display:'block',
                [theme.breakpoints.down("sm")]: {
                    fontSize: '15px',
                },
                '& i': {
                    top: '3px',
                    position: 'absolute',
                    left: '1px',
                },
                '& a': {
                    color: '#000',
                },

            },
        },
    },
    emailBtn: {
        background: '#5a9afc',
        color: '#fff',
        fontSize: '13px',
        padding: '6px 12px',
        textTransform: 'uppercase',
        fontWeight: '700',
        borderRadius: '4px',
        cursor:'pointer',
        marginBottom:'10px',
        display:'inline-block',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '13px',
        },
        '&:hover': {
            background: '#2e77e6',
            color: '#fff',
        },
        '&:focus': {
            background: '#2e77e6',
            color: '#fff',
        },
    },
    widgetGrey: {
        padding: '20px',
        background: '#dcdcdc',
        width: '100%',
        marginBottom: '30px',
        borderRadius: '6px',
    },
    timerDays: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    widgetTimer: {
        fontSize: '16px',
        color: '#797979',
        fontWeight: '700',
        lineHeight: '30px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '28px',
            lineHeight: '53px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '16px',
            lineHeight: '30px',
        },
        '& > span': {
            fontSize: '20px',
            color: '#373737',
            display: 'block',
            [theme.breakpoints.down("sm")]: {
                fontSize: '35px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '20px',
            },
        },
    },
    widgetDays: {
        textAlign: 'right',
        fontSize: '16px',
        color: '#797979',
        fontWeight: '700',
        lineHeight: '30px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '28px',
            lineHeight: '53px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '16px',
            lineHeight: '30px',
        },
        '& > span': {
            fontSize: '20px',
            color: '#373737',
            display: 'block',
            [theme.breakpoints.down("sm")]: {
                fontSize: '35px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '20px',
            },
        },
    },
    productGroup: {
        fontSize: '15px',
        lineHeight: '1.73',
        marginBottom: '45px',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '634px',
            margin: '0 auto',
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: '319px',
            margin: '0 auto',
        },
        '& h4': {
            fontSize: '32px',
            color: '#3c3c3c',
            fontWeight: '500',
            lineHeight: '1.5',
            marginBottom: '23px',
            marginTop: '34px',
        },
        '& p': {
            fontSize: '16px',
            lineHeight: '26px',
            marginBottom: '22px',
            color: '#555',
        }
    },
    tableBox: {
        padding: '9px 12px 11px',
        background: ' #fff',
        boxShadow: '0 5px 15px rgba(141,141,141,.4)',
        overflow: 'hidden',
        marginBottom: '58px',
    },
    table: {
        float: 'left',
        width: '50%',
        fontSize: '12px',
        fontWeight: '700',
        color: '#8a8a8a',
        background: '#fcfcff',
        marginBottom: '0',
        position: 'relative',
        zIndex: '2',
        marginRight: '-2px',
        [theme.breakpoints.down("xs")]: {
            float: 'none',
            width: '100%',
        },
        '& table': {
            width: '100%',
        },
        '& tr td:nth-child(1)': {
            borderRight: 0,
        },
        '& tr td:nth-child(2)': {
            borderLeft: 0,
        },
        '& td': {
            padding: '20px 18px 20px',
            [theme.breakpoints.up("lg")]: {
                padding: '20px 10px 20px',
            },
            height: '67px',
            border: '1px solid #e7e7e7',
            '& p': {
                marginBottom: 0,
                fontSize: '12px',
                fontWeight: '700',
                color: '#8a8a8a',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
            },
            '& h6': {
                margin: 0,
                fontSize: '15px',
                color: '#303030',
                whiteSpace: 'nowrap',
                textTransform: 'capitalize',
            },
        },
    },
    tableNote:{
        '& tr td': {
            background: '#fdfcf5',
        },
    },
    productEntry: {
        whiteSpace:'pre-wrap',
        fontWeight: '400',
        '& ul': {
            padding: '0',
            marginLeft: '30px',
            '& > li': {
                position: 'relative',
                padding: '0',
                width: '30%',
                float: 'left',
                paddingLeft: '30px',
                marginBottom: '20px',
                [theme.breakpoints.down("xs")]: {
                    width: '50%',
                },
                '&:before': {
                    content: '""',
                    backgroundColor: '#70a5f3',
                    boxShadow: '0 5px 15px rgba(141,141,141,.4)',
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    marginTop: '-5px',
                },
                '& p': {
                    fontSize: '17px',
                    margin: '0',
                    fontWeight: '500',
                },
            },
        },
    },
    backListBtn: {
        padding: '80px 0 100px 0',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        '& a': {
            color: '#fff',
            padding: '19px 37px',
            fontSize: '25px',
            background: '#0584de',
            fontWeight: '700',
            lineHeight: '52px',
            borderRadius: '4px',
            boxShadow: '0px 5px 12px 0px rgba(101, 148, 255, 0.75)',
        },
    },
    productContent: {
        padding: '0 0 0 0',
        position: 'relative',
        [theme.breakpoints.down("sm")]: {
            padding: 0,
        },
        [theme.breakpoints.down("xs")]: {
            margin: '0 -16px',
        },
    },
    socialBox: {
        position: 'absolute',
        top: '-4px',
        left: '-55px',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
        '& > p': {
            marginBottom: '5px',
            textAlign: 'center',
            fontWeight: '900',
            fontSize: '10px',
            color: '#bcbcbc',
            textTransform: 'uppercase',
        },
        '& > ul': {
            '& li': {
                padding: 0,
                position: 'relative',
                zIndex: 99,
                '& a, &>div': {
                    position: 'relative',
                    border: '2px solid #ddd',
                    borderRadius: '50%',
                    background: '#fff',
                    width: '36px',
                    height: '36px',
                    textAlign: 'center',
                    lineHeight: '36px',
                    color: '#bdbdbd',
                    marginBottom: '10px',
                    transition: '0.3s',
                    cusrsor:"pointer"
                }
            },
            '& li:nth-child(1) a:hover, & li:nth-child(1) div:hover': {
                borderColor: '#3b5998',
                background: '#3b5998',
                color: '#fff',
            },
            '& li:nth-child(2) a:hover, & li:nth-child(2) div:hover': {
                borderColor: '#517fa4',
                background: '#517fa4',
                color: '#fff',
            },
            '& li:nth-child(3) a:hover, & li:nth-child(3) div:hover': {
                borderColor: '#00aced',
                background: '#00aced',
                color: '#fff',
            },
            '& li:nth-child(4) a:hover, & li:nth-child(4) div:hover': {
                borderColor: '#007bb6',
                background: '#007bb6',
                color: '#fff',
            },
            '& li:nth-child(5) a:hover, & li:nth-child(5) div:hover': {
                borderColor: '#cb2027',
                background: '#cb2027',
                color: '#fff',
            },
            '& li:nth-child(6) a:hover, & li:nth-child(6) div:hover': {
                borderColor: '#dd4b39',
                background: '#dd4b39',
                color: '#fff',
            },
            '& li:nth-child(7) a': {
                border: 0,
                background: 'transparent',
                marginBottom: 0,
                lineHeight: '20px',
                height: 'auto',
                fontSize:'24px'
            },
            '& li:nth-child(8) a': {
                border: 0,
                background: 'transparent',
                lineHeight: '20px',
                height: 'auto',
                fontSize:'26px',
                '&:hover':{
                    color: '#76aeff',
                },
            },
            '& li:nth-child(9) a': {
                border: 0,
                background: 'transparent',
                lineHeight: '20px',
                height: 'auto',
                fontSize:'26px',
                '&:hover':{
                    color: '#76aeff',
                },
            },
        },
    },
    tabsHead: {
        position: 'absolute',
        bottom: '15px',
        left: '0',
        zIndex: '10',
        width: '100%',
        padding: '20px 20px 0',
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
        },
        '& div[class*="MuiTabs"]': {
            overflow: 'inherit',
        },
        '& div[class*="MuiTabs-scroller"] span[class*="MuiPrivateTabIndicator"] ': {
            display: 'none',
        },
        '& button': {
            minWidth: 'inherit',
            position: 'relative',
            display: 'inline-block',
            width: '40px',
            height: '40px',
            minHeight: '40px',
            overflow: 'inherit',
            background: 'rgba(0, 0, 0, .5)',
            textAlign: 'center',
            transition: 'background .3s',
            color: '#fff',
            margin: '0 1px',
            fontSize: '22px',
            [theme.breakpoints.down("sm")]: {
                width: '105px',
                height: '105px',
                fontSize: '50px',
            },
            [theme.breakpoints.down("xs")]: {
                width: '53px',
                height: '53px',
                fontSize: '27px',
            },
            '&:nth-child(1)': {
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
            },
            '&:nth-child(6)': {
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
            },
            '&:nth-child(3)': {
                marginRight: 'calc(100% - 250px)',
                [theme.breakpoints.down("sm")]: {
                    marginRight: 0,
                },
            },
        },
        '& button[class*="MuiTab-selected"]': {
            background: 'rgba(1, 101, 255, 0.7)',
            position: 'relative',
            '&:after': {
                content: "''",
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                top: '-8px',
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '0 6.5px 8px 6.5px',
                marginLeft: '-6px',
                transition: 'all .3s',
                borderColor: 'transparent transparent rgba(1, 101, 255, 0.7) transparent',
                visibility: 'visible',
                opacity: '1',
            },
        },
    },
    profiles: {
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down("xs")]: {
            display: 'block',
        },
    },
    SlideCount: {
        position: 'absolute',
        top: '22px',
        left: '22px',
        zIndex: '10',
        padding: '5px 10px',
        borderRadius: '2px',
        background: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '1.2',
        color: '#fff',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
        [theme.breakpoints.down("xs")]: {
            display: 'none',
        },
    },
    proTabs: {
        position: 'relative',
        marginBottom: '-5px',
    },
    tabBody: {
        position: 'relative',
        width: '100%',
        '& div[class*="MuiTypography"]': {
            padding: '0 !important',
        },
    },
    video:{
        '& div':{
        height: '100%',
        },
    },
    tabFrame: {
        height: '480px',
        overflow: 'hidden',
        background: '#eae6e5',
        '& > div': {
            height: '100%',
        },
        '& iframe': {
            width: '100%',
            height: '100%',
            border: 0,
            maxHeight:'400px'
        }
    },
    tabGallery: {
        height: '470px',
        background: '#eae6e5',
        overflow: 'hidden',
        position: 'relative',
        // display:'inline-flex',
        // alignItems:'center',
        // justifyItem:'center',
        // width:'100%',
        // flex:'1',
        // flexDirection:'row',
        '& div[class*="sliderThumbImg"] img':{
            // width: 'auto',
            // height: 'auto',
            // maxWidth: '100%',
            // maxHeight: '480px',
            // margin: '0 auto',
        },
        '& img': {
            maxWidth: '100%',
            margin:' 0 auto',
            maxHeight:'480px'
        },
        '& div[class*="slick-dots"]': {
            display: 'none !important',
        },
        '& div[class*="slick-slider"]': {
            // position: 'relative !important',
            cursor: 'pointer',
            // display:'flex',
            // alignItems:'center',
            // justifyItem:'center',
            // position: 'absolute !important',
            top: '50%',
            transform: 'translateY(-50%)',
            display:'block',
            '& ul': {
                display: 'none !important',
                [theme.breakpoints.down("sm")]: {
                    display: 'block !important',
                },
                [theme.breakpoints.down("xs")]: {
                    display: 'block !important',
                },
                '& li': {
                    margin: '0 8px',
                    [theme.breakpoints.down("xs")]: {
                        margin: '0 5px',
                    },
                },
                '& li button::before': {
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    [theme.breakpoints.down("xs")]: {
                        width: '16px',
                        height: '16px',
                    },
                },
                '& li[class*="slick-active"] button::before': {
                    background: '#4b83da',
                    border: '5px solid #fff',
                    width: '15px',
                    height: '15px',
                    [theme.breakpoints.down("xs")]: {
                        border: '3px solid #fff',
                        width: '13px',
                        height: '13px'
                    },
                },
            },
        },
    },
    tabImage: {
        '& img': {
            maxWidth: '100%',
            margin: '0 auto'
        }
    },
    emailSuccess: {
        background: '#5a9afc',
        color: '#fff',
        display: 'block',
        padding: '20px 11px 30px',
        borderRadius: '5px',
        boxShadow: '0 5px 15px rgba(141,141,141,.4)',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '1.22',
        top: '30px',
        right: '0',
        left: '0',
        zIndex: '1',
        transition: 'opacity .3s, visibility .3s',
        '& h5': {
            fontSize: '24px',
            borderBottom: '2px solid #fff',
            paddingBottom: '16px',
            marginBottom: '47px',
            textAlign: 'center',
            color: '#fff',
            fontWeight: '900',
        },
        '& p': {
            textAlign: 'center',
            padding: '0 40px',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '22px',
        },
    },
    closeMsg: {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: '#8e8e8e',
        color: '#fff',
        lineHeight: '32px',
        fontSize: '15px',
        textAlign: 'center',
        position: 'absolute',
        cursor: 'pointer',
        top: '-15px',
        right: '-15px',
        '&:hover': {
            color: '#fff',
        },
    },
    msgIcon: {
        margin: '0 auto 40px',
        textAlign: 'center',
        '& i': {
            width: '142px',
            height: '142px',
            lineHeight: '142px',
            borderRadius: '50%',
            border: '3px solid #fff',
            position: 'relative',
            fontSize: '106px',
            display: 'inline-block',
            transform: 'rotate(-20deg)',
        },
    },
    contactBtn: {
        '& button': {
            width: '100%',
            background: '#5a9afc',
            fontSize: '14px',
            fontWeight: '700',
            padding: '12px',
        }
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
    slider: {
        marginBottom: '0px',
        position: 'relative',
        '& .slick-track':{
            minWidth:'100%'
        },
        '& div[class*="slick-slide"] img': {
            width: '100%',
            height: 'auto',
        },
        '& div[class*="slick-slide"] div[class*="sliderThumb"]': {
            transition: 'all .3s',
        },
        '& div[class*="slick-slide"] div[class*="sliderThumbImg"]': {
            width: '100%',
            height: '88px',
            overflow: 'hidden',
            '& img':{
                width: '100%',
                height: '100%',
            },
        },
        '& div[class*="slick-current"] div[class*="sliderThumb"]': {
            transform: 'scale(1.2)',
            boxShadow: '0 5px 8px rgba(0,0,0,.25)',
            zIndex: '9',
            position: 'relative',
        },
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
    },
    arrowLeft:{
        position:'absolute',
        top: '50%',
        left: '-10px',
        transform: 'translateY(-50%)',
        zIndex: '9',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        background: '#fff',
        borderRadius: '50%',
        lineHeight: '32px',
        textAlign: 'center',
        color: '#bcbcbc',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.2)',
    },
    arrowRight:{
        position:'absolute',
        top: '50%',
        right: '-10px',
        transform: 'translateY(-50%)',
        zIndex: '9',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        background: '#fff',
        borderRadius: '50%',
        lineHeight: '32px',
        textAlign: 'center',
        color: '#bcbcbc',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.2)',
    },
    sliderThumb: {
        position: 'absolute',
        bottom: '-100px',
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
    }
})
export default propertyDetailStyle;