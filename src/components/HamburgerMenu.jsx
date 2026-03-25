import React from "react";
import { useNavigate } from "react-router-dom";
import "./HamburgerMenu.css";



function HamburgerMenu({ menuOpen, setMenuOpen }) {

  const navigate = useNavigate();

  return (
    <>
      {/* HAMBURGER ICON */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
   



      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <ul>
          <li onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</li>
          <li onClick={() => { navigate("/about"); setMenuOpen(false); }}>About Us</li>
          <li onClick={() => { navigate("/pickles"); setMenuOpen(false); }}>Pickles</li>
          <li onClick={() => { navigate("/customized"); setMenuOpen(false); }}>Customized</li>
          <li onClick={() => { navigate("/contact-us"); setMenuOpen(false); }}>Contact Us</li>

          <button
            className="login-btn"
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
          >
            Log In / Sign Up
          </button>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;