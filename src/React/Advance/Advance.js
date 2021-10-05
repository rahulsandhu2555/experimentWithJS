import React, {useState} from 'react';
import Button from "../../components/common/Button";
import Accessibility from "./Accessibility";
import CodeSplitting from "./CodeSplitting";
import Context from "./Context";

function Advance(props) {
    const [topic, setTopic] = useState('Accessibility');
    const buttons = [
        {title:'Accessibility', component: Accessibility},
        {title:'CodeSplitting', component: CodeSplitting},
        {title:'Context', component: Context},
    ];
    function loadComponent(){
        return React.createElement(
            buttons.find(button => button.title.includes(topic)).component,{},{}
        )
    }

    return(
        <>
            <div style={{width:'100%', padding:'5px', marginTop:'5px', borderTop:'1px solid gray'}}>
                {
                    buttons.map(button => <Button title={button.title} onClick={()=> setTopic(button.title)}/>)
                }
            </div>
            {loadComponent()}
        </>
    )
}

export default Advance;