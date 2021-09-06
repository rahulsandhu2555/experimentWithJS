import React from 'react';

function Page(props:any) {
    return (
        <div className={''} style={{width:'100%', height:'100%', background:'#E5E5E5'}}>
            {props.children}
        </div>
    );
}

export default Page;
