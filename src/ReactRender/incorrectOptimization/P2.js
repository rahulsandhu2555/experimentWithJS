import React, {useCallback, useMemo} from 'react';
import {MC3} from "./C3";

function P2(props) {
    const person = {
        name: 'sandhu'
    }

    //to pass this person to the component, useMemo => for memoized version of object
    const memoizedPerson = useMemo(()=> person,[])//accepts the creator fn, as we have object we r retuning it


    console.log('p2 render')

    const handleClick = () => {
        //this function reference will also change on every re-render, so if passed as a prop to memoized Component,
        //will re-render
    }
    const memoizedHandleClick = useCallback(handleClick, []);
    //this is the memoized version, its reference will not be created at every re-render

    return (
        <div>
            <MC3 name={'rahul'} person={person}/>
            {/* Even if MC3 is memoized, and name and person is not changing, but it will re-render every single time
                because at every re-render person reference is changing, it is not the same as the previous one
                , indirectly, props are changing, so child re-renders

                Same goes with function and objects*/}
        </div>
    );
}

export default P2;
