import React, {Component} from "react";

const withCounter = (WrappedComponent, increment) => {
    class WithCounter extends Component{
        constructor() {
            super();
            this.state ={
                count: 0
            }
            this.handleClick = this.handleClick.bind(this)
        }
        handleClick(){
            this.setState((prevState) => {return{count: prevState.count + increment} }
            )
        }
        render() {
            return <WrappedComponent
                count={this.state.count}
                handleClick={this.handleClick}
                {...this.props}
            />
        }
    }
    return WithCounter
}
export default withCounter