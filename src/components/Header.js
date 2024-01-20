import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutIcon, LoginIcon } from "@heroicons/react/solid";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between bg-gradient-to-r from-cyan-800 to-indigo-950">
      <div className="logo-container">
        {/* <img className="w-200 h-100" src={LOGO_URL} /> */}
      </div>
      <div className="flex justify-between gap-10 text-base">
        <div className="link-hover">
          <Link to="/">
            <button className="inline-block px-5 py-3 bg-gray-800 shadow-lg shadow-indigo-500/40 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link to="/grocery">
            <button className="inline-block px-5 py-3 bg-gray-800 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Grocery
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link to="/about">
            <button className="inline-block px-5 py-3 bg-gray-800 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              About
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link to="contact" color="white">
            <button className="inline-block px-5 py-3 bg-gray-800 shadow-lg my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Contact
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <Link>
            <button className="inline-block px-5 py-3 bg-gray-800 shadow-lg my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
              Cart
            </button>
          </Link>
        </div>
        <div className="link-hover">
          <button
            className="inline-block px-5 py-3 bg-indigo-500 shadow-lg shadow-indigo-500/40 my-2 mr-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out"
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
