//Typescript adds type in the JS
//opensource, build on the top of JS. First write code in TS and then compile the code in plain JS
//run on which JS runs

//TypeScript
    //superset of JS
    //improves productivity while avoiding bugs
    //implements future features of ES Next, you can use them today
    //types are used by the TS compilers to check for the code error and allows to understand what value is associated with variable

    //Type in TS
        //Primitive => number string boolean Null undefined Symbol
        //Object => array function class,  custom object
    //Type Annotation
        //let variableName: type;
        // let variableName: type = value;
        // let arrayName: type[];
        // let person: {
        //     name: string;
        //     age: number
        // };
        // let greeting : (name: string) => string;
    //Contextual typing => Ts uses location of the variable to infer the type of the variable
        document.addEventListener('click', function (event) {
            console.log(event.button); // as this is click event, TS knows there will be button property
        });
        //However scroll is UIEvent and there is no button property
        document.addEventListener('scroll', function (event) {
            console.log(event.button); // compiler error
        });
    //Type Inference vs Type annotation
        //Type Inference => guesses the type
        //Type annotation => explicitly tell the type
            //mostly use the type inference, use the type annotation in the following cases
                //when function returns type any
                //when you want a variable that can not be inferred
                //when you declare a variable and assign a value later
    //number
        // let x: number = 100; //decimal
        // let anotherBin: number = 0B010;  //binary
        // let octal: number = 0o10; //octal
        // let hexadecimal: number = 0XA; //hexadecimal
        // let big: bigint = 9007199254740991n; //bigint
    //String => "" '' ``
        //let firstName: string = 'John';
    //boolean
        // let pending: boolean;
        // pending = true;
    //Object
        //let employee: object;
        // employee = {
        //     firstName: 'John',
        //     lastName: 'Doe',
        //     age: 25,
        //     jobTitle: 'Web Developer'
        // };

        //object vs Object
            //object => represents all primitive
            //Object => describes the functionality of all Objects
                //Object has toString() and valueOf()
        //Empty type {} => describes the object with no property
            //if you will try to access the property, will throw the error
            // let vacant: {};
            // vacant.firstName = 'John'; //error TS2339: Property 'firstName' does not exist on type '{}'.
            //let vacant: {} = {};
            // console.log(vacant.toString()); // coz all the methods of Object will be available via prototype chaining
                // [object Object]
        //Array
            // let arrayName: type[];
            // let scores : (string | number)[];
        //Tuple
            //number of elements in tuple are fixed and types are known
                // let skill: [string, number]; // order is important, if you will switch you will get error
                // skill = ['Programming', 5];
            //with optional element
                //let bgColor, headerColor: [number, number, number, number?];
        //Enum => Enumerated type
            //group of named constant values
            //first use the enum keyword, followed by name of enum
            //then the value of constants
                // enum name {constant1, constant2, ...}; //constants1, constants2 are also the member of enum
                    //enum Month { Jan, Feb, Tue }
                    // function isItSummer(month: Month) { //Month is being used as a type
                    //     let isSummer: boolean;
                    //     switch (month) {
                    //         case Month.Jun:
                    //         case Month.Jul:
                    //         case Month.Aug:
                    //             isSummer = true;
                    //             break;
                    //         default:
                    //             isSummer = false;
                    //             break;
                    //     }
                    //     return isSummer;
                    // }
            //How Enum works
                // this is the generated js code of enum, can also accepts number when accepting enum
                var Month;
                (function (Month) {
                    Month[Month["Jan"] = 0] = "Jan";
                    Month[Month["Feb"] = 1] = "Feb";
                    Month[Month["Mar"] = 2] = "Mar";
                    Month[Month["Apr"] = 3] = "Apr";
                    Month[Month["May"] = 4] = "May";
                    Month[Month["Jun"] = 5] = "Jun";
                    Month[Month["Jul"] = 6] = "Jul";
                    Month[Month["Aug"] = 7] = "Aug";
                    Month[Month["Sep"] = 8] = "Sep";
                    Month[Month["Oct"] = 9] = "Oct";
                    Month[Month["Nov"] = 10] = "Nov";
                    Month[Month["Dec"] = 11] = "Dec";
                })(Month || (Month = {}));
                //var in console => clearly Typescript enum is JS Object
                // {
                //     '0': 'Jan',
                //     '1': 'Feb',
                //     '2': 'Mar',
                //     '3': 'Apr',
                //     '4': 'May',
                //     '5': 'Jun',
                //     '6': 'Jul',
                //     '7': 'Aug',
                //     '8': 'Sep',
                //     '9': 'Oct',
                //     '10': 'Nov',
                //     '11': 'Dec',
                //     Jan: 0,
                //     Feb: 1,
                //     Mar: 2,
                //     Apr: 3,
                //     May: 4,
                //     Jun: 5,
                //     Jul: 6,
                //     Aug: 7,
                //     Sep: 8,
                //     Oct: 9,
                //     Nov: 10,
                //     Dec: 11
                // }
            //to specify the number
                // enum Month { //now feb will take number 2 and so on...
                //     Jan = 1,
                //         Feb,...
            //When to use enum
                //when have small set of fixed values
                //and these values are known at compile time
        //any => when you don't know the type, like when getting the value from 3rd party api
            //if you don't explicitly, Type inference is any by default
            //any vs object
                //object => you can assign any value to the variable, but you can not access any method even if there is
                    // let result: any;
                    // result = 10.123;
                    // console.log(result.toFixed());
                    // result.willExist(); // doesn't give error even if willExist doesn't exist, coz it might be available at runtime

                    // let result: object;
                    // result = 10.123;
                    // result.toFixed(); //Error coz type object, can not access the method
        //void => absence of any type at all, opposite of any
            //typically use in function which does not return anything
                // function log(message): void {
                //     console.log(messsage);
                // }
                //=> improves code quality, you dont need to check entire function to see if it returns anything
                //ensure type-safe => you won't be able to assign it to any variable as it does not return anything
                //if var type is void => only undefined can be assigned
                    // let useless: void = undefined;
                    // useless = 1; // error
                    // useless = null; // OK if --strictNullChecks is not specified
        //never => that contains no value
            //it type is never you can not assign any value to it
            //typically used in the function which always throws error
                // function raiseError(message: string): never {
                //     throw new Error(message);
                // }
            //in the following never is inferred
                // function reject() {
                //     return raiseError('Rejected');
                // }
            //if there is indefinite loop, its return type is also never
                let loop = function forever() {
                    while (true) {
                        console.log('Hello');
                    }
                }
            //if not returned in all cases
                // function fn(a: string | number): boolean {
                //     if (typeof a === "string") {
                //         return true;
                //     } else if (typeof a === "number") {
                //         return false;
                //     }
                // }
                //to fix this return a function that returns never
                    // function fn(a: string | number): boolean {
                    //     if (typeof a === "string") {
                    //         return true;
                    //     } else if (typeof a === "number") {
                    //         return false;
                    //     }
                    //     // make the function valid
                    //     return neverOccur();
                    // }
                    //
                    // let neverOccur = () => {
                    //     throw new Error('Never!');
                    // }
        //Union Type
            //let result: number | string | boolean;
        //Typescript Alias => to create a new name for existing type
            //type alias = existingType;
            // type alphanumeric = string | number; //=> to combine the two type
        //String literal types
            // let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
            // mouseEvent = 'click'; // valid
            // mouseEvent = 'dblclick'; // valid
            // mouseEvent = 'mouseup'; // valid
            // mouseEvent = 'mousedown'; // valid
            // mouseEvent = 'mouseover'; // compiler error

    //Intersection Types
        //created new property by combining multiple existing properties
            //combine type => &
                //type typeAB = typeA & typeB;  // => will have the properties of both typeA and typeB
            //union type => |
                // let varName = typeA | typeB; // union type => will have property of typeA or typeB
        //type Order => order doesn't matter
            // type typeAB = typeA & typeB;
            // type typeBA = typeB & typeA; //both have the same properties

    //Type guard
        //typeof and instanceof => type guard in conditional block
        //typeof
            // if (typeof a === 'number' && typeof b === 'number') {
            //     return a + b;
            // }
        //instanceof
            // if (partner instanceof Customer) {
            //     message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
            // }
        //in
            // if ('isCreditAllowed' in partner) {
            //     message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
            // } else {
            //     // must be Supplier
            //     message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
            // }
        //user defined type guards
            // function isCustomer(partner: any): partner is Customer {
            //     return partner instanceof Customer;
            // }
            // function signContract(partner: BusinessPartner): string {
            //     let message: string;
            //     if (isCustomer(partner)) {
            //         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
            //     } else {
            //         message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
            //     }
            //
            //     return message;
            // }

    //Type Casting => JS does not have type casting because it is dynamically typed
        //HTMLInputElement =>extends HTMLElement => extends Element
        //to convert one variable to another type
            // let a: typeA;
            // let b = a as typeB;
        //to convert one variable to another we can use => <> or as
            // let input = document.querySelector('input["type="text"]');
            // console.log(input.value); => error coz return type is Element, and it does not have value property
                //only exists on HTMLInputElement
                // let input = document.querySelector('input[type="text"]') as HTMLInputElement;
            //console.log(input.value); =>
            //or
            //let enteredText = (input as HTMLInputElement).value;
        //using <> operator
            //let input = <HTMLInputElement>document.querySelector('input[type="text"]');
            // console.log(input.value);
            // let a: typeA;
            // let b = <typeB>a;

    //Type Assertion => do not carry type conversion
        //type assertion, instructs transcript compiler to specified as type
            //expression as targetType
            // let netPrice = getNetPrice(100, 0.05, true) as string;
            // console.log(netPrice);
        //alternative Type Assertion syntax
            //<targetType> value
            //let netPrice = <number>getNetPrice(100, 0.05, false);