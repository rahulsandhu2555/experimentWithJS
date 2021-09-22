import React from 'react';

function Note(props) {
    return (
        <blockquote style={{
            borderLeftColor:'#ffe564',
            borderLeftWidth:'9px',
            borderLeftStyle:'solid',
            padding:'10px',
            backgroundColor:'rgba(255,229,100,0.3)',
            maxWidth:'70%'
        }}>{props.children}</blockquote>
    );
}

export default Note;