import "bootstrap";
import "./Styles/app.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Application } from "./Components/Application";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Could not find root element.");
}

const host = rootElement.getAttribute("data-host");

if (0 === host.length) {
    throw new Error("Missing data-host attribute on root element.");
}

ReactDOM.render(<Application base={host}/>, rootElement);
