import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import { BrowserRouter } from "react-router";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
