import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        
        {/* Icon */}
        <div className="icon-circle">
          🗑️
        </div>

        {/* Title */}
        <h2 className="modal-title">Are you sure?</h2>

        {/* Buttons */}
        <div className="modal-actions">
          <button className="btn cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn delete-btn" onClick={onDelete}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteModal;