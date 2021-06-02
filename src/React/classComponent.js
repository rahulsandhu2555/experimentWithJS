import React, { Component } from "react";

class ClassComp extends Component{
    constructor() {
        super();
        this.state ={
            message: 'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you'
        })
        console.log(this.state.message);//this will get executed before state is updated coz, setState is asynchronous
        //to get the result after the state is updated, you can pass the second parameter call back function
        if("stateDependsOnPrevState" === true){
            this.setState(previousState=> previousState.message = 'Thank you again');
            //or if you want to update state based on the props, can add as a second parameter
            this.setState((previousState, props)=> previousState.message = 'Thank you again'+ props.msg);
        }
        //you should not do => this.state.message = 'Thank you' it will update the state but will not re render, so avoid changing directly

    }
    clickHandler(){ //in class based function keyword is not used
        console.log('clicked')
    };
    //statefull/smart/container
    render() {
        // const { name, message } = this.props; // generally destructure in render()
        // const { state1, state2 } = this.state; // similarly for the state
        return(
            <>Hi, from class {this.props.name} {this.state.message}
            //need to access the prop using this in class component
            <button onClick={this.clickHandler}>click</button>
            </>
        )
    }
}
export default ClassComp