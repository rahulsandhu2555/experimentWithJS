import React, {Component} from "react";
import {H2, H4} from "../../components/PageCompnents/Typography";
import {Para} from "../../components/Var";
import Note from "../../components/PageCompnents/Note";
import Page from "../../components/PageCompnents/Page";
import Code from "../../components/PageCompnents/Code";

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        this.setState({
            hasError: true
        })
    }
    componentDidCatch(error, errorInfo) {
        //mostly used to log the errors
    }

    render() {
        if(this.state.hasError){
            return <h1>Some Error Occurred</h1>
        }
        return (
            <Page>
            <H2>Error Boundary</H2>
            <Para>Enclose the component in the ErrorBoundary Component to catch the error caused inside it
                you can wrap the top component or the individual component to catch the individual and show for that only
                catches error only below them.
            </Para>
            <Note> Won't catch errors of
                <ul>
                    <li>event handlers, need to use try...catch for that</li>
                    <li>Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)</li>
                    <li>Server side rendering</li>
                    <li>Errors thrown in the error boundary itself</li>
                </ul>
            </Note>
                <p>Any Class component using </p>
                <Code>{`static getDerivedStateFromError(error){
        this.setState({
            hasError: true
        })
    }
    componentDidCatch(error, errorInfo) {
        //mostly used to log the errors
    }
    render() {
        if(this.state.hasError){
            return <h1>Some Error Occurred</h1>
        }
        return  this.props.children; 
`}</Code>
                <Note>To Place Error boundary, place at route level or individual component level</Note>
                <p>As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.</p>

                <H4>So, What about try...catch</H4>
                <p>try / catch is great but it only works for imperative code:</p>
                <Code>{`try {
  showButton();
} catch (error) {
  // ...
}`}
                </Code>
                <p>However, React components are declarative and specify what should be rendered:</p>
                <Code>{`<Button />`}</Code>

                <H4>To catch event errors, use try...catch</H4>
                <Note>React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.</Note>
            </Page>)
    }
}
export default ErrorBoundary