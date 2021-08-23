import React from 'react';

function Section(props:any) {
    return (
        <div className={'p-2 m-4 bg-gray-300 rounded-lg'}>
            {props.children}
        </div>
    );
}

export default Section;
