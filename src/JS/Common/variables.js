//primitives are stored in stack
//while reference types are stored in heap memory
    //var
        //global scope
        //assigned to memory immediately and initialized to undefined
            function increase() {
                var counter = 10; //varibles declared inside the function are not accessible out side the function
            }
            // cannot access the counter variable here
    //let
        //block scope variable, hoisted but not initialized to undefined by default
        //not attached to global object
        // let counter = 0;
        // let counter; => error on redeclaration
    //const
        //for read only reference
        let scores = [75, 80, 95];
        for (const score of scores) {
            console.log(score);
        }
        //while
        for (const i = 0; i < scores.length; i++) { // TypeError
            console.log(scores[i]);
        }
//primitive wrapper types
    //Three => Boolean, Number, String
        let language = 'JavaScript';
        let s = language.substring(4);
        console.log(s);  // Script => language is primitive type, it does not have any functions like .substring()
                        //creating object => calling method => deleting instance immediately
        //equalant to
            // behind the scenes of the language.substring(4);
            let temp = new String(language);
            let str = temp.substring(4);
            temp = null;
//default undefined value
    //const propValue = object.propName ?? defaultValue;
    //if object property propValue is null or undefined, defaultValue is returned
        let counter = { current: 0 };
        const max = counter.max ?? 100;