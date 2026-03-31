import React, { useState, useEffect } from "react";
import "./EditProductModal.css";

const EditProductModal = ({ isOpen, onClose, product, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  // Pre-fill data when editing
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        price: product.price || "",
        stock: product.stock ? "Available" : "Out of stock"
      });
    }
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onUpdate({
      ...product,
      ...formData,
      stock: formData.stock === "Available"
    });
    onClose();
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal-box">

        {/* Header */}
        <div className="edit-header">
          <h2>Edit Product</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        {/* Form */}
        <div className="form-group">
          <label>Product</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="text"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <button className="update-btn" onClick={handleSubmit}>
          Update Product
        </button>

      </div>
    </div>
  );
};

export default EditProductModal;