import React from "react";
import "./Terms.css";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 


function Terms() {

const navigate = useNavigate();

return (
<div className="terms-page">
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
    

{/* Breadcrumb */}

<div className="breadcrumb">
Home &gt; Terms and conditions
</div>

<div className="terms-container">

{/* LEFT SIDEBAR */}

<div className="sidebar">

<div className="menu-item" onClick={()=>navigate("/profile")}>
👤 My Profile
</div>

<div className="menu-item" onClick={()=>navigate("/orders")}>
👤 Orders
</div>

<div className="menu-item" onClick={()=>navigate("/privacy")}>
👤 Privacy and Policy
</div>

<div className="menu-item active">
👤 Terms and Conditions
</div>

<button className="logout-btn">
⟳ Log Out
</button>

</div>

{/* RIGHT CONTENT */}

<div className="terms-content">

<h2>Terms and Conditions</h2>

<h3>1. Order Acceptance:</h3>
<p>
We reserve the right to refuse or cancel any pickle order due to product
availability or pricing errors.
</p>

<h3>2. Shipping & Delivery:</h3>
<p>
All delivery dates are estimates, and risk of loss passes to you once the
jars leave our kitchen.
</p>

<h3>3. Refunds & Returns:</h3>
<p>
Due to the perishable nature of food, we only offer refunds for jars that
arrive damaged or broken.
</p>

<h3>4. User Conduct:</h3>
<p>
You agree not to use our site for any unlawful purpose or to attempt to
breach our security systems.
</p>

<h3>5. Intellectual Property:</h3>
<p>
All "Pickles & Company" branding, recipes, and original photography are
our exclusive property and may not be reused.
</p>

</div>

</div>

<Footer /> 

</div>
);

}

export default Terms;