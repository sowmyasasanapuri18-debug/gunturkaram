import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import logo from "../assets/logo.jpg";

function Profile() {
    const navigate = useNavigate();
    

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

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>

        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/pickles">Pickles</Link></li>
          <li><Link to="/customized">Customized</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="navIcons">
          <Link to="/cart">🛒</Link>
          <Link to="/wishlist">❤️</Link>
          <span>🔔</span>
          <Link to="/profile">👤</Link>
        </div>

      </nav>


      {/* BREADCRUMB */}
      <div className="breadcrumb">
        Home &gt; My Profile
      </div>


      {/* PROFILE SECTION */}
      <div className="profileContainer">

        {/* LEFT MENU */}
        <div className="profileMenu">

          <div className="menuItem active">👤 My Profile</div>
         <div 
className="menuItem"
onClick={() => navigate("/orders")}
>
👤 Orders
</div>
          <div className="menuItem">👤 Privacy and Policy</div>
          <div className="menuItem">👤 Terms and Conditions</div>

          <button className="logoutBtn">⭮ Log Out</button>

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

          <button className="updateBtn">
            Update Profile
          </button>

        </div>

      </div>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footerCol">
          <h2>Guntur kaaram</h2>
          <p>
            Bringing you authentic, homemade pickles crafted with love
            and tradition since 2026.
          </p>
        </div>

        <div className="footerCol">
          <h3>Quick</h3>
          <p>About Us</p>
          <p>Veg Pickles</p>
          <p>Non Veg Pickles</p>
          <p>Customized</p>
          <p>Contact Us</p>
        </div>

        <div className="footerCol">
          <h3>Policies</h3>
          <p>Shipping Policy</p>
          <p>Return & Refund</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>FAQ</p>
        </div>

        <div className="footerCol">
          <h3>Trust & Safety</h3>
          <p>4.8⭐ Rated by 10,000+ Customers</p>
          <p>Return & 7-Day Replacement</p>
          <p>COD Available</p>
          <p>Secure Payments</p>
        </div>

      </footer>

      <div className="copyright">
        © 2026 Guntur Kaaram . All rights reserved.
      </div>

    </div>
  );
}

export default Profile;