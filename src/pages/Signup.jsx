import React from "react";
import "./Signup.css";
import foodImage from "../assets/food.jpg";
import logoImage from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

function Signup({ switchToLogin }) {

  const navigate = useNavigate(); // correct place

  const handleSignup = () => {
    navigate("/home"); // go to home page
  };

  return (
    
    <div className="container">

      <div className="left-section">
        <img src={foodImage} alt="food" />
      </div>

      <div className="right-section">

        <div className="logo-area">
          <img src={logoImage} alt="logo" />
        </div>

        <h1>Welcome !</h1>

        <div className="tabs">

          <button
            className="tab"
            onClick={switchToLogin}
          >
            Log In
          </button>

          <button className="tab active">
            Sign Up
          </button>

        </div>

        <div className="form">

          <label>Email Id / Mobile</label>
          <input type="text" placeholder="thisuix@mail.com" />

          <label>Password</label>
          <input type="password" placeholder="9102345678" />

          <label>Confirm Password</label>
          <input type="password" placeholder="9102345678" />

          <button
            className="signup-btn"
            onClick={handleSignup}
          >
            SIGN UP
          </button>

        </div>

      </div>

    </div>
  );
}

export default Signup;