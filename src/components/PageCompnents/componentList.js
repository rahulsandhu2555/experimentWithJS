import Section from "./Section";
import {H4, H6} from "./H4";
import List from "./List";
import Page from "./Page";
import React from "react";
import {Para} from "../Var";
import Code from "./Code";
import Pre from "./Pre";

export const components = {
  page: Page,
  sec: Section,
  h4: H4,
  h6:H6,
  code:Code,
  pre:Pre,
  p:Para,
  list: List,
};

export const convertToViewFromArrayOfObj = (arr) => {
  let converted = [];
    converted = arr.map(obj => convertToView(obj))
  return converted;
};
export const convertToView = (obj) => {
  let converted = [];
  for (const key in obj) {
    if (typeof obj[key] === "string" || Array.isArray(obj[key])) {
      converted.push(React.createElement(components[key], {}, obj[key]));
    } else {
      converted = React.createElement(components[key], {}, [
        ...converted,
        convertToView(obj[key]),
      ]);
    }
  }
  return converted;
};
