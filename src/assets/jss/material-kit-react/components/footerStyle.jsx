import { container } from "../../material-kit-react.jsx";
import footerBg from "../../../images/footer-bg-2.jpg"
const footerStyle = {
  container:{
    ...container,
  },
  root:{
    
  },
  footerListingWrapper:{
    padding:'68px 15px 76px',
    width:'100%',
    background:'url('+ footerBg +')',
    display: 'flex',
    position: 'relative',
    zIndex: '9',
    justifyContent: 'center',
    '@media (max-width: 1024px)': {
      padding: '0 40px 56px',
    },
    '@media (max-width: 767px)': {
      padding: '0 20px 44px',
    },
    '@media (max-width: 374px)': {
      padding: '0 0 44px',
    },
  },
  footerListSubheader:{
    lineHeight: 1,
    marginBottom: '31px',
    fontSize:'18px',
    color:'#212121',
    fontWeight:'700',
    '@media (max-width: 1024px)': {
      marginTop:'67px',
    },
    '@media (max-width: 767px)': {
      marginTop:'53px',
      fontSize:'14px',
      marginBottom: '23px',
    },
  },
  footerListingBox:{
    display:'flex',
    //justifyContent:'center',
  },
  footerBottomMain:{
    display:'flex',
    padding: 0,
    marginTop:40,
    '@media (max-width: 1024px)': {
      margin:'0 auto',
      maxWidth:695,
      flexWrap: 'wrap'
    },
    '@media (max-width: 767px)': {
      maxWidth:320,
    },
    '& > div': {
      padding:11
    }
  },
  footerBottomBox:{
    display:'flex',
    alignItems:' flex-start',
    '&:last-child $footerLinksSubheader':{
      '@media (max-width:767px)': {
        //textAlign:'center'
      }
    }
  },
  footerListing:{
    maxWidth:'1204px',
    paddingRight:76,
    paddingLeft:26,
    width:'100%',
    marginLeft:0,
    marginRight:0,
    '@media (max-width:1024px)': {
      maxWidth:'640px',
      marginLeft:'auto',
      marginRight:'auto',
    },
    '@media (max-width: 767px)': {
      maxWidth:320,
    },
  },
  footerListWrap:{
    '@media (max-width:1024px)': {
      minWidth:'160px',
    },
    '@media (max-width: 374px)': {
      minWidth:'145px',
    },
    '& a':{
      paddingTop:'7px',
      paddingBottom:'6px',
      fontSize:'12px',
      color:'#212121',
      fontWeight:'400',
      transition:'all 100ms ease-in',
      '&:hover, &:focus':{
        transform:'translateX(1px)'
      },
      '@media (max-width:1024px)': {
        fontSize:'14px',
      },
      '@media (max-width:767px)': {
        fontSize:'13px',
      },
    }
  },
  footerListToggle:{
    marginTop:'15px',
    fontWeight:700,
    fontSize:'14px',
    color:'rgba(0,0,0,.5)',
    padding:0,
    borderRadius:'5px',
    minHeight:'30px',
    minWidth:'79px',
    lineHeight: 1,
    border:'1px solid rgba(0,0,0,.5)',
    display:'flex',
    alignItems:'center',
    backgroundColor:"transparent",
    '&:hover, &:focus, &:active':{
      backgroundColor:"transparent",
      color:'rgba(0,0,0,.5)',
    },
    '& span':{
      display:'inline-block',
      verticalAlign: 'top',
      textAlign:'center'
    },
    '& .sb-icon-caret-down':{
      width: '0px',
      height: '0px',
      marginLeft:'8px',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '5px solid rgba(0,0,0,.5)',
      display: 'inline-block',
      verticalAlign: 'middle',
      transform: 'translateY(-2px)',
    },
    '& .sb-icon-caret-up':{
      width: '0px',
      height: '0px',
      marginLeft:'8px',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: '5px solid rgba(0,0,0,.5)',
      display: 'inline-block',
      verticalAlign: 'middle',
      transform: 'translateY(-2px)',
    }
  },
  footerMain:{
    paddingTop:'48px',
    paddingBottom:'62px',
    '@media (max-width:767px)': {
      paddingLeft: 30,
      paddingRight: 30
    },
  },
  footerLogo:{
    width:'100%',
    '@media (max-width:1024px)': {
      flexDirection:'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& > a':{
      display:'block',
      marginBottom:'52px',
      maxWidth: "355px",
      width: '100%',
      '@media (max-width:1024px)': {
        marginBottom:'30px',
        maxWidth: "461px",
      },
      '@media (max-width:767px)': {
        maxWidth: "315px",
      },
      '& > img':{
        width: '384px',
        '@media (max-width:1024px)': {
          maxWidth: "461px",
          maxHeight: 'inherit',
        },
      }
    },
    '& > p':{
      fontSize:'20px',
      lineHeight:'30px',
      letterSpacing:0,
      color:'#1d1c1c',
      fontWeight:'400',
      maxWidth: "590px",
      '@media (max-width:1024px)': {
        textAlign: 'center',
      },
      '@media (max-width:767px)': {
        fontSize:'15px',
        maxWidth: "300px",
        textAlign: 'left',
      },
    }
  },
  footerLinksSubheader:{
    color:'#1a69d2',
    fontSize:'28px',
    fontWeight:700,
    width: '100%',
    marginBottom: '8px',
    '@media (max-width:1024px)': {
      marginTop:'70px'
    },
    '@media (max-width:767px)': {
      fontSize:'22px',
      marginTop:'50px',
      lineHeight: '22px'
    }
  },
  footerLinkWrap:{
    '@media (max-width:767px)': {
      width:130
    },
    '& > li:not(:first-child)':{
      paddingTop:10,
      paddingBottom:10,
    },
    '& > li:not(:first-child) > a':{
      fontSize:'18px',
      fontWeight:500,
      color:'#1a69d2',
      transition:'all 300ms ease-in',
      '&:hover, &.active, &:active':{
        color:'#3f3f3f',
      },
      '&.active':{
        fontWeight:900,
      },
      '@media (max-width:767px)': {
        fontSize:'14px',
      }
    },
  },
  footerSocialList:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    maxWidth: '232px',
    '@media (max-width:767px)': {
      maxWidth: '284px'
    },
    '& > li:not(:first-child)':{
      display:'flex',
      width:'40px',
      padding:'15px 0',
      marginRight: '10px',
      '@media (max-width:767px)': {
        width:'32px',
        padding:'10px 0',
      }
    },
    '& > li:last-child':{
      marginRight:'0'
    }
  },
  socialLink:{
    padding:'0',
    "&:hover":{
      backgroundColor:'transparent',
      transition:'ease-in-out 300ms all',
      transform: 'scale(1.12)translateZ(0)',
      backfaceVisibility: 'hidden'
    },
    '& span':{
      fontSize:'25px',
      '@media (max-width:767px)': {
        fontSize:'20px',
      },
      '&.sb-icon-google-plus':{
        fontSize:'33px',
        color:'#dd4b39',
        '@media (max-width:767px)': {
          fontSize:'25px',
        },
      },
      '&.sb-icon-facebook':{
        color:'#3b5998'
      },
      '&.sb-icon-twitter':{
        color:'#00aced'
      },
      '&.sb-icon-linkedin':{
        color:'#007bb6'
      },
      '&.sb-icon-instagram':{
        color:'#517fa4',
        paddingLeft: 1
      },
      '&.sb-icon-youtube':{
        color:'#e02f2f'
      },
      '&.sb-icon-pintrest':{
        color:'#cb2027'
      }
    }
  },
  copyRight:{
    color:'#676767',
    fontWeight:'400',
    paddingBottom:'7px',
    '@media (max-width:1024px)': {
      maxWidth: 695,
      margin: '0 auto',
      paddingRight:20,
      paddingBottom:'51px',
    },
    '@media (max-width:767px)': {
      paddingLeft: 0,
      paddingRight:0,
    }
  },
  copyRightText:{
    maxWidth:'390px',
    fontSize:'0.87rem',
    display:'block',
    marginBottom:'17px',
    color:'#676767',
    '@media (max-width:767px)': {
      textAlign:'center',
      margin:'0 auto 20px',
      fontSize: '13px',
      '& + img':{
        margin:'0 auto',
        display: 'table'    
      }
    }
  },
  dmca:{
    '@media (max-width:767px)': {
      textAlign:'center',
      margin:'0 auto',
    }
  },
  sellBulkMain:{
    display:'flex',
    justifyContent:"flex-end",
    '@media (max-width:767px)': {
      justifyContent:"center",
    }
  },
  sellBulkWrapper:{
    display:'inline-block',
    marginRight: '22px',
    '@media (max-width:1024px)': {
      marginRight:0,
    },
    '@media (max-width:767px)': {
      marginTop:'56px',
      marginRight:0,
      marginLeft: '20px'
    },
    '& > img':{
      borderRadius:500,
      overflow:'hidden',
      maxWidth:77,
      maxHeight:77
    }
  },
  sellBulk:{
    width:'176px',
    backgroundColor:'#fff',
    borderRadius:'6px',
    padding:'17px 24px 10px',
    textAlign:'center',
    marginLeft: '55px',
    position:'relative',
    boxShadow:'0 8px 24px rgba(38,42,52,.17)',
    '&:after':{
      content:"''",
      width: '0px',
      height: '0px',
      borderLeft: 0,
      borderRight: '24px solid transparent',
      borderTop: '15px solid #fff',
      position: 'absolute',
      bottom: '-15px',
      left: '32px',
    },
    '& > p':{
      fontSize:18,
      color:"#141217",
      fontWeight:'700',
      lineHeight: 1,
      marginBottom: 9
    }
  },
  sellBulkButton:{
    color:'#fff',
    width:'100%',
    fontSize:14,
    fontWeight:'500',
    lineHeight:1,
    minHeight: '30px',
    padding: 0,
    maxWidth:'124px',
    backgroundColor:'#2874e9',
    '&:hover, &:active, &:focus':{
      backgroundColor:"#205fbf",
    }
  },
  secondFooter:{
    color:'#676767',
    textAlign:'center',
    lineHeight: '24px',
    fontSize:16,
    paddingBottom: '35px',
    '@media (max-width:767px)': {
      fontSize:14,
    }
  }
};
export default footerStyle;
