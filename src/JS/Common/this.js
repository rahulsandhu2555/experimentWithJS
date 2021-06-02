// this reference to the object, which is calling the function
// in global context this === window
//function context
    //1. Function invocation
        function show() {
            console.log(this === window); // true
        }
        show();
    //2. method invocation
        let car = {
            brand: 'Honda',
            getBrand: function () {
                return this.brand;
            }
        }
        console.log(car.getBrand()); // Honda
        let brand = car.getBrand;
        console.log(brand()); // undefined // coz in this call this is window, which is undefined
                                // to solve this issue, need to use bind
    //3. Constructor invocation
        // while creating new object, this refers to the new object
    //4. Indirect Invocation
        //call and apply, allows to the set the value of the this.
        //getBrand.call(honda, "It's a "); //this => honda
    //5. Arrow Function
        // can't explicitly defined, takes the context where it is defined