import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pickles.css";
import Footer from "../components/Footer"; 


import hero from "../assets/pickle1.jpeg";
import pickle from "../assets/pickle.jpg";
import logo from "../assets/logo.jpg";

function Pickles() {

const navigate = useNavigate();
const [category,setCategory] = useState("veg");
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
name:"Avakaya Pickle",
price:"₹350",
desc:"Sun-cured raw mango pieces blended with traditional spices and cold-pressed oil for a bold flavour.",
type:"veg",
image:pickle
},
{
name:"Allam Mango Pickle",
price:"₹350",
desc:"Raw mango blended with ginger and traditional Andhra spices.",
type:"veg",
image:pickle
},
{
name:"Sweet Mango Pickle",
price:"₹350",
desc:"Sweet tangy mango pickle made using authentic ingredients.",
type:"veg",
image:pickle
},
{
name:"Spice Mango Pickle",
price:"₹350",
desc:"Traditional spicy Andhra mango pickle.",
type:"veg",
image:pickle
},
]

const filteredProducts = products.filter(p => p.type === category);

return (

<div className="pickles-page">

{/* NAVBAR */}

<nav className="navbar">

<img src={logo} className="logo" alt="logo" />

<ul className="nav-links">
<li>Home</li>
<li onClick={()=>navigate("/about")}>About Us</li>
<li onClick={()=>navigate("/pickles")}>Pickles</li>
<li onClick={()=>navigate("/Customized")}>Customized</li>
<li>Contact Us</li>
</ul>

<button className="login-btn">Log In / Sign Up</button>

</nav>


{/* hero */}

<div className="pickles-hero" style={{backgroundImage:`url(${hero})`}}>

<div className="hero-overlay">

<h1>Authentic Indian Pickles</h1>

<p>
Handcrafted with love, packed with tradition.
From tangy mango to fiery prawns.
</p>

</div>

</div>


{/* CATEGORY BAR */}

<div className="category-bar">

<div>
<h2>🥬 Veg Pickles</h2>
<p> 15 items found</p>
</div>

<div className="toggle">

<button
className={category==="veg" ? "active":""}
onClick={()=>setCategory("veg")}
>
🥬 Veg
</button>

<button 
className="nonveg-btn"
onClick={() => navigate("/nonvegpickles")}
>
Non Veg
</button>


</div>

</div>


{/* MAIN CONTENT */}

<div className="pickles-container">


{/* SIDEBAR */}


<div className="filter-box">

<h3>Primary Ingredient</h3>
<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Mango Pickles (4)
</label>

<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Lemon Pickles (4)
</label>

<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Gongura Pickles (4)
</label>
<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Garlic Pickles (4)
</label>
<label className="radio-item">
  <input type="radio" name="ingredient" />
  <span className="custom-radio"></span>
  Amla Pickles (4)
</label>



</div>


{/* PRODUCTS */}

<div className="products-grid">

{filteredProducts.map((item,index)=>(

<div className="product-card">


<div className="image-box">

<img src={item.image} alt="pickle"/>

<span
  className={`heart-icon ${likedItems[index] ? "active" : ""}`}
  onClick={() => toggleLike(index)}
>
  ♥
</span>


</div>

<h3>{item.name}</h3>

<p className="desc">{item.desc}</p>

<div className="price-row">

<span className="price">{item.price}</span>

<select>
<option>250 Grams</option>
<option>500 Grams</option>
</select>

</div>

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

))}

</div>

</div>

   <Footer />



</div>

);

}

export default Pickles;