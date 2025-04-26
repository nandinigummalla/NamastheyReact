const heading = React.createElement("h1", { id: "head" }, "I am from React"); // will create a react object with children as attributes and content

// sibling tags are added array
const nestedHeading = React.createElement("div", { id: "parent" }, [
  React.createElement("h2", { id: "child1" }, [
    React.createElement("div", { id: "sibling1" }, "i am sibling1"),
    React.createElement("div", { id: "sibling2" }, "i am sibling2"),
  ]),
  React.createElement("h2", { id: "child2" }, [
    React.createElement("div", { id: "sibling1" }, "i am sibling1"),
    React.createElement("div", { id: "sibling2" }, "i am sibling2"),
  ]),
]);
const reactRoot = ReactDOM.createRoot(document.getElementById("root")); // will create a root element with react
reactRoot.render(nestedHeading); // will convert the react object to html elements and display it in ui
// console.log(heading); //print the react object
