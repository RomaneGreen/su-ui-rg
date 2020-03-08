import React from "react";
import { Typography, Grid } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import ProductListingStyle from "../../assets/jss/material-kit-react/components/ProductListingStyle.jsx";
import { Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { propertyActions } from '../../actions';
import PropertyIcons from "./propertyIcons";
import { MEDIA_STORAGE_URL } from '../../common/config';

// core components
// import productImg from "../../assets/images/product.jpg";
const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `0px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        cursor: 'pointer',
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

class FavouriteProperty extends React.Component {

    componentDidMount() {
        this.props.getFavouriteListing();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    state = {
        openDeleteModal: false,
        openConfirmModal: false
    };

    handleClickDeleteModal = (listingId) => {
        this.setState({
            openDeleteModal: !this.state.openDeleteModal,
            listingToBeRemoved: listingId
        });
    };

    removeFavouriteListing = () => {
        this.setState({openDeleteModal: false});
        this.props.deleteFavourite(this.state.listingToBeRemoved);
    }

    handleClickConfirmModal = () => {
        this.props.favListingRemoved(false);
        this.setState({ openConfirmModal: !this.state.openConfirmModal });
    };

    formatMoney = (n, c, d, t) => {
         c = isNaN(c = Math.abs(c)) ? 2 : c;
         d = d === undefined ? "." : d;
         t = t === undefined ? "," : t;
        var s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = i.length;
        j = j > 3 ? j % 3 : 0;

        let result = s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        if (result === "0") return "NA";
        return '$' + result;
    };

    render() {
        const { classes, favouriteListings, isFavListingRemoved} = this.props;
        if (!favouriteListings) {
            return null;
        }
        return (
            <div className={classes.favouriteRoot}>
                <div className={classes.favouriteMain}>
                    <div className={classes.favouriteContainer}>
                        <Grid container spacing={32}>
                            <Grid item xs={12}>
                                <div className={classes.favTitlle}>
                                    <Typography variant="h3">Favorites.</Typography>
                                </div>
                            </Grid>
                            {favouriteListings.map(listing => (
                                <Grid item xs={12} sm={6} lg={4} key={listing.id}>
                                    <div className={classes.productItem}>
                                        <span onClick={() => this.handleClickDeleteModal(listing.id)} className={classes.removeFav}>
                                            <i className="sb-icon-popup-close"></i>
                                        </span>
                                        <div className={classes.productImg}>
                                            <img src={`${MEDIA_STORAGE_URL}/${listing.photos[0].file_name}`} alt="Sell Up" style={{ height: "inherit" }} />
                                            <label className={classes.prorate}>
                                                <input type="checkbox" checked /> <span><i className="sb-icon-star-fill"></i></span>
                                            </label>
                                            {listing.listing_product_note && listing.listing_product_note.note_status_id === 4 &&
                                                <div className={classes.propertyStatus}>
                                                    <Link to={`${process.env.PUBLIC_URL}/`} className="status statusNL">Net Lease</Link>
                                                </div>}
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
                                            <Typography variant="h2">{this.formatMoney(listing.price, 0)}</Typography>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
                {/* Delete alert modal */}
                <Dialog
                    onClose={this.handleClickDeleteModal}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.openDeleteModal} className={classes.favCustomModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickDeleteModal}>

                    </DialogTitle>
                    <DialogContent>
                        <div className={classes.deleteFavInfo}>
                            <Typography variant="h3">Are you sure you<br />want to delete?</Typography>
                            <div className={classes.favAction}>
                                <div className={classes.btnYes} onClick={()=>this.removeFavouriteListing()}>Yes</div>
                                <div className={classes.btnNo} onClick={this.handleClickDeleteModal}>No</div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Delete Modal */}
                <Dialog
                    onClose={this.handleClickConfirmModal}
                    aria-labelledby="customized-dialog-title"
                    open={isFavListingRemoved} className={classes.favDeleteModal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClickConfirmModal}>

                    </DialogTitle>
                    <DialogContent>
                        <div className={classes.deleteFavMsg}>
                            <Typography variant="h4">Listing deleted.</Typography>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.propertyReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(propertyActions, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ProductListingStyle)(FavouriteProperty));