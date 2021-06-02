
import {cakeReducer} from "./cakeReducer";
import {combineReducers, createStore} from "redux";
import {iceCreamReducer} from "./iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export const store = createStore(rootReducer);