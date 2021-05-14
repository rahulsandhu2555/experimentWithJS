//Lexical scope => outer variable will be accessible in the inside scope, not the vice versa
//closure => preserves the outer scope inside the inner scope
//a combination of function and its ability to remember the outer scope variable
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

//closure in a loop
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