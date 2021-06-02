import {BUY_ICE_CREAM} from "./actionConstants";

const iceCreamInitialState = {
    numOfIceCream: 20
}

export const iceCreamReducer = (state = iceCreamInitialState, action) => {

    switch (action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }
}