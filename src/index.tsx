import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Hoge } from "./components/Hoge";
import { TextBox } from "./components/TextBox";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

ReactDOM.render(
  <Hoge />,
  document.getElementById("hoge")
);

ReactDOM.render(
  <TextBox hello="Hello" />,
  document.getElementById("textbox")
);