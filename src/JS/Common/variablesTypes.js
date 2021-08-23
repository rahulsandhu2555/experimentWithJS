//----------------------------------------------------------------------------------DATA TYPES
// let and const => block scope
// var => global scope

// null, undefined, boolean, number, string
// symbol – available only from ES6
// complex data type called object

//undefined => only one value
//null => only one value
//typeof null => object
//good practice to assign a variable null, which might hold object later


var message;
console.log(message); // undefined
console.log(typeof message) // undefined
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
console.log(message); // undefined => if no hoisting, would have given ReferenceError
var message;


console.log(typeof undeclaredVar); // undefined
// null is an empty object pointer
let obj = null;
console.log(typeof obj); // object
console.log(null == undefined); // true

// True -> non-empty string, non-zero number and Infinity, non-null object
// False -> empty string, 0, NaN, null, undefined

//Symbol
    console.log(Symbol() == Symbol()); // false creates new value on every call
    const click = Symbol('click on'); // click symbol is unique
    console.log(click) //=> Symbol('click on')
    console.log(typeof click) //=> symbol
    //Symbol is primitive, so if you will try to create the value with the new keyword it will throw the error
        let s = new Symbol(); // error
    //Symbol.for()
        //accepts description, and searches in the global registry, if found returns that symbol, if not creates one
        let ssn = Symbol.for('ssn');
    // Symbol.keyFor() => to get the key associated with that Symbol
        //console.log(Symbol.keyFor(citizenID)); // 'ssn'
        //if not able to find the key, then returns undefined

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

