import React from 'react';

function C2({name}) {
    console.log('C2 render')
    const date = new Date();
    return (
        <>
            <div>Hello {name}</div>
            {date.getHours()}
        </>
    );
}
export default C2;

export const MC2 = React.memo(C2)
//as we are using the memoized version, getHours only will be updated when the name props will change, otherwise
//it will not re-render
