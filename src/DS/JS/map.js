import React from "react";
import { convertToViewFromArrayOfObj } from "../../components/PageCompnents/componentList";

function Map(props) {
  const data = [
    {
      sec: {
        h4: "Map => [[ES6]]",
        h6: "used like key-value pair",
        pre: `
            difference b/w map and obj
            1. Keys = 
                Map > can be anything function, object or primitive, 
                Object > can be string or symbol
                //need to check this statement, as object keys can be any fn, object, array
            2. Accidental key = Map > does not contain any default key, Object > might have because of prototypal inheritance
            3. size = Map > can be found with size property, Object > must be determined manually
            4. iteration = Map > can be iterated directly, Object > need to obtain keys and then iterate over them
            `,
      },
    },
    {
      pre: `
            const map = new Map();// to create a new map
            map.set('name', 'rahul'); // to set the value
            console.log(map.size); //1, to get the size of the map
            map.get('name'); // rahul , to get the value of the key
            map.has('lastname'); //false, to check if key is there
            map.delete('lastname'); // false, to delete the key value if exists
            map.clear(); // to delete every key pair
        `,
    },
    {
      sec: {
        h4: "to iterate",
        code: `
            for(let [key, value] of map){
                console.log(key + ' ' + value);
            }
            for(let key of map.keys()){
                console.log(key);
            }
            for(let value of map.values()){
                console.log(value);
            }
              `,
      },
    },
    {
      sec: {
        h4: "Map <=> Array conversion",
        h6: "2D-array to map",
        code: `
            const personArr = [['name','rahul'], ['place','ghaziabad']];
            const personMap = new Map(personArr); // to convert to map from array
            
            const arr2 = Array.from(personMap); // to convert to array from map
            let arr = [1,2,3]
            const obj1 = {
                [arr]: 4
            }
            console.log(obj1) //{1,2,3: 4}
              `,
      },
    },
  ];
  return (
    <>
      Map
      {convertToViewFromArrayOfObj(data)}
    </>
  );
}
export default Map;
