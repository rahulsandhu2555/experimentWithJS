import React, {PureComponent} from "react";

class PureComp extends PureComponent{
    //in class component only, in functional component => Memo
    //does shallow comparison of state and props
    //make sure all the child are also pure to make sure there is no unexpected behaviour
    //never mutate state, always return, otherwise won't re-render coz of shallow comparison

    render() {
        return(
            <>
                <h1>Pure Component</h1>
            </>
        )
    }
}

//react memo for functional component

function MemoComp(){
    return(
        <>Memo in Functional component</>
    )
}
export default React.memo(MemoComp) //to make use of react memo HOC






