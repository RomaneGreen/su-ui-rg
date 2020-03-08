//import { defaultFont } from "assets/jss/material-kit-react.jsx";
import { defaultFont } from "../../material-kit-react.jsx";

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    padding: '0',
    margin: "0",
    listStyle: "none",
    color: "inherit",
    overflow:'visible',
    [theme.breakpoints.down("sm")]: {
      padding: '35px 0 0 0',
      height:'100vh',
      overflow:'auto',
    }
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    '&:last-of-type > a':{
      marginLeft:23,
      marginRight:0
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      '& a':{
        margin:'0 !important',
      }
    },
    '& a':{
      margin: "0 2px 0 0",
      display: 'block',
      "&:hover,&:focus, &.active ": {
        color: "#fff",
        boxShadow:'0 5px 15px rgba(137,137,137,.4)',
        [theme.breakpoints.down("sm")]: {
          margin: "0",
          boxShadow:'none',
          color: "#2e77e6",
        }
      },
    },
    "&[aria-current='active'] a button":{
      color: "#fff",
      backgroundColor: "#2e77e6",
    },
    "&[aria-current='active'] a span":{
      [theme.breakpoints.down("sm")]: {
        color: "#2e77e6",
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "15px 24px",
    fontSize:16,
    fontWeight:700,
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin:'0',
    display: "inline-flex",
    transition:'all 300ms ease',
    ".active &, &:hover,&:focus ": {
      color: "#fff",
      backgroundColor: "#2e77e6",
      [theme.breakpoints.down("sm")]: {
        color: "#2e77e6",
        background: "transparent",
      }
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "left",
      color: "#fff",
      margin:0,
      fontSize: '21px',
      "& > span": {
        justifyContent: "flex-start",
      },
      '& span[class^="sb-icon-"]':{
        width: '42px',
        display: 'inline-block',
        fontSize: '32px',
        textAlign: 'center',
        marginRight: '25px',
        [theme.breakpoints.down("xs")]: {
          fontSize: '27px',
          width: '32px',
          marginRight: '16px',
        }
      }
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '16px',
    },
  },
  navLinkButton:{
    backgroundColor:'transparent',
    color:'#2e77e6',
    fontWeight:700,
    fontSize:18,
    width:150,
    padding: '14px 0',
    textTransform: 'none',
    border:'2px solid #0d83dd',
    lineHeight: 1,
    transition:'300ms all ease',
    '&:hover':{
      backgroundColor:'#2e77e6',
      color:'#fff',
    },
    '.active &, &:hover,&:focus': {
      backgroundColor:'#2e77e6',
      color:'#fff',
    }
  },
  socialBar:{
    width:"100%",
    display:'flex',
    flexDirection:'column',
    padding:'0 0 10px 0',
  },
  socialBarHead:{
    width:'100%',
    color:'#fff',
    fontSize:'21px',
    fontWeight:700,
    textTransform:'uppercase',
    display:'flex',
    alignItems:'center',
    padding:'0.9375rem 20px',
    [theme.breakpoints.down("xs")]: {
      fontSize: '16px',
    },
    '& span[class^="sb-icon-"]':{
      width: '42px',
      display: 'inline-block',
      fontSize: '32px',
      textAlign: 'center',
      marginRight: '25px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '27px',
        width: '32px',
        marginRight: '16px',
      }
    }
  },
  socialList:{
    width:'100%',
    padding:'0 0 0 72px',  
    display:'inline-flex',
    flexDirection:'row',  
    flexWrap:'wrap',
    [theme.breakpoints.down("xs")]: {
      padding:'0 0 0 55px', 
    },
  },
  socialListItem:{
    padding:'0',
    width: '72px',
    [theme.breakpoints.down("xs")]: {
      width: '48px', 
    },
  },
  socialLink:{
    color:'#fff',
    minWidth:'48px',
    minHeight:'48px',
    textAlign:'center',
    [theme.breakpoints.down("xs")]: {
      minWidth:'38px',
      minHeight:'38px',
      marginBottom:'10px'
    },
    '& span[class^="sb-icon"]':{
      fontSize:'24px',
      '&.sb-icon-google-plus':{
        fontSize:'30px'
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:'20px',
        '&.sb-icon-google-plus':{
          fontSize:'26px'
        },
      },
    }
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  marginRight5: {
    marginRight: "5px"
  },
  bottomBar:{
    backgroundColor:'#d49f00',
    padding:'24px'
  },
  bottomBarButton:{
    border:'2px solid #fff',
    color:'#fff',
    fontSize:'17px',
    padding: '8px 16px',
    backgroundColor: 'transparent',
    '&:hover, &:active,&:focus': {
      color:'#d49f00',
      backgroundColor: '#fff',
      borderColor: '#fff'
    },
  },
  userDropDownBtn:{
    width:45,
    height:45,
    padding:0,
    backgroundColor:'#8393ca',
    borderRadius:'100%',
    lineHeight:'15px',
    fontSize:20,
    fontWeight:'500',
    '&:hover, &:focus, &:active':{
      backgroundColor:'#2e77e6'
    }
  },
  userdropdownn:{
    // '& div[class*="CustomDropdown-dropdown"]':{
      width: 150,
      marginLeft: 23,
      '& div[class*="hook-dropdown"]':{
      width: '236px',
      boxShadow: '3px 4px 15px 0px rgba(138, 138, 138, 0.4)',
      borderRadius: '10px',
      padding: '13px 10px',
      marginTop: '18px',
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
      backgroundColor:'#408835'
    }
  },
  favouriteLink:{
    background: '#e4bf10',
    color: '#fff',
    lineHeight: '26px',
    padding: '7px 0',
    borderRadius: '4px',
    '&:hover':{
      backgroundColor:'#ceae0e'
    }
  },
  accountLink:{
    background: '#999797',
    color: '#fff',
    lineHeight: '26px',
    padding: '7px 0',
    borderRadius: '4px',
    '&:hover':{
      backgroundColor:'#797979'
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
    '&:hover':{
      backgroundColor:'#d60505'
    }
  },
  
});

export default headerLinksStyle;
