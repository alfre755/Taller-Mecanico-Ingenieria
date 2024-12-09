import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.jsx";
import "./core/App.css";
import { BrowserRouter } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
