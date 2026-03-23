
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Nonvegpickles.css";
import Footer from "../components/Footer"; 


import hero from "../assets/pickle1.jpeg";
import pickle from "../assets/pickle.jpg";
import logo from "../assets/logo.jpg";

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
    [id]: !prev[id], // ✅ toggle true/false
  }));
};

const products = [
{
  id: 1,
name:"Boneless Chicken Pickle",
price:350,
oldprice:400,
img:pickle
},
{
  id: 2,
name:"Chicken Ginger Pickle",
price:350,
oldprice:400,
img:pickle
},
{
  id: 3,
name:"Chicken Gongura Pickle",
price:350,
oldprice:400,
img:pickle
},
{
  id: 4,
name:"Spice Chicken Pickle",
price:350,
oldprice:400,
img:pickle
}
];

return (
<div>

{/* NAVBAR */}

<nav className="navbar">

<img src={logo} className="logo" alt="logo"/>

<ul>
<li>Home</li>
<li>About Us</li>
<li className="active">Pickles</li>
<li onClick={()=>navigate("/Customized")}>Customized</li>
<li>Contact Us</li>
</ul>

<button className="login-btn">
Log In/Sign Up
</button>

</nav>


{/* hero SECTION */}

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

<div className="pickles-header">
<div>
<h2>🍗 Non Veg Pickles</h2>
<p> 15 items found</p>
</div>

<div className="toggle">

<button 
className="veg-btn"
onClick={() => navigate("/Pickles")}
>
Veg
</button>

<button className="nonveg-btn">
🍗 Non Veg
</button>

</div>

</div>


<div className="content">

{/* LEFT FILTER */}

<div className="filter-box">

<h3>Primary Ingredient</h3>




<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Chicken Pickles (4)
</label>

<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Mutton Pickles (4)
</label>

<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Prawn Pickles (4)
</label>
<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Fish Pickles (4)
</label>
<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Crab Pickles (4)
</label>



</div>



{/* PRODUCTS */}

<div className="products">

{products.map((item,index)=>(
<div className="card" key={index}>

<img src={item.img} alt={item.name}/>

<div className="card-body">

<h4>{item.name}</h4>

<p className="desc">
Sun-cured raw mango pieces blended with traditional spices.
</p>

<div className="price">
₹{item.price}
</div>
<span
  className={`heart-icon ${likedItems[item.id] ? "active" : ""}`}
  onClick={() => toggleLike(item.id)}
>
  ♥
</span>

<button
  className={`cart-btn ${cartItems[index] ? "added" : ""}`}
  onClick={(e) => {
    e.stopPropagation();
    addToCart(index);
  }}
>
  {cartItems[index] ? "Added to Cart 🛒" : "Add to Cart"}
</button>

</div>

</div>
))}

</div>

</div>

</div>


 
<Footer /> 

</div>
);
};

export default Nonvegpickles;