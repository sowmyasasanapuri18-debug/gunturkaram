import React from "react";
import "./LogoutModal.css";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="logoutmodal-box">
        <h3>Confirm Logout</h3>
        <p>Are you sure you want to logout?</p>

        <div className="modal-actions">
          <button className="logcancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="log-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
