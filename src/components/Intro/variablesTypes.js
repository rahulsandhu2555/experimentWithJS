var message;
console.log(message); // undefined
// console.log(counter); // ReferenceError: counter is not defined

// Non-strict mode-----------------
function say() {
    message = 'Hi'; // what?
    console.log(message);
}
say(); // Hi  => it checked variable message in local scope, but was not declared, so it went to global scope, also
        // couldn't find there, so created one variable with named message.
console.log(message); // Hi

// strict mode-----------------
"use strict";
function sayit() {
    message = 'Hi'; // ReferenceError
    console.log(message);
}
sayit(); // Hi
console.log(message); // Hi


// JavaScript variable hoisting ------------
// Parsing => moves all the variable to the top of that scope (Hoisting)
// Execution => assign values and executes the code
console.log(message); // undefined => if no hoisting, would have given ReferenceError
var message;

// let and const => block scope
// var => global scope


//---------------------------------------------------------------------------------------------DATA TYPES
// null, undefined, boolean, number, string
// symbol – available only from ES6
// complex data type called object

console.log(typeof undeclaredVar); // undefined
// null is an empty object pointer
let obj = null;
console.log(typeof obj); // object
console.log(null == undefined); // true

// True -> non-empty string, non-zero number and Infinity, non-null object
// False -> empty string, 0, NaN, null, undefined

//Symbol
    console.log(Symbol() == Symbol()); // false creates new value on every call
    const click = Symbol('click'); // click symbol is unique

// Object => collection of properties
    let person = {
        'first-name': 'John',
        lastName: 'Doe'
    };
    //to access use . or []

// Number
    var numberObject = new Number(10);
    console.log(numberObject.valueOf()); // 10
    console.log(numberObject.toString()); // 10 => by default taking base 10
    console.log(numberObject.toString(2)); // 1010 => by taking base 2, converted to binary

    //numberObject.toFixed(decimalPlaces);
    var distance = 19.006
    console.log(distance.toFixed(2)); // 19.01, browsers may use rounding methods differently, use carefully

    var x;
    // console.log(x.toExponential()); //"1e+1" to convert to e-notation

    let numberObject2 = new Number(10);
    let number = 10;

    // typeof
    console.log(typeof numberObject2); //'object'
    console.log(typeof number); // 'number'
    // instanceof
    console.log(numberObject2 instanceof Number); // true
    console.log(number instanceof Number); // false

// Boolean
let a = Boolean('Hi');
console.log(a); // true
console.log(typeof(a)); // boolean
console.log(a.valueOf()); // true

let foo = true;
let bar  = new Boolean(false);
console.log(typeof foo); // boolean
console.log(typeof bar); // object
console.log(foo instanceof Boolean); // false
console.log(bar instanceof Boolean); // true

//* use Boolean() to convert different object to boolean type, but never as a wrapper for primitive boolean type

