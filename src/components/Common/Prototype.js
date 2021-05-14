import React from "react";

export default function PrototypeExample(){
    const x1 = true;
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
            console.log(Object.getPrototypeOf(teacher) === person); // true
    return(
        <>prototype</>
    )
}
