//Arrow Functions
// arrowFunction(); => lexically binds variables with the function

const person ={
    name: 'rahul',
    sayMyname(){
        const withLastName = function (){
            return `${this.name} sandhu`
        }
        console.log(withLastName());
    }
}
person.sayMyname(); //will print => undefined sandhu
    //because when we are calling withLastName(), it is neither implicit, explicit, or new, so it is default and this
    //refers to the global object and global does not have any variable named name so undefined

// this can be resolved by the arrow function, using the lexical scoping
const person2 ={
    name: 'rahul',
    sayMyname(){
        const withLastName = () => {
            return `${this.name} sandhu`
        }
        console.log(withLastName());
    }
}
person2.sayMyname(); //will print => rahul sandhu
    //coz when moved to this.name, it checked in its parent, sayMyName(), and checked its scope, it was being called by
    //person2, to it took the reference for this from person2

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
    let add = (x, y) => { return x + y; }; // if using { } block need to return
    // (p1, p2, ..., pn) => { return expression; } // => if you using multiple parameter

    //doesn't work
        // let multiply = (x,y)
        //     => x * y;
    //works
        let multiply = (x,y) =>
            x * y;
    //works
        let multiply2 = (
            x,
            y
        ) =>
            x * y;
    //In arrow function => this, arguments, super, new.target are lexical, arrow function uses enclosing lexical scoping
    //if you use new keyword with Arrow, will get an error
    //this => arrow function capture the value of this from enclosing context
    //arrow function doesn't have argument object

//When you should avoid using Arrow Function
    //as Arrow function doesn't have this and arguments object, so you should avoid using this
        //Event Handlers
            // <input type="text" name="username" id="username" placeholder="Enter a username">
            // <div id="greeting"></div> // we want to display the greeting message to the username entered
            // const greeting = document.querySelector('#greeting');
            // const username = document.querySelector('#username');
            // username.addEventListener('keyup', () => {
            //     greeting.textContent = 'Hello ' + this.value;
            // });
            // Hello undefined //=> because arrow function is being executed in global context to this => window
            //
            // username.addEventListener('keyup', function () {
            //     input.textContent = 'Hello ' + this.value;
            // });
        //Object methods
            const counter = {
              count: 0,
              next: () => ++this.count,  //inheriting this from lexical scoping, since global context
              current: () => this.count
            };
            console.log(counter.next()); //NaN
            //to resolve this use function instead of arrow function
            const counter2 = {
                count: 0,
                next() {
                    return ++this.count;
                },
                current() {
                    return this.count;
                }
            };
        //Class methods
            class Counter {
                constructor() {
                    this.count = 0;
                }
                next = () => {
                    return ++this.count;
                }
                current = () => {
                    return this.count;
                }
            }
            //Using function instead of arrow function
            class Counter2 {
                constructor() {
                    this.count = 0;
                }
                next() {
                    return ++this.count;
                }
                current() {
                    return this.count;
                }
            }
        //Prototype Methods
            function Counter3() {
                this.count = 0;
            }
            Counter.prototype.next = () => {
                return this.count;   //same as above this, referring to global context
            };
            Counter.prototype.current = () => {
                return ++this.next;
            }
            //using normal function to avoid this error
            function Counter4() {
                this.count = 0;
            }

            Counter.prototype.next = function () {
                return this.count;
            };

            Counter.prototype.current = function () {
                return ++this.next;
            }
        //function that uses arguments objects
            //Arrow function does not have arguments object
                const concat = (separator) => {
                    let args = Array.prototype.slice.call(arguments, 1);
                    return args.join(separator);
                }
                //instead use regular function
                function concat2(separator) {
                    let args = Array.prototype.slice.call(arguments, 1);
                    return args.join(separator);
                }