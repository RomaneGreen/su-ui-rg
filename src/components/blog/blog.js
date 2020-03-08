import React from "react";
import { Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import blogStyle from "../../assets/jss/material-kit-react/components/blogStyle";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import axios from "axios";
// TODO: why this in component and not in redux?
import {BASE_URL, MEDIA_STORAGE_URL} from "../../common/config";

const sellerBailoutAPIUrl = BASE_URL;
const imageBaseUrl = `${MEDIA_STORAGE_URL}/blog_images/`

class Blog extends React.Component {
    state = {
        recent_blogs: []
    }

    
    componentDidMount() {
        axios.get(`${sellerBailoutAPIUrl}/getRecentBlogs?limit=9`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ recent_blogs: payload.blogs });
              })
    }
    handleOlderBlog = event => {
        axios.get(`${sellerBailoutAPIUrl}/getOlderBlogs?limit=9`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ recent_blogs: payload.blogs });
                })
    }

    handleAllBlog = () => {
        axios.get(`${sellerBailoutAPIUrl}/getAllBlogs`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ recent_blogs: payload.blogs });
              })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.blogSec}>
                <header className={classes.sectionHead}>
                    <Typography variant="h3" className={classes.titleBlue}>Blogs.</Typography>
                </header>
                <div className={classes.container}>
                    <Grid container spacing={32} className={classes.blogGrid}>
                        <Grid item xs={12} sm={12} lg={12} >
                            <div className={classes.searchHeader}>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                    <Link to={`${process.env.PUBLIC_URL}/blog-search`}>
                                        <i className="sb-icon-search"></i>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        { this.state.recent_blogs.map((data,index) => (
                            <Grid item xs={12} sm={6} lg={4} >
                                <div className={index === 0 ? classes.mostRecent : ''}>
                                    {index === 0 && <div className={classes.recentTitle}>Most Recent</div>}
                                    <div className={classes.blogCard}>
                                        <Link to={`${process.env.PUBLIC_URL}/blog-detail/${data.id}`}>
                                            <Card className={classes.card}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={imageBaseUrl + data.image}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h2" >
                                                            <span>{data.category ? data.category.name : ''}</span>
                                                        </Typography>
                                                        <Typography component="p">
                                                        {data.title}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            ))
                        }
                        
                    </Grid>
                    <Grid container spacing={32} className={classes.blogGrid}>
                        <Grid item xs={12} sm={12} lg={12} >
                            <div className={classes.moreArticles}>
                                <span className={classes.btnOa}>
                                    <Button color={"blue"} size="lg" className={classes.oaBtn} onClick={this.handleOlderBlog}>Older Articles</Button>
                                </span>
                                <span className={classes.btnVa}>
                                    <Button color={"grey"} size="lg" className={classes.vaBtn} onClick={this.handleAllBlog}>View All</Button>
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(blogStyle)(Blog); 