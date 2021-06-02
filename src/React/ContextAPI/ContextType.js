import React, {Component} from "react";
import UesrContext from "./userContext";

class TestContextType extends Component{
    //only works with the class components, and only can subscribe one value
    //if you want to use more than one value, UserConsumer is way to go

    //if application supports public class view syntax you can also use like this
    // static contextType = UesrContext;

    render() {
        return(
            <>
                Testing Context type= {this.context}
            </>
        )
    }
}

//contextType property is available on the class, and to use => this.context
TestContextType.contextType = UesrContext

export default TestContextType