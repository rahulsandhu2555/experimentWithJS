import React from "react";

function ObjectExample(){
    //unordered collection of key:value pair(properties)
    //** key can be any valid js value => string, number, array, even a function
    //function properties are method
    //to access . or [], obj.'building name' => error, use like obj['building name']

    let arr = [1,2,3]
    const obj1 = {
        [arr]: 4
    }
    console.log(obj1) //{1,2,3: 4}
    //to add a new property
        obj1.age = 24;
    //to check if property exists
        if('age' in obj1) console.log('property present');
    //to delete
        delete obj1.age;
    //to iterate over the properties
        for(let key in obj1) {
            //key ...keys
        }
    //to assign a method
        //1. obj1.greet = function (){}
        //2. function greet(){}
        //   obj1.greet = greet;
        //3. const obj ={
        //   greet: function (){}
        //  }
        //4. const obj ={ => after ES6
        //   greet(){}
        //  }

    //Object property types
        //1. Data properties
            //[[Configurarable]] => if property can be delete by delete operator //default  => true
                //once the property is defined non-configurable, it can be configurable again, only [[Writable]] can be changed
            //[[Enumerable]] => if property will be returned in for...in //default  => true
            //[[Writable]] => specifies if value can be changed //default  => true
            //[[Value]] => contains the actual value of the property //default  => undefined

            //to change these attributes use => Object.defineProperty()
            //Object.defineProperty() or Object.defineProperties() => for defining multiple properties
            //if used Object.defineProperty() to add the property then [[Configurarable]], [[Enumerable]], [[Writable]] false by default, if not explicitly defined
            //'use strict';

            let person = {};
            Object.defineProperty(person, 'ssn', {
                configurable: false,
                enumerable: false,
                writable: true,
                value: '012-38-9119'
            });
            //delete person.ssn; //TypeError: Cannot delete property 'ssn' of #<Object>
        //2. Accessor properties
            //[[Configurarable]]
            //[[Enumerable]]
            //[[Get]] => when you read accessor property, called automatically // default => undefined
            //[[Set]] => if you set value, this is automatically called
                //to define [[Get]] and [[Set]] you must use Object.defineProperty()
                    Object.defineProperty(person, 'fullName', {
                        get: function () {
                            return this.firstName + ' ' + this.lastName;
                        },
                        set: function (value) {
                            let parts = value.split(' ');
                            if (parts.length == 2) {
                                this.firstName = parts[0];
                                this.lastName = parts[1];
                            } else {
                                throw 'Invalid name format';
                            }
                        }
                    });
        //3. object property descriptor
            //Object.getOwnPropertyDescriptor(obj, age) //object and property name
            let person2 = {
                firstName: 'John',
                lastName: 'Doe'
            };
            let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
            console.log(descriptor);
            // {
            //     value: 'John',
            //     writable: true,
            //     enumerable: true,
            //     configurable: true
            // }
        //in ES6 obj.propertyIsEnumerable(prop) can be used to check if the property is enumerable or not

    //Ways to create the Object
        //Object literal =>
            // const person = {}
        //with new keyword
            function Person(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            let person3 = new Person('John','Doe');
                //new keywords does three thing
                    //1. creates empty object, assigns to this
                    //2. assigns values to this object
                    //3. returns this object
                    //equivalent to =>
                        function Person(firstName, lastName) {
                            // this = {};

                            // add properties to this
                            this.firstName = firstName;
                            this.lastName = lastName;

                            // return this;
                        }
    //return type from the function constructor
        function Person3(){
            this.firstName= 'John';
            this.lastName= 'Doe';
            return this; //=> by default this //=> if value is returned instead of object then it is ignored
                        //if object is returned than it is returned => return {}
        };
        const P3 = new Person3();
        console.log(P3)
    // if calling function constructor without new
        //let person3 = Person3('John','Doe'); //executes like a normal function, in this case, this keyword is not bound
                        //to Person object, it is bound to global object
        //to prevent function constructor calling without the new keyword, use new.target (in ES6)
            //if constructor function is called with the new keyword, returns function reference, else returns undefined
                function Person(firstName, lastName) {
                    if (!new.target) {
                        console.log('Called without new keyword')
                        return new Person(firstName, lastName);
                    }

                    this.firstName = firstName;
                    this.lastName = lastName;
                }

    //Durable constructor pattern to create Objects
        //does not have public property, its method does not interact with this keyword
        //used in secure environment, where new and this keyword are not allowed
            function secureAnimal(name) {
                var o = new Object();
                o.identify = function() {
                    console.log(name); //  no this
                }
                return o;
            }
            var alien = secureAnimal('?#@');
            alien.identify(); // ?#@ // secure coz it does not allow external method to access, only via the object created

    //Object Destructuring =>
        let p = {
            firstName: 'John',
            lastName: 'Doe'
        };
        let {
            firstName,
            lastName ='sandhu' //setting default value
        } = p;
        //Destructuing a null object will give an error
            function getPerson() {
                return null;
            }
            let {
                firstName1,
                lastName1
            } = getPerson();
            console.log(firstName, lastName); // will throw an error
        // to avoid null error
            let {
                firstName2,
                lastName2
            } = getPerson() || {};
        //nested Object destructuring
            let {
                name: {
                    firstName3,
                    lastName3
                }
            } = getPerson();
        //in function parameters
            let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
            let display2 = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);





    return(
        <>Object Example</>
    )
}
export default ObjectExample