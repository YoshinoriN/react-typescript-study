import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Hoge } from "./components/Hoge";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

ReactDOM.render(
  <Hoge />,
  document.getElementById("hoge")
);