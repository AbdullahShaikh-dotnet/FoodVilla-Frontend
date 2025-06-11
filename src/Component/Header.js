import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="heading">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/"><li className="nav-items-active">
            Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          <li>Cart</li>
          <li>
            <div className="login-container">
              <button
                className={isLoggedIn ? "danger-button" : "login-button"}
                onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
