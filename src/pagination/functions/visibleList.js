import React from "react";

export const visibleList = (props, startPagination, currentPage, sendPageToParent) => {
    const{pages, displayRange, activePage, inactivePage, activePageSmallPagination, inactivePageSmallPagination} = props
    let li = [];
    for (let i = 0; i < (pages > displayRange ? displayRange : pages); i++) {
        li.push(<li
            className={((startPagination + i === currentPage) && pages > displayRange) ? activePage : (!(startPagination + i === currentPage) && pages > displayRange) ? inactivePage : ((startPagination + i === currentPage) && pages <= displayRange) ? activePageSmallPagination : inactivePageSmallPagination}
            key={i}
            onClick={() => {
                sendPageToParent(startPagination + i)
            }}>{startPagination + i}</li>)
    }
    return li;
}