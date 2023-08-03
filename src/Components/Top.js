import React from "react";

function Top({handleTop}){
    return(

        <div>
            <button onClick={() => handleTop()}>Top</button>
        </div>
    )
}

export default Top;