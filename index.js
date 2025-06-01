import React from "react";
import ReactDOM from "react-dom/client"



const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", { id: "Child1-1" }, "I am Heading"),
    React.createElement("h2", { id: "Child1-2" }, "I am Heading"),
    React.createElement("h3", { id: "Child1-3" }, "I am Heading"),
  ]),
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", { id: "Child2-1" }, "I am Heading"),
    React.createElement("h2", { id: "Child2-2" }, "I am Heading"),
    React.createElement("canvas", { id: "Child2-3" }, "I am Heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);
