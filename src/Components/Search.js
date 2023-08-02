import React from "react";

function Search({OnSearch}){

    
     ////adding an OnChange event to the search bar
    return(
        <div className="search">
            <li className = "search" ><input type='text' placeholder='Search blog'  onChange={(e) => OnSearch(e.target.value)}/> <i className="fa-solid fa-magnifying-glass"></i></li>
        </div>
    )
}

export default Search;