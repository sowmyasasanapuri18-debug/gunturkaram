import React from "react";
import "./Login.css";
import foodImage from "../assets/food.jpg";
import logoImage from "../assets/logo.jpg";

function Login({ switchToSignup }) {

  return (
    
    <div className="login-container">

      <div className="login-left">

        <div className="logo">
          <img src={logoImage} alt="logo" className="logo-img" />
        </div>

        <h2>Welcome back!</h2>

        <div className="tabs">
          <button className="active">Log In</button>
          <button onClick={switchToSignup}>Sign Up</button>
        </div>

        <label>Email Id / Mobile</label>
        <input type="text" placeholder="thisuix@mail.com" />

        <label>Password</label>
        <input type="password" placeholder="********" />

        <div className="login-options">
          <div className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <a href="/">Forgot Password?</a>
        </div>

        <button className="login-btn">LOGIN</button>

        <div className="divider">OR</div>

        <button className="google-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Sign up with Google
        </button>

      </div>

      <div className="login-right">
        <img src={foodImage} alt="food" />
      </div>

    </div>
  );
}

export default Login;

