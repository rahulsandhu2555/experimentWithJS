import React, {useReducer} from "react";
//using state and action as a object, making easy to pass the parameter which calling reducer, and state helping
//maintaining multiple state values
const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action)=>{
    switch (action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter+action.value};
        case 'decrement':
            return {...state, firstCounter:state.firstCounter-action.value};
        case 'increment2':
            return {...state, secondCounter:state.secondCounter+action.value};
        case 'decrement2':
            return {...state, secondCounter:state.secondCounter-action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function ReducerExampleWithObject(){


    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    //we can have multiple useReducer, even if we are using the same initial state, it will behave as different one

    return(
        <>
            Reducer Example
            counter 1: {count.firstCounter}
            counter 2: {count.secondCounter}

            <button onClick={()=>dispatch({type:'increment', value: 1})}>add</button>
            <button onClick={()=>dispatch({type: 'decrement', value: 1})}>minus</button>
            <button onClick={()=>dispatch({type:'increment2', value: 2})}>add2</button>
            <button onClick={()=>dispatch({type: 'decrement2', value: 2})}>minus2</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>

            counter 1: {countTwo.firstCounter}
            counter 2: {countTwo.secondCounter}
            <button onClick={()=>dispatchTwo({type:'increment', value: 1})}>add</button>
            <button onClick={()=>dispatchTwo({type: 'decrement', value: 1})}>minus</button>
            <button onClick={()=>dispatchTwo({type:'increment2', value: 2})}>add2</button>
            <button onClick={()=>dispatchTwo({type: 'decrement2', value: 2})}>minus2</button>
            <button onClick={()=>dispatchTwo({type:'reset'})}>reset</button>
        </>
    )
}