import React from 'react';
import Page from "../../components/PageCompnents/Page";
import {H2, } from "../../components/PageCompnents/Typography";
import {Para} from "../../components/Var";
import Note from "../../components/PageCompnents/Note";
import Code from "../../components/PageCompnents/Code";

function Context(props) {
    return (
        <Page>
            <H2>contextType</H2>
            <Para>only works with the class components, and only can subscribe one value
                if you want to use more than one value, UserConsumer is way to go

                if application supports public class view syntax you can also use like this
                static contextType = UserContext;</Para>
            <Code> {`render() {
    return(
        <>
            Testing Context type= {this.context}
        </>
    )
}`}
            </Code>
            <Note>
                contextType property is available on the class, and to use = this.context <br/>
                TestContextType.contextType = UserContext
            </Note>

        {/*    ======================================================================*/}
        <H2>Creating Context</H2>
            <Code>{`// const UserContext = React.createContext();
const UserContext = React.createContext('I am default'); // to set the defalut value, do this

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserConsumer, UserProvider}
export default UserContext // to use the context type`}</Code>

            <hr/>
            <H2>UseContext</H2>
            <Code>{` const userContextValue = useContext(UserContext)
return(
    <>
        values are : {userContextValue}
    </>
    )`}</Code>

            <hr/>
            <H2>Before useContext or in Class Comp</H2>
            <Code>{`const TestContext = () => {
    return(
        <UserConsumer>
            {(name) =>{
                return <h1>{name}</h1>
            }}
        </UserConsumer>
    )
}
export default TestContext`}
                <hr/>

            </Code>
            <hr/>
            <H2>Provider Nesting</H2>
            <Code>{`<UserProvider value={'rahul'}> //this should be value attribute, you need to use Provider component to use the default value
                    <WebsiteContext.Provider value={'nested'}>
                        <TestContext/>
                        <TestContextType/>
                        <UseContext/>
                    </WebsiteContext.Provider>
                </UserProvider>
                <TestContextType/> //for default`}</Code>
        </Page>
    );
}

export default Context;

