import React from 'react';

function Section(props:any) {
    return (
        <div className={''} style={{padding:'10px'}}>
            <hr/>
            {props.children}
        </div>
    );
}

export default Section;
