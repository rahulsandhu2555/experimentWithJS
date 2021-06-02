//ES5 => prefix to provide literals
    //prefix 0 => for octal litrals
        // let a = 051;
        // console.log(a); // 41
        // let b = 058; // invalid octal
        // console.log(b); // 58
        // "use strict"
        // let b = 058; // invalid octal
        // console.log(b);
        let c = 0o51;
        console.log(c); // 41
    //no prefix for decimal
    //0x for hexadecimal
//ES6
    //for binary
        let f = 0b111;
        console.log(f); // 7
    //template literal
        let simple = `This is a template literal`;
            //with following feature
                //multiline string
                //string interpolation
                //HTML escaping
            //if there is backtick in the string, need to escape it with backslash
                let strWithBacktick = `Template literals use backticks \` insead of quotes`;
        //multiline before ES6
            // var msg = 'Multiline \n\  //=> backslash after \n indicates continuation of string
            // string';
            let p =
                `This text
            can
            span multiple lines`;
            //variable in template strings
                // ${variable_name}
    //Tagged templates
        let greeting = tag`Hi`; //to carry the transformation and substitution
        function tag(literals, ...substitutions) {
            // return a string
        }