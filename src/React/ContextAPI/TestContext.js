import React from "react";
import {UserConsumer} from "./userContext";

const TestContext = () => {
    return(
        <UserConsumer>
            {(name) =>{
                return <h1>{name}</h1>
            }}
        </UserConsumer>
    )
}
export default TestContext