import React, {useEffect, useState} from "react";

const liStyle = {listStyle: "none", float: "left", margin: "20px", cursor: "pointer"};

const Pagination = (props) => {
    const [startPagination, setStartPagination] = useState(1);
    const {itemsPerPage, displayRange, totalItemCount, data} = props;
    const [itemsList, setItemsList] = useState([]);
    const pages = Math.ceil(totalItemCount / itemsPerPage);

    const fetchFunction = (index = 0) => {
        return data.slice(index * itemsPerPage, ((index * itemsPerPage) + itemsPerPage));
    }

    const changePage = (index) => {
        const items = fetchFunction(index - 1);
        setItemsList(items);
    }

    useEffect(() => {
        setItemsList(fetchFunction());
    }, []);

    const Data = () => {
        while(itemsList.length < itemsPerPage){
            itemsList.push({text: "blankItem"});
        }

        const blankItem = (text) => {
            if (text === "blankItem"){
                return {color: "transparent"}
            }
        }

        return (
            <div>
                <p>Data:</p>
                <div>
                    {itemsList.map((item, i) => (
                        <p key={i} style={blankItem(item.text)}>{item.text}</p>
                    ))}
                </div>
            </div>
        )
    }

    const goToPrevious = () => {
        if (startPagination - 1 >= 1) {
            setStartPagination(startPagination - 1)
        }
    }

    const goToNext = () => {
        console.log(pages, startPagination + 1);
        if (startPagination + displayRange <= pages) {
            setStartPagination(startPagination + 1);
        }
    }

    const createPageMarker = () => {
        let li = [];
        let keyProps = 1;

        for (let i = 0; i < (pages > displayRange ? displayRange : pages); i++) {
            li.push(<li style={liStyle} key={keyProps}
                        onClick={() => changePage(startPagination + i)}>{startPagination + i}</li>)
            keyProps++
        }

        if (pages > displayRange) {
            const previous = <li key={0} style={liStyle} onClick={goToPrevious}>{"<<<"}</li>
            const next = <li key={keyProps} style={liStyle} onClick={goToNext}>{">>>"}</li>
            li = [previous, ...li, next];
        }

        return (
            <ul>
                {li}
            </ul>
        )
    }

    return (
        <div style={{width: "30%", margin: "0 auto"}}>
            {Data()}
            {createPageMarker()}
        </div>
    )
}

export default Pagination;