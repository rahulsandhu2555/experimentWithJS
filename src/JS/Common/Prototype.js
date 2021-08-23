import React from "react";

export default function PrototypeExample(){
    //Arrow function don't have Prototypes
    //in JS every function has a property called prototype that references and object
    //we can make use of prototype object to define all our sharable methods, instead of having to create separate
    //object

    exampleWhyNeedPrototype();
    function exampleWhyNeedPrototype(){
        //Need of prototype by example
        //lets say we need to create multiple Person object with property and methods
            let person = {};
            person.name = 'rahul';
            person.sayMyName = function (){
                console.log(`my name is ${this.name}`);
            }
            person.eat = function (food){
                console.log(`eating ${food}`);
            }
            person.sleep = function (){
                console.log(`sleeping`);
            }
        //to create multiple Person like this, we will need to create a function
            function Person(name){
                let person = {};
                person.name = name;
                person.sayMyName = function (){
                    console.log(`my name is ${this.name}`);
                }
                person.eat = function (food){
                    console.log(`eating ${food}`);
                }
                person.sleep = function (){
                    console.log(`sleeping`);
                }
                return person;
            }
            const rahul = Person('rahul');
            console.log(rahul.name);
            rahul.sayMyName();
            rahul.eat('Pizza');
            rahul.sleep();

            //Issue with this is, every time we are creating a new Person, we are creating same methods every time,
            //and allocating memory, what we can do is separate the usable function and pass the reference

            const personMethods = {
                sayMyName(){
                    console.log(`my name is ${this.name}`);
                },
                eat(food){
                    console.log(`eating ${food}`);
                },
                sleep (){
                    console.log(`sleeping`);
                }
            }
            //now pass this function reference while creating Object
            function PersonWithSharedMethods(name){
                let person = {};
                person.name = name;
                person.sayMyName = personMethods.sayMyName;
                person.eat = personMethods.eat;
                person.sleep = personMethods.sleep;
                return person
            }
            const rahul2 = PersonWithSharedMethods('sandhu');
            console.log(rahul2.name);
            rahul2.sayMyName();
            rahul2.eat('Pizza');
            rahul2.sleep();

            //To ease further use Object.create
                //it takes object as a parameter
            function PersonWithObjectDotCreate(name){
                let person = Object.create(personMethods);
                person.name = name;
                return person
            }
            //now no need to define the methods explicitly,
            const rahul3 = PersonWithObjectDotCreate('rahulsandhu');
            console.log(rahul3.name);
            rahul3.sayMyName();
            rahul3.eat('Pizza');
            rahul3.sleep();
            //coz when we are calling .sayMyName it searches in PersonWithObjectDotCrate, when not found, it checks
            //that person was created with Object.create, so delegated to the personMethods and checks there,
            //because of implicit binding rahul3.name => 'rahulsandhu' gets printed

            //Using prototype for sharable methods
            PersonWithPrototypeFunction.prototype.sayMyName  = function (){
                console.log(`my name is ${this.name}`);
            }
            PersonWithPrototypeFunction.prototype.eat = function (food){
                console.log(`eating ${food}`);
            }
            PersonWithPrototypeFunction.prototype.sleep = function (){
                console.log(`sleeping`);
            }
            function PersonWithPrototypeFunction(name){
                let person = Object.create(PersonWithPrototypeFunction.prototype);
                person.name = name;
                return person
            }
            const rahul4 = PersonWithPrototypeFunction('sandhurahul');
            console.log(rahul4.name);
            rahul4.sayMyName();
            rahul4.eat('Pizza');
            rahul4.sleep();

            //With using 'new' Keywords
            //Using prototype for sharable methods
            PersonWithNewKeyword.prototype.sayMyName  = function (){
                console.log(`my name is ${this.name}`);
            }
            PersonWithNewKeyword.prototype.eat = function (food){
                console.log(`eating ${food}`);
            }
            PersonWithNewKeyword.prototype.sleep = function (){
                console.log(`sleeping`);
            }
            function PersonWithNewKeyword(name){
                 // let this = Object.create(PersonWithNewKeyword.prototype);
                this.name = name;
                // return  this;
            }
            //coz when we are calling with the new keyword
                // let this = Object.create(PersonWithNewKeyword.prototype);
                // return  this;
                //these two parts are being taken care immediately, this object points to the prototype object
            const rahul5 = new PersonWithNewKeyword('newRahul');
            console.log(rahul5.name);
            rahul5.sayMyName();
            rahul5.eat('Pizza');
            rahul5.sleep();

            //1. Constructor Property
                //on every prototype there is a property called constructor, which points back to function itself
            console.log(PersonWithNewKeyword.prototype);
            //{sayMyName: ƒ, eat: ƒ, sleep: ƒ, constructor: ƒ}
            console.log(PersonWithNewKeyword.prototype.constructor);
            // ƒ PersonWithNewKeyword(name) {
            //     this.name = name;
            // }

            //2. Object.getPrototypeOf()
                //Object.getPrototypeOf(rahul5) => will give the prototype of the Object
            console.log(Object.getPrototypeOf(rahul5));
            //{sayMyName: ƒ, eat: ƒ, sleep: ƒ, constructor: ƒ}
            console.log(Object.getPrototypeOf(rahul5).constructor);
            // ƒ PersonWithNewKeyword(name) {
            //     this.name = name;
            // }
            console.log(rahul5.constructor);
            // ƒ PersonWithNewKeyword(name) {
            //     this.name = name;
            // }

            //3. instanceof
            //to check if the object is instance of constructor function
            console.log(rahul5 instanceof PersonWithNewKeyword);
                //under the hood it checks the prototype of the object
                console.log(Object.getPrototypeOf(rahul5) === PersonWithNewKeyword.prototype);

    }

    prototypalInheritance();
    function prototypalInheritance(){
        //by example => lets say there is a person with property name, and method saymyname()
            //another Programmer with property name, language, and methods saymyname() and code.
        //==>> we can do like this
        //Person
        function Person(name){
            this.name = name;
        }
        Person.prototype.sayMyName = function (){
            console.log(`my name is ${this.name}`);
        }

        //Programmer
        function Programmer(name, language){
            this.name = name;
            this.language = language;
        }
        Programmer.prototype.sayMyName = function (){
            console.log(`my name is ${this.name}`);
        }
        Programmer.prototype.code = function (){
            console.log(`I Like to Code`);
        }

        //it will work find but we have redundant code, we could have imported properties and methods from the Person
        //In JS inheritance is possible by prototype object, called prototypal inheritance

        //can be done like this
        function Programmer2(name, language){
            // this = Object.create(Programmer2.prototype)
            Person.call(this, name) //inheriting property
            this.language = language;
            // return this
        }
        Programmer2.prototype = Object.create(Person.prototype)
        Programmer2.prototype.code = function (){
            console.log(`I Like to Code`);
        }

        const rahul = new Programmer2('rahul', 'JS')
        rahul.code();
        rahul.sayMyName();

        //because Programmer prototype is made from Person prototype
        console.log(rahul.constructor); //shows Person constructor
        //to fix this
        Programmer2.prototype.constructor = Programmer2;
        console.log(rahul.constructor);// now it will show programmer2 constructor


        //Prototype Chain
            //start with object => then object's prototype => object's prtotype's prototype =>
            // ... until found Object.prototype = null

    }

    // testObject();
    function testObject(){
        console.log('========Object========');
        console.log(Object) // f Object() { [native code] }
        console.log(Object()) // {}
        console.log(Object.prototype); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
        console.log(Object.__proto__); //() { [native code] }

        console.log('========Person========');
        const person = {
            name: 'rahul'
        }
        console.log(person); //{name: "rahul"}
        console.log(person.prototype); //undefined
        console.log(person.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
        console.log();
        console.log('=========Person Object fn===========');
        function Person(){
            this.name = 'sandhu'
        }
        const p1 = new Person();
        console.log(p1); //Person {name: "sandhu"}
        console.log(p1.prototype); //undefined
        console.log(p1.__proto__); //{constructor: ƒ}

        console.log('=========function==============');
        function personFunction(){
            console.log('------ person function---------');
        }
        console.log(personFunction);
            // ƒ personFunction() {
            //     console.log('------ person function---------');
            // }
        console.log(personFunction.prototype); //{constructor: ƒ}
    }

    const x1 = false;
    if(x1)
    {
        //is a mechanism by which objects inherit properties from one another
        //objects can have a prototype object, which contains the template objects, from which it inherits the property
        //property name __proto__ which links the objects
        function FooBar(name){
            this.name = name
        }
        const obj1 = {
            name: 'sandhu'
        }
        // javascript is dynamic language, you can attach properties later also
        obj1.location = 'ghaziabad';
        console.log(obj1.location); // ghaziabad
        console.log(FooBar.prototype) //{constructor: ƒ}
        console.log(Object.getPrototypeOf(FooBar)) //f () { [native code] }
        console.log(obj1.__proto__)//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
        console.log(Object.getPrototypeOf(obj1))// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
        const instanceOfFooBar = new FooBar('rahul');
        console.log(instanceOfFooBar.prototype) // undfined

        //if we want to add the properties to the function, so that property can be used across all the function
        // answer is prototype

        //prototype is an object => attached to every function and object by default
        // => function prototype accessible, while object's prototype not visible
        function Student() {
            this.name = 'John';
            this.gender = 'M';
        }
        Student.prototype.age = 15; // to add age property across all Student object

        var studObj1 = new Student();
        console.log(studObj1.age); // 15

        var studObj2 = new Student();
        console.log(studObj2.age); //15

        function Student2() {
            this.name = 'John';
            this.gender = 'M';
        }

        var studObj = new Student2();

        console.log(Student2.prototype); // object
        console.log(Student2.__proto__); // [Function]
        console.log(studObj.prototype); // undefined , prototype property hidden for object, can be accessed by __proto__
        console.log(Object.getPrototypeOf(studObj)); //use Object.getPrototypeOf(obj) instead __proto__
        var proto = Object.getPrototypeOf(studObj);
        console.log(proto.constructor); // returns Student Function, that created instance
        console.log(studObj.__proto__); // object

        searchFlow();
        function searchFlow(){
            function Student() {
                this.name = 'John';
                this.gender = 'M';
            }
            Student.prototype.sayHi = function(){
                alert("Hi");
            };
            var studObj = new Student();
            studObj.toString(); // as .toString() is not the method of Student, it uses the studObj's __proto__
            //and tries to find there (which points to prototype object of Student function), but only sayHi is there,
            // so it moves up and checks the prototype object of Object and it finds the .toString() method there
        }
        console.log(Object); //Object() is a function not a object
        console.log(Object.prototype); //anonymous object, can be referenced by prototype
        //Object.prototype has one property constructor => which referes to the Object Function
        //Every function has a prototype object.
        // This prototype object references the Object.prototype object via [[prototype]] linkage or __proto__ property.
        //prototype chain allows to use the method using [[prototype]] linkage


        //function Person(name) { //created anonymous object with property |
        //     this.name = name;                                           v
        // }
        //

                                                //                 |----------------------------
                                                //                 v                            | .constructor
                                                //              Object  ----------------> constructor
                                                //                         .prototype     toString()
                                                //                                        valueOf()
        //                                                                                  ^
        //                                                                                  |
        //                 | ----------------------------                                   |
        //                 v                            | .constructor--------------------^
        //              Person  ----------------> constructor              [[prototype]] linkage
        //                         .prototype     toString()
        //                                        valueOf()
        //
        //
        //
        //
    }

    // codeHasOwnProperty();
    function codeHasOwnProperty(){
        // Syntax => hasOwnProperty(prop) => prop=> string name or symbol
        // Object.prototype.hasOwnProperty()
        // returns boolean, if the object has direct property
        const object1 = {};
        object1.property1 = 42;
        console.log(object1.hasOwnProperty('property1')); // true
        console.log(object1.hasOwnProperty('toString')); // false
        console.log(object1.hasOwnProperty('hasOwnProperty')); // false

        //hasOwnProperty returns true even if the value of the property is null or undefined
        let o = new Object();
        o.propOne = null;
        o.hasOwnProperty('propOne');   // returns true
        o.propTwo = undefined;
        o.hasOwnProperty('propTwo');   // returns true
    }

    //Object.create() = to create a new object and use existing object as a prototype
    //Object.create(proto, [propertiesObject])
        //proto => object to use as prototype
        //propertiesObject => to add additional properties for the object
            let person = {
                name: "John Doe",
                greet: function () {
                    return "Hi, I'm " + this.name;
                }
            };
            let teacher = Object.create(person); // creating teacher object with __proto__ of person object
            // to further add the properties to the teacher object
            teacher.name = 'Jane Doe';
            teacher.teach = function (subject) {
                return "I can teach " + subject;
            }
            //console.log(Object.getPrototypeOf(teacher) === person); // true
    return(
        <>prototype</>
    )
}


