/* eslint no-mixed-operators: "off" */
/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from "react";
import { Hidden, List, ListItem, Typography, FormControl, OutlinedInput, Grid, Select, MenuItem, Dialog } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import ProductListingStyle from "../../assets/jss/material-kit-react/components/ProductListingStyle.jsx";
import Pagination from './pagination';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { propertyActions, myAcccountActions } from '../../actions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import PropertyIcons from "./propertyIcons";
import { formatMoney } from '../../common/helperMethods';

// core components
import Filters from './filters';
import { staticData } from "../../common";
import history from "../../common/history";
import OverlayLoader from '../common/overlayLoader';
import { getFilterTags } from './filterTags';
import { MEDIA_STORAGE_URL } from '../../common/config';

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        top: '-16px',
        right: '-16px',
        color: '#fff',
        position: 'absolute',
        background: '#8d8d8d',
        width: '31px',
        height: '31px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '32px',
        fontSize: '15px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '29px',
            position: 'relative',
            background: 'transparent',
            color: '#0d83dd',
            left: 0,
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
        padding: theme.spacing.unit * 1,
    },
}))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//     root: {
//         borderTop: `1px solid ${theme.palette.divider}`,
//         margin: 0,
//         padding: theme.spacing.unit,
//     },
// }))(MuiDialogActions);

const sortingOptions = [{ name: "Best Match", value: 0 }, { name: "TIME : NEWLY LISTED", value: 1 }, { name: "PRICE : LOWEST FIRST", value: 2 }, { name: "PRICE : HIGHEST FIRST", value: 3 }, { name: "DISTANCE : CLOSEST FIRST", value: 4 }];

const NoteTag = (props) => {
    const note = staticData.noteStatus.find((item) => { return item.id === props.note_status_id });
    const _class = `status ${note.class}`;
    const label = note.label;
    return (
        <div className={props.classes.propertyStatus}>
            <span className={_class}>{label}</span>
        </div>
    )
}

class PropertyListing extends React.Component {
    state = {
        type: '',
        name: '',
        labelWidth: 0,
        view: 'grid',
        open_filters: false,
        open_sortings: false
    };

