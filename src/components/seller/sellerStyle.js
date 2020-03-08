

const sellerStyle = {
  textRight: {
    textAlign: 'right'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }, 
  stepperHead:{
    marginBottom:'15px',
    '& > h5':{
      fontSize: '27px',
      lineHeight: '1.2',
      fontWeight: '700',
      color:'#0d83dd',
    },
    '& > h6':{
      fontSize: '16px',
      lineHeight: '1.5',
      color:'#626262',
      fontWeight: '400',
      textTransform:'none',
    }
  },
  stepper:{
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
      "& $stepperLabel":{
        '& > span:first-child i':{
          display:'block',
          '&:before':{
            display:"block",
            padding:'21px',
            backgroundColor:"#50a942",
            borderRadius: '100%',
            color:'#fff',
            fontSize: '42px',
            '@media (max-width: 767px)': {
              padding:'16px',
              fontSize: '20px',
            },
          }
        },
        '& > span:last-child > span':{
          color:"#50a942",
        }
      }
    },
    '& > div[class*="MuiStep-completed"]':{
      "& $stepperLabel":{
        '& > span:first-child i':{
          display:'block',
          '&:before':{
            display:"block",
            padding:'14px',
            backgroundColor:"#50a942",
            borderRadius: '100%',
            color:'#fff',
            fontSize: '17px',
            '@media (max-width: 767px)': {
              padding:'11px',
              fontSize: '14px',
            },
          }
        }
      }
    },
  },
  stepperLabel:{
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
        width: '42px',
        height: '42px',
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
  buttonSecondry: {
    boxShadow: '0 5px 20px rgba(128,128,128,.3)',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: '16px 20px',
    minWidth:'145px',
    fontWeight:900,
    '&:hover': {
      backgroundColor: '#2d8a1f',
      borderColor: '#2d8a1f',
    },
    '&:active': {
      backgroundColor: '#2d8a1f',
      borderColor: '#2d8a1f',
    },
    '&:focus': {
      backgroundColor: '#2d8a1f',
      boxShadow: '0 0 0 0.2rem rgba(134,189,70,.5)',
    },
  },
  buttonSecondryTrans: {
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
  connectorLine: {
    height: 19+'px',
    border:'none',
    backgroundColor: '#ddd',
    boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)'
  },
  connectorActive: {
    top: '20px',
    '@media (max-width: 767px)': {
      top: '16px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $connectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: 11+'px',
      },
      '&:after':{
        content:"''",
        backgroundColor:'#50a942',
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
    '& + $stepperLabel': {
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
          backgroundColor:"#50a942",
          padding: '21px',
          borderRadius: '100%',
          fontSize: '42px',
          '@media (max-width: 767px)': {
            padding:'16px',
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
        color:"#50a942",
      }
    },
    
  },
  connectorCompleted: {
    top: '20px',
    zIndex:'1',
    '@media (max-width: 767px)': {
      top: '16px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $connectorLine': {
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
        backgroundColor:'#50a942',
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
    '& + $stepperLabel': {
      '& > span:first-child i':{
        color: '#fff',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '&:before':{
          backgroundColor:"#50a942",
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
  connectorDisabled: {
    top: '20px',
    zIndex: '-1',
    '@media (max-width: 767px)': {
      top: '16px',
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)'
    },
    '& $connectorLine': {
      height: 19+'px',
      border:'none',
      backgroundColor: '#ddd',
      boxShadow:'0 5px 0 -5px rgba(255,255,255,.75), inset 0 -2px 1px -1px rgba(0,0,0,.1), inset 0 2px 1px -1px rgba(0,0,0,.1)',
      '@media (max-width: 767px)': {
        height: '11px',
        top:'3px',
      },
    },
    '& + $stepperLabel': {
      '& > span:first-child i':{
        color: '#8a8a8a',
        borderRadius: '100%',
        fontSize: '30px',
        display: 'block',
        '@media (max-width: 767px)': {
          padding:'11px',
          fontSize: '20px',
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
            fontSize: '17px',
          },
        }
      }
    }
  },
  notification:{
    marginTop:'77px',
    '@media (max-width: 767px)': {
      fontSize: '48px',
    },
    '&:empty':{
      marginTop:'0',
    }
  },
  
};
export default sellerStyle;
