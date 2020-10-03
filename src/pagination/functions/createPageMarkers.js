import React from "react";
import {createBaseList} from "./createBaseList";

export const createPageMarker = (props, setStartPagination, startPagination, currentPage, sendPageToParent, goToPrevious, goToNext) => {
    const {pages,
        displayRange,
        activePage,
        activePageSmallPagination,
        inactivePage,
        inactivePageSmallPagination,
        prevSign,
        nextSign,
        endMarkerClass,
        skipElements,
        skipperElementClass} = props;
    let li = createBaseList(pages, displayRange, startPagination, currentPage, activePage, inactivePage, activePageSmallPagination, inactivePageSmallPagination, sendPageToParent);

    if (pages > displayRange) {
        const previous = <li key={"previous"} className={endMarkerClass} onClick={goToPrevious}>{prevSign || "<"}</li>
        const next = <li key={"next"} className={endMarkerClass} onClick={goToNext}>{nextSign || ">"}</li>

        if (skipElements && currentPage !== null) {
            let toStart = <li key={"toStart"} className={inactivePage} onClick={() => {
                sendPageToParent(1);
                setStartPagination(1);
            }}>1</li>;

            let toEnd = <li key={"toEnd"} className={inactivePage} onClick={() => {
                sendPageToParent(pages);
                setStartPagination(pages - (displayRange - 1))
            }}>{pages}</li>;

            let skipElemOne = <li key={"skipElemOne"} className={skipperElementClass}>...</li>;
            let skipElemTwo = <li key={"skipElemTwo"} className={skipperElementClass}>...</li>;

            if (startPagination >= displayRange - 1 && startPagination < (pages - (displayRange - 1))) {
                li = [previous, toStart, skipElemOne, ...li, skipElemTwo, toEnd, next];
            } else if (startPagination >= (pages - (displayRange - 1))) {
                li = [previous, toStart, skipElemOne, ...li, next];
            } else {
                li = [previous, ...li, skipElemTwo, toEnd, next];
            }
        } else {
            li = [previous, ...li, next];
        }
    }

    return (
        <ul style={{margin: "0", padding: "0"}}>
            {li}
        </ul>
    )
}