/* External imports */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/* Internal imports */
import App from "./App";

/* CSS imports */
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector("#root")
);
