//Class
    // class Person {
    //     ssn: string;
    //     firstName: string;
    //     lastName: string;
    //
    //     constructor(ssn: string, firstName: string, lastName: string) {
    //         this.ssn = ssn;
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    //
    //     getFullName(): string {
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }
//Access Modifiers
    //controls the access logically at the compilation time not at the run time
        //private
            //limits the visibility to the same class only
        //protected
            //allows properties and methods to be accessed in class and subclass only
        //public
            //allows them to be accessed from anywhere, (default)

        //readonly
            //to mark the properties immutable
            //can be assigned at the two places
                //in property declaration
                    // class Person {
                    //     readonly birthDate: Date;
                    //
                    //     constructor(birthDate: Date) {
                    //         this.birthDate = birthDate;
                    //     }
                    // }
                //in the constructor of the same class
                    // class Person {
                    //     constructor(readonly birthDate: Date) {
                    //     this.birthDate = birthDate;
                    // }
                    // }
            //readonly vs const
                //readonly => for class only and in declaration and constructor
                //const => for variable declaration
//Getter and setter
    // class Person {
    //     private _age: number;
    //     private _firstName: string;
    //     private _lastName: string;
    //
    //
    //     public get age() { // getter is also called accessor
    //         return this._age;
    //     }
    //
    //     public set age(theAge: number) { //setter is also called mutator
    //         if (theAge <= 0 || theAge >= 200) {
    //             throw new Error('The age is invalid');
    //         }
    //         this._age = theAge;
    //     }
    //
    //     public getFullName(): string {
    //         return `${this._firstName} ${this._lastName}`;
    //     }
    // }

//Inheritance => uses prototypical inheritance unlike classical inheritance in C#
   //class can reuse properties and methods, called inheritance
    //child class => which inherits the property
        // class Employee extends Person {
        //     constructor(
        //         firstName: string,
        //         lastName: string,
        //         private jobTitle: string) {
        //
        //     // call the constructor of the Person class:
        //     super(firstName, lastName);
        // }
        // }
    //method overloading
        // class Employee extends Person {
        //     constructor(
        //         firstName: string,
        //         lastName: string,
        //         private jobTitle: string) {
        //
        //     super(firstName, lastName);
        // }
        //
        // describe(): string {
        //     return super.describe() + `I'm a ${this.jobTitle}.`;
        // }
        // }
//Static method and properties
    //static properties are the one, which are shared among all the instances
    //static methods are the one, which are shared among all the instances

        // class Employee {
        //     private static headcount: number = 0; //static properties
        //
        //     constructor(
        //         private firstName: string,
        //     private lastName: string,
        //     private jobTitle: string) {
        //
        //     Employee.headcount++;
        // }
        //
        // public static getHeadcount() { //static method
        //     return Employee.headcount;
        // }
        // }

//Abstract classes
    //has atleast one abstract method
    //usually to define the common behaviour for derived classes to extend
    //can not be instantiated directly
        // abstract class Employee {
        //     //...
                //does not contain the method implementation, only the signature,
                //abstract method must be implemented in the derived class
        // }

//Interface
    //Camelcase Naming convention.
    //object type
        // interface Person { // after defining you can use it as a type
        //     firstName: string;
        //     readonly ssn: string; //readonly property
        //     middleName?: string; //optional property
        //     lastName: string;
        // }
    //function type => we can use interface to define the function type
        // interface StringFormat {
        //     (str: string, isUpper: boolean): string
        // }
        //>>>>>>>>>>>>.
        // let format: StringFormat;
        //
        // format = function (str: string, isUpper: boolean) {
        //     return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
        // };
        // console.log(format('hi', true)); //HI
    //class type => **in java or c# interface is used to define a contract between unrelated class
        // interface Json {
        //     toJSON(): string
        // }
        //>>>>>>>>>>>>>>>>>>>
        // class Person implements Json {
        //     constructor(private firstName: string,
        //     private lastName: string) {
        // }
        // toJson(): string {
        //     return JSON.stringify(this);
        // }
        // }
        //>>>>>>>>>>>>>>>>>>>>
        // let person = new Person('John', 'Doe');
        // console.log(person.toJson()); //{"firstName":"John","lastName":"Doe"}

//Extending an interface
    // interface A {
    //     a(): void
    // }
    // interface B extends A {
    //     b(): void // have both methods a() and b()
    // }
    // interface D extends B, C { //multiple interfaces can be extended
    //     d(): void
    // }

    //interface extending a class
        //when interface extends a class, it extends it private and public both
        //that is why these interface can be implemented by the class only which extends the same class
            // class Control {
            //     private state: boolean;
            // }
            // interface StatefulControl extends Control {
            //     enable(): void
            // }
            // class Button extends Control implements StatefulControl {
            //     enable() { }
            // }
            // class TextBox extends Control implements StatefulControl {
            //     enable() { }
            // }
            // class Label extends Control { }
            //
            // // Error: cannot implement
            // class Chart implements StatefulControl {
            //     enable() { }
            // }