import React from "react";
import "./ProfileSuccessPopup.css";
import successImg from "../assets/key.png"; // use your image here

const ProfileSuccessPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup-card">

        <img 
          src={successImg} 
          alt="success" 
          className="popup-image" 
        />

        <h2 className="popup-title">
          Your Profile Updated <br />
          <span>Successfully</span>
        </h2>

        <button className="ok-btn" onClick={onClose}>
          OK
        </button>

      </div>
    </div>
  );
};

export default ProfileSuccessPopup;
