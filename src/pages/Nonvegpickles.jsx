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
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-text">
          <h1>Authentic Indian Pickles</h1>
          <p>
            Handcrafted with love, packed with tradition.
            From tangy mango to fiery prawns.
          </p>
        </div>
      </div>

      {/* PICKLES SECTION */}
      <div className="pickles-section">

        {/* HEADER */}
        <div className="pickles-header">
          <div>
            <h2>🍗 Non Veg Pickles</h2>
            <p>15 items found</p>
          </div>

          {/* TOGGLE */}
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
                <img src={item.img} alt={item.name} />

                {/* ❤️ HEART (TOP RIGHT) */}
                <span
                  className={`heart-icon ${likedItems[item.id] ? "active" : ""}`}
                  onClick={() => toggleLike(item.id)}
                >
                  ♥
                </span>

                {/* CARD BODY */}
                <div className="card-body">
                  <h4>{item.name}</h4>

                  <p className="desc">
                    Sun-cured mango pieces blended with traditional spices and
                    cold-pressed oil for a bold, authentic flavour.
                  </p>

                  <div className="price">
                    ₹{item.price}
                    <span className="old-price"> ₹{item.oldprice}</span>
                  </div>

                  {/* BUTTON */}
                  <button
                    className={`cart-btn ${cartItems[item.id] ? "added" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item.id);
                    }}
                  >
                    {cartItems[item.id]
                      ? "Added to Cart 🛒"
                      : "Add to Cart"}
                  </button>

                  {/* DROPDOWN (like screenshot) */}
                  <select className="weight-dropdown">
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