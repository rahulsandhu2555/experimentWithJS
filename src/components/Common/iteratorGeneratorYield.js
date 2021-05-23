//Iterators
    //we generally use for lop to iterate over the array, but for gets complicated when we have nested
    //to avoid tha complexicity,in ES6 for...of was introduced, for iterable objects

    //Iterable Objects
        //Iteration protocols
            //Iterator protocol
                //object when has next() and returns => { value: 'next value', done: false }
                    //if {done: true: value: undefined} => means no more item to iterate
            //Iterable protocol
                //if [Symbol.iterator] method is there => takes no argument, returns object which confirms iterator object
                    //[Symbol.iterator] => built in function ES6
        //Iterator
            // for Array, map, set => there is built in iterator , you don't have to create that
            //but for the custom type we need to explicitly define the iterator
                class Sequence {
                    constructor( start = 0, end = Infinity, interval = 1 ) {
                        this.start = start;
                        this.end = end;
                        this.interval = interval;
                    }
                    [Symbol.iterator]() {
                        let counter = 0;
                        let nextIndex = this.start;
                        return  {
                            next: () => {
                                if ( nextIndex <= this.end ) {
                                    let result = { value: nextIndex,  done: false }
                                    nextIndex += this.interval;
                                    counter++;
                                    return result;
                                }
                                return { value: counter, done: true };
                            },
                            //optional return() method
                        }
                    }
                };
                let evenNumbers = new Sequence(2, 10, 2);
                for (const num of evenNumbers) {
                    console.log(num);
                }
                //or we can access the [Symbol.iterator]() directly
                    let evenNumbers2 = new Sequence(2, 10, 2);
                    let iterator = evenNumbers2[Symbol.iterator]();

                    let result = iterator.next();

                    while( !result.done ) {
                        console.log(result.value);
                        result = iterator.next();
                    }
        //Cleaning up
            //[Symbol.iterator]() may optionally return a method called return()
            //return() is called when iteration is stopped premature
                // return: () => {
                //     console.log('cleaning up...');
                //     return { value: undefined, done: true };
                // }

//Generators
    //generators are function, who can pause in the middle, and continues from where it pause
        function* generate() { //* denotes generators
            console.log('invoked 1st time');
            yield 1; //yield returns a value and pause the execution
            console.log('invoked 2nd time');
            yield 2;
        }

        let gen = generate(); //to invoke
        console.log(gen);
        // Object [Generator] {}

        let result2 = gen.next();
        console.log(result);
        // invoked 1st time
        // { value: 1, done: false }
        result2 = gen.next();
        console.log(result);
        // invoked 2nd time
        // { value: 2, done: false }
        result2 = gen.next();
        console.log(result);
        // { value: undefined, done: true }
    //Generators can be used to create iterator?

//Yield
    //yields allows to pause and resume the generator function
        // [variable_name] = yield [expression];
            //expression => value to return from the generator function, in not there, returns undefined
    //1. returning a value
        function* foo() {
            yield 1;
            yield 2;
            yield 3;
        }
        let f = foo();
        console.log(f.next()); //{ value: 1, done: false }
    //2. returning undefined
        function* bar() {
            yield;
        }
        let b = bar();
        console.log(b.next()); //{ value: undefined, done: false }
    //3. Passing a value to the next() method
    //...