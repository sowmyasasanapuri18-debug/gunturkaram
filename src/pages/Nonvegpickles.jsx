import React from "react";
import "./Nonvegpickles.css";

import hero from "../assets/pickle1.jpeg";
import pickle from "../assets/pickle.jpg";
import logo from "../assets/logo.jpg";

const Nonvegpickles = () => {

const products = [
{
name:"Boneless Chicken Pickle",
price:350,
img:pickle
},
{
name:"Chicken Ginger Pickle",
price:350,
img:pickle
},
{
name:"Chicken Gongura Pickle",
price:350,
img:pickle
},
{
name:"Spice Chicken Pickle",
price:350,
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
<li>Customized</li>
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

<h2>🍗 Non Veg Pickles</h2>

<div className="toggle">

<button className="veg-btn">Veg</button>

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

<button className="cart-btn">
Add to Cart
</button>

</div>

</div>
))}

</div>

</div>

</div>


{/* FOOTER */}

<footer className="footer">

<div className="footer-grid">

<div>

<h3>Guntur Kaaram</h3>

<p>
Bringing you authentic, homemade pickles
crafted with love and tradition since 2026.
</p>

<img src={logo} className="footer-logo" alt="logo"/>

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
<p>FAQ</p>

</div>


<div>

<h4>Trust & Safety</h4>

<p>4.8★ Rated by 10,000+ Customers</p>
<p>Return 7-Day Replacement</p>
<p>Policy Refund</p>
<p>COD Available</p>
<p>Secure Payments</p>

</div>

</div>

<div className="copyright">

© 2026 Guntur Kaaram. All rights reserved.

</div>

</footer>

</div>
);
};

export default Nonvegpickles;