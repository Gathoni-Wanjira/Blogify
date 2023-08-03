import React from "react";

function New({handleNew}){
    return(
        <div>
            <button onClick={() => handleNew()}>New</button>

        </div>
    )
}

export default New;