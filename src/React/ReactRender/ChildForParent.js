import React, {useState} from 'react';
import GrandChild from "./GrandChild";

function ChildForParent(props) {
    const [count, setCount] = useState(0);
    console.log('child rendering')

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>click child: {count}</button>
            {props.name}
            {props.children}
            {/*if this component is re-rendering because of the state change, grand child will not re-render because of
            grand child is being passed as a props, and this component can not change the props*/}
            {/*<GrandChild/>*/}
            {/* if will use like this, it will re-render every time*/}
        </div>
    );
}

export default ChildForParent;

export const ChildMemoized = React.memo(ChildForParent)