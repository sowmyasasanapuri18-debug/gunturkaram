import React, { useState } from "react";
import "./Auth.css";
import foodImage from "./assets/food.jpg";
import logoImage from "./assets/logo.jpg";

function Auth() {

  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container">

      {/* LEFT IMAGE */}
      <div className="left-section">
        <img src={foodImage} alt="food" />
      </div>

      {/* RIGHT FORM */}
      <div className="right-section">

        <div className="logo-area">
          <img src={logoImage} alt="logo" />
        </div>

        <h1>{activeTab === "login" ? "Welcome back!" : "Welcome!"}</h1>

        {/* Tabs */}
        <div className="tabs">

          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>

          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>

        </div>

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <div className="form">

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

            <button className="main-btn">LOGIN</button>

          </div>
        )}

        {/* SIGNUP FORM */}
        {activeTab === "signup" && (
          <div className="form">

            <label>Email Id / Mobile</label>
            <input type="text" placeholder="thisuix@mail.com" />

            <label>Password</label>
            <input type="password" placeholder="Enter password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />

            <button className="main-btn">SIGN UP</button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Auth;