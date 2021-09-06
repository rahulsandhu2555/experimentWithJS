import React from "react";
import {convertToViewFromArrayOfObj} from "../../components/PageCompnents/componentList";

function PromiseApi(){
    const data = [
        {
            sec:{
                pre:`
    //1. Promise.all
            // takes array of promises and returns a promise, once all promise settled, result is also an array[...]
            //order of resulting array is same, even if any takes longer than other
    const x = false;
    if (x){
        let urls = [
            'https://api.github.com/users/iliakan',
            'https://api.github.com/users/remy',
            'https://api.github.com/users/jeresig'
        ];

        // map every url to the promise of the fetch
        let requests = urls.map(url => fetch(url));

        // Promise.all waits until all jobs are resolved
        Promise.all(requests)
            .then(responses => responses.forEach(
                response => alert({response.url}: {response.status})
            ));
    }

    const x2 = false;
    if(x2){
        //if there is any error, promise execution will terminate immediately and will reject with the error.
        //and in case of error, other promises are ignored.
    }

    //2. Promise.allSettled
        // used if we want the response even if few promises gets failed
        // recently introduced, if broswer doesn't support, can use polyfill
    //3. Promise.race
        // waits for the first resolve or error
    //4. Promise.any
        // waits for the first resolved promise
    //5. Promise.resolve/reject  => not used now because of the async/await
    // Promise.resolve('value') // creates a resolved promise with value
    // Promise.reject('error') // creates a rejected promise with error.


    //microtasks
    const x3 = false;
    if(x3){
        let promise = Promise.resolve();
        promise.then(() => alert("promise done!"));
        alert("code finished"); // this alert shows first

        //Asynchronous tasks need proper management, for Promises there is a promiseQueue or microtask queue
        //FIFO, execution is initiated when nothing else is running
        // .then/catch/finally are put in the queue and start execution when JS engine becomes free

        //An “unhandled rejection” occurs when a promise error is not handled at the end of the microtask queue.
        // if we forget to add .catch, then, after the microtask queue is empty, the engine triggers the event:unhandledrejection

    }
                `
        }
        }
    ];

    return(
        <>{convertToViewFromArrayOfObj(data)}</>
    )
}
export default PromiseApi