// map can be replaced by forEach
/* eslint array-callback-return: "off" */
/* eslint no-script-url: "off" */
/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from "react";
import {Hidden, List, ListItem, Typography, Grid, FormControl, OutlinedInput, InputLabel, Button } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import blogStyle from "../../assets/jss/material-kit-react/components/blogStyle";
import { Link } from "react-router-dom";

import userImg from "../../assets/images/user-avtar-1.png";
import axios from "axios";
// TODO: why this in component and not in redux?
import {BASE_URL, MEDIA_STORAGE_URL} from "../../common/config";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
  } from 'react-share';
const sellerBailoutAPIUrl = BASE_URL;
const imageBaseUrl = `${MEDIA_STORAGE_URL}/blog_images/`

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: '11px',
    },
    closeButton: {
        position: 'absolute',
        top: '-16px',
        right: '-16px',
        color: '#fff',
        background: '#8d8d8d',
        width: '31px',
        height: '31px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '32px',
        fontSize: '15px',
        cursor: 'pointer',
        [theme.breakpoints.down("xs")]: {
            right: '-16px',
            top: '-16px',
            color: '#fff',
            position: 'absolute',
            background: '#8d8d8d',
            width: '31px',
            height: '31px',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '32px',
            fontSize: '15px',
            cursor: 'pointer'
        }
    }
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <span className={classes.closeButton} onClick={onClose}><i className="sb-icon-popup-close"></i></span>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: 0,
        width: '576px',
        [theme.breakpoints.down("xs")]: {
            width: '319px',
        },
    },
}))(MuiDialogContent);

class BlogDetail extends React.Component {
    state = {
        blog_data: [],
        related_blogs: [],
        all_blogs: []
    }

