//Class => blueprint to make objects, contains variable and function
    //Prior ES6, constructors was used to make the objects
    //unlike Java, C++, In JS class are syntactical sugar over prototypical inheritance
    //ES6, classes are just special functions
        //Using Constructor
            function Person(name) {
                this.name = name;
            }
            Person.prototype.getName = function () {
                return this.name;
            };
            var john = new Person("John Doe");
            console.log(john.getName());

        //Using class
            class Person2 { //using class keywords instead of Person
                constructor(name) { //calls the constructor immediately, when initialize
                    this.name = name;
                }
                getName() {
                    return this.name;
                }
            }
            let john2 = new Person("John Doe");
            console.log(typeof Person); // function
            console.log(john2 instanceof Person); // true
            console.log(john2 instanceof Object); // true
        //Differences
            //class not hoisted like function constructor
            //code inside class declarations, executes in strict mode, and you can not change this behaviour
            //class methods are non-enumerable, in function declaration type, you use Object.defineProperty to make non-enumerable
            //In class constructor, without the new keyword will throw the error
    //Class declaration
        let Person3 = class { //can have a class name, that will be local to the class body
            constructor(name) {
                this.name = name;
            }
            getName() {
                return this.name;
            }
        }
        //similarly to the function expression, class expression are also not hoisted
        console.log(typeof Person3); // function => like function declaration it is also function
    //First class citizen => you can pass it to function, return from a function, assign to a variable
        function factory(aClass) { //accepting class expression as a parameter
            return new aClass();
        }

        let greeting = factory(class {
            sayHi() { console.log('Hi'); }
        });

        greeting.sayHi(); // 'Hi'
    //Singleton
        //to create only one object of the class, by calling class constructor immediately
            let app = new class {
                constructor(name) {
                    this.name = name;
                }
                start() {
                    console.log(`Starting the ${this.name}...`);
                }
            }('Awesome App');

            app.start(); // Starting the Awesome App...
    //Static
        //prior to ES6
            function Person4(name) {
                this.name = name;
            }
            Person.prototype.getName = function () {
                return this.name;
            };
            Person.createAnonymous = function (gender) {
                let name = gender == "male" ? "John Doe" : "Jane Doe";
                return new Person4(name);
            };
            var anonymous  = Person.createAnonymous()
        //after ES6
            class Person5 {
                constructor(name) {
                    this.name = name;
                }
                getName() {
                    return this.name;
                }
                static createAnonymous(gender) {
                    let name = gender == "male" ? "John Doe" : "Jane Doe";
                    return new Person5(name);
                }
            }
            let anonymous2 = Person.createAnonymous("male");
            //If you will try to run the createAnonymous method from an instance you will get an error
                let person = new Person('James Doe');
                let anonymous3 = person.createAnonymous("male"); // TypeError
    //Computed property in a class
        let name = 'fullName';
        class Person6 {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            get[name]() { // a computed property name
                return `${this.firstName} {this.lastName}`;
            }
        }

        let person7 = new Person('John', 'Doe');
        console.log(person.fullName);

    //Inheritance in Js
        //using Prototypical inheritance
            function Animal(legs) {
                this.legs = legs;
            }

            Animal.prototype.walk = function() {
                console.log('walking on ' + this.legs + ' legs');
            }

            function Bird(legs) {
                Animal.call(this, legs);
            }

            Bird.prototype = Object.create(Animal.prototype);
            Bird.prototype.constructor = Animal;


            Bird.prototype.fly = function() {
                console.log('flying');
            }

            var pigeon = new Bird(2);
            pigeon.walk(); // walking on 2 legs
            pigeon.fly(); // flying

        //Using class Extends and Super
            class Animal2 {
                constructor(legs) {
                    this.legs = legs;
                }
                walk() {
                    console.log('walking on ' + this.legs + ' legs');
                }
            }

            class Bird2 extends Animal2 {
                constructor(legs) {
                    super(legs); // Equivalent to Animal.call(this, legs);
                }
                // if constructor is not there then it is equivalent to the
                    // constructor(...args) {
                    //     super(...args);
                    // }
                //but if you are creating a constructor and not calling the super(), then it will give an error
                fly() {
                    console.log('flying');
                }
            }
        //Shadowing Methods
            class Dog extends Animal {
                constructor() {
                    super(4);
                }
                walk() { // redefining the Animal class method
                    super.walk();// to call the method from the parent class
                    console.log(`go walking`);
                }
            }

            let bingo = new Dog();
            bingo.walk(); // go walking


            let bird = new Bird2(2);

            bird.walk();
            bird.fly();
        //inheriting the static members
            //derived class inherits all the static member fo the class
                class Animal6 {
                    constructor(legs) {
                        this.legs = legs;
                    }
                    walk() {
                        console.log('walking on ' + this.legs + ' legs');
                    }
                    static helloWorld() {
                        console.log('Hello World');
                    }
                }

                class Bird6 extends Animal6 {
                    fly() {
                        console.log('flying');
                    }
                }
                Bird6.helloWorld(); // Hello World
        //inheriting from the built-in types
            //you can also inherit from the built in type function
                class Queue extends Array {
                    enqueue(e) {
                        super.push(e); // or generally we use Array.prototype.push()
                    }
                    dequeue() {
                        return super.shift();
                    }
                    peek() {
                        return !this.empty() ? this[0] : undefined;
                    }
                    empty() {
                        return this.length === 0;
                    }
                }

                var customers = new Queue();
                customers.enqueue('A');
                customers.enqueue('B');
                customers.enqueue('C');

                while (!customers.empty()) {
                    console.log(customers.dequeue());
                }
    //new.target meta property
        // to detect whether the function or constructor was called using the new keyword or not
        //in arrow function new.target belongs to the surrounding function
            function Person7(name) {
                if (!new.target) {
                    throw "must use new operator with Person";
                }
                this.name = name;
            }
        //in Class constructor, new.target refers to the constructor which is calling it
            class Person8 {
                constructor(name) {
                    this.name = name;
                    console.log(new.target.name); //constructor reference
                }
            }

            class Employee extends Person {
                constructor(name, title) {
                    super(name);
                    this.title = title;
                }
            }

            let john3 = new Person8('John Doe'); // Person
            let lily = new Employee('Lily Bush', 'Programmer'); // Employee


