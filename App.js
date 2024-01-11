import React from "react";
import ReactDOM from "react-dom";

//React Element - type(tag), attributes, content withing tags - creates an Object - when this is rendered onto the DOM it becomes an HTML Element
const heading = React.createElement("h1", { id: "heading" }, "Heading");

//JSX code is transpiled before it is ready by JS Engine by Babel(parcel dependency Babel)
//JSX => React.createElement (Object) => Rendered as HTML Element to DOM

const root = ReactDOM.createRoot(document.getElementById("root"));

//React functional components
const TitleComponent = () => {
  return (
    <h1 className="jsx-heading" tabIndex="5">
      Title using JSX
    </h1>
  );
};

const num = 100;

const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>Heading from react functional component {num}</h1>
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {heading}
    </div>
  );
};

//anything already inside root will be replaces by heading
root.render(<HeadingComponent />);
