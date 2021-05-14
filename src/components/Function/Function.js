import React from 'react';

function FunctionExample(){

    // function declaration
    // named function, name property of the function object holds the name of the function
    //parameter=> value passed while calling the fn
    //arguments => function variables, which recieves the value while executing
    //argument object => arguments, behaves like array but not Instance of Array. we can use arguments[0] to access
    //arguments.length => number of args passed
    function sum(a,b){  // creating a variable in this scope and storing the function object, and hoisted to the top
        return a+b
    }
    const sumArrow = (a, b) => a + b;
    // console.log(sum); //=> will print the function
    // console.log(sum.name); // =>will print the function name
    // console.log(sum.length); //=> number of arguments
    // console.log(sumArrow.name); //=> function object name
    // console.log(typeof(sum)); //=> 'function'
    // console.log(sumArrow(4,5)); //=> '9'

    //function expression
    // => looks like function declaration, but produces function with different properties
    const x = function (){
        // not hoisted as this is not declaration
    }

    //defining fn inside block and using outside
    // testingFunctionCallInBlock();
    function testingFunctionCallInBlock(){
        // 'use strict';
        const x = true;
        if(x){
            function ok(){
                console.log('inside ok')
            }
        }
        // ok(); //=> undefined, reference error
        console.log(typeof ok) //=> undefined

        // if we need to define the method inside if{} for{} or {} use expression instead
        let okExp;
        if(x){
            okExp = function(){
                console.log('inside ok expression')
            }
        }
        console.log(typeof(okExp));
    }

    // as function expression creates a function object, it can be assigned to a variable or object method, or callback
    const obj1= {
        name: 'object 1',
        fn: function() {console.log('function as an object method')}
    }
    // obj1.fn();

    // namedFunction();
    function namedFunction() {
        //name parameter is optional in function expression, if not provided it will be '',
        //if assigned to a variable, name will be inferred from the variable name
        console.log((function () {
        }).name)  //=> ''
        const fnName = function () {
        };
        console.log(fnName.name) //=> fnName, coz inferring the name property from the variable
        const fnName2 = function withName() {
        };
        console.log(fnName2.name) //=> will print withName

        //==> coz when we are adding name in the function expression, it is adding name property in the function object
        // and holding the function object inside it
        console.log(typeof(fnName2.withName)) //=> prints undefined, though .withName holds the function object, it is
        // accessible in the function only
    }

    // reasons, why you should use named function =>
        //in callback, name can not be inferred, so locating error without the function name will be difficult
        //you can access function inside its scope, recursive call, or detaching event listener
        // var y = function x() {};
        // alert(x); // throws an error

    // shorthandDefinition();
    function shorthandDefinition(){
        const obj1 = {
            name: 'rahul',
            fn: function(){
                console.log(this.name)
            }
        }
        obj1.fn();
        //shorthand syntax to define method inside object
        const obj2 ={
            name: 'sandhu',
            fn(){
                console.log(this.name)
            }
        }
        obj2.fn();
        //benefits of shorthand
            //creates short syntax, and creates named function easier to debug

        //class syntax requires shorthand syntax
        /*
            class Star {
                constructor(name) {
                    this.name = name;
                }
                getMessage(message) {
                    return this.name + message;
                }
            }
            const sun = new Star('Sun');
            sun.getMessage(' is shining') // => 'Sun is shining'
        */
    }

    //computed properties
    // computedProperties();
    function computedProperties(){
        //allows to put expression in [] and that expression is evaluated and used as a property name
        const addMethod = 'add' + 1;
        const collection = {
            items: [],
            [addMethod](...items) {
                this.items.push(...items);
            }
        }
    }

    //Arrow Functions
    // arrowFunction();
    function arrowFunction(){
        //arrow function is anonymous, however browser can infer name from the assigned variable
        const obj = { name: 'rahul'};
        const fn = (obj) => console.log(obj.name)
        fn(obj);

        ((obj) => console.log(obj.name))(obj);
        // when using single parameter () is optional
        // when single statement {} is optional
        const value = 2;
        console.log((value => value *2)(value))
    }

    // using new function => does not have a name
    // usingNewFunction();
    function usingNewFunction(){
        function sum1(a, b) {
            return a + b;
        }
        const sum2 = function(a, b) {
            return a + b;
        }
        const sum3 = (a, b) => a + b;
        console.log(typeof sum1 === 'function'); // => true
        console.log(typeof sum2 === 'function'); // => true
        console.log(typeof sum3 === 'function'); // => true

        //function object has Function constructor
        //when invoked as a new Function (arg1, arg2, bodyString)
        const numberA = 'numberA', numberB = 'numberB';
        const sumFunction = new Function(numberA, numberB,
            'return numberA + numberB'
        );
        sumFunction(10, 15) // => 25
        //function created this way don't have access to the current scope, always in global scope, no closure possible
        // when using new Function(...)
        // Remember that functions almost never should be declared using new Function().
        // Because the function body is evaluated on runtime, this approach inherits many eval() usage problems:
        // security risks, harder debugging, no way to apply engine optimizations, no editor auto-complete.
    }

    //arguments object in function
    // argumentsObjectFunction();
    function argumentsObjectFunction(){
        function sum(a,b,c){
            console.log(arguments);
            // contains array like object passed to the function
            //[1,2, callee(...), length:2...]
            //arguments.callee => currently executing function
            //arguments.length => number of arguments passed
        }
        sum(1,2);
    }

    //function Object => functions are function object with build in additional method and properties
    // like .name .length .call() .apply() .bind()
    // functionObject();
    function functionObject() {
        function f() {
            const name= 'rahul'
        }
        f.list = ['a', 'b'];
        console.log(f);
        console.log(f.call);
    }

    //what if function doesn't return anything
    testingFunctionReturn();
    function testingFunctionReturn(){
        function testFunction(){
            let name = 'test function'
        }
        console.log(testFunction) // will print the function definition
        console.log(testFunction()) // will print undefined as returning nothing
        console.log(new testFunction()) //????
    }

    //Named IIFE
    (function namedIIFE() {
        //...
    })();
    //sometimes you will see the ;before the function that is to terminate the previous sentense,otherwise may error
    ;(function() {
        /* */
    })();

    // use of IIFE, if you imported two .js files and both have the add fn, later one override the first one
    const calculator = (function () {
        function add(a, b) {
            return a + b;
        }

        function multiply(a, b) {
            return a * b;
        }
        return {
            add: add,
            multiply: multiply
        }
    })();//you can export the function like this and use mtd like => calculator.add()

    //Factory function => are the functions which return objects
    //if function does not return anything, and will try to access, will print undefined

    return<>function </>
    //to return multiple values, use array or object
}
export default FunctionExample