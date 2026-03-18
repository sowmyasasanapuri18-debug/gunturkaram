import React from "react";
import "./PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function PrivacyPolicy() {
    const navigate = useNavigate();
  return (
    <div className="privacy-page">
        {/* NAVBAR */}
        
        <nav className="navbar">
        <img src={logo} className="logo" alt="logo"/>
        
        <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Pickles</li>
        <li>Customized</li>
        <li>Contact Us</li>
        </ul>
        
        <div className="nav-icons">
        <span>🛒</span>
        <span>❤️</span>
        <span>🔔</span>
        <span>👤</span>
        </div>
        
        </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home &gt; Privacy and Policy
      </div>

      <div className="privacy-container">

        {/* LEFT SIDEBAR */}
        <div className="sidebar">

          <div className="menu-item">👤 My Profile</div>

<div className="menu-item">👤 Orders</div>
<div className="menu-item active" >👤 Privacy and Policy</div>


          

          

        <div className="menu-item" onClick={() => navigate("/terms")}>
  👤 Terms and Conditions
</div>

          <button className="logout-btn">
            ⟳ Log Out
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="policy-content">

          <h2>Privacy Policy</h2>

          <h3>1. Data Collection (The Ingredients)</h3>
          <p>
            We only collect the essentials, like your shipping address and email,
            to get our jars to your door. We never see or store your full credit
            card details, as these are handled by secure, encrypted payment
            processors.
          </p>

          <h3>2. How We Use It (The Recipe)</h3>
          <p>
            Your info is used solely to fulfill orders, send tracking updates,
            and improve our seasonal pickle flavors. If you join the "Pickle
            Club," we'll send occasional recipes and deals, but you can opt out
            at any time.
          </p>

          <h3>3. Third-Party Sharing (The Sous Chefs)</h3>
          <p>
            We never sell your personal data; we only share it with trusted
            partners like UPS or FedEx for delivery. These partners are legally
            bound to protect your information and use it only for the service
            they provide us.
          </p>

        </div>

      </div>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-col">
            <h2>Guntur kaaram</h2>
            <p>
              Bringing you authentic, homemade pickles crafted with love
              and tradition since 2026.
            </p>

            <img src={logo} alt="logo" className="footer-logo"/>
          </div>

          <div className="footer-col">
            <h3>Quick</h3>
            <p>About Us</p>
            <p>Veg Pickles</p>
            <p>Non Veg Pickles</p>
            <p>Customized</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-col">
            <h3>Policies</h3>
            <p>Shipping Policy</p>
            <p>Return & Refund</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
            <p>FAQ</p>
          </div>

          <div className="footer-col">
            <h3>Trust & Safety</h3>
            <p>⭐ 4.8 Rated by 10,000+ Customers</p>
            <p>Return & 7-Day Replacement Policy Refund</p>
            <p>COD Available</p>
            <p>Terms of Services</p>
            <p>Secure Payments</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 Guntur Kaaram . All rights reserved. FSSAI Lic. No. 12345678901234
        </div>

      </footer>

    </div>
  );
}

export default PrivacyPolicy;