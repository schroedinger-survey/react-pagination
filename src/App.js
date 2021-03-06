import React, {useEffect, useState} from 'react';
import './stuff/App.css';
import Pagination from "./pagination/Pagination";
import {test_data} from "./pagination/test_data";

function App() {
    const data = test_data;
    const itemsPerPage = 2;
    const pages = Math.ceil(data.length / itemsPerPage);
    const [itemsList, setItemsList] = useState([]);

    const setCurrentPaginationPage = (currentPage) => {
        fetchFunction(currentPage);
    }

    const fetchFunction = (index = 0) => {
        setItemsList(data.slice((index * (itemsPerPage)), ((index * itemsPerPage) + itemsPerPage)));
    }

    useEffect(() => {
        fetchFunction(0);
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

    return (
        <div className="App">
            {Data()}
            <Pagination
                pages={pages}
                displayRange={3}
                activePage={"active-page-marker"}
                activePageSmallPagination={"small-marker active-page-marker-small"}
                inactivePage={"inactive-page-marker"}
                inactivePageSmallPagination={"small-marker inactive-page-marker-small"}
                prevSign={"<"}
                nextSign={">"}
                endMarkerClass={"end-marker"}
                skipElements={true}
                skipperElementClass={"skipper"}
                callBack={setCurrentPaginationPage}
                toEdgeClass={"inactivePage inactive-page-marker"}
            />
        </div>
    );
}

export default App;