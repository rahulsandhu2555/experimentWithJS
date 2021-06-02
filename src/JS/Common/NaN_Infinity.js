//NaN is a property object
console.log(typeof NaN); // number
//Use
    //Operations return NaN
        //while trying to parse a string to a number, if can not convert to number returns NaN
            const input = 'X100';
            const num = parseInt(input);
            console.log(num); // NaN
// Use undefined as an operand
    console.log(undefined * 2); // NaN
//Using NaN as an operand
    const result = 10 + 1 / NaN;
    console.log(result); // NaN
//  Using indeterminate forms
    const result2 = 10 + 0 / 0;
    console.log(result2); // NaN
// Using invalid arguments of math function
    const result3 = Math.sqrt(-1);
    console.log(result3); // NaN

//Infinity
    //Infinity is a property of global object
    const result5 = typeof (Infinity);
    console.log(result5); // number
    //to check if number is finite
        Number.isFinite('value'); //true if finite

    //ParseFloat()
        let weight = parseInt('120kg');
        console.log(weight); // 120
        let weight2 = parseInt('Infinity');
        console.log(weight2); // NaN       // while parseFloat() recognises and returns infinity
        let weight3= parseFloat('Infinity');
        console.log(weight3); // Infinity
    //JSON serialization => serialises infinity to null
        const resource = {
            amount: Infinity
        };
        console.log(JSON.stringify(resource)); //=>{"amount":null}
    //math methods => some methods returns infinity (flaw)
        let ratings = []; // empty array
        let max = Math.min(...ratings);
        console.log(max); // Infinity