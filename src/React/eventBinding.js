import React, {Component} from "react";

export class CheckBind extends Component{
    constructor() {
        super();
        this.state ={
            message: 'hello there'
        }
        //3. binding the hadler in the constructor as suggested in the official documentation, and performance optimized
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('clicked');
        this.setState({message: "Hi again"}); //will give error coz this is undefined inside the function, it is not able
            //to recognize the setstate method of the state, you need to bind this handler to the state
    }
    //4. defining handler with the arrow function
    handleClickArrow = () => { //we don't use const like function keyword in class component
        this.setState({message: "Hi from arrow function "})
    }
    render() {
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>click</button>
                //1. to bind here on the call onClick = { this.handleClick.bind(this)}
                    //this will generate a brand new event handler on every render, not causing much performace issue in small app
                //2. by using arrow function, coz in arrow function this is the value in which context it is being called
                    //onclick = {() => this.handleClick()}
            </>
        )
    }
}