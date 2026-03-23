import React from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import mango from "../assets/cart.jpeg";
import Footer from "../components/Footer"; 


function Orders() {
    
const navigate = useNavigate();
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

{/* NAVBAR */}

<nav className="navbar">
<img src={logo} className="logo" alt="logo"/>

<ul className="nav-links">
<li>Home</li>
<li>About Us</li>
<li>Pickles</li>
<li>Customized</li>
<li>Contact Us</li>
</ul>

<div className="nav-icons">
<span>🛒</span>
<span>❤️</span>
<span>🔔</span>
<span>👤</span>
</div>

</nav>


<div className="breadcrumb">
Home &gt; Orders
</div>


<div className="orders-container">

{/* LEFT SIDEBAR */}

<div className="sidebar">

<div className="menu-item">👤 My Profile</div>

<div className="menu-item active">👤 Orders</div>

 <div className="menu-item" onClick={() => navigate("/privacy")}>
 👤 Privacy and Policy
</div>

<div className="menu-item">👤 Terms and Conditions</div>

<button className="logout">⭘ Log Out</button>

</div>


{/* RIGHT SECTION */}

<div className="orders-section">

<h2>My Orders</h2>

<div className="tabs">
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

</div>
);
}

export default Orders;