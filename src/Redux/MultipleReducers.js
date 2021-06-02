import React from 'react';
const redux = require('redux');
const combineReducer = redux.combineReducers

function MultipleReducers(props) {
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
    const store = redux.createStore(rootReducer);
    const unsubscribe = store.subscribe(()=>{console.log(store.getState())});
    store.dispatch(buyIceCream());
    store.dispatch(buyIceCream());
    store.dispatch(buyIceCream());
    store.dispatch(buyCake());
    store.dispatch(buyIceCream());
    store.dispatch(buyCake());
    unsubscribe();
    return (
        <div>

        </div>
    );
}

export default MultipleReducers;