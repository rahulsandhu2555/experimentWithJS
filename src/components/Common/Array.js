//Array
//can hold different data type in single and can expand dynamically

//To create array
const arr = new Array(); // Array(10); to fix the size of array, new keyword optional
console.log(arr) //=> []

const arr2 = new Array(1,2,4,5); // to pass the initial values to constructor
let athletes = new Array(3); // creates an array with initial size 3
let signs = new Array('Red'); // creates an array with one value in it

let arr3 = ['a', 3, 'article'];
arr3[2] = 'new article'; // arr3 => ['a', 3, 'new article']


// .length => to find the length => 2^32 32 bit unsigned integer
    // if set length to 0 , array will be emptied
    const fruits = ['Apple', 'Orange', 'Strawberry'];
    fruits.length = 2;
    console.log(fruits); // [ 'Apple', 'Orange' ]
    // SParse Array = [2,,4,5]
    const fruits2 = ['Apple', 'Orange', 'Strawberry'];
    fruits2.length = 5;
    console.log(fruits2); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ] // making sparse array

//Stack => Push Pop , LIFO
    let stack = [];
    stack.push(1);
    console.log(stack); // [1]
    stack.push(2);
    console.log(stack); // [1,2]
    console.log(stack.pop()); //  2 => if array is empty undefined will be returned
    console.log(stack); // [1];

// Splice() => to delete, insert, update item in array => doesn't create a new array, updates old one
//to delete => Array.splice(position,num);
    //position => of first item to delete, num=> number of items to delete
//to insert => Array.splice(position,0,new_element_1,new_element_2,...);
    //position => to insert new element, | 0 => to indicate no element is going to delete | 3rd, 4th, 5th ..
    // elements are going to be inserted at the position
// to update => we will use num to 1
    let languages = ['C', 'C++', 'Java', 'JavaScript'];
    languages.splice(1, 1, 'Python');
    console.log(languages);
    // ["C", "Python", "Java", "JavaScript"]
//Every
    //returns boolean, checks every element, every elements satisfies the condition, true, otherwise false
    //arrayObject.every(callback[, thisArg])  thisArg is optional
    //callback function should be of this format
    function callback(currentElement, index, array){ // index and array are optional
        //...
    }
    // .every on [] empty array will always return true

//Some => same as every but true, even if only one element passes the test and on empty array always false

//Filter
    //returns a new filtered array
    // syntax => arrayObject.filter(callback, contextObject);
    // function callback(currentElement, index, array){
    //     // ...
    // }
//indexOf()
    //to search the index => Array.indexOf(searchElement, fromIndex)
        //formIndex is optional, if omit, will start from 0, if negative then .length + fromIndex
        // uses strict equal to compare ===
        // returns -1 if can't find element
//lastIndexOf()
    //same as indexOf instead giving index of the last found element, or -1 if can't find the element
//sort
    //changing the position of the elements in the original array, not creating a new one
    //it converts elements to string and then compares
    let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
    numbers.sort();
    console.log(numbers); // [ 0, 1, 10, 2, 20, 3, 30 ]
    //to fix this we need to pass an optional compare function
        //array.sort(comparefunction)
        function compare(a,b) {
            // ...
        }
        //if -ve a will come first, if +ve  b will come first, if 0 will be treated equally
        let numbers2 = [0, 1 , 2, 3, 10, 20, 30 ];
        numbers2.sort( function( a , b){
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });

        console.log(numbers2);

//map() => returns a new array
    //arrayObject.map(callback[,contextObject]);
    function callback2(currentElement,index,array){
        // ...
    }

// reduce() => reducing an array into value
    //array.reduce(reducer [, initialValue])
    //function reducer(accumulator, currentValue, currentIndex, array){}
    //accumulator => value returned from the previous function call or array[0], or if initial value is defined then for the
        //first time, it will be equal to initial value
    //currentValue => if initial value is passed => array[0], else array[1]
    let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
    },
        {
            product: 'Screen Protector',
            qty: 1,
            price: 9.98
        },
        {
            product: 'Memory Card',
            qty: 2,
            price: 20.99
        }
    ];
    let total = shoppingCart.reduce(function (acc, curr) {
        return acc + curr.qty * curr.price;
    },0);

    console.log(total);

//reduceRight()()
    //works exactly like reduce, but from right to left

//foreach()
    //Array.forEach(callback [, thisArg]);
    let ranks = ['A', 'B', 'C'];
    ranks.forEach(function (e) {
        console.log(e);
    });

//To merge array
    let odds = [1,3,5];
    let evens = [2,4,6];
    // merge odds and evens array
    let combined = odds.concat(evens);
    let combined2 = [].concat(odds, evens);
    let combined3 = [...odds, ...evens];

//Slice and use of slice
    //Array.prototype provides .slice()
    //slice(start, stop); => start and stop optional, if start is undefined, slicing starts at 0
        //returns new array, and doesn't include element at stop position => performs shallow copy
    //uses
        //1. to clone an array
            var numbers5 = [1,2,3,4,5];
            var newNumbers = numbers5.slice();
        //2. Copy a portion of an array
            var colors = ['red','green','blue','yellow','purple'];
            var rgb = colors.slice(0,3);
            console.log(rgb); // ["red", "green", "blue"]
        //3. Convert array-like objects into arrays
            function toArray() {
                return Array.prototype.slice.call(arguments);
            }
            var classification = toArray('A','B','C');
            console.log(classification); // ["A", "B", "C"]
            //or
            var list = [].slice.call(document.querySelectorAll('p'));

//join
    //=> concat all array elements and returns string
    // Array.prototype.join([separator]) => if separator not passed default is comma ','
    //if only one element, returned without separator, if [], empty string returned ''
    //converts undefined, null, [] into '' empty string
        //application
            //1. to join css classes
            //2.  to replace all occurrences of a string
                const title = 'JavaScript array join example';
                const url = title.split(' ')
                    .join('-')
                    .toLowerCase();

                console.log(url);

// multidimensional array
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.table(activities);

//Accessing a out-of-bounds array element returns undefined


