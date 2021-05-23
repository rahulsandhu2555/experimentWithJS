//Generics
    //generics allow to write, reusable and generalized form of function, classes, interfaces

    //lets say we want to get a random number from the array
        // function getRandomNumberElement(items: number[]): number {
        //     let randomIndex = Math.floor(Math.random() * items.length);
        //     return items[randomIndex];
        // }
        //if we want to get a random string from the array, we will create the same function with the string[]
            // function getRandomStringElement(items: string[]): string {
            //     let randomIndex = Math.floor(Math.random() * items.length);
            //     return items[randomIndex];
            // }
        //further if we want to get the random from object array, then we will have to create another function
        //to avoid that we use
            //1.
                // function getRandomAnyElement(items: any[]): any {
                //     let randomIndex = Math.floor(Math.random() * items.length);
                //     return items[randomIndex];
                // }
            //2. Generics
                // function getRandomElement<T>(items: T[]): T { //<T> => allows you to capture the type, while calling fn
                //     let randomIndex = Math.floor(Math.random() * items.length);
                //     return items[randomIndex];
                // }
                //calling a generic function
                    // let numbers = [1, 5, 7, 4, 2, 9];
                    // let randomEle = getRandomElement<number>(numbers); // passing number as a T
                    // console.log(randomEle);
                //generally we will use type inference, we will let typescript decide the type of the T
                    // let numbers = [1, 5, 7, 4, 2, 9];
                    // let randomEle = getRandomElement(numbers); // we did not pass number as a T, compiler checked the list and inferred
                    // console.log(randomEle);
                //generic function with multiple types
                    // function merge<U, V>(obj1: U, obj2: V) {
                    //     return { //type inference infers the return type of the combined of U and V
                    //         ...obj1,
                    //         ...obj2
                    //     };
                    // }
//benefits
    //leverage type check at the compile time
    //eliminate type casting
    //allows to write generic algorithms
//generic constraints
    // function merge<U, V>(obj1: U, obj2: V) {
    //     return {
    //         ...obj1,
    //         ...obj2
    //     };
    // }
    // in this function it does not prevent from passing non object
        // let person = merge(
        //     { name: 'John' },
        //     25                  //=> not a object still works fine
        // );
        // console.log(person); //{ name: 'John' }
    //to constraint we can use extends keyword
        // function merge<U extends object, V extends object>(obj1: U, obj2: V) {
        //     return {
        //         ...obj1,
        //         ...obj2
        //     };
        // }
    //type parameter in generic constraints
        // function prop<T, K>(obj: T, key: K) {
        //     return obj[key];
        // }// => Type 'K' cannot be used to index type 'T'.
        //to resolve this =>  extends keyof to constraint to the property of the other object
            // function prop<T, K extends keyof T>(obj: T, key: K) { //adding constraints to K, to be the key of T
            //     return obj[key];
            // }
        // let str = prop({ name: 'John' }, 'name');
        // console.log(str); //John
        // let str = prop({ name: 'John' }, 'age');
        // Argument of type '"age"' is not assignable to parameter of type '"name"'.

//Generic Class
    // class className<T>{
           //...
    // }
    // class className<K,T>{
           //...
    // }
    // class className<T extends TypeA>{
           //...
    // }

        // class Stack<T> {
        //     private elements: T[] = [];
        //     constructor(private size: number) {
        // }
        // isEmpty(): boolean {
        //     return this.elements.length === 0;
        // }
        // isFull(): boolean {
        //     return this.elements.length === this.size;
        // }
        // push(element: T): void {
        //     if (this.elements.length === this.size) {
        //     throw new Error('The stack is overflow!');
        // }
        // this.elements.push(element);
        //
        // }
        // pop(): T {
        //     if (this.elements.length == 0) {
        //         throw new Error('The stack is empty!');
        //     }
        //     return this.elements.pop();
        // }
        // }

//Generic interface
    //like classes interfaces can be generic
        // interface interfaceName<T> {
        //     // ...
        // }
        // interface interfaceName<U,V> {
        //     // ...
        // }

    //generic interface to describe the object property
        // interface Pair<K, V> {
        //     key: K;
        //     value: V;
        // }
        // let month: Pair<string, number> = {
        //     key: 'Jan',
        //     value: 1
        // };
        //
        // console.log(month);
    //generic interface that describes method
        // interface Collection<T> { // generic interface with two methods
        //     add(o: T): void;
        //     remove(o: T): void;
        // }
        // => List<T> class implements Collection<T>
            // class List<T> implements Collection<T>{
            //     private items: T[] = [];
            //
            //     add(o: T): void {
            //         this.items.push(o);
            //     }
            //     remove(o: T): void {
            //         let index = this.items.indexOf(o);
            //         if (index > -1) {
            //             this.items.splice(index, 1);
            //         }
            //     }
            // }

    //Generic interfaces that describe index types
            // interface Options<T> {
            //     [name: string]: T
            // }
            //
            // let inputOptions: Options<boolean> = {
            //     'disabled': false,
            //     'visible': true
            // };