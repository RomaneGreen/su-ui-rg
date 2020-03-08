import React from "react";
import { Typography, FormControl, OutlinedInput, InputLabel } from "@material-ui/core"
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
import Pagination from "./pagination";
const sellerBailoutAPIUrl = BASE_URL;
const imageBaseUrl = `${MEDIA_STORAGE_URL}/blog_images/`;


class BlogSearch extends React.Component {

    state = {
        blogs: [],
        searchString: '',
        pagination: {
            limit: 10,
            page: 1,
            totalCount: 0
        }
    }

    handleInput = (event) => {
        this.setState({ searchString: event.target.value });
        this.onClick();
    }

    searchBlogs() {
        let that = this;
        axios.get(`${sellerBailoutAPIUrl}/getAllBlogs?page=${this.state.pagination.page}&limit=${this.state.pagination.limit}`)
            .then(json => {
                const payload = json.data.payload;
                this.setState({ blogs: payload.blogs, pagination: { ...that.state.pagination, totalCount: payload.totalCount } });
            })
    }

    componentDidMount() {
        this.searchBlogs();
    }
    handleClose = () => {
        this.setState({ searchString: '' });
    }

    onClick = () => {
        let matched_blogs = [];
        const searchString = this.state.searchString;
        if (searchString) {
            this.state.blogs && this.state.blogs.forEach(function(data, index) {
                console.log(data.title.toUpperCase().includes(searchString.toUpperCase()));
                if (data.category.name.toUpperCase() === searchString.toUpperCase()) {
                    matched_blogs.push(data);
                } else if (data.title.toUpperCase().includes(searchString.toUpperCase())) {
                    matched_blogs.push(data);
                }
            })

            this.setState({ blogs: matched_blogs });
        }
        else if (this.state.blogs.length === 0 || searchString === '') {
            this.searchBlogs();
        }
    }

    handlePaginationChange = (pageNumber) => {
        var pagination = this.state.pagination;
        pagination.page = pageNumber;
        this.setState({ pagination });
        this.searchBlogs();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.blogSearch}>
                 <header className={classes.sectionHead}>
                    <Typography variant="h3" className={classes.titleBlue}>Blogs.</Typography>
                </header>
                <div className={classes.container}>
                    <Grid container spacing={32} className={classes.blogGrid}>
                        <Grid item xs={12} sm={12} lg={12} className={[classes.cutomInputGrid + ' custom-form-control', classes.searchBoxWrapper].join(' ')} >
                            <FormControl required variant="outlined" fullWidth>
                                <InputLabel htmlFor="search">Search</InputLabel>
                                <OutlinedInput labelWidth={0} id="search" name="search" value={this.state.searchString} onChange={this.handleInput} />
                            </FormControl>
                            <Link to={`${process.env.PUBLIC_URL}/blog`} className={classes.removeSearch}><i className="sb-icon-popup-close"></i></Link>
                        </Grid>
                        {this.state.blogs.length === 0 &&
                            <Grid item sm={12} lg={12} >
                                <div className={classes.blogCard}>
                                    No Blogs Found
                                </div>
                            </Grid>
                        }
                        {this.state.blogs && this.state.blogs.map((data, index) => (
                            <Grid item xs={6} sm={12} lg={12} >
                                <div className={[classes.blogCard, classes.blogSearchCard].join(' ')}>
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
                                                    <Typography variant="h1">{data.title}</Typography>
                                                    <Typography component="p">
                                                        One of the most important real estate showing real sign of distress in the month of july.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Link>
                                </div>
                            </Grid>
                        ))
                        }
                        <Grid item xs={12} sm={12} lg={12} >
                            <div className={classes.blogPagination}>
                                <Pagination pagination={this.state.pagination} handlePaginationChange={this.handlePaginationChange} classes={classes} />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(blogStyle)(BlogSearch); 