import React, {Component} from "react";

class ErrorBoundary extends Component{
    //enclose the component in the ErrorBoundary Component to catch the error caused inside it
    //you can wrap the top component or the individual component to catch the individual and show for that only
    //catches error only below them
    //won't catch errors of event handlers, need to use try...catch for that
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
        return this.props.children
    }
}