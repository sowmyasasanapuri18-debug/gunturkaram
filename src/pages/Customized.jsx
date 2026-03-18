import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Customized.css";



import logo from "../assets/logo.jpg";


/* Base Images */
import mango from "../assets/cart.jpeg";
import lemon from "../assets/Lemonpickle.png";
import gongura from "../assets/Gongurapickle.png";
import chicken from "../assets/Chickenpickle.png";
import mutton from "../assets/Muttonpickle.png";
import prawn from "../assets/Prawnpickle.png";

/* Oil Images */
import sesame from "../assets/Sesameoil.png";
import mustard from "../assets/Mustardoil.png";
import groundnut from "../assets/Groundnutoil.png";

/* Packaging Images */
import jar from "../assets/Jar.png";
import gift from "../assets/Giftbox.png";
import eco from "../assets/Ecopack.png";

function Customized() {
    const navigate = useNavigate();

const [base,setBase] = useState("Mango Pickle");
const [oil,setOil] = useState("Sesame Oil");
const [spice,setSpice] = useState("Extra Hot");
const [garlic,setGarlic] = useState("Yes");
const [pack,setPack] = useState("Glass Jar");
const [qty,setQty] = useState(1);

const baseItems = [
{img:mango,name:"Mango Pickle"},
{img:lemon,name:"Lemon Pickle"},
{img:gongura,name:"Gongura Pickle"},
{img:chicken,name:"Chicken Pickle"},
{img:mutton,name:"Mutton Pickle"},
{img:prawn,name:"Prawn Pickle"}
];

const oilItems = [
{img:sesame,name:"Sesame Oil"},
{img:mustard,name:"Mustard Oil"},
{img:groundnut,name:"Groundnut Oil"}
];

const packItems = [
{img:jar,name:"Glass Jar"},
{img:gift,name:"Gift Box"},
{img:eco,name:"Eco Pack"}
];

return (

<div className="custom-page">

    {/* NAVBAR */}
    
    <nav className="navbar">
    
    <img src={logo} className="logo" alt="logo" />
    
    <ul className="nav-links">
    <li onClick={()=>navigate("/")}>Home</li>
    <li onClick={()=>navigate("/about")}>About Us</li>
    <li onClick={()=>navigate("/pickles")}>Pickles</li>
    <li onClick={()=>navigate("/customized")}>Customized</li>
    <li onClick={()=>navigate("/contact-us")}>Contact Us</li>
    </ul>
    
    <button
    className="login-btn"
    onClick={() => navigate("/login")}
    >
    Log In / Sign Up
    </button>
    
    </nav>

{/* HERO */}
<div className="custom-hero">

<div className="hero-text">
<h1>Build Your Pickle</h1>
<p>Customize every aspect from base ingredient to packaging.</p>
<p>Your perfect pickle, made just for you.</p>
</div>

</div>

<div className="custom-container">

{/* LEFT SIDE */}
<div className="custom-left">

{/* STEP 1 */}
<div className="step-title">
<div className="step">1</div>
<h2>Select Base Ingredient</h2>
</div>

<div className="card-grid">
{baseItems.map((item,index)=>(
<div
className="card"
key={index}
onClick={()=>setBase(item.name)}
>
<img src={item.img} alt={item.name}/>
<p>{item.name}</p>
</div>
))}
</div>

{/* STEP 2 */}
<div className="step-title">
<div className="step">2</div>
<h2>Select Oil</h2>
</div>

<div className="card-grid">
{oilItems.map((item,index)=>(
<div
className="card"
key={index}
onClick={()=>setOil(item.name)}
>
<img src={item.img} alt={item.name}/>
<p>{item.name}</p>
</div>
))}
</div>

{/* STEP 3 */}
<div className="step-title">
<div className="step">3</div>
<h2>Spice Level</h2>
</div>

<div className="spice">
<button onClick={()=>setSpice("Mild")}>Mild</button>
<button onClick={()=>setSpice("Medium")}>Medium</button>
<button onClick={()=>setSpice("Hot")}>Hot</button>
<button onClick={()=>setSpice("Extra Hot")}>Extra Hot</button>
</div>

{/* STEP 4 */}
<div className="step-title">
<div className="step">4</div>
<h2>Add Garlic</h2>
</div>

<div className="toggle">
<label>
<input
type="radio"
name="garlic"
checked={garlic==="No"}
onChange={()=>setGarlic("No")}
/>
No Garlic
</label>

<label>
<input
type="radio"
name="garlic"
checked={garlic==="Yes"}
onChange={()=>setGarlic("Yes")}
/>
Garlic
</label>
</div>

{/* STEP 5 */}
<div className="step-title">
<div className="step">5</div>
<h2>Packaging</h2>
</div>

<div className="card-grid">
{packItems.map((item,index)=>(
<div
className="card"
key={index}
onClick={()=>setPack(item.name)}
>
<img src={item.img} alt={item.name}/>
<p>{item.name}</p>
</div>
))}
</div>

{/* STEP 6 */}
<div className="step-title">
<div className="step">6</div>
<h2>Quantity</h2>
</div>

<div className="quantity">

<div className="qty-box">
<button onClick={()=> qty>1 && setQty(qty-1)}>-</button>
<span>{qty}</span>
<button onClick={()=>setQty(qty+1)}>+</button>
</div>

<select>
<option>250 Grams</option>
<option>500 Grams</option>
<option>1 KG</option>
</select>

</div>

</div>

{/* RIGHT SIDE SUMMARY */}

<div className="summary">

<h3>Your Pickle</h3>

<div className="summary-row">
<span>Base</span>
<span>{base}</span>
</div>

<div className="summary-row">
<span>Oil</span>
<span>{oil}</span>
</div>

<div className="summary-row">
<span>Spice</span>
<span>{spice}</span>
</div>

<div className="summary-row">
<span>Garlic</span>
<span>{garlic}</span>
</div>

<div className="summary-row">
<span>Packaging</span>
<span>{pack}</span>
</div>

<div className="summary-row">
<span>Quantity</span>
<span>{qty}</span>
</div>

<div className="summary-row total">
<span>Total</span>
<span>₹569</span>
</div>

<button className="cart-btn">Add to Cart</button>
<button className="order-btn">Place Order Now</button>

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
© 2026 Guntur Kaaram. All rights reserved.
</p>

</footer>

</div>
);
}


export default Customized;