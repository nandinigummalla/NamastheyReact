import { use, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

// statevaraibles shouldn't be created out of the component and also shoudn't be created in loops or conditions it will make inconsistency to teh app
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // useEffect(() => console.log("useEffect rendered"), [])  --  useeffect cbf will be called after initial render of the page if empty array [] is passed as second argument
  // useEffect(() => console.log("useEffect rendered"))  -- useeffect cbf will be called after every render of the page if there is no second argument
  // useEffect(() => console.log("useEffect rendered"), [btnName]) --  useeffect cbf will be called after the  every change of the  varaibles which are passed as dependencies

  // useEffect(() => console.log("useEffect rendered"), []);
  // console.log("header rendered");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
