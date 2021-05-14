// !! used to convert a value to its real boolean value
let counter = 10;
console.log(!!counter); // true
// first ! operator returns a Boolean value of the counter variable.
// And the second one ! negates that result and returns the real boolean value of the counter variable

// let result = value1 && value2 && value3;
// Evaluates values from left to right.
//     For each value, converts it to a boolean. If the result is false, stops and returns the original value.
//     If all values are truthy values, returns the last value

// let result = value1 || value2 || value3;
// Evaluates values from left to right.
//     For each value, converts it to a boolean value. If the result of the conversion is true, stops and returns the value.
//     If all values have been evaluated to false, returns the last value.
const y = true && 5;
console.log(y)//5 => if not true or false will return that value

//a &=b => a = a & b
//a |=b => a = a | b
console.log(10 < '20'); // true => converts non number to number and then compares

// Comparing an object with a non-object
let apple = {
    valueOf: function() {
        return 10;
    }
};
let orange = {
    toString: function() {
        return '20';
    }
};
console.log(apple > 10); // false
console.log(orange == 20); // true
// to compare, object calls valueOf() to get the value, if valueOf() is not there, it calls toString()
//and then tries to compare the value
console.log(true > 0); // true
console.log(false < 1); // true when comparing boolean, converts true to 1 and false to 0 and does the comparison
console.log(null == undefined); // true
console.log(NaN == 1); // false
console.log(NaN == NaN); // false
console.log("10" == 10); // true converting and then comparing
console.log("10" === 10); // false => strict equal