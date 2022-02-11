import React from "react";
import ReactDOM from "react-dom";
import { Providers } from "./Hooks";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
