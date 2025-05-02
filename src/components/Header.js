import { LOGO_URL } from "../utils/constants";
const Header = () => (
  <div className="header">
    <img className="logo" src={LOGO_URL} />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
