import React from "react";
import {convertToViewFromArrayOfObj} from "../../components/PageCompnents/componentList";
import {useHistory, useParams} from "react-router-dom";
import AsyncAwait from "./AsyncAwait";
import Button from "../../components/common/Button";
import {Debouncing} from "./Debouncing";
import PromiseExample from "./Promise";
import PromiseApi from "./PromiseApi";
import {SetTimeoutSetInterval} from "./SetTimeoutSetInterval";
import Throttling from "./Throttling";


export default function Async(){
    let { subtopic } = useParams();
    const history = useHistory();
    const data = [
        {
            sec:{
                pre:`
                JavaScript basic form is Synchronous
                    Single threaded
                        main thread to run a task at a given point of time
                    JavaScript + Browser = Asynchronous
                
                    Blocking = Web app runs in browser, it executes intensive chunk of code without returning control to the browser
                        in this time, browser can appear to be frozen.
                `
            }
        }
    ];
    const buttons = [
        {title:'Async', url:'/js/async/async', component: Async},
        {title:'AsyncAwait', url:'/js/async/async-await', component: AsyncAwait},
        {title:'Debouncing', url:'/js/async/debouncing', component: Debouncing},
        {title:'PromiseExample', url:'/js/async/promise-example', component: PromiseExample},
        {title:'PromiseApi', url:'/js/async/promise-api', component: PromiseApi},
        {title:'SetTimeoutSetInterval', url:'/js/async/set-timeout-interval', component: SetTimeoutSetInterval},
        {title:'Throttling', url:'/js/async/throttling', component: Throttling},
    ];
    function loadComponent(){
        if(subtopic === 'async'){
            return convertToViewFromArrayOfObj(data)
        }else {
            return React.createElement(
                buttons.find(button => button.url.includes(subtopic)).component,{},{}
            )
        }
    }

    return(
        <>
            <hr/>
            {
                buttons.map(button => <Button title={button.title} onClick={()=> history.push(button.url)}/>)
            }
            {loadComponent()}
        </>
    )
}