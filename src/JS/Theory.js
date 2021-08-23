/*
JS, initially designed to interact with Element of webpages => synchronous, blocking, single threaded
    1. ECMA Script => core functionality
    2. DOM => interface to interact with the elements
    3. BOM => provides browser api

JS Engine => to run JS
    V8 => by google, in chrome
        By Chromium => web browser Code base for browser
            Chromium based browsers
                => Avast Secure Browser
                => Microsoft Edge
                => Opera
                => Torch
    spiderMonkey => Mozilla in firefox
    Nitro => by Apple in safari
    Chakra => Microsoft in IE, edge was later rebuild on Chromium so V8

JS code execution by JS Engine
    Parsing => moves all the variable to the top of that scope (Hoisting)
    Execution => assign values and executes the code

Key Points=>
    variable, function, class everything is case sensitive
    Identifier => _ and $ id perfect identifier, _id, while starting with a number is not valid.
        const _ = 4; or const $ = 5; or function $(){}; or class _ {}
    statements => no need to end with ; but good practice, and to combine use {} blocks. without ; may give error while
        compressing and removing white space.
    expression => piece of code, that evaluates a value
    scope => global, function, block(after ES6)
        Lexical scope => (static) accessing variable in nested functions, Scope Chain => inner scope => outer => global
    Hoisting => moving the variables to the top of scope(global, fn, {}) (in compile phase allocating memory to variables)

useful operators and functions
    typeof(value) => returns the type of value variable holds
 */
