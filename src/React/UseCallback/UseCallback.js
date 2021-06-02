import React, {useCallback, useState} from 'react';
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export default function UseCallback(){
    //what?
        //returns a memoized version of function, changes when dependency changes
    //why?
        //when passing the callback to the child component, that rely on reference equality, to prevent unnecessary renders


    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(30000)

    //these both are being created at every re-render
    const incrementAge = () => {
        setAge(age+1);
    }
    const incrementAge2 = useCallback(()=>{
            setAge(age+1);
    },[age])
    //passing the age as a dependency to avoid the re rendering on every re render

    const incrementSalary=()=>{

        setSalary(salary+1)
    }
    return(
        <>
            {/*
                even though we are using the react memo, button is logging the rendering
                that is because, every time component re-renders, create a new function every time
                and treats that as a new function reference
                to avoid this  we use useCallback
            */}
            use callback example
            <Title/>
            <Count age={age}/>
            <Button handleClick={incrementAge} name={'increment age'}/>
            <Count salary={salary}/>
            <Button handleClick={incrementSalary} name={'increment salary'}/>
        </>
    )
}