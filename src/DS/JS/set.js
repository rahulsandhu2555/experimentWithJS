import {convertToViewFromArrayOfObj} from "../../components/PageCompnents/componentList";
import React from "react";


function Set(props){
    const data = [
        {
            sec:{
                h4: 'SET => [[ES6]]',
                pre:`
                const set = new Set();
                set.add(1); // to add values to the set
                set.add(1); // will not be added coz set can have unique values only
                // set.size; //1, to get the size of set
                set.has(1); //true, to check if value is present in set
                set.delete(1); // true, if value is there and deleted
                set.clear(); // to clear all the values
                
                //Iteration over the set
                for (let value of set){
                    console.log(value);
                }
                
                // Set <=> Array
                const numArr = [1, 2];
                const numSet =  new Set(numArr);
                
                //to convert to array
                const numArr2 = [...numSet]
                `
            }
        }
    ];
return (
    <>
        Map
        {convertToViewFromArrayOfObj(data)}
    </>
);
}
export default Set;