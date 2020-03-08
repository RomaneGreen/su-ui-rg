import {
  defaultFont
} from "../../material-kit-react";

const snackbarContentStyle = {
  root: {
    ...defaultFont,
    position: "relative",
    marginBottom: "20px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "4px",
    minWidth: "auto",
    maxWidth: '440px',
    padding: '13px 66px 13px 77px',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '1.33',
    boxShadow:'none',
    '& [class^="sb-icon-"]:not([class^="sb-icon-cross-bold"])':{
      position:'absolute',
      left:'16px',
      transform:'translateY(-50%)',
      top:'50%',
      fontSize:'28px',
      '@media (max-width: 479px)':{
        top: '8px',
        left: '12px',
        fontSize:'17px',
        transform: 'none'
      }
    },
    '@media (max-width: 479px)':{
      maxWidth: '220px !important',
      padding:'37px 19px 10px 21px !important',
      fontSize: '12px',
      lineHeight: '1.4',
    }
 },
  info: {
    border:'2px solid #89d1fe',
    backgroundColor: "#c2e7fe",
    color: "#1a69d2",
    '& [class^="sb-icon-"]':{
      color:'#2dadfe',
    },
    '& [class^="sb-icon-cross-bold"]':{
      color:'#78cafe',
    }
  },
  success: {
    backgroundColor: "#5cb860",
    color: "#ffffff",
    boxShadow:'none'
  },
  warning: {
    padding: '13px 50px 13px 67px',
    border:'2px solid #d8cf82',
    backgroundColor: "#f8f4d5",
    color: "#96722f",
    maxWidth:'450px',
    '& [class^="sb-icon-"]':{
      color:'#d1ca98',
    },
    '& [class^="sb-icon-cross-bold"]':{
      color:'#d1ca98',
    }
  },
  danger: {
    backgroundColor: "#f55a4e",
    color: "#ffffff",
  },
  primary: {
    backgroundColor: "#af2cc5",
    color: "#ffffff",
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "100%"
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    lineHeight: "1",
    position: "absolute",
    right: "16px",
    top: "50%",
    padding: "0",
    fontSize:'20px',
    transform:'translateY(-50%)',
    '@media (max-width: 479px)':{
      top: '4px',
      right: '7px',
      fontSize:'14px',
      transform: 'none'
    },
    '&:hover':{
      backgroundColor:'transparent'
    },
  },
};

export default snackbarContentStyle;
