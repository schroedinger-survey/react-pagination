import {visibleList} from "../src/pagination/functions/visibleList";

test("BaseList display the correct pageMarkers if amount of pages is less or equal to the displayRange", () => {
    let displayRange = 1000;
    let startPagination = 1;
    let currentPage = 1;
    const sendPageToParent = () => {
    };

    for (let i = 0; i <= displayRange; i++) {
        const pages = i;
        const props = {
            pages,
            displayRange,
            activePage: "",
            inactivePage: "",
            activePageSmallPagination: "",
            inactivePageSmallPagination: ""
        };
        const baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
        expect(baseList.length).toBe(i);
    }

})

test("BaseList display the correct pageMarkers if amount of pages is bigger than displayRange", () => {
    let pages = 4;
    let displayRange = 3;
    let startPagination = 1;
    let currentPage = 1;
    const sendPageToParent = () => {
    };

    for (let i = 4; i <= 1000; i++) {
        const props = {
            pages,
            displayRange,
            activePage: "",
            inactivePage: "",
            activePageSmallPagination: "",
            inactivePageSmallPagination: ""
        };
        const baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
        expect(baseList.length).toBe(3);
    }
})

test("BaseList display the correct pageMarkers if amount of pages for wrong page numbers", () => {
    let pages = -1;
    let displayRange = 3;
    let startPagination = 1;
    let currentPage = 1;
    const sendPageToParent = () => {
    };

    let props = {
        pages,
        displayRange,
        activePage: "",
        inactivePage: "",
        activePageSmallPagination: "",
        inactivePageSmallPagination: ""
    };
    let baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
    expect(baseList.length).toBe(0);

    pages = 0.5;
    props = {
        pages,
        displayRange,
        activePage: "",
        inactivePage: "",
        activePageSmallPagination: "",
        inactivePageSmallPagination: ""
    };
    baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
    expect(baseList.length).toBe(0);

    pages = -23;
    props = {
        pages,
        displayRange,
        activePage: "",
        inactivePage: "",
        activePageSmallPagination: "",
        inactivePageSmallPagination: ""
    };
    baseList = visibleList(props, startPagination, currentPage, sendPageToParent)
    expect(baseList.length).toBe(0);
})