import React, {useState} from 'react';
import { connect} from "react-redux";
import {BUY_CAKE} from "./actionConstants";
import {buyCake, buyIceCream} from "./actionCreators";

function UserProfileConnect(props) {
    const [cakeToBuy, setCakeToBuy] = useState(0);
    return (
        <div>
            cake: {props.cake}
            <input type='text' value={cakeToBuy} onChange={e => setCakeToBuy(e.target.value)}/>
            <button onClick={()=> props.buyCake(cakeToBuy)}>buy cake</button>
            icecream: {props.icecream}
            <button onClick={props.buyIceCream}>buy icecream</button>
        </div>
    );
}

const mapStateToProps =(store) => {
    return {
        cake: store.cake.numOfCakes,
        icecream: store.iceCream.numOfIceCream
    }
}
const mapDispactchToProps = dispatch => {
    return {
        buyCake: (cakeToBuy) => dispatch(buyCake(cakeToBuy)),
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(UserProfileConnect);