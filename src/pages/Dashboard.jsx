import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";


import {
  
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBell,
  FaCog
} from "react-icons/fa";

// 👉 Import your images from assets
import logo from "../assets/logo.jpg";
import product1 from "../assets/pickle2.png";
import product2 from "../assets/pickle2.png";
import product3 from "../assets/pickle2.png";
import product4 from "../assets/pickle2.png";
import chartImg from "../assets/Chart.png";



const Dashboard = () => {
   const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>

        

          <ul>
  <li className="active">
    <MdDashboard /> Dashboard
  </li>

  <li onClick={() => navigate("/products")}>
    <FaBox /> Products
  </li>

  <li onClick={() => navigate("/order")}>
    <FaShoppingCart /> Orders
  </li>

  <li onClick={() => navigate("/customers")}>
    <FaUsers /> Customers
  </li>
</ul>


        <h3 className="management-title">Management</h3>

        <ul className="menu">
          <li><FaBell /> Notifications</li>
          <li><FaCog /> Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Topbar */}
        <div className="topbar">
          <input type="text" placeholder="Search here" />
          <div className="notification-icon">🔔</div>
        </div>

        <h1>Dashboard</h1>
        <p className="subtitle">
          Welcome back! Here's your business overview.
        </p>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <h4>Total Sales</h4>
            
            <h2>₹1,24,580</h2>
            <p>This month</p>
            <span className="green">+12.5% vs last period</span>
          </div>

          <div className="card">
            <h4>Total Orders</h4>
            <h2>645</h2>
            <p>This month</p>
            <span className="green">+8.2% vs last period</span>
          </div>

          <div className="card">
            <h4>New Customers</h4>
            <h2>129</h2>
            <p>This Week</p>
            <span className="green">+12.5% vs last period</span>
          </div>

          <div className="card">
            <h4>Low Stock Alerts</h4>
            <h2>2</h2>
            <p>Items below threshold</p>
            <span className="red">-2 vs last period</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="middle">

          {/* Graph */}
          <div className="graph">
  <img src={chartImg} alt="Revenue Graph" />
</div>



          {/* Top Products */}
          <div className="products-box">
            <h3>Top Products</h3>
            <p>This are the most top products sell in our website</p>

            <div className="product">
              <img src={product1} alt="" />
              <span>Mango Pickles</span>
            </div>

            <div className="product">
              <img src={product2} alt="" />
              <span>Spicy Guava Chutney</span>
            </div>

            <div className="product">
              <img src={product3} alt="" />
              <span>Sweet Pineapple Salsa</span>
            </div>

            <div className="product">
              <img src={product4} alt="" />
              <span>Coconut Curry Relish</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="orders">
          <div className="orders-header">
            <h3>Recent Orders</h3>
            <button>Enter date</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ORD - 2345</td>
                <td>Radhika</td>
                <td>₹1,250</td>
                <td><span className="status progress">Inprogress</span></td>
                <td>10 mins ago</td>
              </tr>

              <tr>
                <td>ORD - 2346</td>
                <td>Sanjay</td>
                <td>₹800</td>
                <td><span className="status completed">Completed</span></td>
                <td>5 mins ago</td>
              </tr>

              <tr>
                <td>ORD - 2347</td>
                <td>Priya</td>
                <td>₹2,150</td>
                <td><span className="status pending">Pending</span></td>
                <td>20 mins ago</td>
              </tr>

              <tr>
                <td>ORD - 2348</td>
                <td>Amit</td>
                <td>₹1,700</td>
                <td><span className="status progress">Inprogress</span></td>
                <td>15 mins ago</td>
              </tr>

              <tr>
                <td>ORD - 2349</td>
                <td>Neha</td>
                <td>₹950</td>
                <td><span className="status cancelled">Cancelled</span></td>
                <td>30 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
