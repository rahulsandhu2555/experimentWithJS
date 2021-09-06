import React from "react";

function List(props: any) {
  return (
    <div className={""}>
      <ul>
        {props.children.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
