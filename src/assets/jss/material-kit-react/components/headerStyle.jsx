import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
} from "../../material-kit-react.jsx";
const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s, padding 0ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1501",
    '.normal &':{
      position:'static',
      boxShadow:'none'
    }
  },
  container: {
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1,
    "@media (max-width: 1024px)": {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  logo:{
    width:'100%',
    maxWidth: "356px",
    maxHeight: '107px',
    transition:"all 100ms ease-in-out",
    '[class*="HeaderHOC-white"] &':{
      maxWidth: "270px",
    },
    '.normal &':{
      maxWidth: "356px",
    }
  },
  logoSmall:{
    maxWidth: "78px",
    width:'100%',
    "@media (max-width: 1024px)": {
      maxWidth: "61px",
      height:60,
    },
  },
  appResponsive: {

  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
  },
  rose: {
    backgroundColor: roseColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "28px",
    color: primaryColor,
    "@media (max-width: 1024px)": {
      paddingTop: "28px",
    },
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#2e77e6",
    backgroundColor: "#ecf7fe !important",
    transition:"padding 0ms ease-in-out",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    'body[style*="padding-right: 15px;"] &':{
      paddingRight:15
    },
    '& logo': {
      maxWidth: '355px',
    },
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    backgroundColor:'#e6b00f',
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: '360px',
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    minHeight: "100vh",
    left: "0",
    right: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    "@media (max-width: 767px)": {
      width: 'calc(100% - 90px)',
      maxWidth:'280px'
    }
  },
  sideBarStrip:{
    backgroundColor:'#fff',
    position: 'absolute',
    left: '100%',
    height: '100vh',
    top: 0,
    width: '135px',
    padding:'35px 14px 11px',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems:'center',
    '@media (max-width: 767px)': {
      width: '90px',
    },
    '& img':{
      alignSelf:'center',
      width:'100%',
      maxWidth:'83px'
    },
    '.fixedTopBar &':{
      paddingTop:'18px'
    }
  },
  drawerToggleOpen:{
    fontSize:'35px',
    color:'#2e77e6',
    '@media (max-width: 767px)': {
      fontSize:'33px',
    },
  },
  rightBtn:{
    fontSize:14,
    fontWeight: 700,
    '@media (max-width: 1024px)': {
      fontSize: 16,
      padding: '8px 23px',
    },
    '@media (max-width: 767px)': {
      fontSize: 13,
      padding: '6px 1.07rem',
    },
    '&:hover, &:active, &:focus':{
      backgroundColor:'#46943a',
      color:'#fff'
    }
  },

  userDropDownBtn:{
    width:45,
    height:45,
    padding:0,
    backgroundColor:'#8393ca',
    borderRadius:'100%',
    marginLeft:23,
    lineHeight:'15px',
    fontSize:20,
    fontWeight:'500',
    [theme.breakpoints.down("xs")]: {
      width:36,
      height:36,
      fontSize:18,
    },
    '&:hover, &:focus, &:active':{
      backgroundColor:'#2e77e6'
    }
  },
  userdropdownn:{
      '& div[class*="hook-dropdown"]':{
        // '& div[class*="CustomDropdown-dropdown"]':{
      width: '236px',
      boxShadow: '3px 4px 15px 0px rgba(138, 138, 138, 0.4)',
      borderRadius: '10px',
      padding: '13px 10px',
      marginTop: '18px',
      [theme.breakpoints.down("xs")]: {
        width: '213px',
      },
      // '& span[class*="CustomDropdown-arrow"]':{
        '& span[class*="hook-customdropdown-arrow"]':{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 14.5px 12px 14.5px',
        borderColor: 'transparent transparent #ffffff transparent',
        position: 'absolute',
        top: '-12px',
        right: '13px',
        '&:before':{
          display: 'none',
        },
      },
    },
    // '& ul[class*="CustomDropdown-menuList"]':{
      '& ul[class*="hook-menu-list"]':{
      '& li':{
        padding: 0,
        marginBottom: '13px',
        '&:hover':{
          background: 'transparent',
        }
      },
      '& li:last-child':{
        marginBottom: '0',
      },
      '& li a':{
        display: 'block',
        fontSize: '18px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        [theme.breakpoints.down("xs")]: {
          fontSize: '16px',
        },
      },
    }
  },
  sellLink:{
    backgroundColor: '#50a942',
    color: '#fff',
    lineHeight: '26px',
    padding: '7px 0',
    borderRadius: '4px',
    '&:hover':{
      backgroundColor:'#408835',
      color: '#fff'
    }
  },
  favouriteLink:{
    background: '#e4bf10',
    color: '#fff',
    lineHeight: '26px',
    padding: '7px 0',
    borderRadius: '4px',
    '&:hover':{
      backgroundColor:'#ceae0e',
      color: '#fff'
    }
  },
  accountLink:{
    background: '#999797',
    color: '#fff',
    lineHeight: '26px',
    padding: '7px 0',
    borderRadius: '4px',
    '&:hover':{
      backgroundColor:'#797979',
      color: '#fff'
    }
  },
  logOutLink:{
    background: '#ff0000',
    color: '#fff',
    lineHeight: '26px',
    padding: '7px 0',
    borderRadius: '4px',
    display: 'block',
    fontSize: '18px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    [theme.breakpoints.down("xs")]: {
      fontSize: '16px',
    },
    '&:hover':{
      backgroundColor:'#d60505'
    }
  },

  
});

export default headerStyle;
