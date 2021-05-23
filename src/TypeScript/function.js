//Typescript function
    // function name(parameter: type, parameter:type,...): returnType {
    //     // do something
    // }
    //Arrow function
        // let add: (a: number, b: number) => number =
        //     function (x: number, y: number) {
        //         return x + y;
        //     };
    //optional parameter => in JS you can call function without parameter, means JS supports optional parameter by default
        //in TS => matches number or parameters and arguments
            //parameter?:
            // function multiply(a: number, b: number, c?: number): number {
            //     if (typeof c !== 'undefined') {
            //         return a * b * c;
            //     }
            //     return a * b;
            // }
    //defalut parameter
        // function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
        //     //
        // }
        // function applyDiscount(price: number, discount: number = 0.05): number {
        //     // ...
        // }
    //rest
        // function fn(...rest: type[]) {
        //     //...
        // }
        // function getTotal(...numbers: number[]): number {
        //     let total = 0;
        //     numbers.forEach((num) => total += num);
        //     return total;
        // }
    //function overloading
        // function add(a: number, b: number): number;
        // function add(a: string, b: string): string;
        // function add(a: any, b: any): any {
        //     return a + b;
        // }
    //functional overloading with optional parameter
        //if function overloading is there then, number of parameters should be the same, or if there are extra parameter
        //it should be optional, else it would give error
        // function sum(a: number, b: number): number;
        // function sum(a: number, b: number, c: number): number; //this will give error
        // function sum(a: number, b: number, c?: number): number {
        //     if (c) return a + b + c;
        //     return a + b;
        // }
    //Method overloading
        //typescript also supports methods, properties of object
        //     class Counter {
        //         private current: number = 0;
        //         count(): number;
        //         count(target: number): number[];
        //         count(target?: number): number | number[] {
        //         if (target) {
        //             let values = [];
        //             for (let start = this.current; start <= target; start++) {
        //                 values.push(start);
        //             }
        //             this.current = target;
        //             return values;
        //         }
        //         return ++this.current;
        //     }
        //     }
        //
        //     let counter = new Counter();
        //
        //     console.log(counter.count()); // return a number
        //     console.log(counter.count(20)); // return an array