import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import foodImage from "./assets/food.jpg";
import logoImage from "./assets/logo.jpg";

function Signup() {

  const navigate = useNavigate();

 const handleSignup = () => {
  navigate("/home");
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
            onClick={() => navigate("login/")}
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

          {/* SIGNUP BUTTON */}
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