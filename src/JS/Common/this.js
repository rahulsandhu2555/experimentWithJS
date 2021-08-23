/*
    Execution context for the particular call
    lets you make the function reusable, by letting you decide the function context
    value of this entirely depends on how the function is being called

    4 ways to call a function
        implicit function
        explicit function
        new binding
        default binding

        Implicit binding => with using . notation, then left to the Dot denotes 'this'
            const person = {
                'name' : "rahul",
                sayMyName: function (){ console.log(`my name is ${this.name}`}
                }
            person.sayMyName(); //my name is rahul. => before (.) person represents the this keyword

        Explicit binding => when function and object are separate, we use call to bind object with function
            Call =>
                Every function has a build-in method call, which allows to specify the context with which fn is called
                const person = {
                    name: 'rahul'
                    }
                function saymyname(){
                    console.log(`my name is ${this.name}`}
                saymyname.call(person); //=> first parameter references 'this' and rest comma separated parameters
                saymyname.call(person, 'sandhu')// if function accepts one parameter let's say last name
            Apply =>
                same goes for apply but it accepts array as a second argument
                saymyname.apply(person, ['sandhu', 'singh']);
            Bind =>
                works same as call, but rather than calling the function, it returns a new function, which can be invoked
                anytime later
                const sayMyNameFn = saymyname.bind(person, 'sandhu');// sayMyNameFn can be invoked anytime later
                sayMyNameFn();

        'new' Binding =>
            when calling the constructor, with the new keyword, JS creates an empty {} object and reference to it
            so in constructor, this refers to the newly created empty object

        Default Binding =>
            fallback if none of the above matched
            saymyname(); //=> my name is undefined
                coz, no (.) operator, no call, apply, bind. no new keyword, then this is set to the window object

        Lexical Binding =>
            used in Arrow function, in arrow function there is no concept this, This is bind to the lexical scope


        Order of Precedence
            'new' Binding
            explicit binding
            implicit binding
            default binding

        ex:
            person.superHero.saymyName(); //Batman not rahul

            function bind(fn, context){
                return function(){
                    fn.apply(context, [...arguments])
                    }
                }
            const boundFn = bind(saymyname, person);
            boundFn('batman') // my name is rahul batman;

            binding this on Prototype
            Function.prototype.bind = function(context){
                fn = this;
                return function(){
                    fn.apply(context, [...arguments])
                }
            }
*/

// this reference to the object, which is calling the function
// in global context
// this === window
//function context
    //1. Function invocation
        function show() {
            console.log(this === window); // true
        }
        // show();
    //2. method invocation
        let car = {
            brand: 'Honda',
            getBrand: function () {
                return this.brand;
            }
        }
        console.log(car.getBrand()); // Honda
        let brand = car.getBrand;
        console.log(brand()); // undefined // coz in this call this is window, which is undefined
                                // to solve this issue, need to use bind
    //3. Constructor invocation
        // while creating new object, this refers to the new object
    //4. Indirect Invocation
        //call and apply, allows to the set the value of the this.
        //getBrand.call(honda, "It's a "); //this => honda
    //5. Arrow Function
        // can't explicitly defined, takes the context where it is defined

function saymyname(){
    console.log([...arguments])
}
saymyname('rahul') // ['rahul']