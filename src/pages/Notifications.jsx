import React from "react";
import { Link } from "react-router-dom";
import "./Notifications.css";

import logo from "../assets/logo.jpg";
import truck from "../assets/truck.png";
import holi from "../assets/holi.png";

function Notifications() {

  const notifications = [
    {
      id: 1,
      icon: truck,
      text: "Order ID - 8768 has been shipped",
      date: "4 March"
    },
    {
      id: 2,
      icon: holi,
      text: "Holi offer Buy 1 get one free",
      date: "4 March"
    }
  ];

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>

        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/pickles">Pickles</Link></li>
          <li><Link to="/customized">Customized</Link></li>
          <li><Link to="/contact Us">Contact Us</Link></li>
        </ul>

        <div className="navIcons">
          <Link to="/cart">🛒</Link>
          <Link to="/wishlist">❤️</Link>
          <Link to="/notifications">🔔</Link>
          <Link to="/profile">👤</Link>
        </div>

      </nav>


      {/* PAGE TITLE */}
      <div className="notificationContainer">

        <h1>Notifications</h1>
        <p>You have 2 notifications please check</p>

        {notifications.map((item) => (

          <div className="notificationCard" key={item.id}>

            <div className="notificationLeft">
              <img src={item.icon} alt="" />
              <span>{item.text}</span>
            </div>

            <div className="notificationDate">
              {item.date}
            </div>

          </div>

        ))}

      </div>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footerCol">
          <h2>Guntur kaaram</h2>
          <p>
            Bringing you authentic, homemade pickles crafted with love
            and tradition since 2026.
          </p>
        </div>

        <div className="footerCol">
          <h3>Quick</h3>
          <p>About Us</p>
          <p>Veg Pickles</p>
          <p>Non Veg Pickles</p>
          <p>Customized</p>
          <p>Contact Us</p>
        </div>

        <div className="footerCol">
          <h3>Policies</h3>
          <p>Shipping Policy</p>
          <p>Return & Refund</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>FAQ</p>
        </div>

        <div className="footerCol">
          <h3>Trust & Safety</h3>
          <p>4.8⭐ Rated by 10,000+ Customers</p>
          <p>Return & 7-Day Replacement</p>
          <p>COD Available</p>
          <p>Secure Payments</p>
        </div>

      </footer>

      <div className="copyright">
        © 2026 Guntur Kaaram . All rights reserved.
      </div>

    </div>
  );
}

export default Notifications;