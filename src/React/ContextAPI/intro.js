import React, {Component, createContext} from "react";
import TestContext from "./TestContext";
import {UserProvider} from "./userContext";
import TestContextType from "./ContextType";
import UseContext from "./UseContext";


export const WebsiteContext = createContext('d');

class ContextApi extends Component{
    //to avoid passing props to every single lever

    render() {
        return(

            <>
                Context Api
                <UserProvider value={'rahul'}> //this should be value attribute, you need to use Provider component to use the default value
                    <WebsiteContext.Provider value={'nested'}>
                        <TestContext/>
                        <TestContextType/>
                        <UseContext/>
                    </WebsiteContext.Provider>
                </UserProvider>
                <TestContextType/> //for default

            </>
        )

    }
}
export default ContextApi