//for...in to loop enumerable properties // strings and symbol can be keyed
    var person = {
        firstName: 'John',
        lastName: 'Doe',
        ssn: '299-24-2351'
    };

    for(var prop in person) {
        console.log(prop + ':' + person[prop]);
    }
    // firstName:John
    // lastName:Doe
    // ssn:299-24-2351
//for...in loop and inheritance
    //when objects inherits from another object, for...in loop goes up to the inherited object and enumerates
    var decoration = {
        color: 'red'
    };
    var circle = Object.create(decoration);
    circle.radius = 10;
    for(const prop in circle) {
        console.log(prop);
    }
    //radius
    // color
    //if you want to enumerate over circle property only
    for(const prop in circle) {
        if(circle.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }
    //radius
//for...in loop and array
    //should avoid using for...in on array, specially when order is important
        var arr = [];
        // set the third element to 3, other elements are `undefined`
        arr[2] = 3;

        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
        // undefined
        // undefined
        // 3
        for (const key in arr) {
            console.log(arr[key]);
        }
        //3 ignores the first two undefined values