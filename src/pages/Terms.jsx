import React, { useState } from "react";

import "./Terms.css";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import LogoutModal from "../pages/LogoutModal";





function Terms() {
    

const navigate = useNavigate();


const [showLogoutModal, setShowLogoutModal] = useState(false);



 <Navbar />
return (
    
<div className="terms-page">
     
    

{/* Breadcrumb */}

<div className="breadcrumb">
Home &gt; Terms and conditions
</div>

<div className="terms-container">

{/* LEFT SIDEBAR */}

<div className="terms-sidebar">

  <div 
    className="menu-item"
    onClick={() => navigate("/profile")}
  >
    <FaUserCircle className="menu-icon" />
    <span>My Profile</span>
  </div>

  <div 
    className="menu-item"
    onClick={() => navigate("/orders")}
  >
    <FaUserCircle className="menu-icon" />
    <span>Orders</span>
  </div>

  <div 
    className="menu-item"
    onClick={() => navigate("/privacy")}
  >
    <FaUserCircle className="menu-icon" />
    <span>Privacy and Policy</span>
  </div>

       <div className="menuItem active">
     <FaUserCircle className="menuIcon" />
     Terms and Conditions
   </div>

  {/* LOGOUT */}
  <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>

    <FiLogOut className="logout-icon" />
    <span>Log Out</span>
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

export default Terms;