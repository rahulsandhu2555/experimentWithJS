import React, {useState} from 'react';
import useDocumentTitle from "./useDocumentTitle";
import useCounter from "./useCounter";
import useInput from "./useInput";

function CustomHook(props) {
    //starts with 'use'
    //why?
        //to share the logic between the components, alternative to the HOC and RenderProps

    const [count, setCount] = useState(0);
    const [a,b,c,d] = useCounter(10);
    useDocumentTitle(count);

    const [fname, fbind, freset] = useInput('');
    const [lname, lbind, lreset] = useInput('');

    console.log(fname, freset);
    console.log(lname, lreset);

    return (
        <div>
            Custom Hook
            <button onClick={()=>setCount(count+1)}> plus</button>
            <>------</>
            {a}
            <button onClick={b}>increment</button>
            <button onClick={c}>decrement</button>
            <button onClick={d}>reset</button>

            {/* use case of useInput    */}
            <form>
                <input {...fbind}/>
                <input {...lbind}/>
                <button onClick={()=>{
                    alert(`${fname} ${lname}`);
                    freset();
                }}>submit</button>
            </form>
        </div>
    );
}

export default CustomHook;