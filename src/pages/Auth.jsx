import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import foodImage from "../assets/food.jpg";
import logoImage from "../assets/logo.jpg";

function Auth() {

  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();   // ✅ navigation hook

  const handleLogin = () => {
    navigate("/home");   // go to home
  };

  const handleSignup = () => {
    navigate("/home");   // go to home
  };

  return (
    <div className="container">

      {/* LEFT IMAGE */}
      <div className="left-section">
        <img src={foodImage} alt="food" />
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">

        <div className="logo-area">
          <img src={logoImage} alt="logo" />
        </div>

        <h1>{isFlipped ? "Welcome!" : "Welcome back!"}</h1>

        {/* Tabs */}
        <div className="tabs">

          <button
            className={!isFlipped ? "active" : ""}
            onClick={() => setIsFlipped(false)}
          >
            Log In
          </button>

          <button
            className={isFlipped ? "active" : ""}
            onClick={() => setIsFlipped(true)}
          >
            Sign Up
          </button>

        </div>

        {/* FLIP CARD */}
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-inner">

            {/* LOGIN */}
            <div className="flip-front">

              <label>Email Id / Mobile</label>
              <input type="text" placeholder="thisuix@mail.com" />

              <label>Password</label>
              <input type="password" placeholder="********" />

              <div className="options">
                <div>
                  <input type="checkbox" /> Remember me
                </div>
                <a href="/">Forgot Password?</a>
              </div>

              <button className="main-btn" onClick={handleLogin}>
                LOGIN
              </button>

            </div>

            {/* SIGNUP */}
            <div className="flip-back">

              <label>Email Id / Mobile</label>
              <input type="text" placeholder="thisuix@mail.com" />

              <label>Password</label>
              <input type="password" placeholder="Enter password" />

              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />

              <button className="main-btn" onClick={handleSignup}>
                SIGN UP
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Auth;