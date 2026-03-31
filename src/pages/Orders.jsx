import React, { useState } from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

import mango from "../assets/cart.jpeg";
import Footer from "../components/Footer"; 

import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import LogoutModal from "../pages/LogoutModal";


function Orders() {
    
const navigate = useNavigate();
const [showLogoutModal, setShowLogoutModal] = useState(false);
const orders = [
{
status:"Inprogress",
date:"8-mar-2026",
id:"254648",
name:"Mango Pickle",
weight:"250g",
price:"₹90",
img:mango
},
{
status:"Delivered",
date:"8-mar-2026",
id:"254648",
name:"Mango Pickle",
weight:"250g",
price:"₹90",
img:mango
}
];



return (

   
    
<div className="orders-page">
    




<div className="breadcrumb">
Home &gt; Orders
</div>


<div className="orders-container">

{/* LEFT SIDEBAR */}

<div className="Orders-sidebar">

  <div 
    className="menu-item" 
    onClick={() => navigate("/profile")}
  >
    <FaUserCircle className="menu-icon" />
    <span>My Profile</span>
  </div>

        <div className="menuItem active">
      <FaUserCircle className="menuIcon" />
      Orders
    </div>

  <div 
    className="menu-item" 
    onClick={() => navigate("/privacy")}
  >
    <FaUserCircle className="menu-icon" />
    <span>Privacy and Policy</span>
  </div>

  <div 
    className="menu-item" 
    onClick={() => navigate("/Terms")}
  >
    <FaUserCircle className="menu-icon" />
    <span>Terms and Conditions</span>
  </div>

  {/* LOGOUT */}
   <button
            className="logout-btn"
            onClick={() => setShowLogoutModal(true)}
          >
    <FiLogOut className="logout-icon" />
    <span>Log Out</span>
  </button>

</div>


{/* RIGHT SECTION */}

<div className="orders-section">

<h2>My Orders</h2>

<div className="orders-tabs">
<span>All</span>
<span>In Progress</span>
<span>Delivered</span>
<span>Canceled</span>
</div>


{orders.map((order,index)=>(
<div className="order-card" key={index}>

<div className="order-top">

<span className={`status ${order.status==="Delivered"?"delivered":"progress"}`}>
{order.status}
</span>

<span>{order.date}</span>

<span>Order ID - {order.id}</span>

</div>

<div className="order-body">

<img src={order.img} alt="product"/>

<div className="order-info">
<h3>{order.name}</h3>
<p>{order.weight}</p>
<p>{order.price}</p>
</div>

<div className="arrow">➤</div>

</div>

</div>
))}

</div>

</div>


 <Footer /> 
 <LogoutModal
  isOpen={showLogoutModal}
  onClose={() => setShowLogoutModal(false)}
  onLogout={() => {
    localStorage.clear();
    navigate("/login");
  }}
/>


</div>
);
}

export default Orders;