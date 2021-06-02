import React, {useState} from 'react';

function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count => count + 1)
    }
    const decrement = () => {
        setCount(count => count - 1)
    }
    const reset = () => {
        setCount(initialCount)
    }
    return [count, increment, decrement, reset]
}

export default useCounter;