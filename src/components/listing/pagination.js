/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from "react";
import { List, ListItem } from "@material-ui/core";

class Pagination extends React.Component {

    render() {
        const { classes, filterChangeHandler, pagination} = this.props;
        const numberOfPages = Math.ceil(pagination.totalCount / 12);
        return (
            <div className={classes.ListPagination}>
                <List component='ul' className={classes.paginationList}>
                    <ListItem component='li' className="">
                        <button name="previousPage" className={classes.pagePrev} onClick={(event) => { filterChangeHandler(event) }} disabled={pagination.pageNumber === 1}>
                            <i name="previousPage" className="sb-icon-left-arrow"></i>
                        </button>
                    </ListItem>
                    {
                        [...Array(numberOfPages).keys()].map(index => {
                            let className = pagination.pageNumber === index + 1 ? 'active pointer-event-none' : 'cursor-pointer';
                            return (
                                <ListItem name="pageNumber" component='li' className={className} key={index}  onClick={(event) => { filterChangeHandler(event, index + 1) }}>
                                    <a name="pageNumber">{index + 1}</a>
                                </ListItem>
                            )
                        }
                        )
                    }
                    <ListItem component='li' className={classes.pageItem}>
                        <button name="nextPage" className={classes.pageNext} onClick={(event) => { filterChangeHandler(event) }} disabled={pagination.pageNumber === numberOfPages}>
                            <i name="nextPage" className="sb-icon-right-arrow"></i>
                        </button>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Pagination;