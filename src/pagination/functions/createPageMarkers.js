import React from "react";

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
    let li = [];
    let keyProps = 1;

    for (let i = 0; i < (pages > displayRange ? displayRange : pages); i++) {
        li.push(<li
            className={((startPagination + i === currentPage) && pages > displayRange) ? activePage : (!(startPagination + i === currentPage) && pages > displayRange) ? inactivePage : ((startPagination + i === currentPage) && pages <= displayRange) ? activePageSmallPagination : inactivePageSmallPagination}
            key={keyProps}
            onClick={() => {
                sendPageToParent(startPagination + i)
            }}>{startPagination + i}</li>)
        keyProps++
    }

    if (pages > displayRange) {
        const previous = <li key={0} className={endMarkerClass} onClick={goToPrevious}>{prevSign || "<"}</li>
        const next = <li key={keyProps} className={endMarkerClass} onClick={goToNext}>{nextSign || ">"}</li>

        if (skipElements && currentPage !== null) {
            let toStart = <li key={keyProps + 1} className={inactivePage} onClick={() => {
                sendPageToParent(1);
                setStartPagination(1);
            }}>1</li>;

            let toEnd = <li key={keyProps + 2} className={inactivePage} onClick={() => {
                sendPageToParent(pages);
                setStartPagination(pages - (displayRange - 1))
            }}>{pages}</li>;

            let skipElemOne = <li key={keyProps + 3} className={skipperElementClass}>...</li>;
            let skipElemTwo = <li key={keyProps + 4} className={skipperElementClass}>...</li>;

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