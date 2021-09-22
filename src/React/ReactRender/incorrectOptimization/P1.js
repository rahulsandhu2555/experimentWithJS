import React from 'react';

function P1({children, name}) {
    console.log('p1 render')
    const person = {
        name: 'sandhu'
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default P1;
export const MP1 = React.memo(P1)