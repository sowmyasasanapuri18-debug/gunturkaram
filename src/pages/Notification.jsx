import React from "react";
import "./Notifications.css";
import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const notifications = [
  {
    title: "ORD - 2657 Received",
    desc: "Order has been received for radhika has been placed",
    date: "5 - 3 - 2026",
  },
  {
    title: "ORD - 2657 Received",
    desc: "Order has been received for radhika has been placed",
    date: "5 - 3 - 2026",
  },
  {
    title: "ORD - 2657 Received",
    desc: "Order has been received for radhika has been placed",
    date: "5 - 3 - 2026",
  },
  {
    title: "ORD - 2657 Received",
    desc: "Order has been received for radhika has been placed",
    date: "5 - 3 - 2026",
  },
  {
    title: "ORD - 2657 Received",
    desc: "Order has been received for radhika has been placed",
    date: "5 - 3 - 2026",
  },
];

function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>

        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <FaBox /> Dashboard
          </li>

          <li onClick={() => navigate("/products")}>
            <FaBox /> Products
          </li>

          <li onClick={() => navigate("/orders")}>
            <FaShoppingCart /> Orders
          </li>

          <li onClick={() => navigate("/customers")}>
            <FaUsers /> Customers
          </li>
        </ul>

        <div className="management">
          <h3>Management</h3>
          <ul>
            <li className="active">
              <FaBell /> Notifications
            </li>
            <li onClick={() => navigate("/Settings")}>
            <FaCog/> Settings
          </li>
          </ul>
        </div>
      </div>

      {/* Main */}
      <div className="main">

        {/* Topbar */}
        <div className="topbar">
          <input type="text" placeholder="Search here" />
          <div className="bell">
            <FaBell />
          </div>
        </div>

        {/* Header */}
        <div className="header">
          <div>
            <h1>Notification</h1>
            <p>Here we can able to see the all notifications</p>
          </div>

          <select className="dropdown">
            <option>Select</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        {/* Notification Cards */}
        <div className="notification-list">
          {notifications.map((item, index) => (
            <div className="card" key={index}>
              
     
            <div className="yellow-circle"></div>


              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="date">{item.date}</div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Notifications;