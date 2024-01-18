import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" src={LOGO_URL} /> */}
      </div>
      <div className="nav-items">
        <div className="link">
          <Link to="/">
            <button className="top-rated-restaurants-btn">Home</button>
          </Link>
        </div>
        <div className="link">
          <Link to="/about">
            <button className="top-rated-restaurants-btn">About</button>
          </Link>
        </div>
        <div className="link">
          <Link to="contact" color="white">
            <button className="top-rated-restaurants-btn">Contact</button>
          </Link>
        </div>
        <div className="link">
          <Link>
            <button className="top-rated-restaurants-btn">Cart</button>
          </Link>
        </div>
        <div className="link">
          <button
            className="top-rated-restaurants-btn"
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
