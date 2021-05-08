import React from "react";
import PromiseApi from "./PromiseApi";
import AsyncAwait from "./AsyncAwait";

export default function PromiseExample(){
    const x1 = false;
    if(x1){
        const promise1 = new Promise((resolve, reject) => {
            //this executor is a fn, which has two parameters, two functions,which gets executed automatically, when promise
            // is invoked
            const x = 1;
            if(x === 1){
                setTimeout(() => { // this is the producing code as this may take time to execute
                    resolve('foo');
                    reject('bar'); //this will never be executed, coz the idea of Promise is to return one error or one result, whichever will occur first
                    //rest won't be executed
                }, 5000);
            }else{
                setTimeout(() => { // this is the producing code as this may take time to execute
                    reject(new Error('bar'));//try to do reject with Error object
                }, 5000);
            }
        });

        //response of the new Promise() constructor is the JS object with two properties, { status= '', result=''}
        //on the basis of status, it executes further
        promise1
            //{status: 'pending', result: 'undefined'}
            //these properties status and result are internal properties, they cannot be accessed directly, those are for internal use
            // consumers => .then, .catch, .finally use these properties
            //(consuming code) this will wait until the status is pending, will move further if status is 'fulfilled' or 'rejected'
            .then((value) => {
            console.log(value);
            return 'value from then 1'
            })
            .catch((error) => {
                // or .then(null, handleError)
                console.log(error)
            })
            .finally(function (){
                // for cleanup operations, no parameter in finally, because we don't know whether promise fulfilled or rejected.
                //finally passes through the result or error to the next handler
                console.log('--- executing finally ---')
            })
            .then((res) => {
                //value of res will be passed through finally, which originated in .then before catch
                console.log(res)
            })
        ;

        //alternate way to handle both cases in then, if only one function in .then, will handle resolve only
        promise1.then(function (value){
            //this will handle the resolve part
        }, function (error){
            // this will handle the error part
        });
    }

    const x2 = false;
    if(x2){
        //we can attach handler to already settled promise.
        // the promise becomes resolved immediately upon creation
        let promise2 = new Promise(resolve => resolve("done! -- promise2"));
        promise2.then(alert); // done! -- promise2 (shows up right now)

        promise2.then((result)=>{
            // alert(result);
            return result+ " alert"; //==> same as return new Promise((resolve, reject)=>{ resolve('result+ ' alert')})
        }).then((res) => {
            console.log(res); //=> will print done! -- promise2 alert in both the cases, coz .then will return a promise by default
            return res;
        }).then(alert); // if passing function reference, and function is accepting a parameter, then return from above .then will be the
                        //input parameter for that function, => .then(alert) ~ .then((res) => alert(res))
    }

    const x3 = false;
    if(x3){
        // is promise.then(f1).catch(f2); and promise.then(f1, f2); equal?
        //ans => no, because in promise.then(f1).catch(f2); if any error in promise or .then(f1), it will be caught by
        //.catch. But in case of promise.then(f1, f2); only promise error is handled, if there is any error in .then(f1,
        //it is not handled.
    }

    const x4 = false;
    if(x4){
        const promise = new Promise(function (resolve, reject){
            resolve('from promise')
        });
        promise.then((res) => {
            console.log(res)
        }).then(() => {
            setTimeout(()=>{console.log('time out')}, 3000)
        }).then(()=>{
            console.log('see if prints?')
        })
    }
    //it is not possible to print 'see if prints?' after 'time out', in this case 'time out' will print after
    // 3 sec and rest of the chain will execute, if we need to stop at 'time out' we will have to return the promise

    const x5 = false;
    if(x5){
        const promise = new Promise(function (resolve, reject){
            resolve('from promise')
        });
        promise.then((res) => {
            console.log(res)
        }).then(() => {
            return new Promise((resolve, rejects)=>{
                setTimeout(()=>{
                    console.log('time out');
                    resolve();
                    }, 3000)
            })
        }).then(()=>{
            console.log('see if prints?')
        })
    }

    const x6 = false;
    if(x6){
        //implicit try...catch , if there is any error in executor, it gets handled by the .catch and treated as rejected
        //this happens not only in executor, but in .then or .catch also, but in case of .catch => it is handled by the
        //next .catch
        new Promise((resolve, reject) => {
            throw new Error("Whoops!");
        }).catch(alert); // Error: Whoops!
        //same as
        new Promise((resolve, reject) => {
            reject(new Error("Whoops!"));
        }).catch(alert); // Error: Whoops!
    }

    const x7 = false;
    if(x7){
        //to rethrow an error
        new Promise((x,y)=>{y(0)}).catch(function(error) { // (*)
            if (error instanceof URIError) {
                // handle it
            } else {
                alert("Can't handle such error");
                throw error; // throwing this or another error jumps to the next catch
            }
        }).then(function() {
            /* doesn't run here */
        }).catch((error) => {
            console.log(error)
        })
    }

    const x8 = false;
    if(x8){
        // what if error is not handled?
        //it will behave like a normal code without the try..catch, console the error and script will die.
        //in browsers we can catch such unhandled rejection with---
        new Promise(function() {
            throw new Error("Whoops!");
        }).then(()=> console.log('do nothing'));
        window.addEventListener('unhandledrejection', function(event) {
            // the event object has two special properties:
            alert(event.promise); // [object Promise] - the promise that generated the error
            alert(event.reason); // Error: Whoops! - the unhandled error object
        });
        // It’s ok not to use .catch at all, if there’s no way to recover from an error.
    }

    const x9 = false;
    if(x9){
        //will .catch handle the error?
        new Promise(function(resolve, reject) {
            setTimeout(() => {
                throw new Error("Whoops!");
            }, 1000);
        }).catch(alert);
        //and => no, why?
    }
    return(
        <>
            Promise
            <PromiseApi/>
            <AsyncAwait/>
        </>
    )
}
