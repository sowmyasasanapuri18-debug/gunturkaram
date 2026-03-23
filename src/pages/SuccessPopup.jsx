import React from "react";
import "./SuccessPopup.css";
import boxImg from "../assets/box.png"; // add your box image here

const SuccessPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <img src={boxImg} alt="box" className="box-image" />

        <h2 className="title">
          Your Item Added <br />
          <span className="success">Successfully</span>
        </h2>

        <button className="close-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
