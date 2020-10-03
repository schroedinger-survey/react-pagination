import React from 'react';
import './stuff/App.css';
import Pagination from "./pagination/Pagination";
import {test_data} from "./pagination/test_data";

function App() {
    return (
        <div className="App">
            <Pagination itemsPerPage={2} displayRange={3} totalItemCount={test_data.length} data={test_data}
                        activePage={"active-page-marker"} inactivePage={"inactive-page-marker"}/>
        </div>
    );
}

export default App;
