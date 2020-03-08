import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../material-kit-react";

const customInputStyle = theme => ( {
  sectionHeader: {
    fontSize: 16,
    color: '#5b96ef',
    fontWeight: 700
  },
  sectionHelper: {
        fontSize: 13,
        color:'#000',
        fontWeight:500,
        marginTop: 28,
        '& a':{
            color:'#296bcf',
            textDecoration:'underline',
            cursor:'pointer',
            '&:hover, &:focus':{
                textDecoration:'none',
            }
        }
  },
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  labelRootRequired: {
    display:'none',
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRootError: {
    color: dangerColor + " !important"
  },
  labelRootSuccess: {
    color: successColor + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  },
  '.custom-form-control':{
    '& input[type="text"]':{
      padding: "24px 14px 9px 12px",
      boxSizing: 'border-box',
      fontSize: '15px',
    },
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#8a8a8a !important'
    },
  },
  requiredInput: {
    borderRadius: 5,
    backgroundColor: 'transparent',
    transition: 'all 300ms ease',
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#c00000',
            boxShadow: '0 5px 10px rgba(151,151,151,.8)',
        },
    },
    cssFocused: {
        boxShadow: '0 5px 10px rgba(151,151,151,.8)',
    },
    '& fieldset': {
        borderColor: '#296bcf',
    },
    '&:hover fieldset': {
        backgroundColor: 'transparent',
        boxShadow: '0 5px 10px rgba(151,151,151,.8)',
    },
    '&:focus': {
        backgroundColor: 'transparent',
        boxShadow: '0 5px 10px rgba(151,151,151,.8)',
    },
  },
  errorMsg:{
    color:'#ec686e'
  },
  cutomInputGridWrapper:{
    margin: '-19px -25px !important',
    [theme.breakpoints.down("xs")]: {
      margin: '-12px -25px !important'
    },
  },
  cutomInputGrid:{
    padding:'19px 25px !important',
    [theme.breakpoints.down("xs")]: {
      padding: '12px 25px !important'
    },
  },
  fullWidth:{
    width:'100%'
  },
  panelMain:{
      [theme.breakpoints.down("xs")]: {
          boxShadow: '0 5px 20px rgba(128,128,128,.3)',
      },
  },
  panelWrapperBox:{
      padding: '38px 36px 50px',
      background: '#fff',
      marginBottom: '40px !important',
      boxShadow: '0 5px 20px rgba(128,128,128,.3)',
      width: '100%',
      '& + &':{
          [theme.breakpoints.down("xs")]: {
          borderTop:'1px solid #e8e8e8'
          },
      },
      [theme.breakpoints.down("xs")]: {
          marginBottom: '0 !important',
          boxShadow: 'none',
          padding: '24px 20px',
      },
      '&:last-of-type':{
          marginBottom:'40px !important',
          [theme.breakpoints.down("xs")]: {
          marginBottom:"30px !important",
          },
      }
  },
  expansionPanelAS:{
      padding:0,
      backgroundColor:'transparent',
      margin:0,
      boxShadow:'none',
  },
  expansionPanelSummaryAS:{
      padding:0,
      backgroundColor:'transparent',
      margin:0,
      minHeight: 'auto !important',
      '&> div:first-child':{
          margin:0,
          '&> div:last-child':{
              [theme.breakpoints.up("sm")]: {
                  paddingRight:0
              },
          }
      },
      '&> div:last-child':{
          display:'none',
          [theme.breakpoints.down("xs")]: {
              display:'block',
              padding:0,
              right:0,
              fontSize: 17,
          },
      },
      '& .form__heading':{
          color: '#8a8a8a',
          fontSize: '22px',
          fontWeight: '500',
          textTransform: 'uppercase',
          lineHeight: '1.04',
          [theme.breakpoints.down("xs")]: {
              fontSize: '16px',
          },
      },
      "& .form__sub-heading":{
          textAlign: 'right',
          fontSize: '14px',
          fontWeight: '500',
          [theme.breakpoints.down("xs")]: {
              textAlign: 'left',
              fontSize: '12px',
              marginTop: '5px'
          },
      }
  },
  expansionPanelDetailsAS:{
      padding:0,
      backgroundColor:'transparent',
      margin:0,
      flexWrap: 'wrap',
      [theme.breakpoints.up("sm")]: {
          marginTop:40
      },
      '& .form__sub-heading':{
          marginBottom:40
      }
  },
});

export default customInputStyle;
