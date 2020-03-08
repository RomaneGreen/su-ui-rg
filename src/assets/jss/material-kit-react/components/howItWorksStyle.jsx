import { container } from "../../material-kit-react.jsx";
  const howItWorksStyle = theme => ({
  container:{
    ...container
  },
  root:{
    
  },
  howItWorks:{
    paddingTop:67,
    [theme.breakpoints.down("sm")]: {
      paddingTop:0,
    },
  },
  sectionImg:{
    padding:0,
    '& img':{
      maxWidth:'100%',
      marginTop:27,
      marginLeft:2,
      display: 'table',
      paddingBottom: '84px',
    },
    [theme.breakpoints.down("sm")]: {
      padding: '0 40px',
      '& img':{
        paddingBottom: '6px',
      }
    },
    [theme.breakpoints.down("xs")]: {
      padding: '0 10px',
      '& img':{
        paddingBottom: '0',
      }
    },
  },
  sectionContent:{
    padding:0,
    [theme.breakpoints.down("sm")]: {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection:'column'
    },
  },
  sectionHeading:{
    fontWeight:'700',
    fontSize:38,
    color:'#0d83dd',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:'0 0 26px 16px',
    [theme.breakpoints.down("sm")]: {
      margin:'0 auto 70px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:24,
      margin:'0 auto 34px',
    },
    '& > i':{
      color:'#e60100',
      fontSize:85,
      width:100,
      height:37,
      display:"inline-block",
      [theme.breakpoints.down("xs")]: {
        width:60,
        height:22,
        fontSize:49,
      },
      "&:before":{
        width:103,
        height:37,
        padding: '0 10px 0 7px',
        display:'inline-block',
        transform:'rotateZ(11deg)translateY(-21px)',
        [theme.breakpoints.down("xs")]: {
          width:60,
          height:22,
          transform:'rotateZ(11deg)translateY(-11px)',
        },
      }
    }
  },
  listChecks:{
    margin:'0 18px',
    display: 'table',
    [theme.breakpoints.down("sm")]: {
      paddingTop:'45px',
      paddingBottom:'98px',
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:310,
      paddingTop:'10px',
      paddingBottom:'80px',
    },
  },
  listChecksItem:{
    padding:'0 0 31px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize:24,
    color:'#545454',
    fontWeight:'500',
    lineHeight: '1.4',
    [theme.breakpoints.down("sm")]: {
      fontSize:'25px',
      padding:'0 0 30px 0',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:'19px',
      padding:'0 0 24px 0',
    },
    '& > span:first-of-type':{
      border:"2px solid #0d83dd",
      marginRight: '22px',
      width:33,
      minWidth:33,
      height:33,
      minHeight:33,
      display:'inline-block',
      textAlign:'center',
      lineHeight:"29px",
      fontWeight:'700',
      fontSize:'1.325625rem',
      color:"#545454",
      borderRadius:'100%',
      alignSelf: 'baseline',
      [theme.breakpoints.down("sm")]: {
        width:36,
        minWidth:36,
        height:36,
        minHeight:36,
        fontSize:'22px',
        lineHeight:"31px",
        marginRight: '23px',
      },
      [theme.breakpoints.down("xs")]: {
        width:30,
        minWidth:30,
        height:30,
        minHeight:30,
        fontSize:'17px',
        lineHeight:"25px",
        marginRight: '15px',
      },
    },
    '&:first-of-type':{
      '& > span:first-of-type':{
        marginTop:8,
        [theme.breakpoints.down("xs")]: {
          marginTop:2,
        },
      }
    },
    '&:last-of-type':{
      paddingBottom:'0'
    },
    '& br':{
      [theme.breakpoints.down("xs")]: {
        display:'none'
      },
    }
  },
  btn:{
    width:243,
    fontSize:19,
    fontWeight:'700',
    height:50,
    '&:hover, &:focus, &:active':{
      backgroundColor:'#46943a',
      color:'#fff'
    },
    [theme.breakpoints.down("sm")]: {
      width:258,
      fontSize:20,
      height:54,
      marginTop:8
    },
    [theme.breakpoints.down("xs")]: {
      width:207,
      fontSize:17,
      height:45,
      marginTop:8
    },
  }
});

export default howItWorksStyle;
