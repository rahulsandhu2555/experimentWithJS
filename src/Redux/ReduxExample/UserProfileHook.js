import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake, buyIceCream} from "./actionCreators";

function UserProfileHook(props) {
    const cake = useSelector(state => state.cake.numOfCakes)
    const icecream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>

            cake: {cake}
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
            icecream: {icecream}
            <button onClick={()=>dispatch(buyIceCream())}>buy cake</button>
        </div>
    );
}

export default UserProfileHook;