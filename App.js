const root = ReactDOM.createRoot(document.getElementById("root"));
const elementWithHeading = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "Nested Heading")));
root.render(elementWithHeading);
//console.log(root);
//console.log(elementWithHeading);