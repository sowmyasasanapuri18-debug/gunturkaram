import React, { useState } from "react";
import "./Products.css";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

// ✅ Correct imports
import EditProductModal from "../pages/EditProductModal";
import AddProductModal from "../pages/AddProductModal";
import DeleteModal from "../pages/DeleteModal";

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBell,
  FaCog,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

function Products() {
  const navigate = useNavigate();

  // ✅ Products in state
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mango Pickle",
      category: "Spicy, Ginger",
      price: "250 gm 200",
      stock: false,
    },
    {
      id: 2,
      name: "Apple Chutney",
      category: "Sweet, Cinnamon",
      price: "300 gm 180",
      stock: true,
    },
    {
      id: 3,
      name: "Tomato Salsa",
      category: "Zesty, Cilantro",
      price: "350 gm 220",
      stock: true,
    },
    

  ]);

  // ✅ Edit Modal State
  const [editModal, setEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  // ✅ Add Modal State
  const [addModal, setAddModal] = useState(false);

  // ✅ Open Edit Modal
  const handleEditClick = (product) => {
    setEditProduct(product);
    setEditModal(true);
  };

  // ✅ Update Product
  const handleUpdate = (updatedProduct) => {
    setProducts(products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    ));
  };

  // ✅ Add Product
  const handleAddProduct = (newProduct) => {
    setProducts([
      ...products,
      {
        ...newProduct,
        id: Date.now(),
        stock: true,
      },
    ]);
  };

  // ✅ Delete Product (simple)
  
  const [deleteModal, setDeleteModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const confirmDelete = () => {
  setProducts(products.filter(p => p.id !== selectedProduct.id));
  setDeleteModal(false);
  setSelectedProduct(null);
};

  return (
    <div className="dashboard">
      
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="logo" />

        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <FaBox /> Dashboard
          </li>

          <li className="active">
            <FaBox /> Products
          </li>

          <li onClick={() => navigate("/order")}>
            <FaShoppingCart /> Orders
          </li>

          <li onClick={() => navigate("/customers")}>
            <FaUsers /> Customers
          </li>
        </ul>

        <div className="management">
          <h3>Management</h3>
          <ul>
            <li><FaBell /> Notifications</li>
            <li><FaCog /> Settings</li>
          </ul>
        </div>
      </div>

      {/* Main */}
      <div className="main">

        {/* Topbar */}
        <div className="topbar">
          <input type="text" placeholder="Search here" />
          <div className="bell">🔔</div>
        </div>

        {/* Header */}
        <div className="header">
          <div>
            <h1>Products</h1>
            <p>{products.length} pickle varieties in catalog</p>
          </div>

          <button className="add-btn" onClick={() => setAddModal(true)}>
            <FaPlus /> Add Product
          </button>
        </div>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>

                <td>
                  <span className={item.stock ? "in" : "out"}>
                    {item.stock ? "Available" : "Out of stock"}
                  </span>
                </td>

                <td className="actions">
                  {/* Delete */}
                  <FaTrash
  className="delete"
  onClick={() => {
    setSelectedProduct(item);
    setDeleteModal(true);
  }}
/>

                  {/* Edit */}
                  <FaEdit
                    className="edit"
                    onClick={() => handleEditClick(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Add Product Modal */}
      <AddProductModal
        isOpen={addModal}
        onClose={() => setAddModal(false)}
        onAdd={handleAddProduct}
      />

      {/* ✅ Edit Product Modal */}
      <EditProductModal
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        product={editProduct}
        onUpdate={handleUpdate}
      />
    <DeleteModal
  isOpen={deleteModal}
  onClose={() => setDeleteModal(false)}
  onDelete={confirmDelete}
/>
    </div>
  );
}

export default Products;