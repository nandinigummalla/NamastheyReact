import { use, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnineStatus";

// statevaraibles shouldn't be created out of the component and also shoudn't be created in loops or conditions it will make inconsistency to teh app
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // useEffect(() => console.log("useEffect rendered"), [])  --  useeffect cbf will be called after initial render of the page if empty array [] is passed as second argument
  // useEffect(() => console.log("useEffect rendered"))  -- useeffect cbf will be called after every render of the page if there is no second argument
  // useEffect(() => console.log("useEffect rendered"), [btnName]) --  useeffect cbf will be called after the  every change of the  varaibles which are passed as dependencies

  // useEffect(() => console.log("useEffect rendered"), []);
  // console.log("header rendered");
  return (
    <div className="flex justify-between bg-zinc-300 shadow-xl">
      <img className="size-20 m-1" src={LOGO_URL} />
      <ul className="flex justify-between p-1 text-center">
        <li className="p-5 m-1">OnlineStatus: {onlineStatus ? "✔️" : "🔴"}</li>
        <li className="p-5 m-1">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5 m-1">
          <Link to="/about">About</Link>
        </li>
        <li className="p-5 m-1">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-5 m-1">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="p-5 m-1">Cart</li>
        <li className="p-5 m-1">
          <button
            className="rounded-lg p-1 border-1 cursor-pointer"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
