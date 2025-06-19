import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className="heading">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-label">
            <div className="isOnlineContainer">
              <div className={useOnlineStatus() ? "isOnline" : "isOffline"}></div>
              <div className="isOnlineText">{useOnlineStatus() ? "Online" : "Offline"}</div>
            </div>
          </li>
          <Link to="/">
            <li className={currentPage === "/" ? "nav-items-active" : ""}>Home</li>
          </Link>
          <Link to="/About">
            <li className={currentPage === "/About" ? "nav-items-active" : ""}>About</li>
          </Link>
          <Link to="/Contact">
            <li className={currentPage === "/Contact" ? "nav-items-active" : ""}>Contact</li>
          </Link>
          <li>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.5.5.6 2m0 0 2.4 8h11v-6a2 2 0 0 0-2-2zm11.4 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-8-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                stroke="#000"
              />
            </svg>
            &nbsp; Cart
          </li>
          <li>
            <div className="login-container">
              <button
                className={isLoggedIn ? "danger-button" : "login-button"}
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
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
