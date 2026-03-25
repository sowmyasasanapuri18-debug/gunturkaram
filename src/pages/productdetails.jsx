// import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
// import "./productdetails.css";

// import logo from "../assets/logo.jpg";
// import mainImg from "../assets/Mango.png";
// import thumb1 from "../assets/thumb1.png";
// import thumb2 from "../assets/thumb2.png";
// import thumb3 from "../assets/thumb3.png";

// /* RELATED PRODUCTS IMAGES */
// import p1 from "../assets/pickle.jpg";
// import p2 from "../assets/pickle.jpg";
// import p3 from "../assets/pickle.jpg";
// import p4 from "../assets/pickle.jpg";

// const Productdetails = () => {
//   const navigate = useNavigate();


//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("200 gm");

//   const increaseQty = () => setQuantity(quantity + 1);

//   const decreaseQty = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   return (
//     <div className="product-page">

//       {/* PRODUCT SECTION */}

//       <div className="product-container">

//         {/* LEFT IMAGES */}

//         <div className="product-images">

//           <img src={mainImg} className="main-image" alt="mango pickle" />

//           <div className="thumbnail-row">
//             <img src={thumb1} alt="" />
//             <img src={thumb2} alt="" />
//             <img src={thumb3} alt="" />
//           </div>

//         </div>
//         {/* NAVBAR */}
        
//         <nav className="navbar">
        
//         <img src={logo} className="logo" alt="logo" />
//         <ul className="nav-links">
//         <li>Home</li>
//         <li>About Us</li>
//         <li onClick={()=>navigate("/pickles")}>Pickles</li>
//         <li onClick={()=>navigate("/Customized")}>Customized</li>
//         <li>Contact Us</li>
//         </ul>
        
//         <button className="login-btn">Log In / Sign Up</button>
        
//         </nav>
        
        

//         {/* RIGHT DETAILS */}

//         <div className="product-details">

//           <h2>Mango Avakaya</h2>

//           <div className="rating">
//             ⭐ 4.6 <span>422 Verified reviews</span>
//           </div>

//           <div className="price">
//             <span className="old-price">Rs.110</span>
//             <span className="new-price">Rs.103</span>
//           </div>

//           {/* SIZE */}

//           <div className="size-section">
//             <p>Size:</p>

//             <div className="size-buttons">

//               <button
//                 className={selectedSize === "200 gm" ? "active" : ""}
//                 onClick={() => setSelectedSize("200 gm")}
//               >
//                 200 gm
//               </button>

//               <button
//                 className={selectedSize === "500 gm" ? "active" : ""}
//                 onClick={() => setSelectedSize("500 gm")}
//               >
//                 500 gm
//               </button>

//               <button
//                 className={selectedSize === "1 kg" ? "active" : ""}
//                 onClick={() => setSelectedSize("1 kg")}
//               >
//                 1 Kg
//               </button>

//             </div>
//           </div>

//           {/* GARLIC */}

//           <div className="garlic-toggle">
//             <p>Preference with Garlic</p>

//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>

//             <span className="no-garlic">No garlic</span>
//           </div>

//           {/* CART */}

//           <div className="cart-section">

//             <div className="qty-box">
//               <button onClick={decreaseQty}>-</button>
//               <span>{quantity}</span>
//               <button onClick={increaseQty}>+</button>
//             </div>

//             <button className="add-cart">
//               Add to Cart
//             </button>

//           </div>

//         </div>

//       </div>


//       {/* DESCRIPTION */}

//       <div className="description">

//         <h2>Description</h2>

//         <p>
//           Avakaya Pickle is a traditional mango pickle from Andhra Pradesh.
//           It is made using raw mango pieces mixed with mustard powder,
//           chili powder, salt, and sesame oil. It has a strong spicy and
//           tangy flavor that enhances simple meals.
//         </p>

//         <h2>Product Ingredients</h2>

//         <ul>
//           <li>🥭 Raw Mangoes</li>
//           <li>🌶 Mustard Powder & Fenugreek Powder</li>
//           <li>🧂 Salt & Chili Powder</li>
//           <li>🧄 Garlic (optional)</li>
//           <li>🥥 Homemade Sesame Oil</li>
//         </ul>

//         <h2>Shelf Life</h2>

//         <p>
//           3–4 months when stored in a cool dry place away from sunlight.
//         </p>

//       </div>


//       {/* REVIEWS */}

//       <div className="reviews-section">

//         <h2>What Our Customers Say</h2>

//         <div className="reviews">

//           <div className="review">
//             <h4>Vedika</h4>
//             <p>The mango pickle reminded me of my grandmother’s recipe.</p>
//             <span>⭐⭐⭐⭐⭐</span>
//           </div>

