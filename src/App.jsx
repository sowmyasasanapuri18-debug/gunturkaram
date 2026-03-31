import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pickles from "./pages/Pickles";
import Nonvegpickles from "./pages/Nonvegpickles";
import Navbar from "./components/Navbar";
import Productdetails from "./pages/productdetails";
import About from "./pages/About";
import Customized from "./pages/Customized";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Customers from "./pages/Customers";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";


function App() {

  return (
    <BrowserRouter>
   
<Navbar />
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/pickles" element={<Pickles/>}/>
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
      <Route path="/nonvegpickles" element={<Nonvegpickles/>}/>
      <Route path="/product/:id" element={<Productdetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/customized" element={<Customized />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Customers" element={<Customers />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Settings" element={<Settings />} />
      
      
    </Routes>

     </BrowserRouter>

  )

}

export default App;