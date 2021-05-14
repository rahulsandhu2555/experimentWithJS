//primitives are stored in stack
//while reference types are stored in heap memory

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