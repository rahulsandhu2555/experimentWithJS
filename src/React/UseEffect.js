import React, {useEffect, useState} from "react";
import StateExample from "./state";

export default function UseEffect(){
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState(true);

    function handleMouse(){}

    useEffect(()=>{console.log('after every render, without []')})//gets called after every render
    useEffect(()=>{console.log('only once, on first render ')}, [])
    useEffect(()=>{console.log('only when count changes')}, [count])
    useEffect(()=>{
        console.log('only when count changes');

        //to perform the cleanup the event listener or subscription
        return ()=>{
            console.log('unmounting');
            window.removeEventListener('mouseover', handleMouse)
        }
    }, [count])


    return(
        <>
            useEffect
            {display && <StateExample/>}
            {/* lets say StateExample have a event listener attached to it, once display = false, it will unmount
                 the Component but eventListener will still be there, so we need to clean it up*/}
        </>
    )
}