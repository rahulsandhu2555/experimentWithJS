import React from 'react';
import User from "./User";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";

function RenderProps(){
    //for sharing code between react components, using a prop whose value is a function
    return(
        <>
            <User render={ ()=> 'rahul'}/>
            {/*<Counter render={(count, handleClick)=>{*/}
            {/*    return <ClickCounter count={count} handleClick={handleClick}/>*/}
            {/*}}/>*/}
            <Counter>
                {
                    (count, handleClick)=>{
                    return <ClickCounter count={count} handleClick={handleClick}/>
                    }
                }
            </Counter>

        </>
    )
}
export default RenderProps