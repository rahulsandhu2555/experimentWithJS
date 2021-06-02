import React, {useMemo, useState} from 'react';

function UseMemo(props) {
    //use memo uses the value, after executing the function and executes the function, but if you are using the useCallback
    //it will store the function, and will be called as a function value
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne+1)
    }
    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo+1)
    }
    const isEven = () => {
        let i = 0;
        while ( i < 500000000) i++;
        return (counterOne % 2=== 0 ? 'even' : 'odd')
    }
    const isEvenUseMemo = useMemo( //will cache this, and will recompute when dependency will change
        () => {
        let i = 0;
        while ( i < 500000000) i++;
        return (counterOne % 2=== 0 ? 'even' : 'odd')
    }, [counterOne])
    return (
        <div>
            <div onClick={incrementCounterOne}>counter one : {counterOne}</div>
            {isEven()}
            {isEvenUseMemo}
            <div onClick={incrementCounterTwo}>counter two : {counterTwo}</div>
            {/*  even if we are incrementing the second counter, it is taking time, coz on every re-render
                 even if counterTwo is updated isEven() is being calculated. to avoid that, we use useMemo,
                 and we just pass the variable not like the function call, coz stores the value, and only re-calculates
                 when dependency changes*/}
        </div>
    );
}

export default UseMemo;