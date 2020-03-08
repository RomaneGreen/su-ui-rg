import { container } from "../../material-kit-react.jsx";
const ProductListingStyle = theme => ({
    container: {
        ...container
    },
    root: {

    },
    listingRoot:{
        paddingTop: '77px',
        [theme.breakpoints.down("sm")]: {
            paddingTop: '0',
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: '0',
        },
    },
    favouriteMain:{
        maxWidth: '1072px',
        margin: '0 auto',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '666px',
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: '317px',
        },
    },
    filterBlock: {
        boxShadow: '0px 5px 15px 0px rgba(141, 141, 141, 0.4)',
        backgroundColor: '#fff',
        padding: '26px 28px',
        borderTop: '4px solid #fccb00',
        maxWidth: '250px',
        marginTop: '91px',
        marginBottom: '90px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '0px',
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '0px',
        },
    },
    filterBlockTitle: {
        marginBottom: '30px',
        '& > h2': {
            color: '#000000',
            fontWeight: '700',
            fontSize: '25px',
            lineHeight: '36px',
            textAlign: 'center',
            textTransform: 'uppercase',
        },
    },
    filterType: {
        marginBottom: 7,
        '& > label': {
            color: '#6b6b6b',
            fontSize: '14px',
            fontWeight: '500',
            display: 'block',
            marginBottom: 4,
            lineHeight: '1',
        },
        '& span': {
            textAlign: 'center',
            display: 'block',
            fontSize: '12px',
            color: '#6b6b6b',
            fontWeight: '400',
            marginBottom: '10px',
        },
        '& .custom-filter-control': {
            marginBottom: 15,
            clear: 'both',
            "& fieldset": {
                transition: 'all 300ms ease-in-out',
                border: '1px solid #e7e7e7 !important',
            },
            '& div[class*="selectMenu"]': {
                minHeight: '40px',
                boxSizing: 'border-box',
                padding: '17px 32px 10px 12px',
                fontWeight: '500',
                fontSize: '14px',
                color: '#212121',
            },
            '&:hover fieldset, & div[class*="focused"] fieldset': {
                borderColor: '#0166ff !important',
                boxShadow: '0 0 0 0.15rem rgba(169, 200, 247, 0.5)',
                
            },
            '& div[class*="focused"] div[tabindex]': {
                background: 'transparent',
            },
            '& svg': {
                top: 'calc(50% - 14px)',
                width: 29,
                height: 29,
                color: '#d1d1d1',
                transition: 'all 300ms ease-in-out',
            },
            '&:hover, & div[class*="focused"]': {
                '& svg': {
                    color: '#0166ff'
                }
            },
        },
        '& .location-filter': {
            marginBottom: '12px !important'
        }

    }, 
    moreFilter: {
        '& button': {
            width: '100%',
            fontWeight: '900',
            textTransform: 'uppercase',
            fontSize: '14px',
            background: '#fccb00',
            '&:hover': {
                background: '#797979',
                boxShadow: 'none',
            },
            '&:focus': {
                background: '#fccb00',
            },
            '& i': {
                marginRight: '7px',
                fontSize: '20px',
            },
        },
    },
    moreFilterCollaspsed: {
        '& button': {
            background: '#2e77e6',
            width: '100%',
            fontWeight: '900',
            textTransform: 'uppercase',
            fontSize: '14px',
            '&:hover': {
                background: '#2e77e6',
            },
            '&:focus': {
                background: '#2e77e6',
            },
            '& i': {
                marginRight: '7px',
                fontSize: '20px',
            },
        },
    },
    productItem: {
        position: 'relative',
        boxShadow: '0px 5px 15px 0px rgba(141, 141, 141, 0.4)',
        background: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        height:'100%',
        //overflow: 'hidden',
        display:'flex',
        flexDirection:"column",
    },
    productListMain: {
        margin: '0',
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto',
            maxWidth: '642px',
        },
    },
    productImg: {
        position: 'relative',
        height: '193px',
        overflow: 'hidden',
        borderRadius: '4px 4px 0px 0px ',
        [theme.breakpoints.down("sm")]: {
            height: '219px', 
        },
        '& > img': {
            width: '100%',
        },
    },
    propertyStatus: {
        position: 'absolute',
        top: '6px',
        left: '13px',
        '& > .status': {
            fontSize: '12px',
            fontWeight: '500',
            color: '#fff',
            display: 'inline-block',
            padding: '4px 14px',
            lineHeight: '16px',
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
    prorate: {
        position: 'absolute',
        top: '9px',
        right: '14px',
        '& input': {
            width: '100%',
            display: 'inline-block',
            height: '100%',
            position: 'absolute',
            left: '-4px',
            top: '-4px',
            opacity: '0',
            cursor: 'pointer'
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
    productInfo: {
        padding: '15px 0 18px',
        borderBottom: '1px solid #e7e7e7',
        textAlign: 'center',
        margin: '0 20px',
        flex:'1'
    },
    productName: {
        '& > p': {
            fontSize: '11px',
            color: '#000',
            fontWeight: '500',
            lineHeight: '14px',
            marginBottom: '0',
        },
        '& > h3': {
            fontSize: '17px',
            color: '#000',
            fontWeight: '500',
            lineHeight: '20px',
            marginBottom: '0',
            overflow: 'hidden',
        },
        '& > h4:nth-child(1)': {
            fontSize: '11px',
            color: '#000',
            fontWeight: '500',
            lineHeight: '15px',
            marginBottom: '0',
        },
        '& > h4:last-child': {
            fontSize: '14px',
            color: '#000',
            fontWeight: '500',
            lineHeight: '20px',
            marginBottom: '0',
        },
    },
    productVarient: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '11px 0 0',
        textAlign: 'center',
        '& div':{
            flexBasis: '25%',
        },
        '&  i': {
            fontSize: '31px',
            color: '#0166ff',

        },
        '&  p': {
            fontSize: '12px',
            color: '#777777',
            margin: '0',
            fontWeight: '500',
            lineHeight: '14px',
            marginTop: '10px',

        },
    },
    productPrice: {
        textAlign: 'center',
        padding: '8px 15px 20px',
        '& > h4': {
            color: '#8a8a8a',
            fontSize: '15px',
            fontWeight: '500',
            margin: '0',
            textTransform: 'uppercase',
            lineHeight: '36px',
        },
        '& > h2': {
            color: '#0166ff',
            fontSize: '30px',
            fontWeight: '700',
            margin: '0',
        },
    },
    listingHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d6d6d6',
        paddingBottom: '25px',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
            borderBottom: 0,
            paddingBottom: 0,
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: 'center',
            borderBottom: 0,
            paddingBottom: 0,
        },
    },
    listingCount: {
        fontSize: '42px',
        color: '#0584de',
        lineHeight: '36px',
        fontWeight: '500',
        [theme.breakpoints.down("sm")]: {
            marginTop: '10px',
            marginBottom: '45px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '26px',
        }
    },
    FilterTagMain: {
        boxShadow: '0px 5px 10px 0px rgba(183, 183, 183, 0.25)',
        background: '#fff',
        margin: '30px 0 15px 0',
        display:'flex',
        '& ul:first-child':{
            width:'135px',
            paddingRight:0,
            '& li > a':{
                minWidth:91,
            }
        },
        '& ul:last-child':{
            width:'100%',
            paddingLeft:0,
        },
        [theme.breakpoints.down("sm")]: {
           display: 'none',
        },
        [theme.breakpoints.down("xs")]: {
            display: 'none',
        }
    },
    TagList: {
        padding: '19px 12px',
        display: 'flex',
        flexWrap: 'wrap',
        '& li': {
            padding: '0',
            width: 'initial',
            margin: '0 10px',
            '& a': {
                padding: '7px 14px',
                color: '#6193ff',
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                '& i': {
                    color: '#bebebe',
                    marginLeft: '10px',
                },
            },
        },
    },
    clearAll: {
        border: '1px solid #0166ff',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    listingSort: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > label': {
            color: '#6b6b6b',
            fontSize: '14px',
            fontWeight: '500',
            display: 'block',
            marginBottom: 9,
            lineHeight: '1',
        },
        '& .custom-filter-control': {
            marginBottom: 0,
            clear: 'both',
            "& fieldset": {
                transition: 'all 300ms ease-in-out',
                border: '1px solid #e7e7e7 !important'
            },
            '& div[class*="selectMenu"]': {
                minHeight: '40px',
                boxSizing: 'border-box',
                padding: '10px 32px 10px 12px',
                fontWeight: '500',
                fontSize: '14px'
            },
            '&:hover fieldset, & div[class*="focused"] fieldset': {
                borderColor: '#0166ff !important',
                boxShadow: '0 0 0 0.15rem rgba(169, 200, 247, 0.5)'
            },
            '& div[class*="focused"] div[tabindex]': {
                background: 'transparent',
            },
            '& svg': {
                top: 'calc(50% - 14px)',
                width: 29,
                height: 29,
                color: '#d1d1d1',
                transition: 'all 300ms ease-in-out',
            },
            '&:hover, & div[class*="focused"]': {
                '& svg': {
                    color: '#0166ff'
                }
            },

        },
    },
    noMatchItem: {
        padding: '78px 35px',
        border: '3px solid #959292',
        backgroundColor: '#e9e5e5',
        boxShadow: '0px 5px 15px 0px rgba(141, 141, 141, 0.4)',
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            marginRight: '16px',
            marginBottom: '50px',
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: '16px',
            marginBottom: '50px',
        },
        '& i': {
            fontSize: '58px',
            color: '#959292',
            marginBottom: '60px',
            display: 'block',
        },
        '& p': {
            fontSize: '42px',
            color: '#959292',
            lineHeight: '60px',
            fontWeight: '700',
            textTransform: 'uppercase',
        },
    },
    noMatchItemList: {
        padding: '25px 15px',
        border: '3px solid #959292',
        backgroundColor: '#e9e5e5',
        boxShadow: '0px 5px 15px 0px rgba(141, 141, 141, 0.4)',
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            marginRight: '16px',
            marginBottom: '50px',
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: '16px',
            marginBottom: '50px',
        },
        '& i': {
            fontSize: '58px',
            color: '#959292',
            marginBottom: '30px',
            display: 'block',
        },
        '& p': {
            fontSize: '42px',
            color: '#959292',
            lineHeight: '36px',
            fontWeight: '700',
            textTransform: 'uppercase',
            margin: 0,
            [theme.breakpoints.down("xs")]: {
                lineHeight: '60px',
            },
            [theme.breakpoints.down("sm")]: {
                lineHeight: '60px',
            },
        },
    },
    ListPagination: {
        borderTop: '1px solid #d6d6d6',
        marginTop: '50px',
        padding: '30px 0',
        marginBottom: '77px',
        textAlign: 'center',
        '& ul': {
            '& li': {
                width: 'inherit',
                display: 'inline-block',
                padding: '0',
                margin: '0 15px',
                [theme.breakpoints.down("xs")]: {
                    margin: '0 13px',
                },
                '& a': {
                    color: '#acacac',
                    fontSize: '16px',
                    fontWeight: '500',

                },
            },
            '& .active a': {
                color: '#0166ff !important',
                lineHeight: '40px',
                width: '40px',
                height: '40px',
                background: '#fff',
                borderRadius: '4px',
                border: '1px solid #0166ff',
                display: 'inline-block',
                textAlign: 'center',
            },
        },
    },
    pageNext: {
        color: '#0166ff !important',
        lineHeight: '30px',
        width: '30px',
        height: '30px',
        background: '#fff',
        borderRadius: '50%',
        border: '1px solid #d2e5f7',
        display: 'inline-block',
        textAlign: 'center',
        '&[disabled]': {
            cursor: "not-allowed"
        },
        cursor: 'pointer'
    },
    pagePrev: {
        color: '#0166ff !important',
        lineHeight: '30px',
        width: '30px',
        height: '30px',
        background: '#fff',
        borderRadius: '50%',
        border: '1px solid #d2e5f7',
        display: 'inline-block',
        textAlign: 'center',
        '&[disabled]': {
            cursor: "not-allowed"
        },
        cursor: 'pointer'
    },
    '.custom-form-control div[class^="MuiSelect-select"] ~ svg[class^="MuiSvgIcon-root"]': {
        height: '100%',
        top: '0',
        width: '36px',
        borderLeft: '0px solid #8a8a8a',
        color: '#8a8a8a',
    },
    listingSorField: {
        display: 'flex',

    },
    sortLabel: {
        '&:first-child div[class*="selectMenu"]': {
            width: '140px',
            background: '#fff',
            border: '1px solid #9bc5fe',
            color: '#65a5e6',
        },
        '&:last-child div[class*="selectMenu"]': {
            //width: '74px',
            background: '#fff',
            border: '1px solid #9bc5fe',
            color: '#65a5e6',
        },
        marginLeft: '20px',
        display: 'flex',
        alignItems: 'baseline',
        '& label': {
            marginRight: '15px',
            minWidth: '49px',
            color: '#8a8a8a',
            fontSize:'14px',
            fontWeight: '500'
        },
    },
    productItemList: {
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 5px 15px 0px rgba(144, 144, 144, 0.9)',
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'pointer',
        flexDirection: 'row',
        '& $productImg': {
            minWidth: '274px',
            width: '274px',
        },
        '& $productInfo': {
            borderBottom: '0 ',
            flexBasis: '290px',
            borderRight: '1px solid #ddd',
            padding: '0 25px 0 15px',
        },
        '& $productPrice': {
            flexBasis: '35%',
            padding: '0',
        },
    },
    favouriteRoot: {
        padding: '0 0 130px 0',
    },
    favouriteContainer: {
        maxWidth: '1150px',
        margin: '0 auto',
        '& div[class*="MuiGrid-item"]': {
            padding: '47px',
            [theme.breakpoints.down("sm")]: {
                padding: '20px',
            },
        },
    },
    favTitlle: {
        textAlign: 'center',
        marginBottom: '16px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '20px',
        },
        '& h3': {
            fontSize: '44px',
            color: '#0d83dd',
            fontWeight: '700',
            [theme.breakpoints.down("sm")]: {
                fontSize: '36px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '26px',
            },
        },
    },
    removeFav: {
        position: 'absolute',
        top: '-17px',
        right: '-13px',
        width: '31px',
        height: '31px',
        background: '#8e8e8e',
        textAlign: 'center',
        borderRadius: '50%',
        lineHeight: '33px',
        color: '#fff',
        zIndex: '2',
        '& > i':{
            position: 'relative',
            left: '1px',
        },
        '&:hover': {
            color: '#fff',
        },
        '&:focus': {
            color: '#fff',
        }
    },
    mobFilterMain: {
        display: 'block',
        textAlign: 'center',
        width: '100%',
        marginBottom: '10px',
    },
    mobfilter: {
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        maxWidth: '375px',
        margin: '0 auto',
    },
    filterBlockMob: {
        fontSize: '18px',
        fontWeight: '700',
        textAlign: 'center',
        background: '#fff',
        padding: '15px',
        color: '#8a8a8a',
        flexBasis: '50%',
        textTransform: 'uppercase',
        '& span.active': {
            color: 'white',
        },
        '&:first-child': {
            borderRight: '1px solid #999999',
        },
        ' .active': {
            backgroundColor:'yellow',
            color: 'white'
        }
    },
    filterBlockMob_active :{
        backgroundColor:'#fccb00',
        color: 'white'
    },
    customModal: {
        '& div[class*="MuiDialog-container"]': {
            height: '62%',
            [theme.breakpoints.down("xs")]: {
                height: '100%',
            },
        },
        '& div[class*="WithStyles-DialogContent"]': {
            overflowY: 'auto',
            height: '35vh',
            [theme.breakpoints.down("xs")]: {
                height: '47vh',
            },
        },
        '& div[class*="MuiDialog-paperWidthSm"]': {
            width: '375px',
            [theme.breakpoints.down("xs")]: {
                width: '95%',
                minWidth: '300px',
            },
        },
        '& div[class*="PropertyListing-filterBlock"]': {
            borderTop: '0',
            boxShadow: 'none',
            width: '100%',
            maxWidth: 'inherit',
            marginTop: '0',
            padding: '12px 42px',
        },
        '& div[class*="MuiDialogTitle"]': {
            background: '#eff7fe',
            position: 'relative',
            borderBottom: '2px solid #2e2e2e',
        },
        '& div[class*="MuiDialog-paper"]': {
            overflowY: 'inherit',
        },
        '& div[class*="PropertyListing-filterBlockTitle"] h2': {
            fontSize: '36px',
            color: '#2e2e2e',
        }
    },
    modalHeader: {
        textAlign: 'center',
        position: 'relative',
        fontSize: '23px',
        fontWeight: '700',
        color: '#4c86db',
        textTransform: 'capitalize',
        [theme.breakpoints.down("sm")]: {
            top: '16px',
        },
        [theme.breakpoints.down("xs")]: {
            top: '16px',
        }
    },
    filterReload: {
        position: 'absolute',
        right: 0,
        [theme.breakpoints.down("xs")]: {
            top: '0',
        }
    },
    listMobSort: {
        textAlign: 'center',
        padding: '36px 15px',
        '& h3': {
            color: '#8a8a8a',
            fontSize: '38px',
            lineHeight: '54px',
            fontWeight: '900',
            textTransform: 'uppercase',
        },
    },
    sortTypes: {
        padding: '30px 0',
        '& a': {
            fontSize: '20px',
            display: 'block',
            textAlign: 'center',
            fontWeight: '700',
            color: '#4b83da',
            background: '#eff7fe',
            boxShadow: '0px 5px 12px 0px rgba(181, 181, 181, 0.3)',
            lineHeight: '29px',
            marginBottom: '25px',
            textTransform: 'uppercase',
            padding: '14px',
            minWidth: '317px',
            [theme.breakpoints.down("xs")]: {
                minWidth: '100%',
            }
        },
    },
    bestMatch: {
        color: '#000 !important',
    },
    favCustomModal: {
        '& div[class*="MuiDialog-container"]': {
            height: '100%',
            [theme.breakpoints.down("xs")]: {
                height: '100%',
            },
        },
        '& div[class*="MuiDialog-paperWidthSm"]': {
            width: '477px',
            [theme.breakpoints.down("xs")]: {
                width: '305px',
            },
        },
        '& div[class*="MuiDialogTitle"]': {
            position: 'relative',
        },
        '& div[class*="MuiDialog-paper"]': {
            overflowY: 'inherit',
        },
        '& div[class*="MuiDialogTitle-roo"]': {
            padding: 0,
        }
    },
    deleteFavInfo: {
        padding: '26px 39px',
        '& h3': {
            textAlign: 'center',
            fontSize: '30px',
            color: '#232222',
            lineHeight: '42px',
            fontWeight: '500',
        },
    },
    favAction: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '45px',
    },
    btnYes: {
        textTransform: 'uppercase',
        fontSize: '19px',
        background: '#39b525',
        padding: '15px',
        lineHeight: '20px',
        color: '#fff',
        borderRadius: '2px',
        fontWeight: '900',
        minWidth: '100px',
        display: 'inline-block',
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            color: '#fff',
            background: '#159900'
        },
        '&:focus': {
            color: '#fff',
            background: '#159900'
        },
    },
    btnNo: {
        textTransform: 'uppercase',
        fontSize: '19px',
        background: '#f43838',
        padding: '15px',
        lineHeight: '20px',
        color: '#fff',
        borderRadius: '2px',
        fontWeight: '900',
        minWidth: '100px',
        display: 'inline-block',
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            color: '#fff',
            background: '#cc1414',
        },
        '&:focus': {
            color: '#fff',
            background: '#cc1414',
        },
    },
    favDeleteModal: {
        '& div[class*="MuiDialog-container"]': {
            height: '100%',
            [theme.breakpoints.down("xs")]: {
                height: '100%',
            },
        },
        '& div[class*="MuiDialog-paperWidthSm"]': {
            width: '477px',
            [theme.breakpoints.down("xs")]: {
                width: '305px',
            },
        },
        '& div[class*="MuiDialogTitle"]': {
            position: 'relative',
        },
        '& div[class*="MuiDialog-paper"]': {
            overflowY: 'inherit',
        },
        '& div[class*="MuiDialogTitle-roo"]': {
            padding: 0,
        },
        '& div[class*="MuiDialogContent-root"]': {
            padding: 0,
            background: '#39b525',
            overflow: 'hidden',
            borderRadius: '4px',
        },
    },
    deleteFavMsg: {
        textAlign: 'center',
        '& h4': {
            fontSize: '30px',
            color: '#fff',
            padding: '103px 0',
            margin: 0,
            fontWeight: '500',
        },
    },
    dotLine:{
        width: '100%',
        position: 'relative',
        height: 20,
        "&:after":{
            content: '"............"',
            width: '100%',
            color: '#d1d1d1',
            letterSpacing: '12px',
            position: 'absolute',
            lineHeight: '8px',
            fontWeight: 700
        },  
    },
})
export default ProductListingStyle;