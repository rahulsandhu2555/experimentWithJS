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

export default function ReducerExample(){
    //useReducer
        //state management, useState is built using useReducer
        //useReducer(reducer, initialState)
        //reducer(currentState, action)
    //to maintain a global state you can combine useContext with useReducer
        //create on useReducer and share the value and dispatch function through the useContext
    //useEffect or useReducer
        //primitive data type <=> object or array
        //one or two transition state <=> too many transitions
        //no business login <=> complex business logic
        //local <=> global

    const [count, dispatch] = useReducer(reducer, initialState);

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