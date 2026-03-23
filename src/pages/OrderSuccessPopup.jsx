import React from "react";
import "./OrderSuccessPopup.css";
import cartIcon from "../assets/cart-icon.png"; // your green cart image

const OrderSuccessPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup-card">

        <div className="icon-circle">
          <img src={cartIcon} alt="cart" />
        </div>

        <h2 className="popup-title">
          Your Order Placed <br />
          <span>Successfully</span>
        </h2>

        <button className="ok-btn" onClick={onClose}>
          OK
        </button>

      </div>
    </div>
  );
};

export default OrderSuccessPopup;
