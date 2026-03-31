import React from "react";
import "./Order.css";
import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const orders = [
  { date: "5 - 03 - 2026", id: "ORD - 26586", name: "Mango Pickle", qty: "250 gms", price: "₹ 120" },
  { date: "5 - 04 - 2026", id: "ORD - 26587", name: "Mixed Nuts", qty: "500 gms", price: "₹ 300" },
  { date: "5 - 05 - 2026", id: "ORD - 26588", name: "Coconut Chutney", qty: "200 gms", price: "₹ 150" },
  { date: "5 - 06 - 2026", id: "ORD - 26589", name: "Spicy Pickles", qty: "300 gms", price: "₹ 180" },
  { date: "5 - 07 - 2026", id: "ORD - 26590", name: "Fruit Jam", qty: "400 gms", price: "₹ 250" },
  { date: "5 - 08 - 2026", id: "ORD - 26591", name: "Herbal Tea", qty: "100 gms", price: "₹ 220" },
  { date: "5 - 09 - 2026", id: "ORD - 26592", name: "Granola Bars", qty: "10 pieces", price: "₹ 350" },
  { date: "5 - 10 - 2026", id: "ORD - 26593", name: "Almond Butter", qty: "250 gms", price: "₹ 400" },
];

function Order() {
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

          <li className="active">
            <FaShoppingCart /> Orders
          </li>

          <li onClick={() => navigate("/Customers")}>
            <FaUsers /> Customers
          </li>

        </ul>

        <div className="management">
          <h3>Management</h3>
          <ul>
            <li><FaBell /> Notifications</li>
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
            <h1>Orders</h1>
            <p>Here we can able to see to orders from the customer</p>
          </div>

          <select className="dropdown">
            <option>Select</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Order ID</th>
              <th>Pickle Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Order;