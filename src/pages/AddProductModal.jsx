import React, { useState } from "react";
import "./AddProductModal.css";

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePriceSelect = (value) => {
    setFormData({ ...formData, price: value });
  };

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="add-overlay">
      <div className="add-modal">

        {/* Header */}
        <div className="add-header">
          <h2>New Product</h2>
          <button onClick={onClose}>✖</button>
        </div>

        {/* Inputs */}
        <label>Product</label>
        <input name="name" onChange={handleChange} />

        <label>Category</label>
        <input name="category" onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" onChange={handleChange}></textarea>

        <label>Price</label>
        <div className="price-options">
          <button onClick={() => handlePriceSelect("250 gm - 120/-")}>
            250 gm - 120/-
          </button>
          <button onClick={() => handlePriceSelect("500 gm - 450/-")}>
            500 gm - 450/-
          </button>
          <button onClick={() => handlePriceSelect("1kg - 800/-")}>
            1kg - 800/-
          </button>
        </div>

        {/* Submit */}
        <button className="add-btn" onClick={handleSubmit}>
          Add Product
        </button>

      </div>
    </div>
  );
};

export default AddProductModal;