import React, {useState} from 'react';
import ChildForParent from "./ChildForParent";

function MemoParent(props) {
    const [name, setName] = useState('rahul');
    return (
        <div>
            <button onClick={()=> setName('sandhu')}>name : {name}</button>
            <ChildForParent name={name}/>
            {/*  this child will re-render because parent is re-rendering, not because of the prop we are passing
              is changing
              you can use React.memo to avoid unnecessary re-render, if receiving the same props, will do Shallow comparison
              Even if the child does not have props, React.memo still works

              => why you should not use React.memo at every place because if the props ara changing, shallow comparison
              comes at a cost
              lets say => initial render => 10ms
              SC => 2ms
              re-render => 12ms
              re-render => 12ms
              re-render => 12ms
              => so memoize expensive component, where props hardly change

              if re-rendering stopped, it will be stopped for child tree as well. coz its stopping the default
                => render children recursively
              */}
        </div>
    );
}

export default MemoParent;
