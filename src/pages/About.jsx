import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.jpg";
import hero from "../assets/Hero1.jpeg";
import storyImg from "../assets/story.jpg";
import purityImg from "../assets/purity.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* NAVBAR */}
      <nav className="navbar">

        <img src={logo} className="logo" alt="logo"/>

        <ul className="nav-links">
           <li onClick={()=>navigate("/Home")}>Home</li>
          <li className="active">About Us</li>
          <li onClick={()=>navigate("/pickles")}>Pickles</li>
          <li>Customized</li>
          <li>Contact Us</li>
        </ul>

        <button className="login-btn">Log In / Sign Up</button>

      </nav>


      {/* hero SECTION */}

      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >

        <div className="hero-overlay">

          <h1>
            Rooted in Tradition Crafted
            <br/>
            with Love.
          </h1>

          <p>
            We bring you the true taste of homemade Guntur Kaaram pickles,
            prepared using age-old family recipes and the finest ingredients.
          </p>

          <button className="whatsapp-btn">
            Join with us at what's app
          </button>

        </div>

      </section>



      {/* OUR STORY */}

      <section className="story">

        <div className="story-container">

          <img src={storyImg} alt="story"/>

          <div className="story-text">

            <span className="small-title">Our Heritage</span>

            <h2>Our Story</h2>

            <p>
              Our journey began in a small kitchen where our grandmother’s traditional pickle recipes were carefully 
              preserved and passed down through generations.What started as homemade batches for family and friends
              soon became a beloved taste everyone wanted to enjoy.Today, we continue to prepare every jar with the same
              dedication, authenticity, and love-ensuring that each bite reminds you of home.
            </p>

         

          </div>

        </div>

      </section>



      {/* PROCESS */}

      <section className="process">

        <p className="small-title center">Our Process</p>

        <h2 className="center">How We Make Our Pickles</h2>

        <div className="process-grid">

          <div className="process-card">
            <div className="icon">🌱</div>
            <h4>Step 1</h4>
            <h3>Selecting Fresh Ingredients</h3>
            <p>
              We handpick farm-fresh mangoes and high-quality spices.
            </p>
          </div>

          <div className="process-card">
            <div className="icon">🌍</div>
            <h4>Step 2</h4>
            <h3>Traditional Spice Blending</h3>
            <p>
              Authentic Andhra spices blended using traditional methods.
            </p>
          </div>

          <div className="process-card">
            <div className="icon">☀️</div>
            <h4>Step 3</h4>
            <h3>Sun-Marinating Process</h3>
            <p>
              Natural sun curing enhances flavor and authenticity.
            </p>
          </div>

          <div className="process-card">
            <div className="icon">🫙</div>
            <h4>Step 4</h4>
            <h3>Hygienic Packing</h3>
            <p>
              Packed carefully to preserve freshness and taste.
            </p>
          </div>

        </div>

      </section>



      {/* SPECIAL */}

      <section className="special">

        <p className="small-title center">Our Promise</p>

        <h2 className="center white">Why Our Pickles Are Special</h2>

        <div className="special-grid">

          <div className="special-box">100% Homemade Recipe</div>
          <div className="special-box">No Artificial Preservatives</div>
          <div className="special-box">Authentic Andhra Taste</div>
          <div className="special-box">Small Batch Preparation</div>
          <div className="special-box">Rich in Flavor & Tradition</div>

        </div>

      </section>



      {/* PURITY */}

      <section className="purity">

        <div className="purity-container">

          <div className="purity-text">

            <span className="small-title">Our Heritage</span>

            <h2>Purity You Can Trust</h2>

            <p>
              We believe the taste should never compromise health.
              Our pickles are prepared in aclean environment,using
              traditional methods combined with modern hygiene
              practices.Every jar is sealed with care to ensure freshness
              and long shelf life. 
            </p>

          </div>

          <img src={purityImg} alt="purity"/>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-grid">

          <div>
            <img src={logo} className="logo" alt="logo"/>
      
            <p>
              Bringing you authentic homemade pickles crafted
              with love and tradition since 2026.
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

export default About;
