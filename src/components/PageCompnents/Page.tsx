import React from 'react';

function Page(props:any) {
    return (
        <div className={''} style={{margin:'20px 20px'}}>
            {props.children}
        </div>
    );
}

export default Page;
