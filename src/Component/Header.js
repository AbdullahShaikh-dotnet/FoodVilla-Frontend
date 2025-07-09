import { useState } from "react";
import { Link, useLocation } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const imageUrl = new URL("../assets/Logo.png", import.meta.url);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <img src={imageUrl} alt="Logo" className="w-20" />
        </Link>

        <div className="flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-gray-700 font-medium">
            <li className="flex items-center text-sm">
              <span>{useOnlineStatus() ? "Online" : "Offline"}</span>
              <span
                className={`ml-2 h-2.5 w-2.5 rounded-full ${
                  useOnlineStatus() ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
            </li>
            <li>
              <Link
                to="/"
                className={`py-2 border-b-2 ${
                  currentPage === "/"
                    ? "text-orange-500 border-orange-500"
                    : "border-transparent"
                } hover:text-orange-500 hover:border-orange-500 transition-colors duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`py-2 border-b-2 ${
                  currentPage === "/About"
                    ? "text-orange-500 border-orange-500"
                    : "border-transparent"
                } hover:text-orange-500 hover:border-orange-500 transition-colors duration-300`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`py-2 border-b-2 ${
                  currentPage === "/Contact"
                    ? "text-orange-500 border-orange-500"
                    : "border-transparent"
                } hover:text-orange-500 hover:border-orange-500 transition-colors duration-300`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center hover:text-orange-500 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div className="ml-1 relative">
                  <span className="absolute -top-6 -left-4 m-1 bg-red-500 text-white px-1 text-[10px] rounded-full">
                    {cartItems.length}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          {/* <button
            className={`px-6 py-2 rounded-md font-bold ${
              isLoggedIn
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-white hover:text-orange-600 text-gray-500"
            }`}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button> */}

          <Link
            to="/Login"
            className={`py-2 border-b-2 hover:text-orange-500 hover:border-orange-500 transition-colors duration-300 font-extrabold bg-white text-gray-500 
          ${
            currentPage === "/Login"
              ? "text-orange-500 border-orange-500"
              : "border-transparent"
          }`}
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
