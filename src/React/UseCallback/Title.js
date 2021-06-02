
import * as React from 'react';

function Title(props) {
    console.log('rendering title');

    return (
        <div>
            Use Reducer
        </div>
    );
};
export default React.memo(Title)