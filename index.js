import React from "react";
import ReactDOM from "react-dom/client";

// const Parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "Child" }, [
//     React.createElement("h1", { id: "Child1-1" }, "I am Heading"),
//     React.createElement("h2", { id: "Child1-2" }, "I am Heading"),
//     React.createElement("h3", { id: "Child1-3" }, "I am Heading"),
//   ]),
//   React.createElement("div", { id: "Child" }, [
//     React.createElement("h1", { id: "Child2-1" }, "I am Heading"),
//     React.createElement("h2", { id: "Child2-2" }, "I am Heading"),
//     React.createElement("canvas", { id: "Child2-3" }, "I am Heading"),
//   ]),
// ]);

const reactElement = (
  <div>
    <h1 id="heading-1"> React Element Heading 1</h1>
    <h1 id="heading-2">React Element Heading 2</h1>
  </div>
);

const AnotherReactComponent = () => (<div>May Nested Component Hu</div>);

const MainReactComponent = () => (
  <div>
    <h1 id="heading-1">React Component Heading 1</h1>
    <h1 id="heading-2">React Component Heading 2</h1>
    <AnotherReactComponent /> {/* Nested React Component also known as Componetn Composition */}
    { reactElement } {/* React Element is rendered here */}
  </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainReactComponent />);
