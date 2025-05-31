// const heading = React.createElement('h1',{id:"heading",xyz:"ABC"},'Hello world from React');

const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "I am Heading"),
    React.createElement("h2", {}, "I am Heading"),
    React.createElement("h3", {}, "I am Heading"),
  ]),
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "I am Heading"),
    React.createElement("h2", {}, "I am Heading"),
    React.createElement("canvas", {}, "I am Heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);
