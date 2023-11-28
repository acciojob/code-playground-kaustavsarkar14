import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(<BrowserRouter><AuthProvider><App /></AuthProvider></BrowserRouter>, document.getElementById("root"));
