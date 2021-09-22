import React from "react";

function Code(props) {
  return (
    <pre
      style={{
        background: "grey",
        width: "80%",
        borderRadius: "5px",
        color: "white",
        padding: "10px",
        overflow: "auto",
      }}
    >
      <code>{props.children}</code>
    </pre>
  );
}

export default Code;
