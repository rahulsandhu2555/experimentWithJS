import React, {useContext} from "react";
import {WebsiteContext} from "./intro";
import UesrContext from "./userContext";

export default function UseContext(){
    const userContextValue = useContext(UesrContext)
    const websiteContextValue = useContext(WebsiteContext)
    //with the help of useContext hooks it is easy to consume the provider value, without nesting of Consumer components,
    //but the way we pass the value through the hooks, remains the same
    return(
        <>
            values are : {userContextValue}
        </>
    )
}