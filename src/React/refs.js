import React, {Component} from "react";

class RefExample extends Component{
    //Few use cases of ref
        //managing focus, text selection, media playback
        //triggering imperative animation
        //integrating with third party DOM libraries
        //avoid using ref for something that can be done declaratively
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    //ref => allows to access dom node directly
        //like focusing on the input field
    componentDidMount() {
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    handleClick(){
        alert(this.inputRef.current.value) //coz input is referencing to current
    }
    render() {
        return(
            <>
                ref example
                <input type={'text'} ref={this.inputRef}/>
                <input type={'text'} ref={this.setCbRef}/>
                <button onClick={this.handleClick}> click </button>
                this.inputRef holds object with Current property name
            </>
        )
    }
}
export default RefExample