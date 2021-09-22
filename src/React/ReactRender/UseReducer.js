import React, {useReducer} from "react";

const initialState = 0;

const reducer = (state, action)=>{
    switch (action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function UseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState);

    //rendering behaviour is same as useState
    //dispatch is flagging the component
    console.log('rendered');
    return(
        <>
            Reducer Example
            count: {count}
            <button onClick={()=>dispatch('increment')}>add</button>
            <button onClick={()=>dispatch('decrement')}>minus</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </>
    )
}