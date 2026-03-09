import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pickles.css";

import hero from "./assets/pickle1.jpeg";
import pickle from "./assets/pickle.jpg";
import logo from "./assets/logo.jpg";

function Pickles() {

const navigate = useNavigate();
const [category,setCategory] = useState("veg");

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
<li onClick={()=>navigate("/")}>Home</li>
<li>About Us</li>
<li onClick={()=>navigate("/pickles")}>Pickles</li>
<li>Customized</li>
<li>Contact Us</li>
</ul>

<button className="login-btn">Log In / Sign Up</button>

</nav>


{/* HERO */}

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

<div className="product-card" key={index}>

<div className="image-box">

<img src={item.image} alt="pickle"/>

<span className="wishlist">♡</span>

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

<button className="cart-btn">Add to Cart</button>

</div>

))}

</div>

</div>


{/* FOOTER */}

<footer className="footer">

<div className="footer-grid">

<div>

<img src={logo} className="logo" alt="logo"/>

<p>
Bringing you authentic, homemade pickles crafted with love and tradition since 2026.
</p>

</div>


<div>
<h4>Quick</h4>
<p>About Us</p>
<p>Veg Pickles</p>
<p>Non Veg Pickles</p>
<p>Customized</p>
<p>Contact Us</p>
</div>


<div>
<h4>Policies</h4>
<p>Shipping Policy</p>
<p>Return & Refund</p>
<p>Privacy Policy</p>
<p>Terms of Services</p>
</div>


<div>
<h4>Trust & Safety</h4>
<p>4.8⭐ Rated by 10,000+ Customers</p>
<p>Return & 7-Day Replacement Policy</p>
<p>COD Available</p>
<p>Secure Payments</p>
</div>

</div>


<p className="copyright">
© 2026 Guntur Kaaram. All rights reserved. FSSAI Lic. No. 12345678901234
</p>

</footer>


</div>

);

}

export default Pickles;