// ● Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="navbar">
    <h2 id="logo">Logo</h2>
    <input className="search" type="text" placeholder="search" />
    <h3 id="icon"> User Icon</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
