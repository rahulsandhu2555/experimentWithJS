
import * as React from 'react';

function Button(props){
    console.log('rendering button ');

    return (
        <div>
            <button onClick={props.handleClick}>{props.name}</button>
        </div>
    );
};
export default React.memo(Button)