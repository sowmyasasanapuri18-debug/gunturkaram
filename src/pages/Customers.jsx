import React from "react";
import "./Customers.css";
import logo from "../assets/logo.jpg";
import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const customers = [
  { date: "05-03-2026", name: "Radhika", email: "radhika@gmail.com", phone: "+919845362745", orders: 12 },
  { date: "06-03-2026", name: "Amit", email: "amit@yahoo.com", phone: "+919876543210", orders: 8 },
  { date: "07-03-2026", name: "Sneha", email: "sneha@hotmail.com", phone: "+919834567890", orders: 20 },
  { date: "08-03-2026", name: "Karan", email: "karan@outlook.com", phone: "+919823456789", orders: 15 },
  { date: "09-03-2026", name: "Priya", email: "priya@gmail.com", phone: "+919812345678", orders: 10 },
  { date: "10-03-2026", name: "Vikram", email: "vikram@gmail.com", phone: "+919801234567", orders: 5 },
  { date: "11-03-2026", name: "Anjali", email: "anjali@gmail.com", phone: "+919890123456", orders: 18 },
];

function Customers() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="logo" />

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

          <li onClick={() => navigate("/Customers")}>
            <FaUsers /> Customers
          </li>
        </ul>

        <div className="management">
          <h3>Management</h3>
          <ul>

            <li onClick={() => navigate("/Notification")}>
            <FaBell /> Notification
          </li>
        
            
            <li><FaCog /> Settings</li>
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
            <h1>Customers</h1>
            <p>Here we can able to see the customers details</p>
          </div>
        </div>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer Name</th>
              <th>E-mail ID</th>
              <th>Mobile Number</th>
              <th>Orders</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Customers;