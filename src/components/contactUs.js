import React from "react";
import { Hidden, Typography, FormControl, OutlinedInput, InputLabel } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import contactUsStyle from "../assets/jss/material-kit-react/components/contactUsStyle";
import Button from "./uiComponent/CustomButtons/Button";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import MaskedInput from 'react-text-mask';
import _ from "lodash";
import { staticData } from "../common";
import Logo from "../assets/images/logo-circular.svg";

// TODO: why this in component and not in redux?
import {BASE_URL} from "../common/config";
import axios from 'axios';
import './contact.css';

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }




function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

function getModalStyle() {
    const top = 50;
    const left = 50;
    const height = 20000000;

    return {
        top: `40%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
       
    };
}

function getModalStyle1() {
    const top = 50;
    const left = 50;

    return {
        top: `50%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const MessageSentComponent = (props) => {
    const { classes } = props;
    return (/* Success Message Box 2 Show Hide Top and success field-message */
        <div className={classes.successMsg}>
            <Typography variant="h4">SENT !</Typography>
            <p>Thank you for your inquiry, our<br/> office will be in touch momentarily.</p>
            <div class={classes.sucsBtm}>
                <Grid item xs={12} className={classes.sellerBailoutLogo}>
                    <Typography noWrap>
                        Best,
                    </Typography>
                    {/* <Typography variant="h5">Best,</Typography> */}
                    <img src={Logo} alt="Sell Up" title="Sell Up" />
                </Grid>
            </div>

        </div>)
}

class ContactUs extends React.Component {
    state = {
        open: false,
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        invalidContactFormFields: [],
        validContactFormFields: [],
        contactFormData: staticData.contactFormData,
        disabled: true,
        formStep: 0
    };


    
    submitForm() {
        axios.post(`${BASE_URL}/contactUs`, this.state.contactFormData).then(() => { this.setState({ messageSent: true }) });
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen1 = () => {
        this.setState({ open1: true });
    };

    handleClose1 = () => {
        this.setState({ open1: false });
    };

    handleOpen2 = () => {
        this.setState({ open2: true });
    };

    handleClose2 = () => {
        this.setState({ open2: false });
    };

    handleOpen3 = () => {
        this.setState({ open3: true });
    };

    handleClose3 = () => {
        this.setState({ open3: false });
    };

    handleOpen4 = () => {
        this.setState({ open4: true });
    };

    handleClose4 = () => {
        this.setState({ open4: false });
    };

     
    handleInput = event => {
        this.setState({
            contactFormData: {
                ...this.state.contactFormData, [event.target.name]: event.target.value,
                
            },
            
        });
    }

    
    handleChange = event => {
        let { invalidContactFormFields, validContactFormFields } = this.state;
        this.setState({
            contactFormData: {
                ...this.state.contactFormData, [event.target.name]: event.target.value,
                
            },
        });
        if (event.target.value === "" || event.target.value === null) { 
            if (!invalidContactFormFields.includes(event.target.name)) {
                invalidContactFormFields.push(event.target.name);
                const index = validContactFormFields.indexOf(event.target.name);
                if (validContactFormFields.includes(event.target.name)) {
                    validContactFormFields.splice(index, 1);
                }
            }
        }
        else {
            const index = invalidContactFormFields.indexOf(event.target.name);
            if (invalidContactFormFields.includes(event.target.name)) {
                invalidContactFormFields.splice(index, 1);
            }
            if (!validContactFormFields.includes(event.target.name)) {
                validContactFormFields.push(event.target.name);
            }
        }
        if (event.target.name === "field-email" && event.target.value !== "") {
            if (!this.validateEmail(event.target.value)) {
                if (!invalidContactFormFields.includes(event.target.name)) {
                    invalidContactFormFields.push(event.target.name);
                    const index = validContactFormFields.indexOf(event.target.name);
                    if (validContactFormFields.includes(event.target.name)) {
                        validContactFormFields.splice(index, 1);
                    }
                }
            }
            else {
                const index = invalidContactFormFields.indexOf(event.target.name);
                if (invalidContactFormFields.includes(event.target.name)) {
                    invalidContactFormFields.splice(index, 1);
                }
                if (!validContactFormFields.includes(event.target.name)) {
                    validContactFormFields.push(event.target.name);
                }
            }
        }
        if (event.target.name === "field-field-phone" && event.target.value !== "") {
            const number = event.target.value.replace(/[^0-9.]/g, "");
            if (number.toString().length < 10) {
                if (!invalidContactFormFields.includes(event.target.name)) {
                    invalidContactFormFields.push(event.target.name);
                    const index = validContactFormFields.indexOf(event.target.name);
                    if (validContactFormFields.includes(event.target.name)) {
                        validContactFormFields.splice(index, 1);
                    }
                }
            }
            else {
                const index = invalidContactFormFields.indexOf(event.target.name);
                if (invalidContactFormFields.includes(event.target.name)) {
                    invalidContactFormFields.splice(index, 1);
                }
                if (!validContactFormFields.includes(event.target.name)) {
                    validContactFormFields.push(event.target.name);
                }
            }
        }
        this.setState({
            invalidContactFormFields: invalidContactFormFields,
            validContactFormFields: validContactFormFields
        });
    };
   
    validateEmail(value) {
        /* eslint no-useless-escape: "off" */
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(value).toLowerCase());
       
    };

    handleSend = event => {
        let { invalidContactFormFields, contactFormData } = this.state;
        const invalidFields = this.validateContactFormData(contactFormData);
        invalidContactFormFields = Object.assign(invalidContactFormFields, invalidFields);
        if (invalidContactFormFields.length) {
            this.setState({ invalidContactFormFields });
            event.preventDefault(); // Let's stop this event.
            event.stopPropagation(); 
            return;
        }
       
        this.submitForm();
    }

      handleMsg = () => {
          this.setState({
              disabled: false
          })
      }

    validateContactFormData = formData => {
        const contactForm = ["field-first-name", "field-last-name", "field-phone", "field-email", "field-subject", "field-message"];
        let invalidFields = [];
        _.each(formData, (value, field) => {
            if (contactForm.includes(field) && value === '') {
                invalidFields.push(field);
            }
        });
        let rrr = invalidFields.length > 0 ? true : false;
        return invalidFields;
    }


    render() {
        const { classes } = this.props;
        const { validContactFormFields, invalidContactFormFields, contactFormData } = this.state;
        console.log("contactformdata:", contactFormData);
        const getInputClasses = (fieldName) => {
            return `custom-form-control ${classes.requiredInput} hook-required ${invalidContactFormFields.includes(fieldName) ? 'error_class' :
                contactFormData[fieldName] !== '' && validContactFormFields.includes(fieldName) ? 'success_class' : ''}`
        };

        return (
            <div className={classes.contactMain}>
                <div className={classes.contactTopTitle}>
                    <Typography variant="h2">Contact.</Typography>
                    <p>We love to hear from you.</p>
                </div>
                <Hidden smUp>
                    <div className={classes.contactList}>
                        <div className={classes.contactListItem} onClick={this.handleOpen}>
                            <i className="sb-icon-pin"></i> <span>Location</span>
                        </div>
                        <div className={classes.contactListItem} onClick={this.handleOpen1}>
                            <i className="sb-icon-headset"></i> <span>Telephone</span>
                        </div>
                        <div className={classes.contactListItem} onClick={this.handleOpen2}>
                            <i className="sb-icon-user"></i> <span>if a seller</span>
                        </div>
                        <div className={classes.contactListItem} onClick={this.handleOpen3}>
                            <i className="sb-icon-buyer"></i> <span>if a buyer</span>
                        </div>
                        <div className={classes.contactListItem} onClick={this.handleOpen4}>
                            <i className="sb-icon-mail-fast"></i> <span>Email Us</span>
                        </div>
                    </div>


                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={getModalStyle()} className={classes.paper}>
                            {/* <div className={classes.closeModal} onClick={this.closeModal}>
                                <i className="sb-icon-cross-bold"></i>
                            </div> */}
                            <Typography variant="h4" id="modal-title"><i className="sb-icon-pin"></i> Location</Typography>
                            <Typography variant="h5">Sell Up Companies, Inc.<br />154 Grand Street<br />New York, NY 10013<br />U.S.A</Typography>

                        </div>
                    </Modal>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open1}
                        onClose={this.handleClose1}
                    >
                        <div style={getModalStyle()} className={classes.paper}>
                            {/* <div className={classes.closeModal} onClick={this.closeModal}>
                                <i className="sb-icon-cross-bold"></i>
                            </div> */}
                            <Typography variant="h4" id="modal-title"><i className="sb-icon-headset"></i> TELEPHONE</Typography>
                            <Typography variant="h5">1 (800) 300-6290</Typography>

                        </div>
                    </Modal>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open2}
                        onClose={this.handleClose2}
                    >
                        <div style={getModalStyle()} className={classes.paper}>
                            {/* <div className={classes.closeModal} onClick={this.closeModal}>
                                <i className="sb-icon-cross-bold"></i>
                            </div> */}
                            <Typography variant="h4" id="modal-title"><i className="sb-icon-user"></i> If a seller</Typography>
                            <Link className={classes.sellerBtn} to={`${process.env.PUBLIC_URL}/seller-form`}>
                                <Button color={"success"} size="lg" className={classes.btn}>SELLER  FORM</Button>
                            </Link>
                        </div>
                    </Modal>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open3}
                        onClose={this.handleClose3}
                    >
                        <div style={getModalStyle()} className={classes.paper}>
                            {/* <div className={classes.closeModal} onClick={this.closeModal}>
                                <i className="sb-icon-cross-bold"></i>
                            </div> */}
                            <Typography variant="h4" id="modal-title"><i className="sb-icon-buyer"></i> If a seller</Typography>
                            <Link className={classes.buyerBtn} to={`${process.env.PUBLIC_URL}/seller-form`}>
                                <Button color={"primary"} size="lg" className={classes.btn}>Buyer  FORM</Button>
                            </Link>
                        </div>
                    </Modal>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open4}
                        onClose={this.handleClose4}
                        overlayStyle={{ backgroundColor: 'transparent' }}
                    >
                        <div style={getModalStyle1()} className={classes.paper}>
                            {/* <div className={classes.closeModal} onClick={this.closeModal}>
                                <i className="sb-icon-cross-bold"></i>
                            </div> */}
                            <Typography variant="h4" id="modal-title"><i className="sb-icon-mail-fast"></i> Email Us</Typography>
                            <p>For email inquiries, please use this contact form.</p>

                            <div className={classes.contactFormModal}>
                                {
                                    this.state.messageSent ?
                                        <MessageSentComponent classes={classes} />
                                        :
                                        <Grid container spacing={24}>
                                            <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("field-first-name") + ' requiredInput'}>
                                                    <InputLabel htmlFor="field-first-name">First Name</InputLabel>
                                                    <OutlinedInput labelWidth={0} id="field-first-name" name="field-first-name" value={contactFormData["field-first-name"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("field-last-name") + ' requiredInput'}>
                                                    <InputLabel htmlFor="field-last-name">Last Name</InputLabel>
                                                    <OutlinedInput labelWidth={0} id="field-last-name" name="field-last-name" value={contactFormData["field-last-name"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("field-phone") + ' requiredInput'}>
                                                    <InputLabel htmlFor="field-phone">Phone</InputLabel>
                                                    <OutlinedInput labelWidth={0} id="field-phone" name="field-phone" value={contactFormData["field-phone"]} onChange={this.handleInput} onBlur={this.handleChange}
                                                        inputComponent={TextMaskCustom} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("field-email") + ' requiredInput'}>
                                                    <InputLabel htmlFor="field-email">Email</InputLabel>
                                                    <OutlinedInput labelWidth={0} id="field-email" name="field-email" value={contactFormData["field-email"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("field-subject") + ' requiredInput'}>
                                                    <InputLabel htmlFor="field-subject">Subject</InputLabel>
                                                    <OutlinedInput labelWidth={0} id="field-subject" name="field-subject" value={contactFormData["field-subject"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                <FormControl required variant="outlined" fullWidth className={getInputClasses("field-message") + ' textAreaInput requiredInput'}>
                                                    <InputLabel htmlFor="field-message">Message</InputLabel>
                                                    <OutlinedInput multiline
                                                        rows="5" labelWidth={0} id="field-message" name="field-message" value={contactFormData["field-message"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                <div className={classes.textCenter}>
                                                    <div className={classes.contactBtn} onClick={this.handleSend} to={`${process.env.PUBLIC_URL}/seller-form`}>
                                                        <Button   color={"secondary"}  className="{classNames.btn}"  size="lg" >Send</Button>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                }
                                
                            </div>

                        </div>
                    </Modal>
                </Hidden>
                <Hidden xsDown>
                    <div className={classes.container}>
                        <Grid container spacing={24} className={classes.contactGrid}>
                            <Grid item sm={12} lg={4} >
                                <div className={classes.contactInfo}>
                                    <div className={classes.contactBox}>
                                        <div className={classes.contactIcon}>
                                            <i className="sb-icon-pin"></i>
                                        </div>
                                        <div className={classes.contactDetail}>
                                            <Typography variant="h3">MAILING ADDRESS</Typography>
                                            <p>Sell Up Companies, Inc.<br />154 Grand Street<br />New York, NY 10013<br />U.S.A</p>
                                        </div>
                                    </div>
                                    <div className={classes.contactBox}>
                                        <div className={classes.contactIcon}>
                                            <i className="sb-icon-headset"></i>
                                        </div>
                                        <div className={classes.contactDetail}>
                                            <Typography variant="h3">TELEPHONE</Typography>
                                            <p>1 (800) 300-6290</p>
                                        </div>
                                    </div>
                                    <div className={[classes.contactBox, classes.linkToFormWrapper].join(' ')}>
                                        <div className={classes.contactIcon}>
                                            <i className="sb-icon-user"></i>
                                        </div>
                                        <div className={classes.contactDetail}>
                                            <Typography variant="h3">IF A SELLER</Typography>
                                            <Link className={classes.sellerBtn} to={`${process.env.PUBLIC_URL}/seller-form`}>
                                                <Button color={"success"} size="lg" className={classes.btn}>SELLER FORM</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={[classes.contactBox, classes.linkToFormWrapper].join(' ')}>
                                        <div className={classes.contactIcon}>
                                            <i className="sb-icon-buyer"></i>
                                        </div>
                                        <div className={classes.contactDetail}>
                                            <Typography variant="h3">IF A BUYER</Typography>
                                            <Link className={classes.buyerBtn} to={`${process.env.PUBLIC_URL}/buyers`}>
                                                <Button color={"primary"} size="lg" className={classes.btn}>BUYER FORM</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={12} lg={8}>
                                <div className={classes.contactTitle}>
                                    <div className={classes.formIcon}>
                                        <i className="sb-icon-mail-fast"></i>
                                    </div>
                                    <div className={classes.formGroup}>
                                        <Typography variant="h3">CONTACT US</Typography>
                                        <p>For email inquiries, please use this contact form.</p>
                                    </div>
                                </div>
                                <div className={classes.contactForm}>
                                    {
                                        this.state.messageSent ?
                                            <MessageSentComponent classes={classes} />
                                            :
                                            <Grid container spacing={32}>
                                                <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-first-name") + ' requiredInput'}>
                                                        <InputLabel htmlFor="field-first-name">First Name</InputLabel>
                                                        <OutlinedInput labelWidth={0} onChange={this.handleInput} onBlur={this.handleChange} id="field-first-name" name="field-first-name" value={contactFormData["field-first-name"]} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-last-name") + ' requiredInput'}>
                                                        <InputLabel htmlFor="field-last-name">Last Name</InputLabel>
                                                        <OutlinedInput labelWidth={0} id="field-last-name" name="field-last-name" value={contactFormData["field-last-name"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-phone") + ' requiredInput'}>
                                                        <InputLabel htmlFor="field-phone">Phone</InputLabel>
                                                        <OutlinedInput inputComponent={TextMaskCustom} labelWidth={0} id="field-phone" name="field-phone" value={contactFormData["field-phone"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6} className={classes.cutomInputGrid}>
                                                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-email") + ' requiredInput'}>
                                                        <InputLabel htmlFor="field-email">Email</InputLabel>
                                                        <OutlinedInput labelWidth={0} id="field-email" name="field-email" value={contactFormData["field-email"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-subject") + ' requiredInput'}>
                                                        <InputLabel htmlFor="field-subject">Subject</InputLabel>
                                                        <OutlinedInput labelWidth={0} id="field-subject" name="field-subject" value={contactFormData["field-subject"]} onChange={this.handleInput} onBlur={this.handleChange} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} className={[classes.cutomInputGrid, classes.textField].join(' ')}>
                                                    <FormControl required variant="outlined" fullWidth className={getInputClasses("field-message") + ' textAreaInput requiredInput'}>
                                                        <InputLabel htmlFor="field-message">Message</InputLabel>
                                                        <OutlinedInput multiline
                                                            rows="6" labelWidth={0} id="field-message" name="field-message" value={contactFormData["field-message"]} onClick={this.handleMsg} onChange={this.handleInput} onBlur={this.handleChange} />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} className={classes.cutomInputGrid}>
                                                    <div className={classes.textCenter}>
                                                        <div className={classes.contactBtn} to={`${process.env.PUBLIC_URL}/seller-form`}>
                                                            <Button color={"primary"} disabled={this.state.disabled} size="lg" onClick={this.handleSend} className={classes.btn}>Sendx</Button>
                                                        </div>
                                                    </div>
                                                </Grid> 
                                            </Grid>
                                    }
                                </div>

                            </Grid>
                        </Grid>
                    </div>
                </Hidden>
            </div>
        )
    }
}

export default withStyles(contactUsStyle)(ContactUs);