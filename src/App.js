import React from 'react';
import './stuff/App.css';
import Pagination from "./pagination/Pagination";
import {test_data} from "./pagination/test_data";

function App() {
    const data = test_data;
    const itemsPerPage = 2;

    const fetchFunction = (index = 0) => {
        return data.slice((index * (itemsPerPage)), ((index * itemsPerPage) + itemsPerPage));
    }

    return (
        <div className="App">
            <Pagination itemsPerPage={itemsPerPage}
                        displayRange={3}
                        totalItemCount={test_data.length}
                        data={test_data}
                        activePage={"active-page-marker"}
                        inactivePage={"inactive-page-marker"}
                        title={"Test Data:"}
                        prevSign={"<<<"}
                        nextSign={">>>"}
                        fetchFunction={fetchFunction}/>
        </div>
    );
}

export default App;
