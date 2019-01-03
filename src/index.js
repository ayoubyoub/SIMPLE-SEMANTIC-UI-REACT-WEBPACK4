// React
import React from "react";
import ReactDOM from "react-dom";
// JS
import App from "./js/App";
import * as serviceWorker from "./js/serviceWorker";
// Css
import "./css/index.css";
// webpack
import favicon from "./images/favicon.ico";
require("./json/manifest.json");
// Render
ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
