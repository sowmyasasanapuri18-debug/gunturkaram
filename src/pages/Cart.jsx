import React, { useState } from "react";
import "./Cart.css";
import cart from "../assets/cart.jpeg";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";



import { useNavigate } from "react-router-dom";

function Cart() {
  
  <Navbar />
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
  PlaceOrder
</button>

          <p className="note">
            You can choose partial payment in the next step
          </p>

          <div className="secure">
            ✔ Secured Payment &nbsp;&nbsp; ✔ Verified Merchant
          </div>

        </div>
      </div>

    <Footer />

    </div>
  );
}

export default Cart;
