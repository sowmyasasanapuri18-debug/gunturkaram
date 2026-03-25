import React from "react";
import "./PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; 

import Navbar from "../components/Navbar";

function PrivacyPolicy() {
    const navigate = useNavigate();
    <Navbar />
  return (
    <div className="privacy-page">
       

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home &gt; Privacy and Policy
      </div>

      <div className="privacy-container">

        {/* LEFT SIDEBAR */}
        <div className="sidebar">

          <div className="menu-item">👤 My Profile</div>

<div className="menu-item">👤 Orders</div>
<div className="menu-item active" >👤 Privacy and Policy</div>


          

          

        <div className="menu-item" onClick={() => navigate("/terms")}>
  👤 Terms and Conditions
</div>

          <button className="logout-btn">
            ⟳ Log Out
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="policy-content">

          <h2>Privacy Policy</h2>

          <h3>1. Data Collection (The Ingredients)</h3>
          <p>
            We only collect the essentials, like your shipping address and email,
            to get our jars to your door. We never see or store your full credit
            card details, as these are handled by secure, encrypted payment
            processors.
          </p>

          <h3>2. How We Use It (The Recipe)</h3>
          <p>
            Your info is used solely to fulfill orders, send tracking updates,
            and improve our seasonal pickle flavors. If you join the "Pickle
            Club," we'll send occasional recipes and deals, but you can opt out
            at any time.
          </p>

          <h3>3. Third-Party Sharing (The Sous Chefs)</h3>
          <p>
            We never sell your personal data; we only share it with trusted
            partners like UPS or FedEx for delivery. These partners are legally
            bound to protect your information and use it only for the service
            they provide us.
          </p>

        </div>

      </div>


    <Footer />

    </div>
  );
}

export default PrivacyPolicy;