// to create regex, enclose string in forward slashes
    let re = /hi/;
    let re2 = new RegExp('hi'); //using regex constructor

//to test
    let result = re.test('hi John'); //true
//exec()
    //perfomrs check on entire string and returns an array, if none found null returned

//Flag = i
    let re3 = /hi/i; // to ignore the case sensitive
    let result3 = re.test('Hi John'); // true for hi Hi HI
//flag = u ?
//Global = g
    //if g is not preset, it will match the first and return. if g is present it will return all the matched string
//Searching string
    //str.match(regexp) => returns all matches
    let str = "Are you Ok? Yes, I'm OK";
    let result4 = str.match(/OK/gi); // ["OK", "OK"]

    // let index = str.search(regexp); => if you will pass non-regex will convert to regex
        // returns the index of the first occurence if not found returns -1

//replace string => replace()
//     let newStr = str.replace(substr | regexp, newSubstr);
    let strn = "Are you Ok? Yes, I'm OK.";
    let result5 = str.replace(/OK/gi,'fine'); //Are you fine? Yes, I'm fine.

//Character classes
    //Number \d => 0 to 9
        {
            let phone = '+1-(408)-555-0105';
            let re = /\d/;
            console.log(phone.match(re)); // ["1"]
            let re2 = /\d/g; // ["1", "4", "0", "8", "5", "5", "5", "0", "1", "0", "5"]
            let phoneNo = re2.join(''); //14085550105
        }
    // \s => white space symbol => space, \t tab, \n new line
    // \w => word characters [A-Za-z0-9_]
//Inverse classes
    //\D => matches any char except digit
    //\W => any char except word char
    //\S => any char except whitespace
    // . => matches any except new line, include s if want to include newline
//Anchors
    //^ $ don't match character, they match position
    //^ caret => matches the begining
    //$ => matches the end
    // m flag to enable multiline
        {
            let str = 'JavaScript';
            console.log(/^J/.test(str)); // true
            console.log(/t$/.test(str)); // true
        }
//Word boundaries \b
    //checking from words
    console.log('Hello, JS!'.match(/\bJS\b/)); // true
    console.log('Hello, JSscript!'.match(/\bJS\b/)); // null
    let str3 = 'I start coding JS at 05:30 AM';
    let re5 = /\b\d\d:\d\d\b/;
    let result6 = str3.match(re5);
    console.log(result6); //["05:30"]
//Quantifiers => {n}
    //   /\d{4}/  same as /\d\d\d\d/
    // range {n, m}
        //{2, } => any number more than 2 coz there is no upper limit
    //Shorthands
        // + => means one or more
        // ? => {0,1} zero or one
        // * => {0, } zero or more
//Sets
    //[aeiou] => means any char from a e i o u
    //Range => [a-z] [0-9] [A-Z]
    //Excluding range => [^...] , [^0-9] means no number same as \D
    //to escape special char => [\^#&] to escape #$ or [#$]

