import React, {useEffect, useState} from "react";
import "./pagination.css";
import {createPageMarker} from "./functions/createPageMarkers";

const Pagination = (props) => {
    const {
        pages,
        displayRange,
        callBack
    } = props;
    const [startPagination, setStartPagination] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        console.log(pages);
        setCurrentPage(1);
    }, [])

    const goToPrevious = () => {
        if (currentPage - 1 > 1) {
            setCurrentPage(currentPage - 1);
            sendPageToParent(currentPage - 1);
            setStartPagination(currentPage - 2);
        } else {
            setCurrentPage(1);
            sendPageToParent(1);
            setStartPagination(1);
        }
    }

    const goToNext = () => {
        if (currentPage + 1 <= (pages - 1)) {
            setCurrentPage(currentPage + 1);
            sendPageToParent(currentPage + 1);
            setStartPagination(currentPage);
        } else {
            setCurrentPage(pages);
            sendPageToParent(pages);
            setStartPagination(pages - (displayRange - 1));
        }
    }


    const sendPageToParent = (page) => {
        callBack(page - 1);
        setCurrentPage(page);
    }

    return (
        <div>
            {createPageMarker(props, setStartPagination, startPagination, currentPage, sendPageToParent, goToPrevious, goToNext)}
        </div>
    )
}

export default Pagination;