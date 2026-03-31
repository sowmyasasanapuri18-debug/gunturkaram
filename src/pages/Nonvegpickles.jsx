import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nonvegpickles.css";
import Footer from "../components/Footer";


import hero from "../assets/pickle1.jpeg";
import pickle from "../assets/pickle.jpg";

const Nonvegpickles = () => {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState({});
  const [cartItems, setCartItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Boneless Chicken Pickle",
      price: 350,
      oldprice: 400,
      img: pickle,
    },
    {
      id: 2,
      name: "Chicken Ginger Pickle",
      price: 350,
      oldprice: 400,
      img: pickle,
    },
    {
      id: 3,
      name: "Chicken Gongura Pickle",
      price: 350,
      oldprice: 400,
      img: pickle,
    },
    {
      id: 4,
      name: "Spice Chicken Pickle",
      price: 350,
      oldprice: 400,
      img: pickle,
    },
  ];

  return (
    <div>

      

      {/* HERO SECTION */}
      <div
        className="nonvegpickles-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="nonvegpickles-hero-text">
          <h1>Authentic Indian Pickles</h1>
          <p>
            Handcrafted with love, packed with tradition.
            From tangy mango to fiery prawns.
          </p>
        </div>
      </div>

      

          {/* PRODUCTS */}
           <div className="pickles-section">

  {/* HEADER */}
  <div className="pickles-header">
    <div>
      <h2>🍗 Non Veg Pickles</h2>
      <p>15 items found</p>
    </div>

    <div className="toggle-container">
      <div
        className="toggle-option"
        onClick={() => navigate("/Pickles")}
      >
        🥬 Veg
      </div>

      <div className="toggle-option red active">
        🍗 Non Veg
      </div>
    </div>
  </div>

  {/* CONTENT */}
  <div className="content">

    {/* LEFT FILTER */}
    <div className="filter-box">
      <h3>Primary Ingredient</h3>

      {["Chicken", "Mutton", "Prawn", "Fish", "Crab"].map((item, i) => (
        <label key={i} className="radio-item">
          <input type="radio" name="ingredient" />
          <span className="custom-radio"></span>
          {item} Pickles (4)
        </label>
      ))}
    </div>

    {/* PRODUCTS */}
    <div className="products">
      {products.map((item) => (
        <div className="card" key={item.id}>

          {/* IMAGE */}
          <div className="image-box">
            <img src={item.img} alt={item.name} />

            <span
              className={`heart-icon ${likedItems[item.id] ? "active" : ""}`}
              onClick={() => toggleLike(item.id)}
            >
              ♥
            </span>
          </div>

          {/* TOP ROW */}
          <div className="top-row">
            <h3 className="product-name">{item.name}</h3>

            <div className="price">
              ₹{item.price}
              <span className="old-price"> ₹{item.oldprice}</span>
            </div>
          </div>

          {/* DESC */}
          <p className="desc">
            Sun-cured raw mango pieces blended with traditional spices and cold-pressed oil for a bold flavour.
          </p>

          {/* ACTION ROW */}
          <div className="action-row">
            <button
              className={`cart-btn ${cartItems[item.id] ? "added" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item.id);
              }}
            >
              {cartItems[item.id] ? "Added 🛒" : "Add to Cart"}
            </button>

            <select>
              <option>250 Grams</option>
              <option>500 Grams</option>
              <option>1 Kg</option>
            </select>
          </div>

        </div>
      ))}
    </div>

  </div>
</div>
           
      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Nonvegpickles;