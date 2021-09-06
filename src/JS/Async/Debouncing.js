import React from "react";
import {convertToViewFromArrayOfObj} from "../../components/PageCompnents/componentList";

export function Debouncing(){

    const data = [
        {
            sec:{
                pre:`
                Debouncing a resize event handler
                Debouncing a scroll event handler
                Debouncing a save function in an autosave feature
                const debounce = (func, delay) => {
                    let inDebounce
                    return function() {
                        const context = this
                        const args = arguments
                        clearTimeout(inDebounce)
                        inDebounce = setTimeout(() => func.apply(context, args), delay)
                    }
                }
                function debounce(f,t) {
                    console.log('--- inside debounce ---');
                    var x;
                    return (()=>{
                        console.log('--- inside return ---');
                        if(x){
                            clearTimeout(x);
                        }
                        x = setTimeout(()=> f.call({name:'rahul'}), t)
                    }
                    )
                }
            
                const functionCall = () => {
                    console.log('this.name')
                }
                // let timeout = setTimeout(()=>console.log('in set timeout'), 10000);
                // let y = setInterval(()=> console.log(timeout), 2000)
            
                function f1(x) {
                    console.log('------1----------'+x)
                }
            
                const y = ()=>f1(1);
                `

            }
        }
    ];

    return(
        <>
            {convertToViewFromArrayOfObj(data)}
            {/*<button onClick={debounce(functionCall, 1000)}>click me</button>*/}
            <button onClick={''}>click me2</button>
        </>
    )
}
