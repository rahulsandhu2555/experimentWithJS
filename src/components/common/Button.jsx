import React from "react";

export default function Button(props) {
    return (
        <button onClick={props.onClick} style={{marginLeft:'2px', marginRight:'2px'}}>
            {props.title}
        </button>
    )
}