//           <div className="review">
//             <h4>Vedika</h4>
//             <p>The mango pickle reminded me of my grandmother’s recipe.</p>
//             <span>⭐⭐⭐⭐⭐</span>
//           </div>

//           <div className="review">
//             <h4>Vedika</h4>
//             <p>The mango pickle reminded me of my grandmother’s recipe.</p>
//             <span>⭐⭐⭐⭐⭐</span>
//           </div>

//         </div>

//       </div>


//       {/* RELATED PRODUCTS */}

//       <div className="related">

//         <h2>You may also like</h2>

//         <div className="products">

//           <div className="card">
//             <img src={p1} alt="" />
//             <h4>Avakaya Pickle</h4>
//             <p>₹350</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="card">
//             <img src={p2} alt="" />
//             <h4>Gongura Pickle</h4>
//             <p>₹350</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="card">
//             <img src={p3} alt="" />
//             <h4>Chicken Pickle</h4>
//             <p>₹350</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="card">
//             <img src={p4} alt="" />
//             <h4>Prawn Pickle</h4>
//             <p>₹350</p>
//             <button>Add to Cart</button>
//           </div>

//         </div>

//       </div>


//       {/* FOOTER */}

//       <footer className="footer">

//         <div className="footer-grid">

//           <div>
//             <img src={logo} className="logo" alt="logo" />
//             <p>
//               Bringing you authentic homemade pickles crafted with love
//               and tradition since 2026.
//             </p>
//           </div>

//           <div>
//             <h4>Quick</h4>
//             <p>About Us</p>
//             <p>Veg Pickles</p>
//             <p>Non Veg Pickles</p>
//             <p>Customized</p>
//             <p>Contact Us</p>
//           </div>

//           <div>
//             <h4>Policies</h4>
//             <p>Shipping Policy</p>
//             <p>Return & Refund</p>
//             <p>Privacy Policy</p>
//             <p>Terms of Services</p>
//           </div>

//           <div>
//             <h4>Trust & Safety</h4>
//             <p>4.8⭐ Rated by 10,000+ Customers</p>
//             <p>Return & 7-Day Replacement</p>
//             <p>COD Available</p>
//             <p>Secure Payments</p>
//           </div>

//         </div>

//         <p className="copyright">
//           © 2026 Guntur Kaaram. All rights reserved.
//         </p>

//       </footer>

//     </div>
//   );
// };
// export default Productdetails;


import React, { useState } from "react";

import Footer from "../components/Footer"; 
 
import "./productdetails.css";


import mainImg from "../assets/Mango.png";
import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";

/* RELATED PRODUCTS IMAGES */
import p1 from "../assets/pickle.jpg";
import p2 from "../assets/pickle.jpg";
import p3 from "../assets/pickle.jpg";
import p4 from "../assets/pickle.jpg";

