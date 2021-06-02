import React, {Component} from "react";

class TestLifeCycle extends Component{

    //Mounting => component created and inserted in to the DOM
            //Constructor
                //while component being created
                //initialize state, bind events
                //do not cause side effects like: HTTP req
                //super(props), this.state directly overwrite
            //Static getDerivedStateFromProps
                //where state depends on the props
                //set the state
                //do not cause side effects like: HTTP req
            //render
                //only required method
                //reads states and props and returns JSX
                //don't change state or interact with the DOM, or make ajax calls
                //children lifecycle methods are also executed
            //componentDidMount
                //invoked immediately after the component is mounted, component is rendered to the DOM
                //Perform side effects, interact with DOM, Ajax calls
    //Updating => component being re-rendered as an update in state or prop
            //Static getDerivedStateFromProps(props, state)
            //shouldComponentUpdate
                //tells if component should update or not
                //performance optimisation
                //do not cause side effects like: HTTP req
            //render
            //getSnapshotBeforeUpdate(prevProps, prevState)
                //called right before the change reflect in DOM
                //captures the information ( ex. scroll position )
                //method will return null or value
            //componentDidUpdate(prevProps, prevState, snapshot)
                //run once after the updation
                //make HTTP req, side effects
    //Unmounting => being removed from the DOM
        //componentWillUnmount
    //Error Handling => error during rendering of component or child component
        //static getDerivedStateFromError
        //componentDidCatch
    render() {
        return(
            <>
                <h1>lifeCycleMethods</h1>
            </>
        )
    }
}