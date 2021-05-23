//ES6 introduced a new construct for...of for iterable objects
    //used for
        //built in array, set, string, map
        //Array like objects Arguments or NodeList
        //user defined object that implements iterable protocol
    // for (variable of iterable) {
    //     // statements
    // }
    //or => array destructuring
        // const [index, color] of colors.entries()
        let colors = ['Red', 'Green', 'Blue'];

        for (const [index, color] of colors.entries()) {
            console.log(`${color} is at index ${index}`);
        }
    //or => object destructing
        const ratings = [
            {user: 'John',score: 3},
            {user: 'Jane',score: 4},
            {user: 'David',score: 5},
            {user: 'Peter',score: 2},
        ];

        let sum = 0;
        for (const {score} of ratings) {
            sum += score;
        }

        console.log(`Total scores: ${sum}`); // 14
    //or => iteration over string
        let str = 'abc';
        for (let c of str) {
            console.log(c);
        }
    //or => iteration over Map object
        let colors2 = new Map();

        colors2.set('red', '#ff0000');
        colors2.set('green', '#00ff00');
        colors2.set('blue', '#0000ff');

        for (let color of colors2) {
            console.log(color);
        }
    //or => iteration over Set Object
        let nums = new Set([1, 2, 3]);

        for (let num of nums) {
            console.log(num);
        }
//for...of vs for...in
    //for...of is used for iterable objects, Collection, rather than properties
    //for...in iterates over enumerable properties of an object, not over Array, Map or set or collection