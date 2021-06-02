import React from "react";
import Counter from "./Counter";

function HOC(){
    return(
        <>
            HOC Example
            <Counter name={'rahul'}/>
            {/* as Counter is wrapped with HOC, name property will be passed to the HOC not to the Counter
                for that we need to pass down the props from the HOC with {...props} so component can use the properties
                */}
        </>
    )
}
export default HOC