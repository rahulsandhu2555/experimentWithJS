import React from 'react';

function C3({name, person}) {
    console.log('C3 render')
    return (
        <>
            <div>Hello {name} {person.name}</div>
        </>
    );
}
export default C3;

export const MC3 = React.memo(C3)
