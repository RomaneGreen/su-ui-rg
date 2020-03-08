const myAccountStyle = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 1000,
    margin: '0 auto',
    [theme.breakpoints.down("sm")]: {
      padding: '0 20px'
    },
  },
  accountContainer1: {
    display: 'none',
  },
  heading: {
    color: "#0d83dd",
    fontSize: "42px",
    lineHeight: "1.2",
    fontWeight: "700",
    margin: '45px auto 60px'
  },
  custom_tabsWrapper: {
    background: 'transparent',
    marginBottom: 69,
    boxShadow: 'none'
  },
  tabsIndicator: {
    backgroundColor: '#0166ff',
    height: 3,
    
  },
  tabsRoot: {
    
    '& div[class*="flexContainer"]': {
      display: 'flex',
      justifyContent: "space-between",
      '& [class*="scroller"]':{
        [theme.breakpoints.down("xs")]: {
          width: 'auto',
          overflow: 'auto',
        },
      },
      [theme.breakpoints.down("xs")]: {
        //overflow: 'auto',
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: '0 20px'
    },
    [theme.breakpoints.down("xs")]: {
      padding: '0 0'
    },
  },
  tabRoot: {
    textTransform: 'initial',
    color: '#8a8a8a',
    fontSize: 22,
    fontWeight: '600',
    opacity: 1,
    margin: '0 0 8px',
    padding: '0',
    minHeight: 'initial',
    minWidth: 'initial',
    [theme.breakpoints.down("xs")]: {
      margin: '0 20px 13px',
      '&:first-child':{
        marginLeft: 0,
      },
      '&:last-child':{
        marginRight: 0,
      }
    },
    '& span': {
      padding: 0,
    },
    '&:hover': {
      color: '#0166ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#0166ff',
    },
    '&:focus': {
      color: '#0166ff',
    },
  },
  tabSelected: {},
  tabContainer: {
    backgroundColor: 'transparent'
  },
  panelMain: {
    width: '100%',
    [theme.breakpoints.down("xs")]: {
      boxShadow: '0 5px 20px rgba(128,128,128,.3)'
    },
  },
  panelWrapperBox: {
    padding: '38px 36px 50px',
    background: '#fff',
    marginBottom: '40px !important',
    boxShadow: '0 5px 20px rgba(128,128,128,.3)',
    width: '100%',
    '& + &': {
      [theme.breakpoints.down("xs")]: {
        borderTop: '1px solid #e8e8e8'
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: '0 !important',
      boxShadow: 'none',
      padding: '24px 20px',
    },
    '&:last-of-type': {
      marginBottom: '40px !important',
      [theme.breakpoints.down("xs")]: {
        marginBottom: "30px !important",
      },
    }
  },
  form__heading: {
    color: '#8a8a8a',
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '1.04',
    textTransform: 'uppercase',
  },
  colorBoxContainer: {
    marginLeft: -15,
    marginRight: -15,
    justifyContent: 'flex-start',
    width: 'auto'
  },
  alertSettingContainer: {
    marginLeft: -15,
    marginRight: -15,
    justifyContent: 'flex-start',
    width: 'auto',
    marginTop: 32,
  },
  alertSettingWrapper: {
    flexWrap: 'wrap',
    borderRadius: 5,
    border: '1px solid #ececec',
    marginBottom: 23,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    '&:last-child': {
      marginBottom: 0
    }
  },
  alertDetails: {
    borderRight: '1px solid #ececec',
    padding: 20,
    backgroundColor: '#faf8f8',
    [theme.breakpoints.down("sm")]: {
      borderRight: 'none',
    },
  },
  colorBoxBlock: {
    marginTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
  },
  alertControlWrapper: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {
      height: '98px',
    },
  },
  alertPrefrence: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRight: '1px solid #ececec',
    color:'#181818',
    fontSize: 14,
    lineHeight: '1',
    fontWeight: '500',
    padding: 10,
    '& label':{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      flexWrap: 'wrap',
      color:'#181818',
      fontSize: 14,
      lineHeight: '1',
      fontWeight: '500',
      '& [type="radio"]':{
        width:0,
        height: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        opacity: 0,
        margin: 0,
      '& + span':{
        position: 'relative',
      },
       '& + span:after':{
         content: '""',
         borderRadius: '100%',
         width: 15,
         height: 15,
         background: '#fff',
         border:'5px solid #0166ff',
        display: 'block',
        margin:'15px auto 0'
       },
       '&:checked + span:before':{
        // content: '""',
        // borderRadius: '100%',
        // width: 12,
        // height: 12,
        // background: '#0166ff',
        // display: 'block',
        // margin:'15px auto 0',
        // position: 'absolute',
        // bottom: 9,
        // left: '50%',
        // transform: 'translateX(-50%)'
      }
      },
    },
    '& div[class*="tooltipContainer"]':{
      display: 'inline-flex',
      alignSelf: 'flex-end',
      marginTop: '-20px',
      marginBottom: '10px',
      '& i':{
        color:'#8b8b8b'
      }
    }
  },
  alertControls: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    borderRight: '1px solid #ececec',
    '&:last-child':{
      borderRight: 'none'
    }
  },
  alertCheckboxBtn: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    cursor: 'pointer',
    '& [type="checkbox"]':{
      width:0,
      height: 0,
      overflow: 'hidden',
      visibility: 'hidden',
      opacity: 0,
      margin: 0,
    },
    '& i':{
      color:'#a5a5a5',
      fontSize: 34,
    },
    '& span':{
      width:'100%',
      textAlign: 'center',
      color:'#a5a5a5',
      fontSize: 17,
      fontWeight: '700',
      marginTop: 10,
      lineHeight: '1'
    },
    '&.active': {
      backgroundColor: '#e8f9df',
      '& span, & i':{
        color:'#97c481',
      },
    }
  },
  colorBox: {
    position: 'relative',
    borderRadius: '5px',
    border: '2px solid transparent',
    padding: '20px 15px',
    '&.primaryBox': {
      borderColor: '#74bbfe',
      backgroundColor: '#e9f4fe',
      '& $blockHeading': {
        color: '#2173c1'
      }
    },
    '&.yellowBox': {
      borderColor: '#d5d23f',
      backgroundColor: '#fffec3',
      '& $blockHeading': {
        color: '#b9b625'
      }
    },
    '&.pinkBox': {
      borderColor: '#fe74a4',
      backgroundColor: '#fde2ec',
      '& $blockHeading': {
        color: '#db4277'
      }
    },
    '&.greenBox': {
      borderColor: '#3db22e',
      backgroundColor: '#bdfab5',
      '& $blockHeading': {
        color: '#3db22e'
      }
    },
    '&.addBox': {
      borderColor: '#bdbdbd',
      backgroundColor: '#efefef',
      color: '#8a8a8a',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      fontSize: 36,
      fontWeight: '700',
      width: '100%',
      height: '100%',
    },
  },
  addBoxBtn: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '36px',
    alignSelf: 'center'
  },
  addBtnCircle: {
    color: '#fff',
    width: 33,
    height: 33,
    marginRight: 13,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    fontWeight: '400',
    borderRadius: '100%',
    backgroundColor: '#8a8a8a',
  },
  blockClearBtn: {
    padding: 0,
    border: 'none',
    borderRadius: '100%',
    color: '#fff',
    backgroundColor: '#8e8e8e',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    position: 'absolute',
    top: '-12px',
    right: '-12px',
    zIndex: 1,
    cursor: 'pointer',
    transition: 'all 300ms ease-in-out',
    '&:focus, &:hover, &:active': {
      backgroundColor: '#666'
    }
  },
  blockHeading: {
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 12,
    lineHeight: '1',
    textTransform: 'uppercase',
  },
  blockHeadingContent: {
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 15,
    lineHeight: '1',
    color: '#000',
    '& small': {
      fontWeight: '700',
      fontSize: 13,
      color: '#000',
    }
  },
  blockDataTable: {
    display: 'flex',
    '& + $blockDataTable': {
      marginTop: 16
    }
  },
  tableBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    '&:first-child': {
      width: '36%'
    },
    '&:nth-child(2)': {
      width: '32%'
    },
    '&:last-child': {
      width: '32%'
    },
  },
  blockLabel: {
    fontWeight: '500',
    fontSize: 11,
    color: '#5a5a5a',
    textTransform: 'uppercase',
    width: '100%',
    marginBottom: '8px',
    lineHeight: '1'
  },
  blockContent: {
    fontWeight: '700',
    fontSize: 13,
    color: '#000',
    lineHeight: '1'
  },
  customModal: {
    overflow: 'visible',
    '& [class*="MuiDialog-paper"]': {
      overflow: 'visible',
    }
  },
  customModalContent: {
    overflow: 'visible',
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
      borderColor: '#0d83dd',
    },
    [theme.breakpoints.down("xs")]: {
      padding: '6px 8px',
    },
  },
  planImg: {
    '& > img': {
      maxHeight: 83,
      height: 83,
      [theme.breakpoints.down("xs")]: {
        maxHeight: 50,
        height: 50,
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 10
    },
  },
  planName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3c3d3f',
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  planPrice: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  priceSymbol: {
    fontSize: 19,
    fontWeight: 700,
    color: '#212121',
    lineHeight: 1.6,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  priceMain: {
    fontSize: 41,
    fontWeight: 500,
    color: '#212121',
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
    },
  },
  priceDot: {
    fontSize: 19,
    fontWeight: 500,
    color: '#212121',
    lineHeight: 1.6,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  priceDecimals: {
    fontSize: 19,
    fontWeight: 500,
    color: '#212121',
    lineHeight: 1.6,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  priceTenor: {
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
  priceDuration: {
    fontSize: 11,
    fontWeight: 700,
    color: '#212121',
    lineHeight: 1,
    alignSelf: 'flex-end',
    [theme.breakpoints.down("xs")]: {
      fontSize: 7,
    },
  },
  priceCondition: {
    fontSize: 19,
    fontWeight: 500,
    color: '#212121',
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
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
      minWidth: '507px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
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
    lineHeight: '45px',
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
    lineHeight: '45px',
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
  setPreferencesModal:{
    '& div[class*="MuiDialog-paper"]': {
      overflowY: 'inherit',
    },
    '& div[class*="MuiDialogTitl"]': {
      padding: 0,
    },
    '& div[class*="MuiDialogContent"]': {
      overflowY: 'auto',
      maxWidth: '347px',
      padding: '30px',
      [theme.breakpoints.down("xs")]: {
        minWidth: '320px',
      },
    },
  },
  setPreferencesInfo:{
    '& h2':{
      fontSize: '20px',
      fontWeight: '700',
      color: '#000',
      textTransform: 'uppercase',
      lineHeight: '20px',
      textAlign: 'center',
      marginBottom: '30px',
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
  btnNext:{
    fontSize: '20px',
    fontWeight: '900',
    color: '#fff',
    height: '63px',
    lineHeight: '30px',
    borderRadius: '4px',
    background: '#0d83dd',
    minWidth: '161px',
    margin: '100px auto 0 auto',
    display: 'block',
    '&:hover':{
      background: '#0d83dd',
      color: '#fff',
    },
    '&:focus':{
      background: '#0d83dd',
      color: '#fff',
    },
  },
  alertHeading:{
    color: '#181818',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 13
  },
  alertDetailText:{
    color: '#7e7e7e',
    fontSize: 14,
    fontWeight: '700',
  },
  slider: {
    padding: '14px 20px 0',
    alignItems: 'center',
    maxWidth: 205,
    margin: '0 auto',
    '& button':{
      borderRadius: '100%',
      width: 25,
      height: 25,
      background: '#fff',
      border:'5px solid #0166ff',
      display: 'block',
    },
    '& [class*="trackBefore"]':{
      background: '#c9c9c9',
      height: 5,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      top: '5px !important',
    },
    '& [class*="trackAfter"]':{
      background: '#c9c9c9',
      height: 5,
      opacity: 1,
      position: 'relative',
      alignItems: 'center',
    }
  },
  thumbIcon: {
    borderRadius: '50%',
  },
  thumbIconWrapper: {
    backgroundColor: '#fff',
  },
  sliderPoint:{
    display: 'flex',
    maxWidth: '205px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    '& span':{
      display: 'inline-flex',
      color: '#000000',
      fontSize: 10,
      fontWeight: '700',
      textTransform: 'uppercase',
      position: 'relative',
      '&:after':{
        borderRadius: 4,
        width: 7,
        height: 16,
        backgroundColor: "#c9c9c9",
        position: 'absolute',
        bottom: -27,
        left: '50%',
        transform: 'translateX(-50%)',
        content: "''",
      }
    } 
  },
  setPreBtn:{
    margin: '70px auto 0',
    width: 150,
    fontSize: 18,
    display: 'flex',
    height: 50,
  }
});
export default myAccountStyle;
