import React from "react";

function ClickCounter(props){
    return(
        <>
            {props.count}
            <button onClick={props.handleClick}>click</button>
        </>
    )
}
export default ClickCounter
