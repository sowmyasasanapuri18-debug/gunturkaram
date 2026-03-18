import React from "react";
import "./Contact.css";
import logo from "../assets/logo.jpg";
import contact from "../assets/contact.png";
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
  return (
    <div>

      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo"/>

        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Pickles</li>
          <li>Customized</li>
          <li className="contact-btn">Contact-Us</li>
        </ul>

        <div className="icons">
          <span onClick={()=>navigate("/cart")}>🛒</span>
          <span onClick={()=>navigate("/wishlist")}>🤍</span>
          
          <span onClick={()=>navigate("/Notification")}>🔔</span>
          <span onClick={()=>navigate("/Profile")}>👤</span>
        </div>
      </nav>


      {/* ---------- CONTACT SECTION ---------- */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <img src={contact} className="contact-image" alt="contact"/>

          <div className="touch-box">
            <h2>Stay In Touch</h2>

            <div className="touch-item">
              <div className="icon">✉</div>
              <div>
                <h4>E-mail Id</h4>
                <p>gunturuKaaram@gmail.com</p>
              </div>
            </div>

            <div className="touch-item">
              <div className="icon">📞</div>
              <div>
                <h4>Mobile Number</h4>
                <p>+917856493546</p>
              </div>
            </div>

            <div className="touch-item">
              <div className="icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>2-23, Arundelpet, Guntur, Andhra Pradesh</p>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="contact-form">

          <h1>Send a Message</h1>

          <label>Name</label>
          <input type="text" placeholder="Enter here....."/>

          <label>E-mail ID</label>
          <input type="email" placeholder="Enter here....."/>

          <label>Mobile Number</label>
          <input type="text" placeholder="Enter here....."/>

          <label>Message</label>
          <textarea placeholder="Enter here....."></textarea>

          <button>Send Message</button>

        </div>

      </div>


      {/* ---------- FOOTER ---------- */}

      <div className="footer">

  <div className="footer-section">
    <img src={logo} className="logo" alt="logo"/>
    <p>Guntur Kaaram</p>
    <p>
      Bringing you authentic, homemade pickles crafted with love and
      tradition since 2026.
    </p>
  </div>

  <div className="footer-section">
    <h3>Quick</h3>
    <p>About Us</p>
    <p>Veg Pickles</p>
    <p>Non Veg Pickles</p>
    <p>Customized</p>
    <p>Contact Us</p>
  </div>

  <div className="footer-section">
    <h3>Policies</h3>
    <p>Shipping Policy</p>
    <p>Return & Refund</p>
    <p>Privacy Policy</p>
    <p>Terms of Services</p>
    <p>FAQ</p>
  </div>

  <div className="footer-section">
    <h3>Trust & Safety</h3>
    <p>4.8⭐ Rated by 10,000+ Customers</p>
    <p>Return & 7-Day Replacement</p>
    <p>COD Available</p>
    <p>Secure Payments</p>
    {/* <p>© 2026 Guntur Kaaram . All rights reserved. FSSAI Lic. No. 12345678901234</p> */}
  </div>
  <div className="copyright">
  © 2026 Guntur Kaaram . All rights reserved. FSSAI Lic. No. 12345678901234
</div>
  </div>
{/* <div className="copyright">
  © 2026 Guntur Kaaram . All rights reserved. FSSAI Lic. No. 12345678901234
</div> */}
</div>
    

  );
}

export default Contact;