import React, {useState} from 'react';
import {MP1} from "./P1";
import C1 from "./C1";
import P2 from "./P2";

function IncorrectMemo(props) {
    const[count, setCount] = useState(0);
    const [name, setName] = useState('rahul');
    console.log('incorrect memo render')
    return (
        <>
            <button onClick={()=>setCount(count+1)}>count{count}</button>
            {/*<MP1 name={name}>*/}
            {/*    text*/}
            {/*    /!* text => Text node only, in this case react memo will work*!/*/}
            {/*    <h1>text</h1>*/}
            {/*    /!* but if it is any element other than the text node, memoization will not work, it will*/}
            {/*        always re-render the child component*!/*/}
            {/*    /!*<C1/>*!/*/}
            {/*    /!* you should not pass the children as an element, if that is the need, don't use memo,*/}
            {/*        if want to use children then use text node only as a children*!/*/}
            {/*</MP1>*/}
            <>----------------</>
            <P2/>
        </>
    );
}

export default IncorrectMemo;