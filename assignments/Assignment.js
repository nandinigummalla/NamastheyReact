// // Coding Assignment:
// // ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// // div with class “title”)
// // ○ Create the same element using JSX
// // ○ Create a functional component of the same with JSX
// // ○ Pass attributes into the tag in JSX
// // ○ Composition of Component(Add a component inside another)
// // ○ {TitleComponent} vs {<TitleComponent/>} vs
// // {<TitleComponent></TitleComponent>} in JSX

// import React from "react";
// import ReactDOM from "react-dom/client";
// const headerUsingCE = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "I am h1"),
//   React.createElement("h2", {}, "I am h2"),
//   React.createElement("h3", {}, "I am h3"),
// ]);

// const headerUsingjsx = (
//   <div className="title">
//     <h1>I am h1</h1>
//     <h2>I am h2</h2>
//     <h3>I am h3</h3>
//   </div>
// );

// const Title = () => <div>I am title</div>;

// const HeaderComponent = () => (
//   <div className="title">
//     {/* {Title}  cant do like this*/}
//     {<Title />}
//     {<Title></Title>}
//     <Title />
//     <h1 id="head">I am h1</h1>
//     <h2>I am h2</h2>
//     <h3>I am h3</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<HeaderComponent />);
