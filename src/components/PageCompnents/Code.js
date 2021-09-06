import React from "react";

function Code(props) {
  return (
    <pre>
      {/*<code>*/}
          {props.children}
      {/*</code>*/}
    </pre>
  );
}

export default Code;
