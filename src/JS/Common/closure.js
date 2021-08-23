/*
Closure => function + surrounding state ( lexical scope )
    Lexical scope => outer variable will be accessible in the inside scope, not the vice versa
    closure => preserves the outer scope inside the inner scope
    a combination of function and its ability to remember the outer scope variable
    created every time a function is created

    => when we are returning the function, effectively returning the function + scope chain, this bundle is closure
    => this returned function allows to have persistent memory, which can hold live data between executions

    Applications
        memoization
        promise

*/

// simpleClosure();
function simpleClosure(){
    function greeting2() {
        let message = 'Hi';
        function sayHi() {
            console.log(message);
        }
        return sayHi;
    }
    let hi = greeting2();
    hi(); // still can access the message variable

    function greeting(message) {
        return function(name){
            return message + ' ' + name;
        }
    }
    let sayHi = greeting('Hi');
    let sayHello = greeting('Hello');

    console.log(sayHi('John')); // Hi John
    console.log(sayHello('John')); // Hello John
}

//closure in a loop
// closureInALoop();
function closureInALoop() {
    for (var index = 1; index <= 3; index++) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    }
    // after 4 second(s):4
    // after 4 second(s):4
    // after 4 second(s):4 // coz i pointing to the last value of the i = 4

    //to fix this
    //IIFE solution => it is creating one more closure, different for each call, for first call i =1, for 2nd i=2 and so on..
        for (var index = 1; index <= 3; index++) {
            (function (index) {
                setTimeout(function () {
                    console.log('after ' + index + ' second(s):' + index);
                }, index * 1000);
            })(index);
        }
        // after 1 second(s):1
        // after 2 second(s):2
        // after 3 second(s):3

    //using let keyword
        for (let index = 1; index <= 3; index++) { // by using let, we are fixing the scope of the variable
            setTimeout(function () {
                console.log('after ' + index + ' second(s):' + index);
            }, index * 1000);
        }
        // after 1 second(s):1
        // after 2 second(s):2
        // after 3 second(s):3
}

// simpleMemoized();
function simpleMemoized(){

    function memoizedAdd(){
        const cache = {};
        return function (a){
            if(cache[a]){
                console.log('from cache');
                return cache[a];}
            else {
                cache[a] = a*a;
                return a*a
            }

        }
    }
    const mAdd = memoizedAdd();
    console.log(mAdd(5))
    console.log(mAdd(6))
    console.log(mAdd(6))

}

commonMemoizationExample();
function commonMemoizationExample(){
    function memoizeFunction(callback){
        const cache = {};
        return function (a,b){
            if ( a+""+b in cache){
                console.log('from cache');
                return cache[a+''+b];
            }else {
                cache[a+''+b] = callback(a,b);
                return  callback(a,b)
            }
        }
    }
    function add(a,b){
        return a+b
    }
    const memoizedAdd = memoizeFunction(add);
    console.log(memoizedAdd(2,3));
    console.log(memoizedAdd(2,3));
    console.log(memoizedAdd(2,3));
}
// once();
function once(){
    once = function (func) {
        var result;
        var once = false;
        return function () {
            if (!once) {
                result = func.apply(this, arguments);
                once = true;
            }
            return result;
        };
    };
}

//Currying
    //possible because of Closure
function curryFn(fn){
    return function (a, number, number1){
        return function (b){
            return function (c){
                return fn(a,b,c)
            }
        }
    }
}
function sum(a,b,c){
    return a+b+c
}
const curriedSum = curryFn(sum);
console.log(curriedSum(1,)(2)(3));