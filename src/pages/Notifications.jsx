import React from "react";
import { Link } from "react-router-dom";
import "./Notifications.css";
import Footer from "../components/Footer"; 


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

      <Footer /> 

    </div>
  );
}

export default Notifications;