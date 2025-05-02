import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "head" },
  "I am heading from createElement"
);

// Components are of two types Class Components and  Functional Components
// Functional components are js functions which returns jsx/react elements

// one way for functional component
const HeadComponent = () => {
  return <h1>I am heading</h1>;
};

// jsx is converted to react element by babel and during render it will covert to html and display on ui
//jsx is html like syntax and we can write multiple html elements in () - to undertsand babel where jsx started
// few attributes differs from html and while rendering they converted to html attributes
// jsx allows camelCase attributes class in html and className in jsx
// We can also use react components in the react elements and vice versa
const jsxHead = (
  <div>
    <HeadComponent />
    <h1 id="head">I am from jsx</h1>
  </div>
);

// another way for functional component
const TitleComponent = () => <h1>I am Title</h1>;

let num = 1000;
// Component composition -- calling component in another component
// we can execute any piece of js by adding in {} in jsx and babel will convert to html and dislay it
// As functional component is function we can also call like js function
// these are the three ways to call a functional component
// we can call any no of time components and jsx elements in the code
// We can also use react elements in react components( as react elements or jsx will result as object we can write and execute as js in {})
// jsx takes care of cross side scripting also and malicious attacks by saniting the code before executing js code
const BodyComponent = () => (
  <div>
    {num}
    {console.log("hi i am console from body componnent")}
    {jsxHead}
    {TitleComponent()}
    <TitleComponent></TitleComponent>
    <TitleComponent />
    <HeadComponent />
    {<HeadComponent />}
    <h3>I am body with component composition</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// for components while rendering we cant directly render like react elements root.render(jsxHead) we need to render as <CompName>
root.render(<BodyComponent />);
