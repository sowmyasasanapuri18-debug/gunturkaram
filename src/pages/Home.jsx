// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// import logo from "../assets/logo.jpg";
// import heroImg from "../assets/hero.jpg";

// import avakaya from "../assets/pickle.jpg";
// import gongura from "../assets/pickle.jpg";
// import chicken from "../assets/pickle.jpg";
// import prawn from "../assets/pickle.jpg";

// import spice from "../assets/spice.jpg";

// import farmFresh from "../assets/farmfresh.jpg";
// import cleaning from "../assets/cleaning.jpg";
// import sunDrying from "../assets/sundrying.jpg";
// import marination from "../assets/marination.jpg";
// import packing from "../assets/packing.jpg";

// function Home() {

// const navigate = useNavigate();

// const products = [
// {
// name: "Avakaya Pickle",
// price: "₹350",
// oldPrice: 400,
// desc: "Sun-cured mango pieces blended with traditional spices and cold-pressed oil for a bold, authentic flavour.",
// image: avakaya
// },
// {
// name: "Gongura Pickle",
// price: "₹350",
// oldPrice: 400, 
// desc: "Made from freshly harvested sorrel leaves, slow-cooked with aromatic spices for a rich, tangy kick. A classic Andhra-style.",
// image: gongura
// },
// {
// name: "Chicken Pickle",
// price: "₹350",
// oldPrice: 400,
// desc: "Tender chicken marinated in signature masala and slow-cooked in premium oil for deep flavor.",
// image: chicken
// },
// {
// name: "Prawn Pickle",
// price: "₹350",
// oldPrice: 400,
// desc: "Juicy prawns infused with bold spices and preserved in flavorful oil for long-lasting freshness.",
// image: prawn
// }
// ];

// const spiceLevels = ["Mild","Medium","Hot","Extra Hot"];

// return (

// <div>

// {/* NAVBAR */}

// <nav className="navbar">

// <img src={logo} className="logo" alt="logo" />

// <ul className="nav-links">
// <li onClick={()=>navigate("/")}>Home</li>
// <li onClick={()=>navigate("/about")}>About Us</li>
// <li>Pickles</li>
// <li onClick={()=>navigate("/customized")}>Customized</li>
// <li onClick={()=>navigate("/contact-us")}>Contact Us</li>
// </ul>

// <button
// className="login-btn"
// onClick={() => navigate("/login")}
// >
// Log In / Sign Up
// </button>

// </nav>


// {/* HERO */}

// <section
// className="hero"
// style={{
// backgroundImage: `url(${heroImg})`,
// backgroundSize: "cover",
// backgroundPosition: "center",
// backgroundRepeat: "no-repeat"
// }}
// >

// <div className="hero-text">

// <h1>
// Traditional Taste <br/>
// <span>Homemade Love.</span>
// </h1>

// <p>
// Guntur Kaaram pickles made with recipes passed down
// through generations. No preservatives, just pure tradition.
// </p>

// <div className="hero-buttons">

// <button
// className="yellow-btn"
// onClick={() => navigate("/pickles")}
// >
// Veg / Non Veg Pickles
// </button>

// <button
// className="outline-btn"
// onClick={() => navigate("/customized")}
// >
// Customized Pickles
// </button>

// </div>

// </div>

// </section>


// {/* FEATURES BAR */}

// <div className="features">

// <div>🚚 Free Shipping ₹500+</div>
// <div>🌿 100% Natural</div>
// <div>🔁 7-Day Returns</div>
// <div>⭐ 4.8 (10K+ Reviews)</div>

// </div>


// {/* BEST SELLERS */}

// <section className="section">

// <h2 className="title">Best Sellers</h2>
// <p>Loved by thousands, these pickles are the heart of every Indian meal</p>

// <div className="products">

// {products.map((item,index)=>(

// <div
//   className="card"
//   key={item.id}
//   onClick={() => navigate(`/product/${item.id}`)}
// >

// <div className="image-box">

// <img src={item.image} alt={item.name}/>

// <div className="wishlist">♡</div>

// </div>

