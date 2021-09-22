/*

 */
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {convertToViewFromArrayOfObj} from "../components/PageCompnents/componentList";
import Button from "../components/common/Button";
import Async from "./Async/Async";

export default function JavaScript(){
    let { topic } = useParams();
    const history = useHistory();
    const data = [
        {
            sec:{
                pre:`
                JS, initially designed to interact with Element of webpages => synchronous, blocking, single threaded
                    1. ECMA Script => core functionality
                    2. DOM => interface to interact with the elements
                    3. BOM => provides browser api
                
                JS Engine => to run JS
                    V8 => by google, in chrome
                        By Chromium => web browser Code base for browser
                            Chromium based browsers
                                => Avast Secure Browser
                                => Microsoft Edge
                                => Opera
                                => Torch
                    spiderMonkey => Mozilla in firefox
                    Nitro => by Apple in safari
                    Chakra => Microsoft in IE, edge was later rebuild on Chromium so V8
                
                JS code execution by JS Engine
                    Parsing => moves all the variable to the top of that scope (Hoisting)
                    Execution => assign values and executes the code
                
                Key Points=>
                    variable, function, class everything is case sensitive
                    Identifier => _ and $ id perfect identifier, _id, while starting with a number is not valid.
                        const _ = 4; or const $ = 5; or function $(){}; or class _ {}
                    statements => no need to end with ; but good practice, and to combine use {} blocks. without ; may give error while
                        compressing and removing white space.
                    expression => piece of code, that evaluates a value
                    scope => global, function, block(after ES6)
                        Lexical scope => (static) accessing variable in nested functions, Scope Chain => inner scope => outer => global
                    Hoisting => moving the variables to the top of scope(global, fn, {}) (in compile phase allocating memory to variables)
                
                useful operators and functions
                    typeof(value) => returns the type of value variable holds
                `
            }
        }
    ];
    const buttons = [
        {title:'Async', url:'/js/async/async', component: Async},
        {title:'BOM', url:'/js/bom'},
        {title:'Common', url:'/js/common'},
        {title:'Currying', url:'/js/currying'},
        {title:'DOM', url:'/js/dom'},
        {title:'ES6', url:'/js/es6'},
        {title:'Form', url:'/js/form'},
        {title:'Function', url:'/js/function'},
        {title:'Intro', url:'/js/intro'},
        {title:'JSEngine', url:'/js/js-engine'},
        {title:'Objects', url:'/js/objects'},
        {title:'WebAPI', url:'/js/web-api'},
    ];
    function loadComponent(){
        if(topic === 'theory'){
            return convertToViewFromArrayOfObj(data)
        }else {
            return React.createElement(
                buttons.find(button => button.url.includes(topic)).component,{},{}
            )
        }
    }

    return(
        <>
            ...JS
            {
                buttons.map(button => <Button title={button.title} onClick={()=> history.push(button.url)}/>)
            }
            {loadComponent()}
        </>
    )
}