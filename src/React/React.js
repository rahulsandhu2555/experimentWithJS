import React, { useState } from "react";
import Button from "../components/common/Button";
import Intro from "./Intro";
import Advance from "./Advance/Advance";

export default function ReactComp() {
  const [topic, setTopic] = useState("Intro");
  const buttons = [
    { title: "Intro", component: Intro },
    { title: "Advance", component: Advance },
  ];
  function loadComponent() {
    return React.createElement(
      buttons.find((button) => button.title.includes(topic)).component,
      {},
      {}
    );
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "5px",
          marginTop: "5px",
          borderTop: "1px solid gray",
        }}
      >
        {buttons.map((button) => (
          <Button title={button.title} onClick={() => setTopic(button.title)} />
        ))}
      </div>
      {loadComponent()}
    </>
  );
}
