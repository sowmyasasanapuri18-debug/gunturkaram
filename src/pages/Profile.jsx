import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Profile.css";
import ProfileSuccessPopup from "./ProfileSuccessPopup";
import Footer from "../components/Footer"; 

import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import LogoutModal from "../pages/LogoutModal";






function Profile() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    

  const [profile, setProfile] = useState({
    name: "K Manohara",
    email: "manohara@gmail.com",
    phone: "+918576473856",
    password: "********",
    confirmPassword: "********"
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>

    


      {/* BREADCRUMB */}
      <div className="breadcrumb">
        Home &gt; My Profile
      </div>


      {/* PROFILE SECTION */}
      <div className="profileContainer">

        {/* LEFT MENU */}
        <div className="profileMenu">

          <div className="menuItem active">
    <FaUserCircle className="menuIcon" />
    My Profile
  </div>

         <div 
className="menuItem"
onClick={() => navigate("/orders")}
>
<FaUserCircle className="menuIcon" />
    Orders
  </div>
          <div className="menuItem">
    <FaUserCircle className="menuIcon" />
    Privacy and Policy
  </div>

  <div className="menuItem">
    <FaUserCircle className="menuIcon" />
    Terms and Conditions
  </div>

          <button
            className="logout-btn"
            onClick={() => setShowLogoutModal(true)}
          >
  <FiLogOut className="logout-icon" />
  <span>Log Out</span>
</button>

        </div>


        {/* PROFILE FORM */}
        <div className="profileForm">

          <h2>Profile Information</h2>

          <label>Full Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
          />

          <div className="row">

            <div className="inputGroup">
              <label>E-mail ID</label>
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <label>Mobile Number</label>
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">

            <div className="inputGroup">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword}
                onChange={handleChange}
              />
            </div>

          </div>

          <button 
  className="updateBtn"
  onClick={() => {
    setShowPopup(true);

    // optional auto close
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }}
>
  Update Profile
</button>


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
    <ProfileSuccessPopup
  show={showPopup}
  onClose={() => setShowPopup(false)}
/>

    </div>
  
  );
}

export default Profile;