    componentDidMount() {
        axios.get(`${sellerBailoutAPIUrl}/getSingleBlog?id=${this.props.match.params.id}`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ blog_data: payload });
              })
        axios.get(`${sellerBailoutAPIUrl}/getAllBlogs?limit=10`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ all_blogs: payload.blogs });
              })
              //this.setState({ related_blogs: this.getRelatedBlogs() });
    }

    componentDidUpdate(prevProps) {
        if (prevProps && this.props.match.params.id !== prevProps.match.params.id) {
            axios.get(`${sellerBailoutAPIUrl}/getSingleBlog?id=${this.props.match.params.id}`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ blog_data: payload });
              })
        }
      }

      openListingRefer = () => {
        this.setState({ showListingReferModal: !this.state.showListingReferModal });
        this.setState({
            referEmailData: {
                ...this.state.referEmailData, "end_user_name": "", "message": ""
            },
        });
        if (this.props.showSuccessRefer) {
            this.props.showSuccessReferModal();
        }
    }


    formatDate(dateString) {
        if(!dateString) return;
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      
        let formattedDate = new Date(dateString);
        let month =months[formattedDate.getMonth()];
        let day = formattedDate.getDate();
        let year = formattedDate.getFullYear();
        return `${month} ${day}, ${year}`
    }
    render() {
        const { classes } = this.props;
        const {blog_data, all_blogs} = this.state;
        const currentUrl = window.location.href;
        let related_blogs = [];
        if (all_blogs.length > 0) {
            all_blogs.map((data,index) => {
                const category = data.category ? data.category.name : '';
                const currentCatagory = blog_data.category ? blog_data.category.name : '';
                // const title = data.title;
                if (data.id !== blog_data.id && category === currentCatagory) {
                    related_blogs.push(data);
                }
            });
            if (!related_blogs || related_blogs.length < 2) {
                all_blogs.map((data,index) => {
                    const title = data.title;
                    if (data.id !== blog_data.id && (title.includes(blog_data.title) || blog_data.title.includes(title))) {
                        related_blogs.push(data);
                    }
                });
            }
            if (!related_blogs || related_blogs.length < 2) {
                const titles = blog_data.title.split(" ")
                console.log(titles);
                console.log(related_blogs.length);
                titles && titles.forEach(function(title){
                    all_blogs.map((data,index) => {
                        const title = data.title;
                        if (data.id !== blog_data.id && title.includes(title)) {
                            if (related_blogs.length < 2){
                                related_blogs.push(data);
                            }
                        }
                    })
                })
            }
        }
        return (
            <div className={classes.blogDetail}>
                <div className={classes.container}>
                    <div className={classes.articleHead}>
                        <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        <i class="sb-icon-back-solid"></i>
                            Back to blogs
                        </Link>
                    </div>
                    <Grid container spacing={32} className={classes.blogGrid}>
                        <Grid item  sm={12} lg={12} >
                            <div className={classes.titleWrapper}>
                                <div className={classes.blogCat}><span className={classes.titleRed}>{blog_data.category && blog_data.category.name}</span></div>
                                <div className={classes.blogTitle}>
                                    <Typography variant="h2">{blog_data.title}</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={12} lg={9} >
                            <div className={classes.blogDetailLeft}>
                                
                                <div className={classes.blogBannerSocial}>
                                <Hidden smDown>
                                    <div className={classes.blogSocialList}>
                                        <p>Share <b>0</b></p>
                                        <div className={classes.socialShare}>
                                            <FacebookShareButton component='a' url={currentUrl}>                                    
                                                <i className="sb-icon-facebook"></i>
                                            </FacebookShareButton>
                                        </div>
                                        {/* <div className={classes.socialShare}>
                                            <Link to="#" className="insta">
                                                <i className="sb-icon-instagram"></i>
                                            </Link>
                                        </div> */}
                                        <div className={classes.socialShare}>
                                          <TwitterShareButton url={currentUrl}>
                                                <i className="sb-icon-twitter"></i>
                                            </TwitterShareButton>
                                        </div>
                                        <div className={classes.socialShare}>
                                            <LinkedinShareButton url={currentUrl}>
                                                <i className="sb-icon-linkedin"></i>
                                            </LinkedinShareButton>
                                        </div>
                                        <div className={classes.socialShare}>
                                            <PinterestShareButton url={currentUrl} media={imageBaseUrl + blog_data.image}>                                                <i className="sb-icon-pintrest"></i>
                                            </PinterestShareButton>
                                        </div>
                                        <div className={classes.socialShare}>
                                            <GooglePlusShareButton url={currentUrl}>
                                                <i className="sb-icon-google-plus"></i>
                                            </GooglePlusShareButton>
                                        </div>
                                        <div className={classes.socialShare}>
                                            <Link to="" className={classes.socialDots}>
                                                ...
                                            </Link>
                                        </div>
                                        <div className={classes.socialShare}>
                                            <Link to="" className={classes.noCircle} onClick={() => window.print()}>
                                                <i className="sb-icon-printer"></i>
                                            </Link>
                                        </div>
                                        <div className={classes.socialShare}>
                                            <a className={classes.noCircle} href="javascript:void(0);" onClick={this.openListingRefer}>
                                                <i className="sb-icon-envelope-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    </Hidden>
                                    <div className={classes.articleImage}>
                                    <img alt="" src={imageBaseUrl + blog_data.image} />
                                        <Hidden lgUp>
                                            <div className={classes.socialToggle}>
                                                <div class={classes.toggleBtn}><a href="javascript:void(0)"><i className="sb-icon-sub-menu"></i></a></div>
                                                <List component='ul' className={classes.toggleSocialList}>
                                                    <ListItem component='li'>
                                                    <a href="javascript:void(0);" onClick={this.openListingRefer}><i className="sb-icon-envelope-alt"></i></a>
                                                    </ListItem>
                                                    <ListItem component='li'>
                                                        <FacebookShareButton component='a' url={currentUrl}>                                    
                                                            <i className="sb-icon-facebook"></i>
                                                        </FacebookShareButton>
                                                    </ListItem>
                                                    <ListItem component='li'>
                                                        <TwitterShareButton url={currentUrl}>
                                                            <i className="sb-icon-twitter"></i>
                                                        </TwitterShareButton>
                                                    </ListItem>
                                                    {/* <ListItem component='li'>
                                                        <Link to="#"><i className="sb-icon-instagram"></i></Link>
                                                    </ListItem> */}
                                                    <ListItem component='li'>
                                                        <LinkedinShareButton url={currentUrl}>
                                                            <i className="sb-icon-linkedin"></i>
                                                        </LinkedinShareButton>
                                                    </ListItem>
                                                    <ListItem component='li'>
                                                        <PinterestShareButton url={currentUrl} media={imageBaseUrl + blog_data.image}>
                                                            <i className="sb-icon-pintrest"></i>
                                                        </PinterestShareButton>
                                                    </ListItem>
                                                    <ListItem component='li'>
                                                        <GooglePlusShareButton url={currentUrl}>
                                                            <i className="sb-icon-google-plus"></i>
                                                        </GooglePlusShareButton>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Hidden>
                                    </div>
                                </div>
                                <Dialog
                                    onClose={this.openListingRefer}
                                    aria-labelledby="customized-dialog-title"
                                    open={this.state.showListingReferModal} className={classes.emailModal}
                                >
                                    <DialogTitle id="customized-dialog-title" onClose={this.openListingRefer}>
                                        <div className={classes.modalHeader}>
                                            Email This Blog
                                                                    </div>
                                    </DialogTitle>
                                    <DialogContent>
                                        {!this.props.showSuccessRefer ?
                                            <div className={classes.emailForm}>
                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <div className={classes.saleAddress}>{blog_data.title}</div>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.formLabel}>From:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="name">From</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="memID" name="memID" />
                                                        </FormControl>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="email">Email</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="email" name="email" />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.formLabel}>To:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="name">Name</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="end_user_name" name="end_user_name" value={this.state.referEmailData && this.state.referEmailData.end_user_name} onChange={this.handleChangeReferEmail} />
                                                        </FormControl>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="email">Email</InputLabel>
                                                            <OutlinedInput labelWidth={0} id="email" name="email" />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.formLabel}>Message:</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9} className={classes.cutomInputGrid}>
                                                        <FormControl required variant="outlined" fullWidth className="custom-form-control requiredInput">
                                                            <InputLabel htmlFor="email">I’m interested in...</InputLabel>
                                                            <OutlinedInput multiline value={this.state.referEmailData && this.state.referEmailData.message} onChange={this.handleChangeReferEmail}
                                                                rows="10" labelWidth={0} id="message" name="message" />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={10}>
                                                    <Grid item xs={12} sm={3} className={classes.cutomInputGrid}>
                                                        <label className={classes.submitlabel}>&nbsp;</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} className={classes.cutomInputGrid}>
                                                        <span className={classes.contactBtn} >
                                                            <Button color={"primary"} size="lg" className={classes.btn} onClick={this.referEmailListing}>Send</Button>
                                                        </span>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            :
                                            <div className={classes.emailSent}>
                                                <div className={classes.emailmsg}>
                                                    <div className={classes.emailmsgIcon}>
                                                        <i className="sb-icon-mail-fast"></i>
                                                    </div>
                                                </div>
                                                <div className={classes.emailThanks}>
                                                    <p>Thank You!</p>
                                                    <p>Your message has been sent to:</p>
                                                    <p>{this.state.referEmailData && this.state.referEmailData.end_user_name}</p>
                                                </div>
                                            </div>}

                                    </DialogContent>
                                </Dialog>
                                <div className={classes.articleUserInfo}>
                                    <div className={classes.auName}>
                                        <img alt="" src={ blog_data.profile_image ? imageBaseUrl + blog_data.profile_image : userImg} />
                                        <Link to={`${process.env.PUBLIC_URL}/`}>{blog_data.writer ? blog_data.writer.full_name : ''}</Link>
                                    </div>
                                    <div className={classes.auDate}>
                                        {this.formatDate(blog_data.publish_date)}
                                    </div>
                                </div>
                                <div className={classes.articleContent}>
                                    <div dangerouslySetInnerHTML={{__html: blog_data.body}} />
                                </div>
                                
                            </div>
                        </Grid>
                        <Hidden xsDown>
                        <Grid item sm={12} lg={3} >
                            <div className={classes.articleSidebarLeft}>
                                <div className={classes.widgetWhite}>
                                    <Typography variant="h4">Related Articles</Typography>
                                    <div className={classes.articlesTab}>
                                    { related_blogs.map((data,index) => (
                                    <Link to={`${process.env.PUBLIC_URL}/blog-detail/${data.id}`}>
                                        <div className={classes.widgetArticle}>
                                            <div className={classes.widgetArticleImg}>
                                                <img alt="" src={imageBaseUrl + data.image} />
                                            </div>
                                            <div className={classes.widgetArticleInfo}>
                                                <Typography variant="h5"><span className={classes.textRed}>{data.category ? data.category.name : ''}</span></Typography>
                                                {data.title}
                                            </div>
                                        </div>
                                    </Link>
    ))}
                                    </div>
                                </div>
                                {all_blogs.length > 1 &&
                                <div className={classes.widgetWhite}>
                                    <Typography variant="h4">Most Popular</Typography>
                                    <div className={classes.articlesTab}>
                                    <Link to={`${process.env.PUBLIC_URL}/blog-detail/${all_blogs[0].id}`}>
                                        <div className={classes.widgetArticle}>
                                            <div className={classes.widgetArticleImg}>
                                                <img alt="" src={imageBaseUrl + all_blogs[0].image} />
                                            </div>
                                            <div className={classes.widgetArticleInfo}>
                                                <Typography variant="h5"><span className={classes.textOrange}>{all_blogs[0].category.name}</span></Typography>
                                                <p>{all_blogs[0].title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={`${process.env.PUBLIC_URL}/blog-detail/${all_blogs[1].id}`}>
                                        <div className={classes.widgetArticle}>
                                            <div className={classes.widgetArticleImg}>
                                                <img alt="" src={imageBaseUrl + all_blogs[1].image} />
                                            </div>
                                            <div className={classes.widgetArticleInfo}>
                                                <Typography variant="h5"><span className={classes.textPurple}>{all_blogs[1].category.name}</span></Typography>
                                                <p>{all_blogs[1].title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                    </div>
                                </div>
                                }
                            </div>
                        </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={12} lg={9} >
                        <div className={classes.backBlogBtn}>
                            <Link className={classes.btnBb} to={`${process.env.PUBLIC_URL}/blog`}>
                                <Button color={"blue"} size="lg" className={classes.btnBk}>Back To Blogs</Button>
                            </Link>
                        </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(blogStyle)(BlogDetail); 