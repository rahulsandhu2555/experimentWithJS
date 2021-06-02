import React, {useState} from "react";

export default function StateExample(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstname:'', lastname:''})
    //if we are using setName({firstname:'rahul'}) => it will remove the lastname property from the state, coz
    //it does not merge the two objects, but this.setState => in class components merges the object

    const [arr, setArr] = useState([]);
    const addItem = () => {
        setArr([...arr, { // copying the array using spread operator, then adding the item
            id: arr.length,
            value: 'hi'
        }])
    }

    function incrementByFive(){
        for(let i =0; i<5; i++){
            setCount(prevState => prevState+1) //use this when state depends on the previous state
        }
    }


    return(
        <>
            <h1>State Example</h1>
            <input type='text' value={name.firstname} onChange={e => setName({firstname: e.target.value})}/>
        </>
    )

}