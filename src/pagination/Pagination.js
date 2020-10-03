import React, {useEffect, useState} from "react";
import "./pagination.css";

const Pagination = (props) => {
    const {itemsPerPage,
        displayRange,
        totalItemCount,
        data,
        activePage,
        inactivePage,
        title,
        prevSign,
        nextSign} = props;
    const [startPagination, setStartPagination] = useState(1);
    const [currentPage, setCurrentPage] = useState(null);
    const [itemsList, setItemsList] = useState([]);
    const pages = Math.ceil(totalItemCount / itemsPerPage);

    const fetchFunction = (index = 0) => {
        return data.slice(index * itemsPerPage, ((index * itemsPerPage) + itemsPerPage));
    }

    const changePage = (index) => {
        const items = fetchFunction(index - 1);
        setItemsList(items);
        setCurrentPage(index);
    }

    useEffect(() => {
        setCurrentPage(1);
        setItemsList(fetchFunction());
    }, []);

    const Data = () => {
        while (itemsList.length < itemsPerPage) {
            itemsList.push({text: "blankItem"});
        }

        const blankItem = (text) => {
            if (text === "blankItem") {
                return {color: "transparent"}
            }
        }

        return (
            <div style={{textAlign: "left", paddingLeft: "0"}}>
                {itemsList.map((item, i) => (
                    <p key={i} style={blankItem(item.text)}>{item.text}</p>
                ))}
            </div>
        )
    }

    const goToPrevious = () => {
        if (startPagination - 1 >= 1) {
            setStartPagination(startPagination - 1)
        }
    }

    const goToNext = () => {
        if (startPagination + displayRange <= pages) {
            setStartPagination(startPagination + 1);
        }
    }

    const createPageMarker = () => {
        let li = [];
        let keyProps = 1;

        for (let i = 0; i < (pages > displayRange ? displayRange : pages); i++) {
            li.push(<li className={startPagination + i === currentPage ? activePage : inactivePage} key={keyProps}
                        onClick={() => changePage(startPagination + i)}>{startPagination + i}</li>)
            keyProps++
        }

        if (pages > displayRange) {
            const previous = <li key={0} className={inactivePage} onClick={goToPrevious}>{prevSign || "<<<"}</li>
            const next = <li key={keyProps} className={inactivePage} onClick={goToNext}>{nextSign || ">>>"}</li>
            li = [previous, ...li, next];
        }

        return (
            <ul style={{width: "50%", margin: "0 auto", padding: "0"}}>
                {li}
            </ul>

        )
    }

    return (
        <div>
            <p>{title}</p>
            {Data()}
            {createPageMarker()}
        </div>
    )
}

export default Pagination;