import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, Typography, Hidden, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import customInputStyle from "../../assets/jss/material-kit-react/components/customInputStyle.jsx";
import buyerStyle from "./onBoardingStyle";
import Button from "../uiComponent/CustomButtons/Button";
import defaultImg from "../../assets/images/default-user.png";
import defaultPDFIcon from "../../assets/images/pdf.png";

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
        // const { classes } = this.props;
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt="user-img" />);
      } else {
        $imagePreview = (<img src={defaultImg} alt="user-img" />);
      }
  
      return (
        <React.Fragment>
            <div className="userImgUpload">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input id="fileInputIMG" className="fileInput" 
                    type="file" 
                    onChange={(e)=>this._handleImageChange(e)} />
                    <div className="internalCont">
                        <i className="sb-icon-cloud"></i>
                        <div className="drag-text">Drag &amp; Drop files</div>
                        <div className="or">or</div>
                        <label htmlFor="fileInputIMG" className="dummyBtn">Browse</label>
                        <div className="limit">JPEG or PNG, 2MB Max</div>
                    </div>
                    {/* <button className="submitButton" 
                    type="submit" 
                    onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
                </form>
            </div>
            <div className="userImgUploadedWraper">
                <div className="userImgUploaded">
                    {$imagePreview}
                </div>
                <div className="removeImg">
                    <i className="sb-icon-popup-close"></i>
                </div>
            </div>
        </React.Fragment>
      )
    }
  }

  class PdfUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
        // const { classes } = this.props;
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (
            <div className="pdfIconPreview">
                <img className="pdfIcon" src={defaultPDFIcon} alt="PDF" />
                <div className="text">
                    <p className="name">{imagePreviewUrl}</p>
                    <p className="size">150KB</p>
                </div>
            </div>
        );
      } else {
        $imagePreview = (
            <div className="pdfIconPreview">
                <img className="pdfIcon" src={defaultPDFIcon} alt="PDF" />
            </div>
        );
      }
  
      return (
        <React.Fragment>
            <div className="userImgUpload">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input id="pdfUpload" className="fileInput" 
                    type="file" 
                    onChange={(e)=>this._handleImageChange(e)} />
                    <div className="internalCont">
                        <i className="sb-icon-cloud"></i>
                        <div className="drag-text">Drag &amp; Drop files</div>
                        <div className="or">or</div>
                        <label htmlFor="pdfUpload" className="dummyBtn">Browse</label>
                        <div className="limit">JPEG or PNG, 2MB Max</div>
                    </div>
                    {/* <button className="submitButton" 
                    type="submit" 
                    onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
                </form>
            </div>
            <div className="userImgUploadedWraper">
                <div className="userImgUploaded">
                    {$imagePreview}
                </div>
                <div className="removePDF">
                    <i className="sb-icon-popup-close"></i>
                </div>
            </div>
        </React.Fragment>
      )
    }
  }

class TeamUpload extends React.Component {
    state = {
        expanded: "buyerLogin",
        validPanels: []
    };

    panels = ["buyerLogin", "buyerInfo", "billingAddress", "paymentInfo"];

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleDone = (panel) => {
        let isPanelValid = this.props.handleDoneClick_buyerInfo(panel);
        if (isPanelValid) {
            window.scrollTo({ top: 250, left: 0, behavior: "smooth" });
            
            let { validPanels } = this.state;
            if (!validPanels.includes(panel)) {
                validPanels.push(panel);
                this.setState({ validPanels });
            }

            let currentPanelIndex = this.panels.indexOf(panel);

            if (currentPanelIndex === 3) {
                this.setState({ expanded: null });
            }
            else {
                this.setState({ expanded: this.panels[currentPanelIndex + 1] });
            }

            if (validPanels.length === this.panels.length) {
                this.props.setBuyerInfoValidated();
            }
        }
    };

    render() {
        const { expanded } = this.state;
        const { classes, formData, isMyAccount, buyerInfoEdit, paymentInfoEdit, onClick } = this.props;
        // const getInputClasses = (fieldName) => {
        //     return `custom-form-control ${classes.requiredInput} hook-required ${invalidBuyerFormFields.includes(fieldName) ? 'error_class' :
        //         formData[fieldName] !== '' && validBuyerFormFields.includes(fieldName) ? 'success_class' : ''}`
        // }
        // const getInputValue = (fieldName) => {
        //     if (isMyAccount && formData.buyer && ["job_title", "company_name","city"].includes(fieldName)) {
        //         return formData.buyer[fieldName];
        //     }
        //     else if (isMyAccount && formData.buyer && ["state"].includes(fieldName)) {
        //         return formData.buyer.state_info["code"];
        //     }
        //     else if (isMyAccount && formData.buyer && ["country"].includes(fieldName)) {
        //         return staticData.countries[0].code;
        //     } else if (isMyAccount && formData.buyer && ["address"].includes(fieldName)) {
        //         return formData.buyer["street1"]
        //     } else if (isMyAccount && formData.buyer && ["address_suit"].includes(fieldName)){
        //         return formData.buyer["street2"]
        //     }
        //     else {
        //         return formData[fieldName];
        //     }
        // }
        // const year = (new Date()).getFullYear();
        // const years = Array.from(new Array(20), (val, index) => index + year);

        return (
            <div className={classes.panelMain}>
                {isMyAccount &&
                <React.Fragment>
                    <div className={classes.userInfoStaticTextWrapper}>
                        <div className={classes.userInfoStaticText}>
                            <div className={classes.userInfoStaticTextHead}>BUYER</div>
                            <div className={classes.userInfoStaticTextCont}>{formData["first_name"] + ' ' + formData["last_name"]}</div>
                        </div>
                        <div className={classes.userInfoStaticText}>
                            <div className={classes.userInfoStaticTextHead}>MEMBER ID</div>
                            <div className={classes.userInfoStaticTextCont}>{formData["id"]}</div>
                        </div>
                        <div className={classes.userInfoStaticText}>
                            <div className={classes.userInfoStaticTextHead}>MEMBER SINCE</div>
                            <div className={classes.userInfoStaticTextCont}>Jan 19, 2018</div>
                        </div>
                    </div>
                </React.Fragment>
            }
                <div className={classes.adgentPanelTagBar}>
                Please upload following to your document store.
                </div>
                <Grid className={classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : '')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'buyerInfo'} onChange={this.handleChange('buyerInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("buyerInfo") && expanded !== "buyerInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>

                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''}>
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                    PROFILE PHOTO
                                    </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={isMyAccount ? 3 : 12} sm={6} lg={6} className={isMyAccount ? 'text-right' : ''}>
                                        <Button name='buyerInfoEdit' onClick={onClick} className={classes.btnMyAccount + (buyerInfoEdit? " save": " edit")}>
                                            {buyerInfoEdit ? "Save" : "Edit"}
                                        </Button>
                                    </Grid>
                                    :
                                    null
                                }
                                
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <Typography className="form__sub-heading" color="primary" noWrap>
                                        {/* dont remove this block */}
                                    </Typography>
                                </Hidden>
                            }
                            <div className={classes.fullWidth}>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} className={classes.cutomInputGrid}>
                                        <div className={classes.userImgUploadWrapper}>
                                            <ImageUpload/>
                                        </div>
                                    </Grid>
                                    
                                    {window.SB_IsMobileView && !isMyAccount &&
                                        <Grid item xs={12} sm={6} lg={4} className={classes.cutomInputGrid}>
                                            <FormControl required variant="outlined" fullWidth>
                                                <Button color="success" size="lg" onClick={() => this.handleDone("buyerInfo")} className="done_button">Done</Button>
                                            </FormControl>
                                        </Grid>
                                    }
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                
                <Grid className={classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : '')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'paymentInfo'} onChange={this.handleChange('paymentInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("paymentInfo") && expanded !== "paymentInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''} >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                    RECIPIENT’S ADDRESS
                                    </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6} className={'text-right'}>
                                        <Button name='paymentInfoEdit' onClick={onClick} className={classes.btnMyAccount + (paymentInfoEdit? " save": " edit")}>
                                            {paymentInfoEdit ? "Save" : "Edit"}
                                        </Button>
                                    </Grid>
                                :
                                null
                                }
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <Typography className="form__sub-heading" color="primary" noWrap>
                                        {/* dont remove this block */}
                                    </Typography>
                                </Hidden>
                            }
                            <div className={classes.fullWidth}>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} className={classes.cutomInputGrid}>
                                        <div className={classes.userImgUploadWrapperAlt}>
                                            <PdfUpload/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>

                <Grid className={classes.panelWrapperBox + (isMyAccount ? ' myAccountPanelWrapper' : '')}>
                    <ExpansionPanel className={classes.expansionPanelAS} expanded={!window.SB_IsMobileView || isMyAccount ? true : expanded === 'paymentInfo'} onChange={this.handleChange('paymentInfo')} >
                        <ExpansionPanelSummary className={classes.expansionPanelSummaryAS} expandIcon={isMyAccount ? ' ' : <i className={this.state.validPanels.includes("paymentInfo") && expanded !== "paymentInfo" ? "sb-icon-panel-success" : "sb-icon-panel-arrow"}></i>}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={isMyAccount ? classes.containerMyaccount : ''} >
                                <Grid item xs={isMyAccount ? 9 : 12} sm={6} lg={6}>
                                    <Typography className="form__heading" noWrap>
                                    REAL ESTATE LICENSE COPY
                                    </Typography>
                                </Grid>
                                {isMyAccount ?
                                    <Grid item xs={3} sm={6} lg={6} className={'text-right'}>
                                        <Button name='paymentInfoEdit' onClick={onClick} className={classes.btnMyAccount + (paymentInfoEdit? " save": " edit")}>
                                            {paymentInfoEdit ? "Save" : "Edit"}
                                        </Button>
                                    </Grid>
                                :
                                null
                                }
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetailsAS}>
                            {!isMyAccount &&
                                <Hidden smUp>
                                    <Typography className="form__sub-heading" color="primary" noWrap>
                                        {/* dont remove this block */}
                                    </Typography>
                                </Hidden>
                            }
                            <div className={classes.fullWidth}>
                                <Grid container spacing={32} className={"space-reset " + classes.cutomInputGridWrapper}>
                                    <Grid item xs={12} className={classes.cutomInputGrid}>
                                        <div className={classes.userImgUploadWrapperAlt}>
                                            <PdfUpload/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </div>
        )
    }
}

export default withStyles(buyerStyle, customInputStyle)(TeamUpload);