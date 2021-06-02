import {BUY_CAKE, BUY_ICE_CREAM} from "./actionConstants";

export function buyCake(number= 1 ){
    return {
        type: BUY_CAKE,
        payload: number
    }
}
export function buyIceCream(){
    return {
        type: BUY_ICE_CREAM
    }
}