import React, {Component} from "react";

class Counter extends Component{
    constructor() {
        super();
        this.state ={
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState((prevState) => {return{count: prevState.count + 1} }
        )
    }
    render() {
        return(
            <>
                {/*{this.props.render(this.state.count, this.handleClick)}*/}
                {this.props.children(this.state.count, this.handleClick)}
            </>
        )
    }
}
export default Counter