import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

import logo from "../assets/logo.jpg";
import mango from "../assets/cart.jpeg";

function Checkout() {

  const [qty, setQty] = useState(1);

  const price = 90;
  const delivery = 30;

  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const itemTotal = qty * price;
  const grandTotal = itemTotal + delivery;

  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>

        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/pickles">Pickles</Link></li>
          <li><Link to="/customized">Customized</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="navIcons">
          <Link to="/cart">🛒</Link>
          <Link to="/wishlist">❤️</Link>
          <Link to="/notifications">🔔</Link>
          <Link to="/profile">👤</Link>
        </div>

      </nav>


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

      <div className="payBtn">
        ₹{grandTotal}
      </div>


      {/* FOOTER */}

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
        © 2026 Guntur Kaaram . All rights reserved.
      </div>

    </div>
  );
}

export default Checkout;
