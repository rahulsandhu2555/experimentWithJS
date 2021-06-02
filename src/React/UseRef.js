import React, {useEffect, useRef, useState} from 'react';

function UseRef(props) {
    //uses
        //1. generally to focus on the input field
        //3. can hold the reference of any DOM node, but also can hold any mutable value
        //2. to use the reference of mutable property, changing useRef, does not cause re-render, and even holds
            //the value between re-renders

    const [timer, setTimer] = useState(0);
    const inuptRef = useRef(null);
    const interval = useRef();
    useEffect(()=>{
        inuptRef.current.focus();
        //for focussing the input field
    },[])
    useEffect(()=>{
        let intervalId = setInterval(()=>setTimer(prevTimer => prevTimer+1), 1000);
        // interval.current = setInterval(()=>setTimer(prevTimer => prevTimer+1), 1000);

        return ()=>{
            clearInterval(interval.current)
        }
    },[])
    return (
        <div>
            <input type='text' ref={inuptRef}/>
            <div>timer: {timer}</div>
            {/*<button onClick={clearInterval(intervalId)}>clear interval</button>*/}
            {/* will give error coz id is in useeffect scope, that's why we use useRef*/}
            <button onClick={clearInterval(interval.current)}>clear interval</button>
        </div>
    );
}

export default UseRef;