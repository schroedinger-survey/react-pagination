import React from "react";

export const createBaseList = (pages, displayRange, startPagination, currentPage, activePage, inactivePage, activePageSmallPagination, inactivePageSmallPagination, sendPageToParent) => {
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