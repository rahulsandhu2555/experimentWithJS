import React from "react";
import {convertToViewFromArrayOfObj} from "../../components/PageCompnents/componentList";

function AsyncAwait(){
    const data = [
        {
            sec:{
                pre:`
                sequential vs concurrent vs paralleled execution

                function resolveHello(){
                    return new Promise(resolve => {
                        setTimeout(function (){
                            resolve('hello')
                        },2000)
                    }}
                }
                function resolveWorld(){
                    return new Promise(resolve => {
                        setTimeout(function (){
                            resolve('world')
                        },1000)
                    }}
                }
            
                Sequential =>
                async function sequentialStart(){
                    const hello = await resolveHello()
                    console.log(hello); //  logs hello after two second
            
                    const world  await resolveWorld()
                    console.log(world); // logs world after 1 sec
                }
                sequentialStart()
                //completes and takes 3 sec
            
                Concurrent =>
                async function concurrentStart(){
                    const hello = resolveHello()
                    const world = resolveWorld()
            
                    console.log(await hello) // logs after 2 seconds
                    console.log(await world) // logs after 2 seconds
                }
                concurrentStart()
                //completes in 2 seconds
            
                Parallel Execution =>
                function parallelExecution(){
                    Promise.all([
                        (async () => console.log(await resolveHello()))(), //logs after 2 sec
                        (async () => console.log(await resolveWorld()))(), //logs after 2 sec
                    ]}
                }
                async function parallelExecution(){
                    await Promise.all([
                        (async () => console.log(await resolveHello()))(), //logs after 2 sec
                        (async () => console.log(await resolveWorld()))(), //logs after 2 sec
                    ]}
                }
                parallelExecution();
                // total time taken 2 sec
                
                
                const x = false;
                if(x){
                    // async can be used with the function to always returns promise, other values are wrapped in resolved automatically
                    async function f() {
                        return 1;
                    }
                    // or we could explicitly return promise
                    async function f1() {
                        return Promise.resolve(2);
                    }
                    f().then(alert);
                    f1().then(alert);
                }
            
                // await => only works with async
                // stops the execution until the promise resolves
                const x1 = false;
                if(x1){
                    async function f() {
                        let promise = new Promise((resolve, reject) => {
                            setTimeout(() => resolve("done!"), 1000)
                        });
                        let result = await promise; // wait until the promise resolves
                        // resumes when promise settles
                        //when await suspends, it doesn't cost CPU, and JS engine can do other tasks
                        alert(result); // "done!"
                    }
                    f();
                }
            
                const x2 = false;
                if(x2){
                    // await won't work at top level code
                    // syntax error in top-level code
                    // let response = await fetch('/article/promise-chaining/user.json');
                    // let user = await response.json();
            
                    // => wrap in anonymous async function
                    (async () => {
                        let response = await fetch('/article/promise-chaining/user.json');
                        let user = await response.json();
                    })();
                }
            
                const x3 = false;
                if(x3){
                    // we can use try...catch
                    async function f() {
                        try {
                            let response = await fetch('/no-user-here');
                            let user = await response.json();
                        } catch(err) {
                            // catches errors both in fetch and response.json
                            alert(err);
                        }
                    }
                    f();
            
                    // we can also append .catch as returning the promise
                    async function f1() {
                        let response = await fetch('http://no-such-url');
                    }
                    // f() becomes a rejected promise
                    f1().catch(alert); // TypeError: failed to fetch // (*)
                }
            
                const x4 = false;
                if(x4){
                    // async/await works well with promise.all
                    // wait for the array of results
                    // let results = await Promise.all([
                    //     fetch(url1),
                    //     fetch(url2),
                    //     ...
                    // ]);
                }
            
                const x5 = true;
                if(x5){
                    // if we want to call async function inside non-async, then we will use as promise
                    async function wait() {
                        await new Promise(resolve => setTimeout(resolve, 1000));
            
                        return 10;
                    }
            
                    function f() {
                        // shows 10 after 1 second
                        wait().then(result => alert(result));
                    }
            
                    f();
                }
                
                Async class methods
                To declare an async class method, just prepend it with async:
                
                class Waiter {
                    async wait() {
                        return await Promise.resolve(1);
                    }
                }
                
                new Waiter()
                    .wait()
                    .then(alert); // 1 (this is the same as (result => alert(result)))
                `
            }
        }
    ];

    return(
        <>
            {convertToViewFromArrayOfObj(data)}
        </>
    )
}
export default AsyncAwait

