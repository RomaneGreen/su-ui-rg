const onBoardingStyle = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100%',
    width: '100%'
  }, 
  stepperHead:{
    marginBottom:'48px',
    '& > h5':{
      fontSize: '27px',
      lineHeight: '1.2',
      fontWeight: '700',
      color:'#0d83dd',
      margin: '20px 0 30px'
    },
    '& > h6':{
      fontSize: '16px',
      lineHeight: '1.5',
      color:'#626262',
      fontWeight: '400',
      textTransform:'none',
      marginBottom: '5px'
    }
  },
  stepperAgent:{
    backgroundColor:'transparent',
    maxWidth:'890px',
    margin: '0 auto',
    '@media (max-width: 767px)': {
      paddingLeft:'0',
      paddingRight:'0',
      margin: '0 -15px',
    },
    '& > div:first-child':{
      paddingLeft:'8px',
    },
    '& > div:last-child':{
      paddingRight:'8px',
    },
    '& > div:first-child:not([class*="MuiStep-completed"])':{
      "& $agentStepperLabel":{
        '& > span:first-child i':{
          display:'block',
          '&:before':{
            display:"block",
            padding:'21px',
            backgroundColor:"#6f00ff",
            borderRadius: '100%',
            color:'#fff',
            fontSize: '42px',
            '@media (max-width: 767px)': {
              padding:'12px',
              fontSize: '20px',
            },
          }
        },
        '& > span:last-child > span':{
          color:"#6f00ff",
        }
      }
    },
    '& > div[class*="MuiStep-completed"]':{
      "& $agentStepperLabel":{
        '& > span:first-child i':{
          display:'block',
          '&:before':{
            display:"block",
            padding:'14px',
            backgroundColor:"#6f00ff",
            borderRadius: '100%',
            color:'#fff',
            fontSize: '17px',
            '@media (max-width: 767px)': {
              padding:'6px',
              fontSize: '10px',
            },
          }
        }
      }
    },
  },
  stepperTeam:{
    backgroundColor:'transparent',
    maxWidth:'890px',
    margin: '0 auto',
    '@media (max-width: 767px)': {
      paddingLeft:'0',
      paddingRight:'0',
      margin: '0 -15px',
    },
    '& > div:first-child':{
      paddingLeft:'8px',
    },
    '& > div:last-child':{
      paddingRight:'8px',
    },
    '& > div:first-child:not([class*="MuiStep-completed"])':{
      "& $teamStepperLabel":{
        '& > span:first-child i':{
          display:'block',
          '&:before':{
            display:"block",
            padding:'21px',
            backgroundColor:"#f2a105",
            borderRadius: '100%',
            color:'#fff',
            fontSize: '42px',
            '@media (max-width: 767px)': {
              padding:'12px',
              fontSize: '20px',
            },
          }
        },
        '& > span:last-child > span':{
          color:"#f2a105",
        }
      }
    },
    '& > div[class*="MuiStep-completed"]':{
      "& $teamStepperLabel":{
        '& > span:first-child i':{
          display:'block',
          '&:before':{
            display:"block",
            padding:'14px',
            backgroundColor:"#f2a105",
            borderRadius: '100%',
            color:'#fff',
            fontSize: '17px',
            '@media (max-width: 767px)': {
              padding:'6px',
              fontSize: '10px',
            },
          }
        }
      }
    },
  },
  agentStepperLabel:{
    '& > span:first-child':{
      color:'#8a8a8a',
      fontSize: '30px',
      display: 'flex',
      width: '60px',
      height: '60px',
      position:'relative',
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent:'center',
      "&:after":{
        content: "''",
        width:'100%',
        height:'100%',
        position:'absolute',
        borderRadius:'100%',
        left:'0',
        top:'0',
        backgroundColor: '#ddd',
        transition:'background .3s,  transform .3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        boxShadow:'0 5px 0 -3px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      },
      '& i':{
        position:'relative',
        zIndex:'3',
      },
      '@media (max-width: 767px)': {
        width: '30px',
        height: '30px',
        position: 'relative'
      },
    },
    '& > span:last-child span':{
      color:'#8a8a8a',
      fontSize:'14px',
      fontWeight:'700',
      marginTop: '20px',
      '@media (max-width: 767px)': {
        fontSize:'11px',
      },
    },
    
  },
  agentButtonSecondry: {
    boxShadow: '0 5px 20px rgba(128,128,128,.3)',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: '16px 20px',
    minWidth:'145px',
    fontWeight:900,
    backgroundColor: '#6f00ff',
    '&:hover, &:focus':{
      boxShadow: '0 14px 26px -12px rgba(91, 46, 230, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(100, 46, 230, 0.2)',
      backgroundColor: '#6302e0'
    }
  },
  agentButtonSecondryTrans: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight:900,
    border:'2px solid #999',
    padding:'14px 20px',
    minWidth:'145px',
    color:'#999',
    backgroundColor: 'transparent',
    '&:hover, &:active,&:focus': {
      color:'#fff',
      backgroundColor: '#999',
      borderColor: '#999'
    },
  },
  agentConnectorLine: {
    height: 19+'px',
    border:'none',
    backgroundColor: '#ddd',
    boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)'
  },
  agentConnectorActive: {
    top: '20px',
    '@media (max-width: 767px)': {
      top: '10px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $agentConnectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: 11+'px',
      },
      '&:after':{
        content:"''",
        backgroundColor:'#6f00ff',
        width: '100%',
        display: 'block',
        height: '9px',
        top: '5px',
        position: 'relative',
        '@media (max-width: 767px)': {
          height: '5px',
          top:'3px',
        },
      },
    },
    '& + $agentStepperLabel': {
      '& > span:first-child i':{
        color: '#fff',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '@media (max-width: 767px)': {
          width:'42px',
          height: '42px',
          position:'relative',
        },
        '&:before':{
          backgroundColor:"#6f00ff",
          padding: '21px',
          borderRadius: '100%',
          fontSize: '42px',
          '@media (max-width: 767px)': {
            padding:'12px',
            fontSize: '20px',
            position: 'absolute',
            top: '50%',
            transform: 'translateX(-50%)translateY(-50%)',
            left: '50%'
          },
        },
        '&.sb-icon-money':{
          fontSize:'32px',
          '@media (max-width: 767px)': {
            fontSize: '20px',
          },
        },
        '&.sb-icon-send':{
          fontSize:'26px',
          fontWeight: '600',
          marginLeft: '5px',
          '@media (max-width: 767px)': {
            fontSize: '20px',
            marginLeft:'0'
          },
        }
      },
      '& > span:last-child > span':{
        color:"#6f00ff",
      }
    },
    
  },
  agentConnectorCompleted: {
    top: '20px',
    zIndex:'1',
    '@media (max-width: 767px)': {
      top: '10px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $agentConnectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: '11px',
        left: 'calc(-50% + 10px)',
        right: 'calc(50% + 10px)'
      },
      '&:after':{
        content:"''",
        backgroundColor:'#6f00ff',
        width: '100%',
        display: 'block',
        height: '9px',
        top: '5px',
        position: 'relative',
        '@media (max-width: 767px)': {
          height: '5px',
          top:'3px',
        },
      },
    },
    '& + $agentStepperLabel': {
      '& > span:first-child i':{
        color: '#fff',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '&:before':{
          backgroundColor:"#6f00ff",
          padding: '21px',
          borderRadius: '100%',
          fontSize: '42px',
        },
        '&.sb-icon-money':{
          fontSize:'32px'
        },
        '&.sb-icon-send':{
          fontSize:'26px',
          fontWeight: '600',
          marginLeft: '5px'
        }
      }
    }
  },
  agentConnectorDisabled: {
    top: '20px',
    zIndex: '-1',
    '@media (max-width: 767px)': {
      top: '10px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $agentConnectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: '9px',
        top:'3px',
      },
    },
    '& + $agentStepperLabel': {
      '& > span:first-child i':{
        color: '#8a8a8a',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '@media (max-width: 767px)': {
          padding:'11px',
          fontSize: '16px',
        },
        '&.sb-icon-plan':{
          fontSize:'18px'
        },
        '&.sb-icon-money':{
          fontSize:'32px',
          '@media (max-width: 767px)': {
            fontSize: '22px',
          },
        },
        '&.sb-icon-send':{
          fontSize:'26px',
          fontWeight: '600',
          marginLeft: '5px',
          '@media (max-width: 767px)': {
            fontSize: '14px',
          },
        }
      }
    }
  },
  teamStepperLabel:{
    '& > span:first-child':{
      color:'#8a8a8a',
      fontSize: '30px',
      display: 'flex',
      width: '60px',
      height: '60px',
      position:'relative',
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent:'center',
      "&:after":{
        content: "''",
        width:'100%',
        height:'100%',
        position:'absolute',
        borderRadius:'100%',
        left:'0',
        top:'0',
        backgroundColor: '#ddd',
        transition:'background .3s,  transform .3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        boxShadow:'0 5px 0 -3px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      },
      '& i':{
        position:'relative',
        zIndex:'3',
      },
      '@media (max-width: 767px)': {
        width: '30px',
        height: '30px',
        position: 'relative'
      },
    },
    '& > span:last-child span':{
      color:'#8a8a8a',
      fontSize:'14px',
      fontWeight:'900',
      marginTop: '20px',
      '@media (max-width: 767px)': {
        fontSize:'11px',
      },
    },
    
  },
  teamButtonSecondry: {
    boxShadow: '0 5px 20px rgba(128,128,128,.3)',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: '16px 20px',
    minWidth:'145px',
    fontWeight:900,
    backgroundColor: '#f2a105',
    '&:hover, &:focus':{
      boxShadow: '0 14px 26px -12px rgba(230, 165, 46, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(230, 182, 46, 0.2)',
      backgroundColor: '#e29603'
    }
  },
  teamButtonSecondryTrans: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight:900,
    border:'2px solid #999',
    padding:'14px 20px',
    minWidth:'145px',
    color:'#999',
    backgroundColor: 'transparent',
    '&:hover, &:active,&:focus': {
      color:'#fff',
      backgroundColor: '#999',
      borderColor: '#999'
    },
  },
  teamConnectorLine: {
    height: 19+'px',
    border:'none',
    backgroundColor: '#ddd',
    boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)'
  },
  teamConnectorActive: {
    top: '20px',
    '@media (max-width: 767px)': {
      top: '10px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $teamConnectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: 11+'px',
      },
      '&:after':{
        content:"''",
        backgroundColor:'#f2a105',
        width: '100%',
        display: 'block',
        height: '9px',
        top: '5px',
        position: 'relative',
        '@media (max-width: 767px)': {
          height: '5px',
          top:'3px',
        },
      },
    },
    '& + $teamStepperLabel': {
      '& > span:first-child i':{
        color: '#fff',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '@media (max-width: 767px)': {
          width:'42px',
          height: '42px',
          position:'relative',
        },
        '&:before':{
          backgroundColor:"#f2a105",
          padding: '21px',
          borderRadius: '100%',
          fontSize: '42px',
          '@media (max-width: 767px)': {
            padding:'12px',
            fontSize: '20px',
            position: 'absolute',
            top: '50%',
            transform: 'translateX(-50%)translateY(-50%)',
            left: '50%'
          },
        },
        '&.sb-icon-money':{
          fontSize:'32px',
          '@media (max-width: 767px)': {
            fontSize: '20px',
          },
        },
        '&.sb-icon-send':{
          fontSize:'26px',
          fontWeight: '600',
          marginLeft: '5px',
          '@media (max-width: 767px)': {
            fontSize: '20px',
            marginLeft:'0'
          },
        }
      },
      '& > span:last-child > span':{
        color:"#f2a105",
      }
    },
    
  },
  teamConnectorCompleted: {
    top: '20px',
    zIndex:'1',
    '@media (max-width: 767px)': {
      top: '10px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $teamConnectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: '11px',
        left: 'calc(-50% + 10px)',
        right: 'calc(50% + 10px)'
      },
      '&:after':{
        content:"''",
        backgroundColor:'#f2a105',
        width: '100%',
        display: 'block',
        height: '9px',
        top: '5px',
        position: 'relative',
        '@media (max-width: 767px)': {
          height: '5px',
          top:'3px',
        },
      },
    },
    '& + $teamStepperLabel': {
      '& > span:first-child i':{
        color: '#fff',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '&:before':{
          backgroundColor:"#f2a105",
          padding: '21px',
          borderRadius: '100%',
          fontSize: '42px',
        },
        '&.sb-icon-money':{
          fontSize:'32px'
        },
        '&.sb-icon-send':{
          fontSize:'26px',
          fontWeight: '600',
          marginLeft: '5px'
        }
      }
    }
  },
  teamConnectorDisabled: {
    top: '20px',
    zIndex: '-1',
    '@media (max-width: 767px)': {
      top: '10px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $teamConnectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: '9px',
        top:'3px',
      },
    },
    '& + $teamStepperLabel': {
      '& > span:first-child i':{
        color: '#8a8a8a',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '@media (max-width: 767px)': {
          padding:'11px',
          fontSize: '16px',
        },
        '&.sb-icon-plan':{
          fontSize:'18px'
        },
        '&.sb-icon-money':{
          fontSize:'32px',
          '@media (max-width: 767px)': {
            fontSize: '22px',
          },
        },
        '&.sb-icon-send':{
          fontSize:'26px',
          fontWeight: '600',
          marginLeft: '5px',
          '@media (max-width: 767px)': {
            fontSize: '14px',
          },
        }
      }
    }
  },
  adgentPanelTagBar:{
    fontSize: 18,
    fontWeight: '500',
    color: '#161616',
    padding: '0 36px 17px',
    lineHeight: '1.5'
  },
  staticLabels:{
    fontSize: 12,
    fontWeight: '500',
    color: '#6e00ff',
    marginBottom: 9,
    height: 12,
    '@media (max-width: 767px)': {
      '&:empty':{
        display: 'none',
      }
    },
  },
  notification:{
    marginTop:'77px',
    '&:empty':{
      display: 'none !important',
    },
    '@media (max-width: 767px)': {
      fontSize: '48px',
      marginTop:'55px',
    },
  },
  smallGrid:{
    display:'flex',
  },
  buyerLandingRootContainer:{
    width:"100%",
    maxWidth:'1204px',
    marginLeft:'auto', 
    marginRight:'auto', 
    padding:"0 15px"
  },
  elementCenterAlign:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:0,
    marginRight:0,
    [theme.breakpoints.down("sm")]: {
      justifyContent:'center',
    },
  },
  noGutter:{
    paddingLeft:0,
    paddingRight:0,
  },
  equalCont:{
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      textAlign:'center',
      '& > a':{
        marginTop:13
      }
    },
  },
  calloutBox:{
    maxWidth:814,
    minHeight:144,
    backgroundColor:'#fff',
    margin:"0 auto",
    padding: '37px 50px',
    width: '100%',
    marginTop:30,
    marginBottom:68,
    [theme.breakpoints.down("sm")]: {
      maxWidth:499,
      minHeight:157,
      padding: '26px 0 27px',
      marginTop:0,
      marginBottom:50,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:321,
      minHeight:101,
      padding: '11px 0 14px',
      marginTop:0,
      marginBottom:47,
    },
  },
  title:{
    fontSize: '40px',
    fontWeight: '500',
    color:'#6f00ff',
    lineHeight:'1',
    [theme.breakpoints.down("sm")]: {
      fontSize: '37px',
      marginBottom: '20px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '24px',
    },
  },
  calloutBtn:{
    height:75,
    width:329,
    fontWeight:'700',
    fontSize:28,
    color:'#fff',
    '&:hover, &:active, &:focus':{
      backgroundColor: '#1659bf',
      color:'#fff'
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth:227,
      height:58,
      fontSize:18,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:227,
      height:40,
      fontSize:18,
      padding: 0,
    },
  },
  introContent:{
    maxWidth:396,
    [theme.breakpoints.down("sm")]: {
      maxWidth:650,
      marginLeft:'auto',
      marginRight:'auto',
    },
  },
  introHeadTitle:{
    fontWeight:'700',
    fontSize:50,
    color:'#6f00ff',
    lineHeight: '1.3',
    maxWidth:370,
    [theme.breakpoints.down("sm")]: {
      fontSize:37,
      textAlign:'center',
      margin: '0 auto',
      maxWidth:260,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:24,
      maxWidth: 160,
    },
  },
  introHeadSubTitle:{
    fontSize:24,
    color:'#393939',
    lineHeight:1,
    padding:'22px 0 47px',
    maxWidth:290,
    textAlign:'center',
    [theme.breakpoints.down("sm")]: {
      fontSize:22,
      margin: '0 auto',
      padding:'28px 0 65px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:14,
      padding:'15px 0 30px',
    },
  },
  introText:{
    fontSize:32,
    color:'#626262',
    lineHeight:1.5,
    maxWidth:390,
    [theme.breakpoints.down("sm")]: {
      fontSize:22,
      textAlign:'center',
      padding:'66px 0 89px',
      margin: '0 auto',
      maxWidth:520,
    },
    [theme.breakpoints.down("xs")]: {
      padding:' 60px 0 56px',
      fontSize: 18,
      maxWidth: 225,
      textAlign: 'left',
    },
  },
  introContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    maxWidth:'1204px',
    marginLeft:'auto', 
    marginRight:'auto',
  },
  introImg:{
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    [theme.breakpoints.down("sm")]: {
      alignItems:'center',
      justifyContent:'center',
      '& img':{
        maxWidth:647,
        width:'100%'
      }
    },
    [theme.breakpoints.down("xs")]: {
      '& img':{
        maxWidth:'309px',
      }
    },
  },
  sectionFeature:{
    backgroundColor:'#fff',
    padding:'120px 0 128px',
    [theme.breakpoints.down("sm")]: {
      padding:'80px 0 103px',
    },
    [theme.breakpoints.down("xs")]: {
      padding:'39px 0 63px',
    },
  },
  featureText:{
    fontWeight:'700',
    fontSize:46,
    color:'#6f00ff',
    lineHeight: '1.3',
    textAlign:'center',
    margin: '0 auto 116px',
    [theme.breakpoints.down("sm")]: {
      fontSize:37,
      maxWidth:675,
      margin: '0 auto 100px',
      lineHeight: '40px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:24,
      maxWidth:330,
      margin: '0 auto 36px',
    },
  },
  featureImgContainer:{
    flexDirection:'column',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    color:"#02a30a",
    '&.notQualify':{
      color:"#fc030f",
      justifyContent:'flex-start',
      '& > p':{
        [theme.breakpoints.down("sm")]: {
          marginBottom:124,
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom:54,
        },
      }
    },
    '& i':{
      fontSize:61,
      display: 'table',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down("sm")]: {
        fontSize:79,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:40,
      },
    },
    '& img':{
      marginTop:20,
      maxWidth:'100%',
      [theme.breakpoints.down("sm")]: {
        maxWidth:'100%'
      },
    },
    '& > p':{
      fontSize:'2.023125rem',
      fontWeight:'900',
      marginBottom:0,
      display: 'table',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down("sm")]: {
        fontSize:40,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:21,
      },
    }
  },
  planBox:{
    border:'2px solid #8a8a8a',
    borderRadius:4,
    padding:'60px 30px 26px',
    minHeight:938,
    display:'flex',
    flexDirection:'column',
    position:'relative',
    maxWidth:277,
    margin: '0 auto',
    justifyContent: 'flex-start',
    overflow:'hidden',
    '&.selected':{
      borderColor:'#296bcf'
    },
    '&.firstMover:after':{
      content:'"CREDITED"',
      backgroundColor:'rgba(13,131,221, .1)',
      color:"#6f00ff",
      position:'absolute',
      top:20,
      right:-38,
      fontSize:18,
      fontWeight:'900',
      transform: 'rotateZ(45deg)',
      padding: '8px 33px',
      lineHeight: 1,
    },
    '&.hasOffer:after':{
      content:'"25% OFF"',
      backgroundColor:'#e0f5d5',
      color:"#5da856",
      position:'absolute',
      top:20,
      right:-38,
      fontSize:18,
      fontWeight:'900',
      transform: 'rotateZ(45deg)',
      padding: '8px 33px',
      lineHeight: 1,
    }
  },
  planHeading:{
    fontSize:'34px',
    color:'#212121',
    textAlign:'center',
    fontWeight:'700',
    lineHeight:'1.3',
    paddingBottom:15,
    marginLeft:-10,
    marginRight:-10
  },
  planSubHeading:{
    fontSize:'15px',
    fontStyle:'italic',
    color:'#212121',
    textAlign:'center',
    lineHeight:'1.35',
    paddingBottom:25,
    maxWidth:207,
    margin:'0 auto'
  },
  planImg:{
    marginBottom:30,
    height: '215px'
  },
  planDiscription:{
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
    flexDirection:'column'
  },
  planPrice:{
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
    alignSelf: 'center'
  },
  priceSymbol:{
    fontSize:26,
    fontWeight:700,
    color:'#212121',
    lineHeight:1.6
  },
  priceMain:{
    fontSize:58,
    fontWeight:500,
    color:'#212121',
    lineHeight:1
  },
  priceDot:{
    fontSize:26,
    fontWeight:500,
    color:'#212121',
    lineHeight:1.6
  },
  priceDecimals:{
    fontSize:26,
    fontWeight:500,
    color:'#212121',
    lineHeight:1.6
  },
  priceTenor:{
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'space-around',
    flexDirection:'column',
    alignSelf: 'center',
    paddingLeft: 5,
    textTransform:'uppercase'
  },
  priceDuration:{
    fontSize:17,
    fontWeight:700,
    color:'#212121',
    lineHeight:1,
    alignSelf: 'flex-end'
  },
  priceCondition:{
    fontSize:26,
    fontWeight:500,
    color:'#212121',
    lineHeight:1
  },
  listChecks:{
    paddingBottom:30,
    paddingTop:40,
    minHeight:365,
  },
  listChecksItem:{
    padding: '0 0 17px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'end',
    fontSize:16,
    fontWeight:400,
    marginBottom:'20px',
    color:'#215ab1',
    '& span' :{
      lineHeight:'24px',
    },
    '&:last-child':{
      paddingBottom:0
    },
    '& .sb-icon-check-filled':{
      fontSize:22,
      display: 'inline-block',
      marginRight:9,
      marginTop:0,
      color:'#6f00ff',
    },
    '& .sb-icon-plus-circular':{
      fontSize:23,
      display: 'inline-block',
      marginRight:9,
      marginTop:0,
      color:'#6f00ff',
    },
    '& .sb-icon-info-alt':{
      fontSize:14,
      display: 'inline-block',
      color:'#8b8b8b',
    },
  },
  btn:{
    minHeight:45,
    minWidth:145,
    textTransform:'uppercase',
    marginLeft:"auto",
    marginRight:"auto",
    display:'table',
    fontWeight:'700',
    fontSize:'16px',
    justifySelf: 'flex-end',
    marginTop:'auto',
    padding:0,
    backgroundColor:'transparent',
    border:'2px solid #8a8a8a',
    color:'#8a8a8a',
    transition:'all 200ms ease-in-out',
    '&:hover, &:active, &:focus':{
      backgroundColor: '#8a8a8a',
      color:'#fff',
      boxShadow:'0 14px 26px -12px rgba(138, 138, 138, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(138, 138, 138, 0.2)'
    },
    '.selected &':{
      border:'2px solid #2e77e6',
      backgroundColor:"#2e77e6",
      color:'#fff'
    },
    '&>span':{
      position:'relative',
      zIndex:-1
    },
    
  },
  planSlider:{
    width:'100%',
  },
  
  planSliderWrapper:{
    padding:'0 !important',
    width:'100%',
    position:'relative',
    [theme.breakpoints.up("md")]: {
      padding:'0 0 40px 0!important',
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth:690,
      marginLeft:'auto',
      marginRight:'auto',
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:390,
    },
    '& .alice-carousel__dots':{
      display:'flex',
      width:'100%',
      maxWidth:200,
      marginLeft:'auto',
      marginRight:'auto',
      justifyContent:'center',
      marginTop:81,
      [theme.breakpoints.down("sm")]: {
        maxWidth:170,
        marginTop:56,
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth:105,
        marginTop:46,
      },
      '& .alice-carousel__dots-item':{
        width:25,
        height:25,
        border:'2px solid #808080',
        borderRadius:'100%',
        backgroundColor:'transparent',
        position:'relative',
        margin: '0 15px',
        '&.__active:before':{
          content:'""',
          background:'#0c83dd',
          width:17,
          height:17,
          position:'absolute',
          left:2,
          top:2,
          borderRadius:'100%'
        }
      },
    },
  },
  condition:{
    fontSize:13,
    color:'#212121',
    fontStyle:'italic',
    fontWeight:'500',
    marginLeft:'auto',
    marginRight:'auto',
    position: 'absolute',
    bottom: 85,
    left: 35,
    [theme.breakpoints.up("md")]: {
      maxWidth:690,
      bottom: 0,
      left: 25,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth:610,
      fontSize:14,
      bottom: 63,
      left: 0,
      right:0
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:277,
      fontSize:13,
      bottom: 50,
      left: 0,
      right:0
    },
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
      //boxShadow: '0 5px 20px rgba(128,128,128,.3)',
    },
  },
  panelWrapperBox:{
    padding: '38px 36px 50px',
    background: '#fff',
    marginBottom: '40px !important',
    boxShadow: '0 5px 20px rgba(128,128,128,.3)',
    width: '100%',
    '& + &:not(.myAccountPanelWrapper)':{
      [theme.breakpoints.down("xs")]: {
        borderTop:'1px solid #e8e8e8'
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: '0 !important',
      padding: '24px 20px',
    },
    '&.myAccountPanelWrapper':{
      [theme.breakpoints.down("xs")]: {
        marginBottom: '40px !important',
        boxShadow: '0 5px 20px rgba(128,128,128,.3)',
      },
    },
    '&:last-of-type':{
      marginBottom:'40px !important',
      [theme.breakpoints.down("xs")]: {
        marginBottom:"30px !important",
      },
    },
    [theme.breakpoints.down("xs")]: {
      '&.myAccountPanelWrapper':{
          boxShadow: '0 5px 20px rgba(128,128,128,.3)',
          marginBottom: '40px !important',
      }
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
        '& i.sb-icon-panel-success':{
          fontFamily:' "SB-icon" !important',
          '&:after':{
            content: '"\\e948"',
            background:'#50a942',
            width:24,
            fontSize: 14,
            lineHeight:'26px',
            height:24,
            borderRadius:'100%',
            display:'block',
            color:'#fff',
            marginRight: '-3px'
          }
        }
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
  cutomClearfix:{
    width: '100%',
    display: 'flex',
    padding: '0 !important',
    flex: '1',
    minWidth: '100%'
  },
  expansionPanelDetailsAS:{
    padding:0,
    backgroundColor:'transparent',
    margin:0,
    flexWrap: 'wrap',
    [theme.breakpoints.up("sm")]: {
      marginTop:46
    },
    '& .form__sub-heading':{
      marginBottom:40,
      display: 'flex',
      width: '100%'
    }
  },
  firstTooltip:{
    width:261
  },
  slash:{
    lineHeight:'50px'
  },
  customModal:{
    overflow:'visible',
    '& [class*="MuiDialog-paper"]':{
      overflow:'visible',
    }
  },
  selectedPlanTextDetailWrapper:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: -50,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
      padding: '0 15px'
    },
    '& button':{
      alignSelf:'flex-end',
      margin: 0
    }
  },
  planSpace:{
    marginBottom: 20,
    '& + div':{
      marginTop: 0
    }
  },
  planChangeBtnWrapper:{
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  detailText:{
    color: '#000',
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 50,
    '& span':{
      fontSize: 20,
      fontWeight: '400'
    }
  },
  detailHeading:{
    color: '#8a8a8a',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },

  divider:{
    width: '100%',
    display: 'block',
    margin: '0 0 50px 0',
    border:'1px solid #f3f3f3'
  },
  staticTextWrap:{
    width: '100%',
    display: 'block',
    marginBottom: 10,
  },
  staticTexthead:{
    fontSize: 18,
    color: '#3c3d3f'
  },
  staticText:{
    fontSize: 16,
    whiteSpace: 'normal',
    color: '#3c3d3f',
    marginTop: 12,
    lineHeight: '1.5'
  },
  userInfoStaticTextWrapper:{
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '0 36px',
    marginBottom: 16,
    [theme.breakpoints.down("xs")]: {
      flexWrap: 'wrap',
      padding: '0 20px',
    },
  },
  userInfoStaticText:{
    width: '33.333%',
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      marginBottom: 15
    },
    '&:nth-child(2)':{
      textAlign: 'center',
      [theme.breakpoints.down("xs")]: {
        textAlign: 'left',
      },
    },
    '&:last-child':{
      textAlign: 'right',
      [theme.breakpoints.down("xs")]: {
        textAlign: 'left',
      },
    }
  },
  userInfoStaticTextHead:{
    fontSize: 14,
    fontWeight: '900',
    color: '#6f00ff',
    marginBottom: 10,
  },
  userInfoStaticTextCont:{
    fontSize: 27,
    fontWeight: '500',
    color: '#000',
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },
  containerMyaccount:{
    paddingRight: '0 !important',
    
    [theme.breakpoints.down("xs")]: {
      marginBottom: 28,
    },
  },
  btnMyAccount:{
    backgroundColor: '#bebbbb',
    fontSize: 18,
    maxWidth: '100%',
    fontWeight: '700',
    padding: '6px 22px',
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
    "&.save":{
      backgroundColor: '#39b525'
    }
  },
  customModalContent: {
    overflow: 'visible',
    '& [class*="planImg"]': {
      marginBottom: 0,
      height: 'auto',
      '& > img': {
        maxHeight: 83,
        height: 83,
        [theme.breakpoints.down("xs")]: {
          maxHeight: 53,
          height: 53,
        },
      }
    },
    '& [class*="planImg"] + div': {
      fontSize: 20,
      fontWeight: '700',
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
    '& [class*="planName"]': {
      fontSize: 22,
      fontWeight: '700',
      color: '#3c3d3f',
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
    '& [class*="planPrice"]': {
      marginTop: 0,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    '& [class*="priceSymbol"]': {
      fontSize: 19,
      fontWeight: 700,
      color: '#212121',
      lineHeight: 1.6,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
    '& [class*="priceMain"]': {
      fontSize: 41,
      fontWeight: 500,
      color: '#212121',
      lineHeight: 1,
      [theme.breakpoints.down("xs")]: {
        fontSize: 26,
      },
    },
    '& [class*="priceDot"]': {
      fontSize: 19,
      fontWeight: 500,
      color: '#212121',
      lineHeight: 1.6,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
    '& [class*="priceDecimals"]': {
      fontSize: 19,
      fontWeight: 500,
      color: '#212121',
      lineHeight: 1.6,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
    '& [class*="priceTenor"]': {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignSelf: 'center',
      paddingLeft: 5,
      textTransform: 'uppercase',
      [theme.breakpoints.down("xs")]: {
        fontSize: 7,
      },
    },
    '& [class*="priceDuration"]': {
      fontSize: 11,
      fontWeight: 700,
      color: '#212121',
      lineHeight: 1,
      alignSelf: 'flex-end',
      [theme.breakpoints.down("xs")]: {
        fontSize: 7,
      },
    },
    '& [class*="priceCondition"]': {
      fontSize: 19,
      fontWeight: 500,
      color: '#212121',
      lineHeight: 1,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
  },

  planWrapper: {
    border: '2px solid #c6c6c6',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 15px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&.firstMover:after': {
      content: '"25% OFF"',
      backgroundColor: '#e1f5d6',
      color: "#5da657",
      position: 'absolute',
      top: 13,
      right: -32,
      fontSize: 12,
      fontWeight: '900',
      transform: 'rotateZ(45deg)',
      padding: '8px 33px',
      lineHeight: 1,
      [theme.breakpoints.down("xs")]: {
        fontSize: 8,
        padding: '3px 24px',
        top: '7px',
        right: '-25px'
      },
    },
    '&.selected': {
      borderColor: '#6f00ff',
    },
    [theme.breakpoints.down("xs")]: {
      padding: '6px 8px',
    },
  },
  
  changePlanModal: {
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      padding: '33px',
      overflowY: 'auto',
      maxWidth: '507px',
      [theme.breakpoints.down("xs")]: {
        maxWidth: '320px',
        padding: '40px 25px',
      },
    },
  },
  changePlan: {
    '& h3': {
      fontSize: '22px',
      fontWeight: '700',
      color: '#3c3d3f',
      lineHeight: '22px',
      marginBottom: '25px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '16px',
      },
    },
    '& h2': {
      color: '#8a8a8a',
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '60px',
      textTransform: 'uppercase',
      marginTop: '15px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '18px',
      },
    },
  },
  changePlanContent: {
    '& p:first-child': {
      fontWeight: '700',
      fontSize: '18px',
      color: '#3c3d3f',
      lineHeight: '33px',
      margin: 0,
      [theme.breakpoints.down("xs")]: {
        fontSize: '16px',
      },
    },
    '& p:nth-child(2)': {
      fontWeight: '400',
      fontSize: '18px',
      color: '#3c3d3f',
      lineHeight: '33px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '16px',
      },
    },
  },
  changePlanInfoAction: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
  },
  buttonCancel: {
    fontWeight: '700',
    fontSize: '16px',
    color: '#8a8a8a',
    lineHeight: '38px',
    background: 'transparent',
    border: '2px solid #8a8a8a',
    padding: '0 21px',
    height: '45px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#8a8a8a',
    }
  },
  buttonChangePlan: {
    fontWeight: '700',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '38px',
    background: '#1a69d2',
    border: '2px solid #1a69d2',
    padding: '0 21px',
    height: '45px',
    '&:hover': {
      background: '#1a69d2',
    }
  },
  planChangedModal: {
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      background: '#0166ff',
      minWidth: '477px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
      },
    },
  },
  changedSuccessMsg: {
    fontSize: '30px',
    fontWeight: '500',
    lineHeight: '22px',
    padding: '100px 15px',
    textAlign: 'center',
    color: '#fff',
    [theme.breakpoints.down("xs")]: {
      fontSize: '20px',
      padding: '70px 15px',
    },
  },



  calcelPlandModal: {
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      minWidth: '477px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
      },
    },
  },
  deleteFavInfo: {
    padding: '26px 39px',
    [theme.breakpoints.down("xs")]: {
      padding: '30px 30px 20px 30px',
    },
    '& h3': {
      textAlign: 'center',
      fontSize: '30px',
      color: '#232222',
      lineHeight: '42px',
      fontWeight: '500',
      [theme.breakpoints.down("xs")]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    '& p': {
      textAlign: 'center',
      marginTop: '40px',
      color: '#3c3d3f',
      lineHeight: '26px',
      fontSize: '18px',
      fontWeight: '400',
      [theme.breakpoints.down("xs")]: {
        fontSize: '14px',
        marginTop: '25px',
      },
    },
  },
  favAction: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '45px',
    [theme.breakpoints.down("xs")]: {
      marginTop: '25px',
    },
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
    '&:hover': {
      color: '#fff',
    },
    '&:focus': {
      color: '#fff',
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
    '&:hover': {
      color: '#fff',
    },
    '&:focus': {
      color: '#fff',
    },
  },

  PlanSetCalcelModal:{
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      minWidth: '508px',
      background: '#39b525',
      padding: '61px 30px 30px 30px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
      },
    },
  },
  setCancelInfo:{
    textAlign: 'center',
    '& h3':{
      fontSize: '30px',
      fontWeight: '500',
      margin: 0,
      color: '#fff',
      marginBottom: '10px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '20px',
      },
    },
    '& h2':{
      fontSize: '30px',
      fontWeight: '900',
      color: '#fff',
      [theme.breakpoints.down("xs")]: {
        fontSize: '24px',
      },
    },
    '& p':{
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '26px',
      color: '#fff',
      marginTop: '30px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '14px',
        lineHeight: '18px',
      },
    },
  },
  chnagePlanSet:{
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down("xs")]: {
      display: 'block',
      marginTop: '35px',
    },
  },
  chnagePlanbtn:{
    color: '#fff',
    padding: '0 24px',
    fontSize: '16px',
    background: '#1a69d2',
    fontWeight: '700',
    lineHeight: '45px',
    height: '45px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    [theme.breakpoints.down("xs")]: {
      display: 'block',
      marginBottom: '20px',
      maxWidth: '216px',
      margin: '0 auto',
    },
    '&:hover':{
      background: '#1a69d2',
      color: '#fff',
    },
    '&:focus':{
      background: '#1a69d2',
      color: '#fff',
    },
  },
  unchangePlanbtn:{
    color: '#fff',
    padding: '0 24px',
    fontSize: '16px',
    background: 'transparent',
    border: '2px solid #fff',
    fontWeight: '700',
    lineHeight: '45px',
    height: '45px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    [theme.breakpoints.down("xs")]: {
      display: 'block',
      maxWidth: '216px',
      margin: '0 auto',
    },
    '&:hover':{
      background: 'transparent',
      color: '#fff',
    },
    '&:focus':{
      background: 'transparent',
      color: '#fff',
    },
  },

  planUncancelModal: {
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      minWidth: '477px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
      },
    },
  },
  changedUncancelMsg: {
    fontSize: '30px',
    fontWeight: '500',
    lineHeight: '30px',
    padding: '101px 15px',
    textAlign: 'center',
    color: '#2b2b2b',
    [theme.breakpoints.down("xs")]: {
      fontSize: '20px',
      padding: '66px 15px',
    },
  },

  planCanceledModal:{
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      minWidth: '477px',
      background: '#39b525',
      padding: '70px 30px 65px 30px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
        padding: '40px 30px 40px 30px',
      },
    },
  },
  canceledPlanMsg:{
    textAlign: 'center',
    '& h2':{
      fontSize: '30px',
      fontWeight: '500',
      color: '#fff',
      lineHeight: '36px',
      marginBottom: '30px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '20px',
        marginBottom: '20px',
      },
    },
    '& p':{
      color: '#fff',
      fontSize: '18px',
      lineHeight: '26px',
      margin: 0,
      [theme.breakpoints.down("xs")]: {
        fontSize: '18px',
      },
    },
  },
  adminWelcomeModal:{
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      minWidth: '508px',
      background: '#d8a800',
      padding: '40px 30px 40px 30px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
        padding: '45px 25px 30px 25px',
      },
    },
  },
  adminWelcomeInfo:{
    textAlign: 'center',
    color: '#fff',
    maxWidth: '348px',
    margin: '0 auto',
    
    '& h2':{
      fontSize: '30px',
      lineHeight: '40px',
      fontWeight: '500',
      marginBottom: '30px',
      color: '#fff',
      [theme.breakpoints.down("xs")]: {
        fontSize: '20px',
        lineHeight: '34px',
      },
      '& span':{
        display: 'block',
        fontWeight: '900',
        [theme.breakpoints.down("xs")]: {
          fontSize: '24px',
        },
      }
    },
    '& p':{
      fontSize: '20px',
      lineHeight: '22px',
      color: '#fff',
      marginBottom: '20px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
    '& p:last-child':{
      marginBottom: '0',
    },
  },
  continuebtn:{
    fontSize: '16px',
    color: '#fff',
    height: '45px',
    lineHeight: '45px',
    fontWeight: '700',
    borderRadius: '4px',
    display: 'inline-block',
    background: '#1369d3',
    padding: '0 76px',
    textTransform: 'uppercase',
    marginTop: '40px',
    [theme.breakpoints.down("xs")]: {
      marginTop: '20px',
    },
    '&:hover':{
      background: '#1369d3',
      color: '#fff',
    },
    '&:focus':{
      background: '#1369d3',
      color: '#fff',
    },
  },
  userImgUploadWrapper:{
    maxWidth: 681,
    display: 'flex',
    alignContent: 'center',
    margin: '0 auto',
    justifyContent: 'space-between',
    [theme.breakpoints.down("xs")]: {
      maxWidth: '280px',
      flexDirection: 'column',
    },
    '& > .userImgUpload':{
      width: 280,
      height: 280,
      borderRadius: '100%',
      border:'2px dashed #4dbaff',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down("xs")]: {
        marginBottom: 50,
      },
      '& .fileInput':{
        position: 'absolute',
        top:'0',
        bottom:'0',
        left: '0',
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        opacity: 0,
        zIndex: '10',
      },
      '& .internalCont':{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .sb-icon-cloud':{
          color:"#19a6ff",
          fontSize: '100px',
          lineHeight: '66px',
          marginBottom: 24,
          marginTop: '25px'
        },
        '& .drag-text':{
          fontSize: 18,
          color:'#161616',
          fontWeight: '700',
            marginBottom:2
        },
        '& .or':{
          fontSize: '15px',
          color:'#8a8a8a',
          fontWeight: '400',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&:before':{
            border: "1px solid #bebebe",
            width: "40px",
            content: '""',
            marginRight: '10px',
            transform: "translateY(2px)"
          },
          '&:after':{
            border: "1px solid #bebebe",
            width: "40px",
            content: '""',
            marginLeft: '10px',
            transform: "translateY(2px)"
          }
        },
        '& .limit':{
          fontSize: '12px',
          color:'#8a8a8a',
          fontWeight: '500',
        },
        '& .dummyBtn':{
          color:'#fff',
          backgroundColor: '#19a6ff',
          borderRadius: '4px',
          width: "155px",
          height: "36px",
          fontSize: '15px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px 0',
          transition: 'all 300ms ease-in-out',
          position: 'relative',
          zIndex: '11',
          cursor: 'pointer',
          '&:hover':{
            backgroundColor: "#008df9"
          }
        }
      }
    },
    '& > .userImgUploadedWraper':{
      position: 'relative',
      '& > .userImgUploaded':{
        width: 280,
        height: 280,
        borderRadius: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'rgb(229, 229, 229)',
        boxShadow: '0px 3px 27px 0px rgba(0, 0, 0, 0.1)',
        '& > img':{
          position: 'absolute',
          top:'50%',
          left: '50%',
          transform: 'translateX(-50%)translateY(-50%)',
          maxHeight: '100%',
          minWidth: '100%',
          minHeight: '100%'
        },
      },
      '& .removeImg':{
        backgroundColor: '#ababab',
        width: 33,
        height: 33,
        borderRadius: '100px',
        overflow: 'hidden',
        color:'#fff',
        position: 'absolute',
        right: '46px',
        top:'8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 300ms ease-in-out',
        cursor: 'pointer',
          fontSize: '20px',
        '&:hover':{
          backgroundColor: '#999',
        }
      }
    }
  },
  userImgUploadWrapperAlt:{
    display: 'flex',
    alignContent: 'center',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down("xs")]: {
      maxWidth: '280px',
      flexDirection: 'column',
    },
    '& > .userImgUpload':{
        marginTop:9,
      maxWidth: 437,
      height: 279,
      width: '100%',
      border:'2px dashed #4dbaff',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 24,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 50,
        marginRight: 0
      },
      '& .fileInput':{
        position: 'absolute',
        top:'0',
        bottom:'0',
        left: '0',
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        opacity: 0,
        zIndex: '10',
      },
      '& .internalCont':{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .sb-icon-cloud':{
          color:"#19a6ff",
          fontSize: '100px',
          lineHeight: '66px',
          marginBottom: 22,
          marginTop: '25px'
        },
        '& .drag-text':{
          fontSize: 18,
          color:'#161616',
          fontWeight: '700',
        },
        '& .or':{
          fontSize: '15px',
          color:'#8a8a8a',
          fontWeight: '400',
          marginTop: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&:before':{
            border: "1px solid #bebebe",
            width: "40px",
            content: '""',
            marginRight: '10px',
            transform: "translateY(2px)"
          },
          '&:after':{
            border: "1px solid #bebebe",
            width: "40px",
            content: '""',
            marginLeft: '10px',
            transform: "translateY(2px)"
          }
        },
        '& .limit':{
          fontSize: '12px',
          color:'#8a8a8a',
          fontWeight: '500',
        },
        '& .dummyBtn':{
          color:'#fff',
          backgroundColor: '#19a6ff',
          borderRadius: '4px',
          width: "155px",
          height: "36px",
          fontSize: '15px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px 0',
          transition: 'all 300ms ease-in-out',
          position: 'relative',
          zIndex: '11',
          cursor: 'pointer',
          '&:hover':{
            backgroundColor: "#008df9"
          }
        }
      }
    },
    '& > .userImgUploadedWraper':{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 437,
      height: 150,
      width: '100%',
      marginLeft: 24,
        marginTop:24,
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0
      },
      '& > .userImgUploaded':{
        width: '100%',
        maxWidth: '437px',
        height: 150,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '5px',
        display: 'flex',
        padding: '15px 20px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        boxShadow: '0px 3px 27px 0px rgba(0, 0, 0, 0.1)',
        '& > img':{
          width: 72,
          height: 82
        },
        '& .pdfIconPreview':{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          '& .text':{
            marginLeft: '15px',
            width: 'calc(100% - 90px)',
            '& .name':{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
              display: 'block',
              fontSize: 16,
              fontWeight: '600',
              color: '#161616'
            },
            '& .size':{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
              display: 'block',
              marginBottom: 0,
              fontSize: 16,
              fontWeight: '700',
              color: '#959595'
            }
          }
        }
      },
      '& .removePDF':{
        backgroundColor: '#ababab',
        width: 33,
        height: 33,
        borderRadius: '100px',
        overflow: 'hidden',
        color:'#fff',
        position: 'absolute',
        right: '-15px',
        top:'-15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 300ms ease-in-out',
        cursor: 'pointer',
        '&:hover':{
          backgroundColor: '#999',
        }
      }
    }
  },
    preferencesWrapper: {
      '& $expansionPanelDetailsAS': {
          marginTop: 49
      },
        '& $panelWrapperBox': {
          marginBottom: '29px !important'
        },
    },
    preferencesTeretories: {
        '& $cutomInputGrid': {
            padding: '10px 25px !important'
        },
        '& $expansionPanelDetailsAS': {
            marginTop: 58
        },
        '& $staticLabels': {
            paddingLeft: 3
        }
    },
    experienceOverTitle: {
      paddingTop: 11
    },
    directPayWrapper: {
      '& $cutomInputGrid': {
          padding: '20px 25px !important'
      }
    },
    upload: {
      '& $cutomInputGrid': {
          padding: '4px 25px 36px !important'
      }
    },
    pdfUploaderWrapper: {
        '& $cutomInputGrid': {
            padding: '4px 30px 28px !important'
        },
    }
});
export default onBoardingStyle;
