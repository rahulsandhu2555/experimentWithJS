import React from "react";

function AsyncAwait(){

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
    return(
        <>async/await</>
    )
}
export default AsyncAwait

// Async class methods
// To declare an async class method, just prepend it with async:
//
// class Waiter {
//     async wait() {
//         return await Promise.resolve(1);
//     }
// }
//
// new Waiter()
//     .wait()
//     .then(alert); // 1 (this is the same as (result => alert(result)))