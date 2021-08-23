/*
    Generators => special class of functions, which simplifies the task of writing iterators

    syntax => function* generatorFn(){
        yield 'helllo'
        yield 'world'
    }

    benefits over normal function
        can stop the execution in the middle, and start the execution from where it left off, for that yield keyword is used
        => yield = is an operator, with which a generator can pause it self
        we don't say, it returns a value, we say => it yields a value

    ** function at [Symbol.iterator] can also be a generator function
 */
function* generatorFn(){
    yield 'helllo'
    yield 'world'
}
//to invoke
const genObj = generatorFn(); // always returns generator object, which is iterator

    //as genObj is iterator, it can be used with for...of, array  destructuring, spread operator
    for(const word of genObj){
        console.log(word);
    }
    //helllo world
    console.log([...genObj]);//helllo world

    //or manually calling next() function
    genObj.next(); // returns {value: 'helllo', done: false}
    genObj.next(); // returns {value: 'world', done: false}
    genObj.next(); // returns {value: undefined, done: true}

//Points to remember
    //1. can use return in generator, but it will set done: true and further won't be executed
        function* generatorFnWithReturn(){
            yield 'helllo'
            return 'End here' // generator ends here
            yield 'world' // will never be executed
        }
    //2. if you return a value, rather than yield a value,it will not iterated in for...of and spread operator
        function* generatorFnWithReturn2(){
            yield 'helllo'
            return 'End here'
        }
        const genObj2 = generatorFnWithReturn2();
        for(const word of genObj2){
            console.log(word); // helllo , 'End here is not printed'
        }
        console.log([...genObj2]); // helllo
    //3. a generator can not re-run once yielded or returned, need to generate the generatorObject again to re-run
        for(const word of genObj){
            console.log(word); //hello world
        }
        console.log([...genObj]); // [] prints nothing as already yielded values in for...of

//Example
    function* range(){
        for (let i = 0; i<50; i++){
            yield i
        }
    }