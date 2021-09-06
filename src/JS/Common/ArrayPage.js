import React, { createElement } from "react";
import {CodeBlock, Comment, Gray, Heading, Log, SubHeading, V} from "../../components/Var";
import Section from "../../components/PageCompnents/Section";

function ArrayPage(props) {
  const content = `
    @array.
    -can hold different data type in single and can expand dynamically.
    -To create array.
    <
        const arr = new Array(); / Array(10); to fix the size of array, new keyword optional.
        console.log(arr) / []
    >`;
  function generatePage() {
    const arr = [];
    let stack = "";
    const tags = {
      "@": 'h1',
      "-": 'p',
      "<": 'p',
      ">": 'p',
      "/": 'p',
    };
    var element = createElement("p");
    let value = "";
    for (const c of content) {
      if (["@", "-", "<", ">", "/"].includes(c)) {
        stack = c;
      } else {
        switch (c) {
          case ".":
            element = createElement(tags[stack],null, value);
            arr.push(element);
            value = "";
            stack = "";
            break;
          default:
            value = value + c;
        }
      }
    }
    return arr;
  }
  return (
    <>
      <Section>
        <Comment> To create array</Comment>
        <V>const</V> arr = new Array();{" "}
        <Gray>
          // Array(10); to fix the size of array, new keyword optional
        </Gray>
        <Log>
          console.log(arr) <Gray>//={">"} []</Gray>
        </Log>
        //Array
        {generatePage()}
      </Section>
    </>
  );
}

export default ArrayPage;
