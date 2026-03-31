import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pickles.css";
import Footer from "../components/Footer"; 





import hero from "../assets/pickle1.jpeg";
import pickle from "../assets/pickle.jpg";


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
price:350,
oldprice:400,
desc:"Sun-cured raw mango pieces blended with traditional spices and cold-pressed oil for a bold flavour.",
type:"veg",
image:pickle
},
{
name:"Allam Mango Pickle",
price:350,
oldprice:400,
desc:"Sun-cured raw mango pieces blended with traditional spices and cold-pressed oil for a bold flavour.",
type:"veg",
image:pickle
},
{
name:"Sweet Mango Pickle",
price:350,
oldprice:400,
desc:"Sun-cured raw mango pieces blended with traditional spices and cold-pressed oil for a bold flavour.",
type:"veg",
image:pickle
},
{
name:"Spice Mango Pickle",
price:350,
oldprice:400,
desc:"Sun-cured raw mango pieces blended with traditional spices and cold-pressed oil for a bold flavour.",
type:"veg",
image:pickle
},
];
const filteredProducts = products.filter(p => p.type === category);

return (

<div className="pickles-page">




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


<div className="products-grid">

{filteredProducts.map((item, index) => (

  <div className="product-card" key={index}>

    <div className="image-box">
      <img src={item.image} alt="pickle"/>

      <span
        className={`heart-icon ${likedItems[index] ? "active" : ""}`}
        onClick={() => toggleLike(index)}
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

    <p className="desc">{item.desc}</p>

    {/* BOTTOM RIGHT */}
    <div className="bottom-row">
      

      <button
        className={`cart-btn ${cartItems[index] ? "added" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          addToCart(index);
        }}
      >
        {cartItems[index] ? "Added to Cart 🛒" : "Add to Cart"}
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

   <Footer />



</div>

);

}

export default Pickles;