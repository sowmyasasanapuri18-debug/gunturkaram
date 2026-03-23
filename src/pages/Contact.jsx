import React from "react";
import "./Contact.css";
import logo from "../assets/logo.jpg";
import contact from "../assets/contact.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 


function Contact() {
    const navigate = useNavigate();
  return (
    <div>

      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo"/>

        <ul className="nav-links">
          <li onClick={()=>navigate("/Home")}>Home</li>
          <li onClick={()=>navigate("/about")}>About Us</li>
          <li onClick={()=>navigate("/Pickles")}>Pickles</li>
          <li onClick={()=>navigate("/Customized")}>Customized</li>
          <li className="contact-btn">Contact-Us</li>
        </ul>

        <div className="icons">
          <span onClick={()=>navigate("/cart")}>🛒</span>
          <span onClick={()=>navigate("/wishlist")}>🤍</span>
          
          <span onClick={()=>navigate("/Notifications")}>🔔</span>
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


    <Footer />
    </div>
    

  );
}

export default Contact;