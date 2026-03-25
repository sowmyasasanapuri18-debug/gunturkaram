import React, { useState } from "react";

import "./Checkout.css";
import OrderSuccessPopup from "./OrderSuccessPopup";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";




import mango from "../assets/cart.jpeg";

function Checkout() {

  const [qty, setQty] = useState(1);
  const [showPopup, setShowPopup] = useState(false);


  const price = 90;
  const delivery = 30;

  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const itemTotal = qty * price;
  const grandTotal = itemTotal + delivery;

  <Navbar />

  return (
    <div>

      

      {/* MAIN CHECKOUT */}

      <div className="checkoutContainer">

        {/* LEFT PAYMENT */}

        <div className="paymentBox">

          <h3>Payment Methods</h3>

          <label className="paymentOption">
            <input type="radio" name="pay"/>
            <div>
              <b>Pay on Delivery</b>
              <p>Pay with cash on delivery</p>
            </div>
          </label>

          <label className="paymentOption">
            <input type="radio" name="pay" defaultChecked/>
            <div>
              <b>Credit/Debit Cards</b>
              <p>Pay with your Credit / Debit Card</p>
            </div>
          </label>

          <input className="input" placeholder="Card number"/>

          <div className="row">
            <input className="input" placeholder="MM / YY"/>
            <input className="input" placeholder="CVV"/>
          </div>

          <label className="paymentOption">
            <input type="radio" name="pay"/>
            <div>
              <b>Direct Bank Transfer</b>
              <p>Make payment directly through bank account.</p>
            </div>
          </label>

          <label className="paymentOption">
            <input type="radio" name="pay"/>
            <div>
              <b>Other Payment Methods</b>
              <p>Gpay, Paypal, Paytm etc</p>
            </div>
          </label>

        </div>


        {/* RIGHT CART */}

        <div className="cartSummary">

          <div className="cartItem">

            <img src={mango} alt="mango"/>

            <div className="itemDetails">
              <h3>Mango Pickle</h3>
              <p>250g</p>
              <p>₹90</p>
            </div>

            <div className="qtyControl">
              <button onClick={decrease}>-</button>
              <span>{qty}</span>
              <button onClick={increase}>+</button>
            </div>

          </div>

          <hr/>

          <div className="priceRow">
            <span>Item Total</span>
            <span>₹{itemTotal}</span>
          </div>

          <div className="priceRow">
            <span>Delivery fees</span>
            <span>₹{delivery}</span>
          </div>

          <hr/>

          <div className="priceRow total">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>

        </div>

      </div>


      {/* PAY BUTTON */}

      <div 
  className="payBtn"
  onClick={() => {
    setShowPopup(true);

    // optional auto close
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }}
>
  ₹{grandTotal}
</div>



      
      <OrderSuccessPopup
  show={showPopup}
  onClose={() => setShowPopup(false)}
/>

      <Footer /> 
    </div>
  );
}

export default Checkout;
