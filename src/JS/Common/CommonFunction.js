import React from 'react';

function CommonFunction(){

    //Set Time Out
    // setTimeoutFunction();
    function setTimeoutFunction(){
        //let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...);
        // timeoutID => returns a positive integer, identifying timer created
        let timeoutID = setTimeout((x) => {
            console.log(x*2)
        }, 10000, 1) // args are optional, and passed in callback, delay in ms

        //setTimeout() executes in call stack => moves the callback function to webAPI with a timer => when timer
        // ends => it moves to the callback queue => event loop monitors the stack, when stack gets emtpy =>
        // this call back move to the stack and calls console.log => console.log gets added in the stack
        //=> executes and removed from stack => then callback function gets removed from the stack
    }

    //Call
    // callFunction();
    function callFunction(){
        //predefined method
        //with .call() object can call a method which belongs to another object
        // call()
        // call(thisArg)
        // call(thisArg, arg1)
        // call(thisArg, arg1, arg2)
        // call(thisArg, arg1, ... , argN)
        const x1 = false;
        if(x1){

            const obj1 = {
                name: 'rahul',
                job: 'doing'
            }
            function checkJob(){
                console.log('--- might be doing ---')
            }
            checkJob.call(); // => prints = '--- might be doing ---'
            checkJob(); // => both produce the same result, coz even this of the object is optional in call, but
            // no point in using without the object

            checkJob.call(obj1); // checkJob is not using the obj1 object

            function checkJob2(){
                console.log(this.name)
            }
            //checkJob2(); //TypeError, coz object is not passed and name undefined
            //checkJob2.call(); //TypeError, coz object is not passed and name undefined
            checkJob2.call(obj1); // 'rahul
        }

        //---------------------------------------------------------------
        const x2 = false;
        if(x2){
            //calling method of another object
            const obj2 = {
                name: 'sandhu',
                printName(){
                    console.log(this.name)
                }
            }
            obj2.printName();// 'sandhu'

            const obj3 = {
                name: 'not sandhu'
            };
            obj2.printName.call(obj3); //=> 'not sandhu'
        }

        //-------------------------------------------
        const x3 = false;
        if(x3){
            const obj3 = {
                name: 'not sandhu'
            };
            function printCity(city){  //if function is accepting the arguments,in call, it has to be second parameter
                                        // first is always the object reference
                console.log(city)
            }
            printCity.call(obj3); // will print, as city is undefined
            printCity.call(obj3, 'ghaziabad'); // will print ghaziabad
            //if you are using call without the args, it will simply call the function.
            //first parameter is always the reference object
            //if function is accepting the arguments it should be from second parameter

            function printThis(){
                console.log(this)
            }
            const obj4 = {
                name: 'not rahul'
            }
            printThis.call(); // undefined as object is not passed, //=> it should be global object in non-strict mode
            printThis.call(obj4); // { name: 'not rahul' }
        }

        const x4 = true;
        if(x4){
            function Product(name){
                this.name = name;
            }
            function Toy(name){
                this.toyName = 'apple';
                Product.call(this, name);
            }
            console.log(new Toy())
        }
    };

    // While the syntax of this function is almost identical to that of call(), the fundamental difference is
    // that call() accepts an argument list, while apply() accepts a single array of arguments.
    //apply
    // applyFunction();
    function applyFunction(){
        //The apply() method calls a function with a given this value, and arguments provided as an array or array like object
        const numbers = [5, 6, 2, 3, 7];
        const max = Math.max.apply(null, numbers);
        console.log(max); // 7

        //syntax
        // apply(thisArg) , thisArgs may be null or undefined
        // apply(thisArg, argsArray)

        const person = {
            firstName: 'John',
            lastName: 'Doe'
        }
        function greet(greeting, message) { // accepting 2 arguments
            return `${greeting} ${this.firstName}. ${message}`;
        }
        let result = greet.apply(person, ['Hello', 'How are you?']); // passing two parameters in array
        console.log(result);

        //Function borrowing => borrowing function from another object
    }

    //bind
    bindFunction();
    function bindFunction(){
        // bind(thisArg)
        // bind(thisArg, arg1)
        // bind(thisArg, arg1, arg2)
        // bind(thisArg, arg1, ... , argN)
        // creates a new function, binding the object with the function
        //bind() =>allows another method to borrow method, without making a copy (function borrowing)

        //=> .bind creates a bound function, a exotic function object that wraps the original function
        //4 internal properties
        // [[BoundTargetFunction]] => The wrapped function object
        //[[BoundThis]] => this
        //[[BoundArguments]] => arguments
        //[[Call]]

        let obj = {
            name: 'rahul'
        }
        function callName(){
            console.log('my name is : '+ this.name)
        }

        const newFunc = callName.bind(obj)
        console.log(newFunc);
        newFunc();
    }

    //recursion
    //calling itself until it stops calling itself
    function recurse() {
        if('condition') {
            // stop calling itself
        } else {
            recurse();
        }
    }


    return(
        <>Common Function</>
    )
}
export default CommonFunction