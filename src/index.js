import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

const answer = window.confirm("Использовать малый объем данных?");

ReactDOM.render(
  <React.StrictMode>
    <App answer={answer} />
  </React.StrictMode>,
  document.getElementById("root")
);
