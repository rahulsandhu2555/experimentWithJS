//Rest, Spread,

//Rest Operator => (...) => packs into array
    //allows to represent indefinite number of arguments in array
    function fn(a,b,...args) {
        //...
    }
    //must be at the end, otherwise will give an error
    // function foo(a,...rest, b) {
    //     // error
    // };
    //or you can use the argument object to access the parameter
    //Arrow function => if you are using the arrow function, you must use the rest operator, because arrow function does not have
    // the argument object
    //rest parameter in the dynamic function
    var showNumbers = new Function('...numbers', 'console.log(numbers)');
    showNumbers(1, 2, 3);
    //Spread Operator => (...) => unpacks
    //used to spread iterable objects like array, map, set
    const odd = [1,3,5];
    const combined = [2,4,6, ...odd];
    console.log(combined);//[ 2, 4, 6, 1, 3, 5 ]
    //ex. to push the array into other
    var rivers = ['Nile', 'Ganges', 'Yangte'];
    var moreRivers = ['Danube', 'Amazon'];
    Array.prototype.push.apply(rivers, moreRivers);
    console.log(rivers);
    //or
    rivers.push(...moreRivers);
    // let initialChars = ['A', 'B'];
    // let chars = [...initialChars, 'C', 'D'];
    // let allNumbers = [...numbers, ...moreNumbers];
    // let scores = [80, 70, 90];
    // let copiedScores = [...scores];
    // let chars = ['A', ...'BC', 'D'];
    // console.log(chars); // ["A", "B", "C", "D"]
//Object Literal Extension
    //before es6
        function createMachine(name, status) {
            return {
                name: name,
                status: status
            };
        }
    //after es6
        function createMachine2(name, status) {
            return {
                name,
                status
            };
        }
    //you can also create with local objects
        let name = 'Computer',
            status = 'On';

        let machine = {
            name,
            status
        };

    //exporting in ES6 => export  variable function and class
        //executes in strict mode only, means variables don't get added to global automatically
            export let message = 'ES6 Modules';
            //import { message, setMessage } from './message.js' //=> name in curly braces, which are called bindings
            // <body>
            // <script type="module" src="./app.js"></script>    //type => module of the script
            // </body>

        //when you import, it behaves like const, you can not redefine or update the value of this one
        //to import entire module => * as variable
            // import * as cal from './cal.js';
            //cal.sum();
        //if multiple import from a file => loads in the file for the first time and gets use later
            // import { a } from './cal.js'; => loaded in the memory here
            // import { b } from './cal.js';
        //limitations of import and export
            //must be used outside the other statement and functions
                if( true ) {
                    // export sum; //Syntax error
                }
                function importSum() {
                    //import {sum} from './cal.js'; => though after ES2020 we can dynamically import function-like object
                }
        //Aliasing
            // math.js
            function add( a, b ) {
                return a + b;
            }
            export { add as sum };
            //import { sum } from './math.js';
            //import {sum as total} from './math.js';
        //Re-exporting a binding
            // import { sum } from './math.js';
            // export { sum };
                //export {sum} from './math.js';
        //to import without the binding
            //add that to the prototype of the object and that can be used globally
                Array.prototype.contain = function(e) {
                    // contain implementation
                    // ...
                }
                //import './array.js';
                [1,2,3].contain(2); // true
        //Default exporting => there can be only one default export
            // sort.js
            export default function(arr) {
                // sorting here
            }
            //import sort from sort.js; => no need to specify the name, as module represents the name
            //sort([2,1,3]);
            // import sort, {heapSort} from './sort.js'; => default export should come at the first place
            //import { default as quicksort, heapSort} from './sort.js';