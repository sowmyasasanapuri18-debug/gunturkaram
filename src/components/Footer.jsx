import React from "react";
import "./Footer.css";
import logo from "../assets/logo.jpg"; // your logo

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-col brand">
            <img src={logo} alt="logo" className="footer-logo" />
          
          <p>
            Bringing you authentic, homemade pickles crafted with love
            and tradition since 2026.
          </p>

          
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick</h3>
          <p>About Us</p>
          <p>Veg Pickles</p>
          <p>Non Veg Pickles</p>
          <p>Customized</p>
          <p>Contact Us</p>
        </div>

        {/* POLICIES */}
        <div className="footer-col">
          <h3>Policies</h3>
          <p>Shipping Policy</p>
          <p>Return & Refund</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>FAQ</p>
        </div>

        {/* TRUST */}
        <div className="footer-col">
          <h3>Trust & Safety</h3>
          <p>4.8⭐ Rated by 10,000+ Customers</p>
          <p>Return & 7-Day Replacement</p>
          <p>Policy Refund</p>
          <p>COD Available</p>
          <p>Terms of Services</p>
          <p>Secure Payments</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 Guntur Kaaram . All rights reserved. FSSAI Lic. No. 12345678901234
      </div>

    </footer>
  );
}

export default Footer;
