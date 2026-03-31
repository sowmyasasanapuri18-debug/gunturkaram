import React from "react";
import "./Settings.css";
import logo from "../assets/logo.jpg";
import {
  FaThLarge,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBell,
  FaCog
} from "react-icons/fa";

const SettingItem = ({ title, desc }) => {
  return (
    <div className="setting-item">
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

const Settings = () => {
  return (
    <div className="settings-container">
      
      {/* Sidebar */}
      <div className="sidebar">
         <img src={logo} alt="logo" />

        <ul className="menu">
          <li><FaThLarge /> Dashboard</li>
          <li><FaBox /> Products</li>
          <li><FaShoppingCart /> Orders</li>
          <li><FaUsers /> Customers</li>
        </ul>

        <h3 className="management-title">Management</h3>

        <ul className="menu">
          <li><FaBell /> Notifications</li>
          <li className="active"><FaCog /> Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Top Bar */}
        <div className="topbar">
          <input type="text" placeholder="Search here" />
          <div className="notification-icon">🔔</div>
        </div>

        <h1>Settings</h1>
        <p className="subtitle">
          Here we can able to change the settings for the website
        </p>

        <SettingItem
          title="Password Update"
          desc="Admin can able to change or update the password"
        />
        <SettingItem
          title="System E-mail Notification"
          desc="Define e-mail templates for system updates and orders confirmation"
        />
        <SettingItem
          title="Automatic order Fulfillment"
          desc="Define rules for automatically processing and fulfilling certain orders."
        />
        <SettingItem
          title="Low Stock Alert Thresholds"
          desc="Set stock levels below which alerts are triggered for each pickle type."
        />
        <SettingItem
          title="Admin Access Roles & Permissions"
          desc="Manage access levels for different admin roles and view access logs."
        />
        <SettingItem
          title="Third-Party Market API Connectors"
          desc="Connect and manage APIs for various online markets (e.g., local grocers)."
        />
      </div>
    </div>
  );
};

export default Settings;
