import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between bg-gradient-to-r from-gray-800 to-indigo-900">
      <div className="logo-container">
        {/* <img className="w-200 h-100" src={LOGO_URL} /> */}
      </div>
      <div className="flex justify-between gap-10 text-base">
        <div className="link-hover">
          <Link to="/">
            <button className="inline-block px-5 py-3 bg-gray-700 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Home
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link to="/grocery">
            <button className="inline-block px-5 py-3 bg-gray-700 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Grocery
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link to="/about">
            <button className="inline-block px-5 py-3 bg-gray-700 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              About
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link to="contact" color="white">
            <button className="inline-block px-5 py-3 bg-gray-700 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Contact
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link>
            <button className="inline-block px-5 py-3 bg-gray-700 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Cart
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <button
            className="inline-block px-5 py-3 bg-gray-700 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900"
            onClick={() => {
              const state = btnNameReact === "Logout" ? "Login" : "Logout";
              setBtnNameReact(state);
            }}
          >
            {btnNameReact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
