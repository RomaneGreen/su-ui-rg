/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from "react";
import { List, ListItem, } from "@material-ui/core"

const Pagination = (props) => {
    const { classes, pagination, handlePaginationChange } = props;
    const numberOfPages = Math.ceil(pagination.totalCount / 12);

    return (
        <List component='ul' className={classes.paginationList}>
            <ListItem component='li' className="">
                <a className={`${classes.pagePrev} cursor-pointer`}
                    onClick={() => handlePaginationChange(pagination.page - 1)}
                    disabled={pagination.page === 1}>
                    Previous
                 </a>
            </ListItem>
            {
                [...Array(numberOfPages).keys()].map(index => {
                    let className = pagination.page === index + 1 ? 'active pointer-event-none' : 'cursor-pointer';
                    return (
                        <ListItem component='li' className={className} key={index}>
                            <a name="pageNumber" onClick={() => { handlePaginationChange(index + 1) }}>{index + 1}</a>
                        </ListItem>
                    )
                }
                )
            }
            <ListItem component='li' className={classes.pageItem}>
                <a className={`${classes.pageNext} cursor-pointer`} onClick={() => handlePaginationChange(pagination.page + 1)}
                    disabled={pagination.page === numberOfPages}>
                    Next
                </a>
            </ListItem>
        </List>
    )
}
export default Pagination;