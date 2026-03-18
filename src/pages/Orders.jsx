import React from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import mango from "../assets/cart.jpeg";

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


{/* FOOTER */}

<footer className="footer">

<div className="footer-grid">
    <img src={logo} className="logo" alt="logo"/>

<div>
<h2>Guntur kaaram</h2>
<p>Bringing you authentic, homemade pickles crafted with love and tradition since 2026.</p>
</div>


<div>
<h3>Quick</h3>
<p>About Us</p>
<p>Veg Pickles</p>
<p>Non Veg Pickles</p>
<p>Customized</p>
<p>Contact Us</p>
</div>

<div>
<h3>Policies</h3>
<p>Shipping Policy</p>
<p>Return & Refund</p>
<p>Privacy Policy</p>
<p>Terms of Services</p>
<p>FAQ</p>
</div>

<div>
<h3>Trust & Safety</h3>
<p>4.8⭐ Rated by 10,000+ Customers</p>
<p>Return & 7-Day Replacement</p>
<p>COD Available</p>
<p>Secure Payments</p>
<p>© 2026 Guntur Kaaram. All rights reserved. FSSAI Lic. No. 12345678901234</p>

</div>

</div>



</footer>

</div>
);
}

export default Orders;