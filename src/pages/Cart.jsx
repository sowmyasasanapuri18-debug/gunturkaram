import React, { useState } from "react";
import "./Cart.css";
import cart from "../assets/cart.jpeg";

import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

function Cart() {
  
  
   const navigate = useNavigate();

  const handleProceedToPay = () => {
    navigate("/checkout");
  };
  const [qty, setQty] = useState(1);
 const price = 90;
  const delivery = 30;
  const itemTotal = qty * price;
  const grandTotal = itemTotal + delivery;

  return (
    <div className="cart">

      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="logo"/>

        <ul className="navLinks">
          <li>Home</li>
          <li>About Us</li>
          <li>Pickles</li>
          <li>Customized</li>
          <li>Contact Us</li>
        </ul>

        <div className="navIcons">
          <span>🛒</span>
        <span onClick={()=>navigate("/wishlist")}>🤍</span>
          <span>🔔</span>
          <span>👤</span>
        </div>
      </nav>


      {/* Cart Layout */}
      <div className="cartContainer">

        {/* Left Section */}
        <div className="leftSection">

          <h2>Cart</h2>

          {/* Coupon */}
          <div className="couponBox">
            <p>Available offers</p>
            <div className="couponInput">
              <input placeholder="Enter coupon code" />
              <button>Apply</button>
            </div>
          </div>

          {/* Address */}
          <div className="addressBox">
            <div className="addressHeader">
              <h3>Delivery Address</h3>
              <span className="newAddress">New Address</span>
            </div>

            <label>Full Name</label>
            <input />

            <label>Address</label>
            <textarea rows="3"></textarea>

            <button className="submitBtn">Submit</button>
          </div>
        </div>


        {/* Right Section */}
        <div className="rightSection">

          <h3>Delivery Order</h3>

          <div className="product">
            <img src={cart} alt="cart" />

            <div className="productInfo">
              <h4>Mango Pickle</h4>
              <p>250g</p>
              <p>₹90</p>
            </div>

            <div className="qtyBox">
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <hr />

          <div className="priceRow">
            <span>Item Total</span>
            <span>₹{itemTotal}</span>
          </div>

          <div className="priceRow">
            <span>Delivery fees</span>
            <span>₹{delivery}</span>
          </div>

          <hr />

          <div className="priceRow grand">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <button className="placeOrder" onClick={handleProceedToPay}>
  Proceed to Pay
</button>

          <p className="note">
            You can choose partial payment in the next step
          </p>

          <div className="secure">
            ✔ Secured Payment &nbsp;&nbsp; ✔ Verified Merchant
          </div>

        </div>
      </div>


      {/* Footer */}
      <footer className="footer">

        <div className="footerCol">
          <h2>Guntur kaaram</h2>
          <p>
            Bringing you authentic, homemade pickles crafted with love
            and tradition since 2026.
          </p>
        </div>

        <div className="footerCol">
          <h3>Quick</h3>
          <p>About Us</p>
          <p>Veg Pickles</p>
          <p>Non Veg Pickles</p>
          <p>Customized</p>
          <p>Contact Us</p>
        </div>

        <div className="footerCol">
          <h3>Policies</h3>
          <p>Shipping Policy</p>
          <p>Return & Refund</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>FAQ</p>
        </div>

        <div className="footerCol">
          <h3>Trust & Safety</h3>
          <p>4.8⭐ Rated by 10,000+ Customers</p>
          <p>Return & 7-Day Replacement</p>
          <p>COD Available</p>
          <p>Secure Payments</p>
        </div>

      </footer>

      <div className="copyright">
        © 2026 Guntur Kaaram. All rights reserved.
      </div>

    </div>
  );
}

export default Cart;