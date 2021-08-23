 /*
Iterators and Iterables

    Why needed?
        difficulty to manage iterations on different data structures.
        were introduced to process the data more efficiently.
        to providing one value from the collection at a time, so you can focus on what to do with data, rather than
            how to access that data

    Two new protocols were introduced
        iterable protocol - implementing objects called iterable
            => to make sure its elements are accessible to public
            Built-in iterables - Strings, Array, Map, sets
                => By default, Object is not built-in iterable
            for...of => to access the iterables in the JS

            this protocol decides if the object is iterable
                => must have an method at key [Symbol.iterator], should not accept args and returns object, which conforms
                    iterator protocol
        iterator protocol - implementing object called iterator
            => an object, which knows how to access the elements, while keeping track of its current position in the sequence
            decides, whether an object is iterator or not.
                => must have next() method, returns object with two properties
                    value: gives the current element
                    done: boolean value, which indicates if values remaining to iterate

                    {value: 'hey', done: false} => next value is there
                    {value: undefined, done: true} => after the last value has returned
                => return() => executes when iteration stops prematurely

        Language constructs that uses iterable and iterator protocol
            for..of
            spread syntax
            array destructuring
            array.from
            promise.all
            promise.race
            and more...
 */

 // let obj = {
 //     name: 'rahul'
 // };
 //
 // for(const value of obj){
 //     console.log(value) // Error => Object is not iterable
 // }

 //we can convert it to iterable using iterable and iterator protocol
 let obj2 = {
     [Symbol.iterator]: function (){ //must have a key [Symbol.iterator] and function on this key  accepting no args
         let steps = 0;
         let iterator ={
             next:function (){
                 steps++;
                 if(steps === 1){
                     return {value:'hi', done: false}
                 }
                 else if(steps === 2){
                     return {value:'there', done: false}
                 }
                 else {
                     return {value: undefined, done: true}
                 }
             },
             return: function (){
                 return {done: true}
             }
         };
         return iterator
     }
 }
 for(const value of obj2){ //Symbol.iterator function being called once, while next() three times
     console.log(value) // hi there
 }

 //or we can access the values manually by calling next function
 const objIterator =  obj2[Symbol.iterator]();
 objIterator.next(); // returns {value:'hi', done: false}
 objIterator.next(); // returns {value:'there', done: false}
 objIterator.next(); // returns {value: undefined, done: true}