import React from 'react';
// import redux from 'redux';
const redux = require('redux')
function ReduxExample(props) {
    //a predictable state container for the JS apps

    //Store => to store the state, in a object tree in a single store
        //one store phone entire application
            //allows getState() method to fetch state
            //allows store to be updated by dispatch(action)
            //register listeners via subscribe(listeners)
            //handling unregistering of events via function returned by subscribe(listeners)
        // const store = redux.createStore(reducer); => accepts reducer as a parameter
    //action => needs to be done, store should be updated with action, should not be changed directly
        //only way to communicate with the store
        //plain JS Object
        //type property, defined as string constants
            const BUY_CAKE = 'BUY_CAKE';
            // {
            //     type: BUY_CAKE,
            //      info: 'first action'
            // }
        //Action creator: function used to create the actions
            function buyCake(){
                return(
                    {
                        type: BUY_CAKE,
                         info: 'first action'
                    }
                )
            }
    //reducer => carries out the store transition based on the action, ties the store and action together
        //pure reducers=>pure functions => (prevState, action) => new state
            //rather than updating should return the new state
            const initialState = {
                numberOfCakes: 10
            }
            const reducer =(state = initialState, action) =>{
                switch (action.type){
                    case 'BUY_CAKE':
                        return {
                            ...state,
                            numberOfCakes: state.numberOfCakes - 1 //we are not mutating the state, returning a new one
                        }
                    default:
                        return initialState
                }
            }

    const store = redux.createStore(reducer);
    console.log(store.getState());
    const unsubscribe = store.subscribe(()=>{ //subscribing to the changes
        console.log(store.getState())
    })
    store.dispatch(buyCake());
    store.dispatch(buyCake());
    store.dispatch(buyCake());
    unsubscribe(); //execute the return function from the subscribe method
    return (
        <div>

        </div>
    );
}

export default ReduxExample;