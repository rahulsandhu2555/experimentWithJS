import {BUY_CAKE} from "./actionConstants";

const initialCakeState = {
    numOfCakes: 10
}

export const cakeReducer = (state = initialCakeState, action) =>{
    switch (action.type){
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state
    }
}