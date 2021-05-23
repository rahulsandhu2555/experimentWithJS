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

    //Object property types
        //1. Data properties
            //[[Configurarable]] => if property can be delete by delete operator //default  => true
            //[[Enumerable]] => if property will be returned in for...in //default  => true
            //[[Writable]] => specifies if value can be changed //default  => true
            //[[Value]] => contains the actual value of the property //default  => undefined

            //to change these attributes use => Object.defineProperty()
            //Object.defineProperty() or Object.defineProperties()
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