// <h3>{item.name}</h3>

// <p className="desc">{item.desc}</p>

// <div className="price-row">

// <span className="price">{item.price}</span>
// <span className="old-price">₹{item.oldPrice}</span>

// <select>
// <option>250g</option>
// <option>500g</option>
// </select>

// </div>

// <button className="cart-btn">
// Add to Cart
// </button>

// </div>

// ))}

// </div>

// </section>


// {/* SPICE LEVEL */}

// <section className="section">

// <h2 className="title">Pick Your Spice Level</h2>

// <p className="subtitle">
// How hot can you handle? Choose your heat and discover the perfect pickle.
// </p>

// <div className="spice-grid">

// {spiceLevels.map((level,i)=>(

// <div className="spice-card" key={i}>

// <img src={spice} alt="spice"/>

// <p>{level}</p>

// </div>

// ))}

// </div>

// </section>


// {/* FARM TO JAR */}

// <section className="section farm-section">

// <h2 className="title">From Farm to Jar</h2>

// <div className="steps">

// <div className="step">
// <img src={farmFresh} alt="farm"/>
// <h4>Farm Fresh</h4>
// <p>Handpicked Seasonal Produce</p>
// </div>

// <div className="arrow">➜</div>

// <div className="step">
// <img src={cleaning} alt="cleaning"/>
// <h4>Cleaning</h4>
// <p>Washed & sanitized</p>
// </div>

// <div className="arrow">➜</div>

// <div className="step">
// <img src={sunDrying} alt="sun drying"/>
// <h4>Sun Drying</h4>
// <p>Dried under natural sunlight</p>
// </div>

// <div className="arrow">➜</div>

// <div className="step">
// <img src={marination} alt="marination"/>
// <h4>Marination</h4>
// <p>Traditional spice blending</p>
// </div>

// <div className="arrow">➜</div>

// <div className="step">
// <img src={packing} alt="packing"/>
// <h4>Packing</h4>
// <p>Sealed for freshness</p>
// </div>

// </div>

// </section>


// {/* TESTIMONIALS */}

// <section className="section">

// <h2 className="title">What Our Customers Say</h2>

// <div className="reviews">

// <div className="review">
// <h4>Vedika</h4>
// <p>
// “The Mango Avakaya reminded me of my grandmother's pickle! Absolutely authentic taste.”
// </p>
// ⭐ ⭐ ⭐ ⭐ ⭐
// </div>

// <div className="review">
// <h4>vedika</h4>
// <p>
// “Chicken pickle is amazing! Perfect spice level and very fresh.”
// </p>
// ⭐ ⭐ ⭐ ⭐ ⭐
// </div>

// <div className="review">
// <h4>vedika</h4>
// <p>
// “Packaging and taste both are excellent. Highly recommended!”
// </p>
// ⭐ ⭐ ⭐ ⭐ ⭐
// </div>

// </div>

// </section>


// {/* SUBSCRIBE */}

// <section className="subscribe">

// <h2>Monthly Pickle Box 📦</h2>

// <p>
// Get a curated selection of seasonal pickles delivered to your door every month.
// Never run out of your favourite accompaniments!
// </p>

// <button>Subscribe Now</button>

// </section>


// {/* FOOTER */}

// <footer className="footer">

// <div className="footer-grid">

// <div>

// <img src={logo} className="logo" alt="logo"/>

// <p>
// Bringing you authentic, homemade pickles crafted with love and tradition since 2026.
// </p>

// </div>

// <div>
// <h4>Quick</h4>
// <p>About Us</p>
// <p>Veg Pickles</p>
// <p>Non Veg Pickles</p>
// <p>Customized</p>
// <p>Contact Us</p>
// </div>

// <div>
// <h4>Policies</h4>
// <p>Shipping Policy</p>
// <p>Return & Refund</p>
// <p>Privacy Policy</p>
// <p>Terms of Services</p>
// </div>

// <div>
// <h4>Trust & Safety</h4>
// <p>4.8⭐ Rated by 10,000+ Customers</p>
// <p>Return & 7-Day Replacement Policy</p>
// <p>COD Available</p>
// <p>Secure Payments</p>
// </div>

