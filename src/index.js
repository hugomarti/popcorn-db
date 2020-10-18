import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";

const customTheme = {
  global: {
    colors: {
      brand: "#ff8906",
    },
  },
  textInput: {
    extend: () => `
      font-size: 14px;
      height: 30px;
      margin: 0 auto;
      
      &:focus {
        box-shadow: none;
        border-color: initial;
      }
    `,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
