import React, {useState} from 'react';
import ChildForParent, {ChildMemoized} from "./ChildForParent";
import GrandChild from "./GrandChild";

function ParentChild(props) {
    const [count, setCount] = useState(0);
    console.log('parent rendering')

    //for the initial render all the child component will render
    //but for the re-render
        //let say, we updated the parent component
        //while checking for the flagged component, React found parent is flagged and needs to be re-render, while
        //child is ignored
        //but at the time of creating Element, react sees that it also contains the child components, so it
        // renders the child component, as soon as the elements are created, it compares with the old one, and finds
        //out that child component needs not to updated on the DOM, so updates Parent Component only
        //child went through the render phase but not the commit phase,=> 'unnecessary render'

    //if after the initial render, will try to assign the same state, It will not re-render.
    //if already re-rendered, and trying to assign the same value, only parent will re-render once not the child to make
    //sure nothing changed
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>click parent: {count}</button>
            {/*<ChildForParent name={'rahul'}/>*/}
            {/*<ChildMemoized name={'rahul'}/>*/}

            {/* if the grand parent state is updating the child will re-render even if it is passed as a props*/}
            <ChildForParent>
                <GrandChild/>
            </ChildForParent>
        </div>
    );
}

export default ParentChild;