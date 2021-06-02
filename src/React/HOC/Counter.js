import React, {Component} from "react";
import withCounter from "./withCounter";

class Counter extends Component{
    // constructor() {
    //     super();
    //     this.state ={
    //         count: 0
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    // }
    // handleClick(){
    //     this.setState((prevState) => {return{count: prevState.count + 1} }
    //     )
    // }
    render() {
        return(
            <>
                {/*<h1>counter: {this.state.count}</h1>*/}
                {/*<button onClick={this.handleClick}>click</button>*/}
                <h1>counter: {this.props.count}</h1>
                <button onClick={this.props.handleClick}>click</button>
            </>
        )
    }
}
export default withCounter(Counter, 5)
//to pass the parameter to the HOC we do like above