const Productdetails = () => {

  

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("200 gm");

  const increaseQty = () => setQuantity(quantity + 1);
   const [added, setAdded] = useState(false);
   const [addedItems, setAddedItems] = useState({});
   
   
  
  

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
 const handleRelatedCart = (id) => {
  setAddedItems((prev) => ({
    ...prev,
    [id]: !prev[id] // 🔥 toggle true/false
  }));
};

  return (
    <div className="product-page">
  
      

      {/* PRODUCT SECTION */}

      <div className="product-container">

        {/* LEFT IMAGES */}

        <div className="product-images">

          <img src={mainImg} className="main-image" alt="mango pickle" />

          <div className="thumbnail-row">
            <img src={thumb1} alt="thumb" />
            <img src={thumb2} alt="thumb" />
            <img src={thumb3} alt="thumb" />
          </div>

        </div>

        {/* RIGHT DETAILS */}

        <div className="product-details">

          <h2>Mango Avakaya</h2>

          <div className="rating">
            ⭐ 4.6 <span>422 Verified reviews</span>
          </div>

          <div className="price">
            <span className="old-price">Rs.110</span>
            <span className="new-price">Rs.103</span>
          </div>

          {/* SIZE */}

          <div className="size-section">
            <p>Size:</p>

            <div className="size-buttons">

              <button
                className={selectedSize === "200 gm" ? "active" : ""}
                onClick={() => setSelectedSize("200 gm")}
              >
                200 gm
              </button>

              <button
                className={selectedSize === "500 gm" ? "active" : ""}
                onClick={() => setSelectedSize("500 gm")}
              >
                500 gm
              </button>

              <button
                className={selectedSize === "1 kg" ? "active" : ""}
                onClick={() => setSelectedSize("1 kg")}
              >
                1 Kg
              </button>

            </div>
          </div>

        

          

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>

            
       

          {/* CART */}

          <div className="cart-section">

            <div className="qty-box">
              <button onClick={decreaseQty}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>

        <button
      className={added ? "btn-filled" : "btn-outline"}
      onClick={() => setAdded(!added)}   // 🔥 toggle
    >
      {added ? "🛒 Added to Cart" : "Add to Cart"}
    </button>

          </div>

        </div>

      </div>

      {/* DESCRIPTION */}

      <div className="description">

        <h2>Description</h2>

        <p>
          <strong>Avakaya Pickle</strong> is a traditional and iconic mango pickle from Andhra Pradesh, India.
          It is made using raw mango pieces mixed with mustard powder, red chili powder, salt, 
          and gingelly (sesame) oil.The pickle is known for its strong, spicy, and tangy flavor
          that enhances any simple meal.Avakaya is usually prepared during the summer season when
          fresh raw mangoes are available.It is commonly served with hot rice, ghee, curd rice,
          or even dosa and chapati.The rich aroma and bold taste make Avakaya a favorite in many
          South Indian households.
        </p>

        <h2 className="title">Product Ingredients</h2>

        <p className="subtitle">What is inside the packet:</p>

         <p className="quote">"Authentic Flavors, Packed with Tradition."</p>
          
          <p>
        Our Mango Avakaya Pickle is made from Ammamma’s cherished Andhra recipe,
        delivering the authentic taste of South India straight to your plate.
        Here’s what goes inside:
      </p>

        <ul>
          <li> 🥭 Raw Mangoes: Fresh and tangy, packed with Vitamin C and niacin for an immunity boost.</li>
          <li>🌶️ Mustard Powder & Fenugreek Powder: Adds a pungent, aromatic taste unique to Andhra pickles.</li>
          <li>🧂 Salt & Chili Powder: For that perfect balance of spice and flavour.</li>
          <li>🧄 Garlic: Optional for those who like an extra layer of bold flavour.</li>
          <li>🥥 Homemade Sesame Oil: Adds a rich, nutty taste and keeps the pickle fresh and flavorful.</li>
        </ul>

         <h2 className="title">Shelf Life:</h2>

        <p>
          3–4 months when stored in a cool dry place away from sunlight.
        </p>

        <p className="footer-text">
        Enjoy the authentic taste of Andhra with every spoonful of our Mango Avakaya Pickle!
      </p>

      </div>

      {/* REVIEWS */}

      <div className="reviews-section">

        <h2>What Our Customers Say</h2>

        <div className="reviews">

          <div className="review">
            <h4>Vedika</h4>
            <p>The mango pickle reminded me of my grandmother’s recipe.</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>

          <div className="review">
            <h4>Vedika</h4>
            <p>The mango pickle reminded me of my grandmother’s recipe.</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>

          <div className="review">
            <h4>Vedika</h4>
            <p>The mango pickle reminded me of my grandmother’s recipe.</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS */}

      <div className="related">

        <h2>You may also like</h2>

        <div className="products">

  <div className="card">
    <img src={p1} alt="Avakaya Pickle" />
    <h4>Avakaya Pickle</h4>
    
    
    <span className="new">₹350</span>
            
    <button
      className={addedItems[1] ? "added-btn" : ""}
      onClick={() => handleRelatedCart(1)}
    >
      {addedItems[1] ? "🛒Added to Cart" : "Add to Cart"}
    </button>
  </div>

  <div className="card">
    <img src={p2} alt="Gongura Pickle" />
    <h4>Gongura Pickle</h4>
    <p>₹350</p>
    <button
      className={addedItems[2] ? "added-btn" : ""}
      onClick={() => handleRelatedCart(2)}
    >
      {addedItems[2] ? "🛒Added to Cart" : "Add to Cart"}
    </button>
  </div>

  <div className="card">
    <img src={p3} alt="Chicken Pickle" />
    <h4>Chicken Pickle</h4>
    <p>₹350</p>
    <button
      className={addedItems[3] ? "added-btn" : ""}
      onClick={() => handleRelatedCart(3)}
    >
      {addedItems[3] ? "🛒Added to Cart" : "Add to Cart"}
    </button>
  </div>

  <div className="card">
    <img src={p4} alt="Prawn Pickle" />
    <h4>Prawn Pickle</h4>
    <p>₹350</p>
    <button
      className={addedItems[4] ? "added-btn" : ""}
      onClick={() => handleRelatedCart(4)}
    >
      {addedItems[4] ? "🛒Added to Cart" : "Add to Cart"}
    </button>
  </div>

</div>

      <Footer /> 

    </div>
    </div>
  );
};
export default Productdetails;