    componentDidMount() {
        if (!this.props.buyerProfileDetails) {
            this.props.getBuyerProfileDetails();
        }
        this.props.getFilteredListings();
        this.props.getFavouriteListing();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClickOpen = (section) => {
        this.setState({
            [section]: true,
        });
    };

    handleClose = (section) => {
        this.setState({ [section]: false });
    };

    handleProductClick(event, porpertyId, listingId) {
        if (event.target.name === "favourite") {
            var favouriteListings = this.props.favouriteListings.map(listing => { return listing.id });
            if (favouriteListings.includes(listingId)) {
                this.props.deleteFavourite(listingId);
            }
            else {
                this.props.addFavourite(listingId);
            }
        }
        else if (event.currentTarget.attributes.name.value === "property") {
            history.push(`${process.env.PUBLIC_URL}/property-detail/${porpertyId}`)
        }
    }

    render() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        const { classes, filterChangeHandler, filters, pagination, listings, favouriteListings } = this.props;
        const gridView = this.state.view === "grid";
        let productlistingClass = gridView ? classes.productItem : classes.productItemList;
        let listingColumnSize_sm = gridView ? 6 : 12;
        let listingColumnSize_lg = gridView ? 4 : 12;
        const favouriteListingIds = favouriteListings ? favouriteListings.map(listing => { return listing.id }) : [];

        // const filter_states = staticData["filter_States"];
        // const states = filter_states.map(state => { return state.name });

        // const counties = filters["state"] ? filter_states.find(state => {
        //     return state.name === filters["state"]
        // }).counties : [];

        // const selectedCounty = filters["county"] ? counties.find(county => {
        //     return county.name === filters["county"]
        // }) : "";

        // const cities = selectedCounty ? selectedCounty.cities : [];
        // const neighbourhood = selectedCounty ? selectedCounty.neighbourhood : [];

        const filterTags = getFilterTags(filters);
        return (
            <div className={classes.listingRoot}>
                <div className={classes.intro}>
                    <Hidden lgUp>
                        <div className={classes.mobFilterMain}>
                            <div className={classes.mobfilter}>
                                <div className={`${classes.filterBlockMob} ${Object.keys(filters).length > 0 ? classes.filterBlockMob_active : ""}`} onClick={() => this.handleClickOpen("open_filters")}><span>Filters</span></div>
                                <div className={`${classes.filterBlockMob} ${filters['order_by'] ? classes.filterBlockMob_active : ""}`} onClick={() => this.handleClickOpen("open_sortings")}><span>Sort</span></div>
                            </div>
                        </div>
                        {/* Sort Modal for mobile */}
                        <Dialog
                            onClose={() => this.handleClose("open_sortings")}
                            aria-labelledby="customized-dialog-title"
                            open={this.state.open_sortings} className={classes.customModal}
                        >
                            <DialogTitle id="customized-dialog-title" onClose={() => this.handleClose("open_sortings")}>
                                <div className={classes.modalHeader}>
                                    &nbsp;
                                    <span name="clearAllFilters" className={classes.filterReload} onClick={(event) => filterChangeHandler(event)}>
                                        <i className="sb-icon-return"></i>
                                    </span>
                                </div>
                            </DialogTitle>
                            <DialogContent>
                                <div className={classes.listMobSort}>
                                    <Typography variant="h3">Sort</Typography>
                                    <div className={classes.sortTypes}>
                                        {
                                            sortingOptions.map((option, index) => 
                                                <a key={index} value={option.value}>{option.name}</a>
                                            )
                                        }
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                        {/* Filte Modal For mobile */}
                        <Dialog
                            onClose={() => this.handleClose("open_filters")}
                            aria-labelledby="customized-dialog-title"
                            open={this.state.open_filters} className={classes.customModal}
                        >
                            <DialogTitle id="customized-dialog-title" onClose={() => this.handleClose("open_filters")}>
                                <div className={classes.modalHeader}>
                                    Listings: {listings && listings.length || 0}
                                    <span name="clearAllFilters" className={classes.filterReload} onClick={(event) => filterChangeHandler(event)}>
                                        <i name="clearAllFilters" className="sb-icon-return"></i>
                                    </span>
                                </div>
                            </DialogTitle>
                            <DialogContent>

                                <div className="listMobFilter">
                                    <Filters classes={classes} filterChangeHandler={filterChangeHandler} filters={filters} />
                                </div>
                            </DialogContent>
                        </Dialog>


                    </Hidden>
                    <div className={classes.container}>
                        <Grid container>

                            <Hidden smDown>
                                <Grid item xs={12} sm={12} lg={3}>
                                    <Filters classes={classes} filterChangeHandler={filterChangeHandler} filters={filters} />
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={12} lg={9} >
                                <div className={classes.listingHeader}>
                                    <div className={classes.listingCount}>Listings: {pagination.totalCount}</div>
                                    <Hidden smDown>
                                        <div className={classes.listingSort}>
                                            <div className={classes.listingSorField}>
                                                <div className={classes.sortLabel}>
                                                    <label>Sort :</label>
                                                    <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                        <Select
                                                            value={filters["order_by"] || 0}
                                                            onChange={filterChangeHandler}
                                                            input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                            name="order_by"
                                                            className={classes.selectEmpty}
                                                        >
                                                            {
                                                                sortingOptions.map((option, index) =>
                                                                    <MenuItem key={index} value={option.value}>{option.name}</MenuItem>
                                                                )
                                                            }

                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className={classes.sortLabel}>
                                                    <label>View :</label>
                                                    <FormControl variant="outlined" fullWidth className={'custom-filter-control'}>
                                                        <Select
                                                            value={this.state.view}
                                                            onChange={this.handleChange}
                                                            input={<OutlinedInput labelWidth={0} name="purchase" id="purchase" />}
                                                            name="view"
                                                            className={classes.selectEmpty}
                                                        >
                                                            <MenuItem selected value="grid"><i className="sb-icon-grid"></i></MenuItem>
                                                            <MenuItem value="list"><i className="sb-icon-empty-list"></i></MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </Hidden>
                                </div>
                                {/**************************** filter tags section start *******************************************/}

                                <div className={classes.FilterTagMain}>
                                    {
                                        filterTags.length > 0 &&
                                        (
                                            <>
                                                <List component='ul' className={classes.TagList}>
                                                    <ListItem component='li' className={classes.TagItem}>
                                                        <a name="clearAllFilters" className={classes.clearAll} onClick={(event) => filterChangeHandler(event)}>Clear All</a>
                                                    </ListItem>
                                                </List>
                                                <List component='ul' className={classes.TagList}>
                                                    {
                                                        filterTags.map(filterTag => {
                                                            return (
                                                                <ListItem component='li' className={classes.TagItem}>
                                                                    <a>{filterTag.filterTagAlias}{filterTag.filterTagValue}<span onClick={(event) => filterChangeHandler(event)} filtertagname={filterTag.filterTagName}>
                                                                        <i name="clearFilter" className="sb-icon-cross-bold cursor-pointer"></i>
                                                                    </span>
                                                                    </a>
                                                                </ListItem>
                                                            )
                                                        })
                                                    }
                                                </List>
                                            </>
                                        )
                                    }
                                </div>

                                {/**************************** filter tags section end *******************************************/}


                                {/**************************** property listings section start*******************************************/}

                                <div className={classes.productListMain}>
                                    <Grid container spacing={32}>
                                        {
                                            pagination.totalCount === 0 && <OverlayLoader />
                                        }
                                        {
                                            listings && pagination.totalCount > 0 ?
                                                listings.map((listing, index) => {

                                                    let listingId;
                                                    if (listing.listing_commercial && listing.listing_commercial.listing_id) {
                                                        listingId = listing.listing_commercial.listing_id;
                                                    } else if (listing.listing_residential && listing.listing_residential.listing_id) {
                                                        listingId = listing.listing_residential.listing_id;
                                                    }

                                                    return (
                                                        <Grid key={index} item xs={12} sm={listingColumnSize_sm} lg={listingColumnSize_lg} name="property" onClick={(event) => this.handleProductClick(event, listing.property_id, listing.id)}>
                                                            <div className={productlistingClass}>
                                                                <div className={classes.productImg}>
                                                                    {listing.photos && listing.photos.length > 0 && listing.photos[0] &&
                                                                        <img src={`${MEDIA_STORAGE_URL}/${listing.photos[0].file_name}`} alt="Sell Up" style={{height: "inherit"}} />
                                                                    }
                                                                    <label className={classes.prorate}>
                                                                        <input name="favourite" type="checkbox" onChange={() => { }} checked={favouriteListingIds.includes(listingId)} />
                                                                        <span><i className="sb-icon-star-empty"></i></span>
                                                                    </label>
                                                                    {listing.listing_product_note && listing.listing_product_note.note_status_id &&
                                                                        <NoteTag classes={classes} note_status_id={listing.listing_product_note.note_status_id} />
                                                                    }
                                                                </div>
                                                                <div className={classes.productInfo}>
                                                                    <div className={classes.productName}>
                                                                        <Typography variant="h4" style={{ whiteSpace: "pre-wrap" }}>{listing.address_title || ' '}</Typography>
                                                                        <Typography variant="h3">{listing.street1}</Typography>
                                                                        <Typography variant="h4">{listing.state_name}, {listing.state} {listing.zip}</Typography>
                                                                    </div>
                                                                    <div className={classes.productVarient}>
                                                                        <PropertyIcons classes={classes} property={listing} />
                                                                    </div>
                                                                </div>
                                                                <div className={classes.productPrice}>
                                                                    <Typography variant="h4">Price</Typography>
                                                                    <Typography variant="h2">{formatMoney(listing.price, 0)}</Typography>
                                                                </div>
                                                            </div>
                                                        </Grid>

                                                    )
                                                })

                                                :
                                                /* Not Found For List View */
                                                <Grid item xs={12} sm={listingColumnSize_sm} lg={listingColumnSize_lg}>
                                                    <div className={gridView ? classes.noMatchItem : classes.noMatchItemList} style={{ marginTop: 24 + 'px' }}>
                                                        <i className={`${gridView ? "sb-icon-grid" : "sb-icon-empty-list"}`}></i>
                                                        <p>NO MATCHED LISTING</p>
                                                    </div>
                                                </Grid>

                                        }

                                        {/**************************** pagination start*******************************************/}
                                        {
                                            listings && listings.length > 0 &&
                                            <Grid item xs={12}>
                                                <Pagination classes={classes} filterChangeHandler={filterChangeHandler} pagination={pagination} />
                                            </Grid>
                                        }
                                        {/**************************** pagination end*******************************************/}
                                    </Grid>
                                </div>

                                {/**************************** property listings section end *******************************************/}


                            </Grid>

                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.propertyReducer,
        ...state.myAccountReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ ...propertyActions, ...myAcccountActions }, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ProductListingStyle)(PropertyListing));