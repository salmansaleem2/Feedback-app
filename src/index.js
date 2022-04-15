import React from "react";
import createRoot from "react-dom";
import App from "./App";
import "./index.css";
// import "index.css";

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
