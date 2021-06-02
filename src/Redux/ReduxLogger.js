import React from 'react';
const logger = require('redux-logger');
const redux = require('redux')

function ReduxLogger(props) {
    const combineReducer = redux.combineReducers
    const reduxLogger = logger.createLogger();
    const applyMiddleware = redux.applyMiddleware;

    //Middleware
        //provides third party extension point between the dispatch and the moment it reaches the reducer
        //logging, crash reporting, performing asynchronous tasks

    const initialCakeState = {
        numberOfCakes: 10
    }
    const initialIceCreamState = {
        numberOfIceCream: 20
    }
    const BUY_CAKE = 'BUY_CAKE';
    const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
    const cakeReducer =(state = initialCakeState, action) =>{
        switch (action.type){
            case 'BUY_CAKE':
                return {
                    ...state,
                    numberOfCakes: state.numberOfCakes - 1 //we are not mutating the state, returning a new one
                }
            default:
                return state
        }
    }
    const iceCreamReducer =(state = initialIceCreamState, action) =>{
        switch (action.type){
            case 'BUY_ICE_CREAM':
                return {
                    ...state,
                    numberOfIceCream: state.numberOfIceCream - 1 //we are not mutating the state, returning a new one
                }
            default:
                return state
        }
    }
    function buyCake(){
        return(
            {
                type: BUY_CAKE,
                info: 'Buying cake'
            }
        )
    }
    function buyIceCream(){
        return(
            {
                type: BUY_ICE_CREAM,
                info: 'Buying ice cream'
            }
        )
    }
    const rootReducer = combineReducer({
        cake: cakeReducer,
        iceCream: iceCreamReducer
    })
    const store = redux.createStore(rootReducer, applyMiddleware(reduxLogger));
    const unsubscribe = store.subscribe(()=>{});
    store.dispatch(buyIceCream());
    store.dispatch(buyIceCream());
    store.dispatch(buyIceCream());
    store.dispatch(buyCake());
    store.dispatch(buyIceCream());
    store.dispatch(buyCake());
    unsubscribe();

    return (
        <div></div>
    );
}

export default ReduxLogger;