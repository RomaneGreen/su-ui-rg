import { container } from "../../material-kit-react.jsx";
import infoBg from "../../../images/intro-bg.png";
  const homeStyle = theme => ({
  container:{
    ...container
  },
  root:{
    
  },
  elementCenter:{
    alignItems: 'center',
    '& > p':{
      textAlign:'center'
    }
  },
  intro:{
    backgroundColor:'#ecf7fe',
    backgroundImage: 'url('+ infoBg +')',
    backgroundSize: 'contain',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    position:'relative',
    overflow: 'hidden',
    marginTop: '-25px',
    "@media (min-width:1199px) and (max-width:1500px)": {
      height: 534,
      marginTop: '-70px',
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom:'80px',
      marginTop: '0',
      backgroundImage:'none'
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop:'2px'
    },
    /* '&:after':{
      content:"'\\e925'",
      fontFamily:'"SB-icon"',
      color: '#63b7cd',
      fontSize:95,
      position:'absolute',
      lineHeight: '55px',
      bottom: '115px',
      left:'124px',
      "@media (max-width: 1500px)": {
        left:'15px',
      },
      [theme.breakpoints.down("md")]: {
        display:'none'
      },
    },
    '&:before':{
      content:"'\\e924'",
      fontFamily:'"SB-icon"',
      color: '#63b7cd',
      fontSize:95,
      position:'absolute',
      lineHeight: '55px',
      top: '15px',
      right:'82px',
      "@media (max-width: 1500px)": {
        right:'15px',
      },
      [theme.breakpoints.down("md")]: {
        display:'none'
      },
    } */
  },
  introInner:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position:"relative",
    paddingTop: 42,
    "@media (min-width:1199px) and (max-width:1500px)": {
      transform: 'scale(0.71)',
      marginTop: '-55px',
    },
    "@media (max-width: 1230px)": {
      alignItems: 'flex-end'
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
    /* '&:before':{
      content:"'\\e926'",
      fontFamily:'"SB-icon"',
      color: '#63b7cd',
      fontSize:41,
      position:'absolute',
      lineHeight: '39px',
      top: '2px',
      left:'494px',
      [theme.breakpoints.down("md")]: {
        display:'none'
      },
    } */
  },
  introContent:{
    paddingTop: 12,
    "@media (max-width: 1500px)": {
      width: '40%'
    },
    "@media (max-width: 1230px)": {
      paddingTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      textAlign: "center",
      paddingBottom: 0
    },
  },
  introHead:{
    marginBottom: 33,
    fontSize: 24,
    lineHeight: '1.2',
    color: '#393939',
    "@media (max-width: 1230px)": {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0
    },
  },
  introTitle:{
    color: '#0d83dd',
    fontSize: 56,
    fontWeight: 700,
    marginBottom: 18,
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 37,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 6,
      fontSize: 24,
    },
    letterSpacing: 0
  },
  introSubText:{
    fontSize: 35,
    letterSpacing: -1.6,
    lineHeight:'1.3',
    fontWeight: 400,
    color: '#626262',
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      marginBottom:'18px'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      lineHeight: "22px"
    },
  },
  introBody:{
    fontSize: 32,
    lineHeight: '1.41',
    color: '#626262',
    "@media (max-width: 1230px)": {
      fontSize: 28,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      lineHeight: '1.35',
    },
  },
  listChecks:{
    display: 'inline-block',
    fontWeight: 500,
    fontSize: 21,
    lineHeight: 1.33,
    color: '#545454',
    textAlign: 'left',
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5225rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '1.046875rem',
      lineHeight: 1.47,
    },
  },
  listChecksItem:{
    position: 'relative',
    minHeight: 33,
    padding: '3px 0 0 57px',
    [theme.breakpoints.down("sm")]: {
      minHeight: 39,
      padding: '6px 0 0 66px',
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 27,
      padding: '3px 0 0 46px',
    },
    '& + &':{
      marginTop: 12,
      [theme.breakpoints.down("sm")]: {
        marginTop: 23,
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: 9,
      },
    },
    '& span:first-of-type':{
      width: 33,
      height: 33,
      position: 'absolute',
      top: 0,
      left: 2,
      border: '2px solid #0d83dd',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      [theme.breakpoints.down("sm")]: {
        width: 39,
        height: 39,
        top: 2,
      },
      [theme.breakpoints.down("xs")]: {
        width: 27,
        height: 27,
        top: 2,
      },
      '& > i':{
        fontSize: 33,
        marginTop: '-2px',
        marginLeft: '-2px',
        display:' inline-block',
        [theme.breakpoints.down("sm")]: {
          fontSize: 39,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 27,
          marginTop: '-1px',
          marginLeft: '-3px',
        },
      }
    }
  },
  introImage:{
    marginRight:"-122px",
    position: 'relative',
    flexShrink: 0,
    marginLeft: 30,
    "@media (max-width: 1500px)": {
      width: '64%',
    },
      "@media (max-width: 1200px)": {
          marginRight: 0
      },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      padding: '0 17px',
      maxWidth:689,
      margin: '0 auto 52px',
    },
    [theme.breakpoints.down("xs")]: {
      padding:'0 6px',
      margin: '0 auto 31px',
    },
    '& > img':{
      "@media (max-width: 1500px)": {
        maxWidth: '100%',
        height: 'auto'
      },
      [theme.breakpoints.down("sm")]: {
        width: '100%',
        height: 'auto'
      },
    }
  },
  introActions:{
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: 27,
    },
  },
  callout:{
    maxWidth: 390,
    textAlign: "center",
    margin: '0 auto 95px 0',
    position:'relative',
    zIndex:'1',
    '& > p':{
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "18px",
      color: "#50a942",
      marginBottom:14,
    },
    "@media (max-width: 1204px)": {
      margin: '0 auto 45px 0',
    },
    [theme.breakpoints.down("sm")]: {
      margin: '0 auto',
      maxWidth: 375,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 258,
    },
  },
  btn:{
    wordSpacing: 6,
    width:'100%',
    boxShadow:'none',
    fontSize:24,
    fontWeight:700,
    lineHeight: '60px',
    padding: '8px 15px',
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.63625rem",
      lineHeight: '57px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:18,
      lineHeight: '34px',
    },
    '&:hover, &:focus, &:active':{
      backgroundColor:'#46943a',
      color:'#fff'
    }
  },
  main:{
    display:'block',
      backgroundColor:'#fff',
  },
  sectionService:{
    backgroundColor:'#fff',
    paddingTop:100,
    "@media (min-width:1199px) and (max-width:1500px)": {
      transform: 'scale(0.71)',
      paddingTop:0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop:59
    },
  },
  sectionAsset:{
    backgroundColor:'#fff',
    "@media (min-width:1199px) and (max-width:1500px)": {
      transform: 'scale(0.71)',
      margin: '-460px 0 -345px 0',
    },
  },
  yellowBlockWrapper:{
    maxWidth:'525px',
    display:'flex',
    alignItems:'top',
    justifyContent:'center',
    flexWrap:'wrap',
    [theme.breakpoints.down("sm")]: {
      margin:'0 auto',
      maxWidth:'570px',
    },
    [theme.breakpoints.down("xs")]: {
      padding:'0 32px',
    },
    "@media (max-width: 374px)": {
      padding:'0 0px',
    },
  },
  blockRow:{
    display:'flex',
    alignItems:'top',
    justifyContent:'space-between',
    flexWrap:'wrap',
    width: "100%",
    "&:nth-of-type(2)":{
      maxWidth:'327px'
    },
    '&:not(:last-of-type)':{
      marginBottom:48,
      [theme.breakpoints.down("xs")]: {
        marginBottom:29,
      },
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:'327px'
    },
  },
  yellowBlock:{
    maxWidth:129,
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
      maxWidth:141,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:129,
    },
    '& > p':{
      marginTop:10,
      fontSize:18,
      color:'#313131',
      fontWeight:'500',
      lineHeight:'23px',
      position:'relative',
      [theme.breakpoints.down("sm")]: {
        padding: '0 5px',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:16,
        lineHeight:'20px',
      },
    },
    '&.extra-shadow > p:before':{
      content:'""',
      width:'90%',
      height:'26px',
      display:'block',
      top:'-39px',
      position:'absolute',
      borderRadius:'100%',
      left:0,
      right:0,
      margin:'0 auto',
      boxShadow:'0 6px 27px rgba(0,0,0,.35)',
    }
  },
  yellowBoxInner:{
    backgroundColor:'#fbe061',
    width:129,
    height:131,
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
    zIndex:1,
    boxShadow:'0px 5px 12px 0px rgba(176, 176, 176, 0.35)',
    [theme.breakpoints.down("sm")]: {
      width:141,
      height:143,
    },
    [theme.breakpoints.down("xs")]: {
      width:129,
      height:131,
    },
    '& > i':{
      fontSize:73,
      lineHeight:'95px',
      color:'#0d83dd',
      [theme.breakpoints.down("sm")]: {
        fontSize:79,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:73,
      },
    }
  },
  protectionTextContent:{
    maxWidth:486,
    marginLeft: 'auto',
    [theme.breakpoints.down("sm")]: {
      maxWidth:590,
      textAlign:'center',
      margin: 'auto',
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:250,
    },
  },
  sectionHeading:{
    letterSpacing: 0,
    color:"#0d83dd",
    fontWeight:'700',
    lineHeight:'56px',
    fontSize:56,
    marginBottom:38,
    [theme.breakpoints.down("sm")]: {
      fontSize:37,
      lineHeight:'37px',
      marginBottom:30,
      textAlign:'center'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:24,
      lineHeight:'24px',
      marginBottom:10,
    },
  },
  sectionText:{
    color:'#626262',
    fontSize:'33px',
    letterSpacing: '-1px !important',
    wordBreak: 'normal',
    lineHeight: '48px',
    [theme.breakpoints.down("sm")]: {
      fontSize:'22px',
      margin: '0 auto 65px auto',
      lineHeight: '32px',

    },
    [theme.breakpoints.down("xs")]: {
      fontSize:'16px',
      marginBottom:38,
      lineHeight: '22px',
    },
  },
  assetTextContent:{
    textAlign:'center',
    marginTop:116,
    [theme.breakpoints.down("sm")]: {
      marginTop:90
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:'16px',
      marginBottom:38
    },
  },
  assetWrapper:{
    display:'flex',
    padding:'0 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop:104,
    '& + &':{
      marginTop:-63,
      [theme.breakpoints.down("sm")]: {
        marginTop:98,
      },
      [theme.breakpoints.down("xs")]: {
        marginTop:30,
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap:'wrap',
      marginTop:0,
    },
  },
  assetTypesWrapper:{
    top:4,
    maxWidth: 785,
    position: 'relative',
    minHeight: 967,
    width: '100%',
    flexWrap:'wrap',
    [theme.breakpoints.down("sm")]: {
      marginLeft:'auto',
      marginRight:'auto',
      minHeight: 858,
      maxWidth: 694,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 417,
      maxWidth: 338,
    },
  },
  assetKind:{
    paddingLeft:65,
    position: 'relative',
    top: '-112px',
    '&.right':{
      paddingLeft:0,
      paddingRight:82,
      marginTop:-38,
      [theme.breakpoints.down("sm")]: {
        paddingRight:0,
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight:0,
      paddingLeft:0,
      paddingBottom:76,
      marginLeft:'auto',
      marginRight:'auto',
      width:'100%',
      top: '0',
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom:30,
    },
    '& > span':{
      fontSize:'1.635625rem',
      color:'#0d83dd',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:226,
      height:226,
      borderRadius:'100%',
      fontWeight:'700',
      border:'3px solid #0d83dd',
      boxShadow:'0 5px 20px rgba(158,158,158,.3)',
      [theme.breakpoints.down("sm")]: {
        marginLeft:'auto',
        marginRight:'auto',
        width:193,
        height:193,
        fontSize:'25px',
      },
      [theme.breakpoints.down("xs")]: {
        width:92,
        height:92,
        fontSize:'12px',
      },
    }
  },
  assetType:{
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    background: '#fff',
    boxShadow: '4px 5px 12px rgba(170,170,170,.3), 0px -2px 8px rgba(170,170,170,.3)',
    textAlign: 'center',
    borderRadius:5,
    padding: '16px 17px 26px',
    position:'absolute',
    [theme.breakpoints.down("sm")]: {
      padding: '15px 14px 24px',
    },
    [theme.breakpoints.down("xs")]: {
      padding: '7px 6px 11px',
    },
    '& > p':{
      fontSize:'18px',
      color:'#323232',
      fontWeight:'700',
      lineHeight:1,
      marginTop:24,
      [theme.breakpoints.down("sm")]: {
        fontSize:'16px',
        marginTop:21,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:'9px',
        marginTop:20,
      },
    },
    '&:first-child':{
      maxWidth:214,
      left:30,
      top:0,
      zIndex:3,
      [theme.breakpoints.down("sm")]: {
        left:27,
        maxWidth:190,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: 95,
        left:14,
      },
    },
    '&:nth-child(2)':{
      maxWidth:212,
      right:79,
      top:0,
      zIndex:1,
      [theme.breakpoints.down("sm")]: {
        right:70,
        maxWidth:188,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: 92,
        right:34,
      },
    },
    '&:nth-child(3)':{
      padding: '30px 20px 39px',
      maxWidth:317,
      top:154,
      left:207,
      zIndex:2,
      "& > p":{
        marginTop:34,
        fontSize:'1.671875rem',
        [theme.breakpoints.down("sm")]: {
          fontSize:'1.48375rem',
          marginTop:33,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize:'12px',
          marginTop:16,
        },
      },
      [theme.breakpoints.down("sm")]: {
        padding: '23px 19px 35px',
        left:185,
        maxWidth:282,
        top:138,
      },
      [theme.breakpoints.down("xs")]: {
        padding: '12px 10px 17px',
        left:90,
        maxWidth:137,
        top:67,
      },
    },
    '&:nth-child(4)':{
      maxWidth:219,
      top:368,
      left:'0',
      zIndex:3,
      [theme.breakpoints.down("sm")]: {
        maxWidth:195,
        top:324,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:95,
        top:158,
      },
    },
    '&:nth-child(5)':{
      maxWidth:215,
      top:370,
      right:"0",
      zIndex:3,
      [theme.breakpoints.down("sm")]: {
        maxWidth:191,
        top:328,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:93,
        top:160,
      },
    },
    '&:last-child':{
      padding: '30px 20px 39px',
      maxWidth:311,
      right:79,
      top:564,
      zIndex:2,
      "& > p":{
        marginTop:37,
        fontSize:'1.671875rem',
        [theme.breakpoints.down("sm")]: {
          fontSize:'1.48375rem',
          marginTop:33,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize:'12px',
          marginTop:16,
        },
      },
      [theme.breakpoints.down("sm")]: {
        padding: '23px 19px 35px',
        maxWidth:283,
        right:68,
        top:509,
      },
      [theme.breakpoints.down("xs")]: {
        padding: '12px 10px 17px',
        right:34,
        maxWidth:138,
        top:247,
      },
    },
  },
  assetTypesWrapper2:{
    maxWidth: 726,
    position: 'relative',
    minHeight: 1038,
    width: '100%',
    flexWrap:'wrap',
    marginBottom:100,
    [theme.breakpoints.down("sm")]: {
      marginLeft:'auto',
      marginRight:'auto',
      minHeight: 995,
      maxWidth: 712,
      marginBottom:124,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft:'auto',
      marginRight:'auto',
      minHeight: 406,
      maxWidth: 305,
      marginBottom:124,
    },
  },
  assetTypeCommercial:{
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    background: '#fff',
    boxShadow: '4px 5px 12px rgba(170,170,170,.3), 0px -2px 8px rgba(170,170,170,.3)',
    textAlign: 'center',
    borderRadius:5,
    padding: '16px 17px 26px',
    position:'absolute',
    '& > p':{
      fontSize:'20px',
      color:'#323232',
      fontWeight:'700',
      lineHeight:1,
      marginTop:23,
      [theme.breakpoints.down("sm")]: {
        marginTop:21,
        fontSize:'19px',
      },
      [theme.breakpoints.down("xs")]: {
        marginTop:10,
        fontSize:'9px',
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: '17px 17px 28px',
    },
    [theme.breakpoints.down("xs")]: {
      padding: '8px 7px 13px',
    },
    '&:first-child':{
      padding: '25px 24px 36px',
      maxWidth:321,
      top:0,
      left:222,
      zIndex:1,
      '& img':{
        maxWidth:272
      },
      "& > p":{
        marginTop:34,
        fontSize:'1.671875rem',
        [theme.breakpoints.down("sm")]: {
          fontSize:'1.62rem',
        },
        [theme.breakpoints.down("xs")]: {
          fontSize:'12px',
          marginTop:16,
        },
      },
      [theme.breakpoints.down("sm")]: {
        left:212,
        padding: '24px 22px 36px',
        maxWidth:308,
      },
      [theme.breakpoints.down("xs")]: {
        left:92,
        padding: '11px 10px 18px',
        maxWidth:135,
      },
    },
    '&:nth-child(2)':{
      maxWidth:236,
      left:0,
      top:268,
      zIndex:2,
      [theme.breakpoints.down("sm")]: {
        maxWidth:226,
        top:255,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:100,
        top:119,
      },
    },
    '&:nth-child(3)':{
      maxWidth:228,
      right:-4,
      top:332,
      zIndex:3,
      [theme.breakpoints.down("sm")]: {
        maxWidth:218,
        top:315,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:96,
        top:148,
      },
    },
    '&:nth-child(4)':{
      maxWidth:227,
      top:484,
      left:248,
      zIndex:3,
      [theme.breakpoints.down("sm")]: {
        maxWidth:217,
        left:235,
        top:461,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:95,
        left:104,
        top:217,
      },
    },
    '&:nth-child(5)':{
      maxWidth:230,
      top:686,
      left:25,
      zIndex:2,
      [theme.breakpoints.down("sm")]: {
        maxWidth:220,
        left:23,
        top:654,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:97,
        left:10,
        top:307,
      },
    },
    '&:last-child':{
      padding: '25px 24px 41px',
      maxWidth:320,
      right:-18,
      top:655,
      zIndex:5,
      "& > p":{
        marginTop:32,
        fontSize:'1.671875rem',
        [theme.breakpoints.down("sm")]: {
          fontSize:'1.62rem',
        },
        [theme.breakpoints.down("xs")]: {
          fontSize:'12px',
          marginTop:16,
        },
      },
      [theme.breakpoints.down("sm")]: {
        padding: '24px 22px 36px',
        maxWidth:306,
        right:-15,
        top:628,
      },
      [theme.breakpoints.down("xs")]: {
        padding: '11px 10px 18px',
        maxWidth:134,
        right:-7,
        top:294,
      },
    },
  },
  assetImg:{
    boxShadow: '0 5px 12px rgba(170,170,170,.3)',
    '& > img':{
      width:'100%'
    }
  },
  sectionRepair:{
    backgroundColor:'#f8f8f8',
    padding:'75px 0',
    overflow: 'hidden',
    [theme.breakpoints.down("sm")]: {
      padding:'76px 0 83px',
    },
    [theme.breakpoints.down("xs")]: {
      padding:'40px 0 37px',
    },
  },
  scaleContent:{
    "@media (min-width:1199px) and (max-width:1500px)": {
      transform: 'scale(0.71)',
      margin: '-115px 0',
    },
  },
  sectionImage:{
    position: 'relative',
    textAlign: 'center',
    marginLeft: '-36px',
    height: 668,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 1500px)": {
      marginLeft: '0',
    },
    [theme.breakpoints.down("xs")]: {
      height: 270,
    },
    '&:before, &:after':{
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '50%',
      border: '1px solid #dbdbdb',
      borderRadius: '50%',
      backgroundColor: 'transparent',
    },
    '&:before':{
      width: '575px',
      height: '575px',
      marginLeft: '-287px',
      marginTop: '-287px',
      [theme.breakpoints.down("xs")]: {
        width: 233,
        height: 233,
        marginLeft: '-117px',
        marginTop: '-117px',
      },
    },
    '&:after':{
      width: '668px',
      height: '668px',
      marginLeft: '-334px',
      marginTop: '-334px',
      [theme.breakpoints.down("xs")]: {
        width: 268,
        height: 268,
        marginLeft: '-136px',
        marginTop: '-136px',
      },
    },
    '& span':{
      '&:before, &:after':{
        content: "''",
        position: 'absolute',
        top: '50%',
        left: '50%',
        border: '1px solid #dbdbdb',
        borderRadius: '50%',
        backgroundColor: 'transparent',
      },
      '&:after':{
        width: '486px',
        height: '486px',
        marginLeft: '-243px',
        marginTop: '-243px',
        [theme.breakpoints.down("xs")]: {
          width: 200,
          height: 200,
          marginLeft: '-101px',
          marginTop: '-101px',
        },
      },
      '&:before':{
        width: '417px',
        height: '417px',
        marginLeft: '-208px',
        marginTop: '-208px',
        [theme.breakpoints.down("xs")]: {
          width: 170,
          height: 170,
          marginLeft: '-86px',
          marginTop: '-86px',
        },
      },
      '& > img':{
        borderRadius:'100%',
        boxShadow:'0 5px 15px rgba(110,110,110,.3)',
        [theme.breakpoints.down("xs")]: {
          maxWidth:160,
        },
      }
    },
  },
  repairTextContent:{
    maxWidth:462,
    marginTop:-10,
    marginLeft: 'auto',
    [theme.breakpoints.down("sm")]: {
      maxWidth:634,
      textAlign:'center',
      margin: 'auto',
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:250,
    },
  },
  sectionTestimonials:{
    backgroundColor:'#fff',
    paddingTop:74,
    "@media (min-width:1199px) and (max-width:1500px)": {
      position: 'relative',
      bottom: '-193px',
    },
    [theme.breakpoints.down("sm")]: {
      marginTop:72,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop:37,
    },
  },
  testimoniaScale:{
    "@media (min-width:1199px) and (max-width:1500px)": {
      transform: 'scale(0.71)',
      margin: '-413px 0 0 0',
    },
  },
  testimonialsWrapper:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent: 'flex-end',
    marginTop:46,
    marginBottom: 50,
    paddingRight: 26,
    '& + &':{
      justifyContent: 'flex-start',
      marginBottom:105,
    }
  },
  testimonialsRow:{
    width:'100%',
    maxWidth:1011,
    display:'flex',
    justifyContent:"space-between",
    alignItems:'center'
  },
  testimonialSlider:{
    width:'100%',
    margin:"0 auto",
    padding:'0 40px',
    [theme.breakpoints.down("xs")]: {
      padding:'0 30px',
    },
    '& .alice-carousel__wrapper':{
      padding:'15px 0'
    },
    '& .alice-carousel__stage-item':{
      padding:'0 9px',
      [theme.breakpoints.down("xs")]: {
        padding:'0 0',
      },
    },
    '& .alice-carousel__dots':{
      margin: '25px 0 90px',
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
      [theme.breakpoints.down("xs")]: {
        margin: '7px 0 50px',
      },
      '& .alice-carousel__dots-item':{
        width:15,
        height:15,
        backgroundColor:'#ccc',
        position:'relative',
        boxShadow:'0 5px 18px rgba(106,106,106,.4)',
        marginRight: '13px',
        '&:last-child':{
          marginRight: '0',
        },
        '&.__active':{
          width:18,
          height:18,
          border:'1px solid #9f9f9f',
          backgroundColor:'#fff',
          boxShadow:'none',
          '&:after':{
            content:"''",
            width:12,
            height:12,
            backgroundColor:'#4b83da',
            display: 'block',
            borderRadius: '100%',
            top: '2px',
            left: '2px',
            position: 'absolute',
          }
        }
      },
    },
  },
  testimonialsBox:{
    width:480,
    height:297,
    boxShadow: '0px 5px 15px rgba(158,158,158,.5)',
    borderRadius:5,
    padding:'36px 46px 21px 44px',
    display:'flex',
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection: 'column',
    [theme.breakpoints.down("sm")]: {
      width:"100%",
      padding:'26px 25px 27px',
      height:219,
    },
    "@media (max-width: 374px)": {
      minHeight:219,
      height:'auto',
    },
  },
  testimonialsText:{
    maxHeight: 163,
    overflow:'hidden',
    letterSpacing: 0,
    fontSize:16,
    color:'#2c2c2c',
    fontWeight:'500',
    marginBottom:15,
    [theme.breakpoints.down("sm")]: {
      fontSize:'0.703125rem',
    },
  },
  profile:{
    width:'100%',
    display:'flex',
    justifyContent:"space-between",
    alignItems:'center'
  },
  profileImg:{
    width:62,
    height:62,
    borderRadius:'100%',
    overflow:'hidden',
    [theme.breakpoints.down("sm")]: {
      width:45,
      height:45,
    },
    '& > img':{
      maxWidth:'100%'
    }
  },
  profileInfo:{
    width:'calc(100% - 77px)',
    [theme.breakpoints.down("sm")]: {
      width:'calc(100% - 55px)',
    },
  },
  profileName:{
    fontSize:18,
    color:'#2c2c2c',
    [theme.breakpoints.down("sm")]: {
      fontSize:13,
    },
  },
  profileCompany:{
    fontSize:16,
    color:'#2c2c2c',
    fontWeight:'700',
    marginTop:'4px',
    [theme.breakpoints.down("sm")]: {
      fontSize:12,
      marginTop:'3px',
    },
  },
  testimonialsActions:{
    textAlign:'center',
    paddingTop:35,
    '& $callout':{
      margin:'0 auto 70px',
      [theme.breakpoints.down("sm")]: {
        margin:'0 auto 47px'
      },
      [theme.breakpoints.down("xs")]: {
        margin:'0 auto 35px'
      },
    },
    '& > i':{
      fontSize:142,
      color:'#2e77e6',
      [theme.breakpoints.down("sm")]: {
        fontSize:108,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:80,
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop:12,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop:21,
    },
  },
});

export default homeStyle;
