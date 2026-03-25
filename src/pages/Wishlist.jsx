import React, { useState } from "react";

import "./Wishlist.css";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";



import mango from "../assets/cart.jpeg";
import mutton from "../assets/mutton.png";


function Wishlist() {
<Navbar />
  const [items, setItems] = useState([
    { id:1, name:"Mango Pickle", weight:"250g", price:90, qty:1, img:mango },
    { id:2, name:"Mutton Pickle", weight:"250g", price:190, qty:1, img:mutton }
  ]);

  const increaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id ? {...item, qty:item.qty+1} : item
    ));
  };

  const decreaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id && item.qty>1 ? {...item, qty:item.qty-1} : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (

    <div>

      


      {/* WISHLIST PAGE */}
      <div className="wishlistPage">

        <h1>Wishlist</h1>

        {items.map(item => (

          <div className="wishlistCard" key={item.id}>

            <div className="productInfo">
              <img src={item.img} alt="" />

              <div>
                <h3>{item.name}</h3>
                <p>{item.weight}</p>
                <p>₹{item.price}</p>
              </div>
            </div>

            <div className="rightSection">

              <div className="qtyBox">
                <button onClick={()=>decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={()=>increaseQty(item.id)}>+</button>
              </div>

              <p className="remove" onClick={()=>removeItem(item.id)}>
                Remove
              </p>

            </div>

          </div>

        ))}

        <div className="moveCartContainer">
          <button className="moveCartBtn">Move to Cart</button>
        </div>


      </div>

    <Footer /> 

    </div>
  );
}

export default Wishlist;