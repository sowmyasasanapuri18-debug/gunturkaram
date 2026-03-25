// // import React from "react";
// // import "./Navbar.css";
// // import logo from "../assets/logo.jpg";
// // import { useNavigate, useLocation } from "react-router-dom"; // ✅ added
// // import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();  // ✅ already correct

// //   return (
// //     <nav className="navbar">
      
// //       {/* LOGO */}
// //       <img
// //         src={logo}
// //         alt="logo"
// //         className="logo"
// //         onClick={() => navigate("/")}
// //       />

// //       {/* NAV LINKS */}
// //       <ul className="nav-links">
// //         <li onClick={() => navigate("/")}>Home</li>
// //         <li onClick={() => navigate("/about")}>About Us</li>
// //         <li onClick={() => navigate("/pickles")}>Pickles</li>
// //         <li onClick={() => navigate("/customized")}>Customized</li>
// //         <li onClick={() => navigate("/contact-us")}>Contact Us</li>
// //       </ul>

// //       {/* BUTTON */}
// //       <button
// //         className="login-btn"
// //         onClick={() => navigate("/login")}
// //       >
// //         Log In/Sign Up
// //       </button>

// //       {/* ✅ ICONS ONLY ON CONTACT PAGE */}
// //       {location.pathname === "/contact-us" && (
// //         <div className="nav-icons">
// //           <FaShoppingCart />
// //           <FaHeart />
// //           <FaBell />
// //           <FaUser />
// //         </div>
// //       )}

// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React from "react";
// import "./Navbar.css";
// import logo from "../assets/logo.jpg";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

  
//   const hideButtonPages = ["/contact-us", "/cart", "/Wishlist", "/Profile", "/Notifications"];

//   return (
//     <nav className="navbar">

//       {/* LEFT - LOGO */}
//       <div className="nav-left">
//         <img
//           src={logo}
//           alt="logo"
//           className="logo"
//           onClick={() => navigate("/")}
//         />
//       </div>

//       {/* CENTER - LINKS */}
//       <ul className="nav-links">
//         <li onClick={() => navigate("/")}>Home</li>
//         <li onClick={() => navigate("/about")}>About Us</li>
//         <li onClick={() => navigate("/pickles")}>Pickles</li>
//         <li onClick={() => navigate("/customized")}>Customized</li>
//         <li onClick={() => navigate("/contact-us")}>Contact Us</li>
//       </ul>

//       {/* RIGHT SIDE */}
//       <div className="nav-right">

//         {/* BUTTON (hide on contact page) */}
//         {location.pathname !== "/contact-us" && (
//           <button
//             className="login-btn"
//             onClick={() => navigate("/login")}
//           >
//             Log In/Sign Up
//           </button>
//         )}

//         {/* ICONS (only contact page) */}
//         {location.pathname === "/contact-us" && location.pathname !== "/cart" &&  location.pathname !== "/Wishlist" &&  location.pathname !== "/Notifications" && location.pathname !== "/Profile" && location.pathname !== "/Orders" && location.pathname !== "/PrivacyPolicy" && location.pathname !== "/Terms" &&    (
//          <div className="nav-icons">
//   <FaShoppingCart onClick={() => navigate("/cart")} />
//   <FaHeart onClick={() => navigate("/wishlist")} />
//   <FaBell onClick={() => navigate("/notifications")} />
//   <FaUser onClick={() => navigate("/profile")} />
// </div>

//         )}

//       </div>

//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import "./Navbar.css";
// import logo from "../assets/logo.jpg";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Pages where login button should be hidden
//   const hideButtonPages = [
//     "/contact-us",
//     "/cart",
//     "/wishlist",
//     "/profile",
//     "/notifications",
//     "/orders",
//     "/privacypolicy",
//     "/terms"
//   ];

//   return (
//     <nav className="navbar">

//       {/* LEFT - LOGO */}
//       <div className="nav-left">
//         <img
//           src={logo}
//           alt="logo"
//           className="logo"
//           onClick={() => navigate("/")}
//         />
//       </div>

//       {/* CENTER - LINKS */}
//       <ul className="nav-links">
//         <li onClick={() => navigate("/")}>Home</li>
//         <li onClick={() => navigate("/about")}>About Us</li>
//         <li onClick={() => navigate("/pickles")}>Pickles</li>
//         <li onClick={() => navigate("/customized")}>Customized</li>
//         <li onClick={() => navigate("/contact-us")}>Contact Us</li>
//       </ul>

//       {/* RIGHT SIDE */}
//       <div className="nav-right">

//         {/* LOGIN BUTTON (hidden on selected pages including cart) */}
//         {!hideButtonPages.includes(location.pathname) && (
//           <button
//             className="login-btn"
//             onClick={() => navigate("/login")}
//           >
//             Log In / Sign Up
//           </button>
//         )}

//         {/* ICONS (only on contact page) */}
//         {location.pathname === "/contact-us" && (
//           <div className="nav-icons">
//             <FaShoppingCart onClick={() => navigate("/cart")} />
//             <FaHeart onClick={() => navigate("/wishlist")} />
//             <FaBell onClick={() => navigate("/notifications")} />
//             <FaUser onClick={() => navigate("/profile")} />
//           </div>
//         )}

//       </div>

//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";

import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Pages where login button should be hidden
  const hideButtonPages = [
    "/contact-us",
    "/cart",
    "/wishlist",
    "/profile",
    "/notifications",
    "/orders",
    "/privacy",
    "/terms",
    "/checkout"

  ];

  // Pages where icons should be visible
  const showIconPages = ["/contact-us", "/cart", "/wishlist",
    "/profile",
    "/notifications",
    "/orders",
    "/privacy",
    "/terms",
    "/checkout"
];

  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-left">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* CENTER - LINKS */}
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate("/pickles")}>Pickles</li>
        {/* <li onClick={() => navigate("/customized")}>Customized</li> */}
        <li onClick={() => navigate("/contact-us")}>Contact Us</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* LOGIN BUTTON */}
        {!hideButtonPages.includes(location.pathname) && (
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Log In / Sign Up
          </button>
        )}

        {/* ICONS (Contact + Cart pages) */}
        {showIconPages.includes(location.pathname) && (
          <div className="nav-icons">
            <FaShoppingCart onClick={() => navigate("/cart")} />
            <FaHeart onClick={() => navigate("/wishlist")} />
            <FaBell onClick={() => navigate("/notifications")} />
            <FaUser onClick={() => navigate("/profile")} />
          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;