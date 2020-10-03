import {visibleList} from "../src/pagination/functions/visibleList";

test("BaseList display the correct pageMarkers if amount of pages is less or equal to the displayRange", () => {
    let pages = 1;
    let displayRange = 3;
    let startPagination = 1;
    let currentPage = 1;
    const sendPageToParent = () => {};
    let props = {
        pages,
        displayRange,
        activePage: "",
        inactivePage: "",
        activePageSmallPagination: "",
        inactivePageSmallPagination: ""
    };
    let baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
    expect(baseList.length).toBe(1);

    pages = 2;
    props = {
        pages,
        displayRange,
        activePage: "",
        inactivePage: "",
        activePageSmallPagination: "",
        inactivePageSmallPagination: ""
    };
    baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
    expect(baseList.length).toBe(2);

    pages = 3;
    props = {
        pages,
        displayRange,
        activePage: "",
        inactivePage: "",
        activePageSmallPagination: "",
        inactivePageSmallPagination: ""
    };
    baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
    expect(baseList.length).toBe(3);
})


/**
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
 **/