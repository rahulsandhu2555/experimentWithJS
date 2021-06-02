// Strings '' or "" or ``
//Primitive type, Immutable

// to escape special characters use \ => \r\n next line window \n next linux line, \t tab \ backslash
let str2 = 'I\'m a string!';

//convert values to string
// let x = String(n)
// ''+n;
// n.toString(); => doesn't work for undefined or null

let status = false;
let str = status.toString(); // "false" => converting boolean to string
let back = Boolean(str); // true => and then string to boolean

//String comparison is based on the numeric value of that character
let result = 'a' < 'b';
console.log(result); // true
let result2 = 'a' < 'B';
console.log(result2); // false


let str3 = new String('JavaScript String Type');
//This String object is wrapper of primitive string value
//to get the value from the string object use
console.log(str3.valueOf());
console.log(str3.toString());
console.log(str3.toLocaleString());
//to get the charcter at an index you can use
console.log(str[0]); // J  => prior to ES5 .charAt(0) was used

//String manipulation
//1. concat
    // String.prototype.concat() accepts list of string
    let firstName = 'John';
    let fullName = firstName.concat(' ','Doe'); // not modifying existing string creating and returning a new one
    let fullName2 = firstName + ' ' + 'Doe';

    let colors = ['Blue',' ','Green',' ','Teal'];
    let result23 = ''.concat(...colors); //=> Blue Green Teal
    let str6 = ''.concat(1,2,3); // => 123

//2. Substring
    // substr(startIndex,[length]); , if length is not provided then it will provide upto the end
    let str4 = "JavaScript String";
    console.log(str4.substr(0, 10)); // "JavaScript"
    console.log(str4.substr(11,6)); // "String"
    // substring(startIndex,endIndex) if you want to use the index
    console.log(str4.substring(4, 10)); // "Script" => exclusive of the last index
    let email = 'john.doe@gmail.com';
    let domain = email.substring(email.indexOf('@') + 1);
//Slice
    //let substr = str.slice(startIndex [, endIndex ]);
    //If the startIndex or endIndex is negative, the slice() treats it as str.length + startIndex

// Includes
    //string.includes(searchString [,position]) by default position is 0, position at which starts searching
    //returns boolean
//3. Locating substring
    //string.indexOf(substring,[fromIndex]); returns -1 if not found, otherwise returns index
//4. to remove whitespace
    //str.trim() => to remove leading and trailing whitespaces
    // after ES5, trimStart(), trimEnd() to remove from start and end respectively
//5. to change cases
    //str.toLowerCase(), str.toUpperCase()
//6. To compare strings
    console.log('A'.localeCompare('B')); // -1  first string comes before the second string alphabetically, the method returns -1
    console.log('B'.localeCompare('B')); // 0
    console.log('C'.localeCompare('B')); // 1
//7. replacing substring
    // string.replace(regularExpression, replaceText) => returns a copy of the string
    let str5 = "the baby kicks the ball";
    // replace "the" with "a"
    let newStr = str5.replace(/the/g, "a");
    console.log(newStr); // "a baby kicks a ball"
    console.log(str5); // "the baby kicks the ball"
    newStr = str5.replace('kicks', 'holds');
    console.log(newStr); // "the baby holds the ball"
//8. Split
//String.prototype.split() => divides string into array of substrings
//split([separator, [,limit]]);   => both optional parameter, if separator is missing, returns the entire string
// you can even use regex in separator
// limit => number of substring in the array, if 0 => empty array will be returned