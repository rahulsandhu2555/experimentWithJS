import React, {useState} from 'react';

function UseState(props) {
    const initialObject = {
        name: 'rahul'
    }
    const initialArr = ['rahul']
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState(initialObject);
    const [arr, setArr] = useState(initialArr);

    console.log('rendering')//will be logged in twice in the dev mode because of the React.StrictMode
        //and it will render one time in the production.
    //when we are updating the state, it is being flagged for the re-render, and then React checking for flagged
        //converting JSX to React element, then comparing the result with the previous render, handing over the changes to the DOM

    //however while react checking for flagged, in setState, it must return a new reference, or new value in case primitive type.
        //if can not found the change, it will not re-render
        //when re-render will skip
            //if after the initial render, passing the same value, it will not re-render
            //if not the initial render, and already re-rendered, not trying to set the same value, react will proceed further
                //=> will use createElement => and then it will compare the previously rendered tree, if not able to find the change, will not update the DOM
                    //ex=> initial count = 0; +1x5 =5, now try to setCount(5), => will create React Element, and will drop while comparing the changes VDOM
    //uses Object.ease algorithm for comparison

    const updateObj = ()=>{
        obj.lname = 'sandhu';
        setObj(obj);// will not re-render, coz reference does not changes, we need to pass the new reference to re-render
        const newObj = {...obj};
        newObj.lname = 'sandhu';
        setObj(newObj) // will cause the re-render as updating to a new reference,
        //*****  so while updating the reference type in state, make sure do not update it, pass a new reference
    }


    return (
        <div>
            <button onClick={()=> setCount(count+1)}>click{count}</button>
        </div>
    );
}

export default UseState;