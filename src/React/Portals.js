import React from "react";
import * as ReactDOM from "react-dom";

function Portals(){
    //useful when, child component is a modal, popup or a tooltip
    //even though, using portals components can break the tree and render in different location, it behaves like the
    //normal component, like Event bubbling
    return ReactDOM.createPortal(
        <>
            hi //jsx
        </>,
        document.getElementById('portal-root') //created another div in the public > index.html
    )
}