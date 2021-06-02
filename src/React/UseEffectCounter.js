import React, {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

export default function UseEffectCounter(){
    const [count, setCount] = useState(0);

    const tick =()=>{
        console.log('ticking: ' + count);
        setCount(count+1);
        //setCount(prevCount => prevCount+1); can also be done like that if not adding count as dependency

    }

    useEffect(()=>{
        console.log('inside useEffect')
        // const interval = setInterval(tick, 1000)
        const interval = setInterval(()=>{
            console.log('ticking: ' + count);
            setCount(count+1);

        }, 1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])
    //do not use dependency array for when to render changes, use for everything that affect must watch for changes
    //in this case will render the changes for the first time, but when the next time count is updated it is not in the
    //dependency array so it will not watch it, and setInterval will keep going with the previous value
    return(
        <>
            {console.log('count: ' + count)}
            Count: {count}
        </>
    )
}