// </div>

// <p className="copyright">
// © 2026 Guntur Kaaram. All rights reserved.
// </p>

// </footer>

// </div>

// );

// }

// export default Home;


import React, { useState } from "react";
import SuccessPopup from "./SuccessPopup";
import Footer from "../components/Footer"; 


import { useNavigate } from "react-router-dom";
import "./Home.css";

import logo from "../assets/logo.jpg";
import heroImg from "../assets/hero.jpg";

import avakaya from "../assets/pickle.jpg";
import gongura from "../assets/pickle.jpg";
import chicken from "../assets/pickle.jpg";
import prawn from "../assets/pickle.jpg";

import spice from "../assets/spice.jpg";

import farmFresh from "../assets/farmfresh.jpg";
import cleaning from "../assets/cleaning.jpg";
import sunDrying from "../assets/sundrying.jpg";
import marination from "../assets/marination.jpg";
import packing from "../assets/packing.jpg";

function Home() {

const navigate = useNavigate();
const [showPopup, setShowPopup] = useState(false);
const [wishlist, setWishlist] = useState({});

const handleAddToCart = (e) => {
  e.stopPropagation(); // IMPORTANT: stops navigation
  setShowPopup(true);

  setTimeout(() => {
    setShowPopup(false);
  }, 2000);
};
const toggleWishlist = (id) => {
  setWishlist((prev) => ({
    ...prev,
    [id]: !prev[id]
  }));
};


/* PRODUCTS WITH ID (FIXED) */
const products = [
{
id: 1,
name: "Avakaya Pickle",
price: "₹350",
oldPrice: 400,
desc: "Sun-cured mango pieces blended with traditional spices and cold-pressed oil for a bold, authentic flavour.",
image: avakaya
},
{
id: 2,
name: "Gongura Pickle",
price: "₹350",
oldPrice: 400,
desc: "Made from freshly harvested sorrel leaves, slow-cooked with aromatic spices for a rich, tangy kickA classic Andhra-style.",
image: gongura
},
{
id: 3,
name: "Chicken Pickle",
price: "₹350",
oldPrice: 400,
desc: "Tender chicken pieces marinated in sognature masala and slow-cooked in premium oil for deep flavor.",
image: chicken
},
{
id: 4,
name: "Prawn Pickle",
price: "₹350",
oldPrice: 400,
desc: "Juicy prawns infused with bold spices and preserved in flavorful oil for long-lasting freshness.",
image: prawn
}
];

const spiceLevels = ["Mild","Medium","Hot","Extra Hot"];

/* FARM STEPS (CLEAN LOOP) */
const stepsData = [
{img: farmFresh, title: "Farm Fresh", desc: "Handpicked Seasonal Produce"},
{img: cleaning, title: "Cleaning", desc: "Washed & sanitized"},
{img: sunDrying, title: "Sun Drying", desc: "Dried under natural sunlight"},
{img: marination, title: "Marination", desc: "Traditional spice blending"},
{img: packing, title: "Packing", desc: "Sealed for freshness"}
];

return (

<div>

{/* NAVBAR */}
<nav className="navbar">

<img src={logo} className="logo" alt="logo" />

<ul className="nav-links">
<li onClick={()=>navigate("/")}>Home</li>
<li onClick={()=>navigate("/about")}>About Us</li>
<li>Pickles</li>
<li>Customized</li>
<li>Contact Us</li>
</ul>

<button className="login-btn" onClick={() => navigate("/login")}>
Log In / Sign Up
</button>

</nav>


{/* HERO */}
<section
className="hero"
style={{
backgroundImage: `url(${heroImg})`,
backgroundSize: "cover",
backgroundPosition: "center"
}}
>

<div className="hero-text">

<h1>
Traditional Taste <br/>
<span>Homemade Love.</span>
</h1>

<p>
Guntur Kaaram pickles made with recipes passed down
through generations. No preservatives, just pure tradition.
</p>

<div className="hero-buttons">

<button
className="yellow-btn"
onClick={() => navigate("/pickles")}
>
Veg / Non Veg Pickles
</button>

<button
className="outline-btn"
onClick={() => navigate("/customized")}
>
Customized Pickles
</button>

</div>

</div>

</section>


{/* FEATURES */}
<div className="features">
<div>🚚 Free Shipping ₹500+</div>
<div>🌿 100% Natural</div>
<div>🔁 7-Day Returns</div>
<div>⭐ 4.8 (10K+ Reviews)</div>
</div>


{/* BEST SELLERS */}
<section className="section">

<h2 className="title">Best Sellers</h2>
<p>Loved by thousands, these pickles are the heart of every Indian meal</p>

<div className="products">

{products.map((item) => (
  <div className="card" key={item.id}>

    {/* IMAGE CLICK */}
    <img
       src={item.image}
      alt={item.name}
      style={{ cursor: item.id === 1 ? "pointer" : "default" }}
      onClick={() => {
        if (item.id === 1) {  // Only Avakaya
          navigate(`/product/${item.id}`);
           }
      }}
    />

    {/* HEART ICON */}
    <span
      className={`heart ${wishlist[item.id] ? "active" : ""}`}
      onClick={(e) => {
        e.stopPropagation(); // Prevents navigating when heart is clicked
        toggleWishlist(item.id);
      }}
    >
      {wishlist[item.id] ? "❤️" : "♡"}
    </span>

    <h3>{item.name}</h3>
    <p className="desc">{item.desc}</p>

    <div className="price-row">
      <span className="price">{item.price}</span>
      <span className="old-price">₹{item.oldPrice}</span>

      <select>
        <option>250g</option>
        <option>500g</option>
      </select>
    </div>

    <button
      className="cart-btn"
      onClick={(e) => handleAddToCart(e)}
    >
      Add to Cart
    </button>

  </div>
))}
</div>

</section>


{/* SPICE LEVEL */}
<section className="section">

<h2 className="title">Pick Your Spice Level</h2>

<p className="subtitle">
How hot can you handle? Choose your heat and discover the perfect pickle.
</p>

<div className="spice-grid">

{spiceLevels.map((level,i)=>(
<div className="spice-card" key={i}>
<img src={spice} alt="spice"/>
<p>{level}</p>
</div>
))}

</div>

</section>


{/* FARM TO JAR */}
<section className="section farm-section">

<h2 className="title">From Farm to Jar</h2>

<div className="steps">

{stepsData.map((step,i)=>(
<React.Fragment key={i}>

<div className="step">
<img src={step.img} alt="step"/>
<h4>{step.title}</h4>
<p>{step.desc}</p>
</div>

{i < stepsData.length - 1 && <div className="arrow">➜</div>}

</React.Fragment>
))}

</div>

</section>


{/* TESTIMONIALS */}
<section className="section">

<h2 className="title">What Our Customers Say</h2>

<div className="reviews">

<div className="review">
<h4>Vedika</h4>
<p>“The Mango Avakaya reminded me of my grandmother's pickle!Absolutely austhentic taste.”</p>
⭐ ⭐ ⭐ ⭐ ⭐
</div>

<div className="review">
<h4>Vedika</h4>
<p>“The Mango Avakaya reminded me of my grandmother's pickle!Absolutely austhentic taste.”</p>
⭐ ⭐ ⭐ ⭐ ⭐
</div>

<div className="review">
<h4>Vedika</h4>
<p>“The Mango Avakaya reminded me of my grandmother's pickle!Absolutely austhentic taste.”</p>
⭐ ⭐ ⭐ ⭐ ⭐
</div>

</div>

</section>


{/* SUBSCRIBE */}
<section className="subscribe">

<h2>Monthly Pickle Box 📦</h2>

<p>
Get a curated selection of seasonal pickles delivered to your door every month.
Never run out of your favourite accompaniments!
</p>

<button>Subscribe Now</button>

</section>



<SuccessPopup 
  show={showPopup} 
  onClose={() => setShowPopup(false)} 
/>
<Footer /> 

</div>

);

}

export default Home;
