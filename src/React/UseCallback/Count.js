
import * as React from 'react';

function Count(props) {
    console.log('rendering age');
    return (
        <div>
            age : {props.age}
        </div>
    );
};
export default React.memo(Count)