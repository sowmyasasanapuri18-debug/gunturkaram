import React from "react";

import "./Notifications.css";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";



import truck from "../assets/truck.png";
import holi from "../assets/holi.png";

function Notifications() {

  const notifications = [
    {
      id: 1,
      icon: truck,
      text: "Order ID - 8768 has been shipped",
      date: "4 March"
    },
    {
      id: 2,
      icon: holi,
      text: "Holi offer Buy 1 get one free",
      date: "4 March"
    }
  ];
<Navbar />
  return (
    <div>

      

      {/* PAGE TITLE */}
      <div className="notificationContainer">

        <h1>Notifications</h1>
        <p>You have 2 notifications please check</p>

        {notifications.map((item) => (

          <div className="notificationCard" key={item.id}>

            <div className="notificationLeft">
              <img src={item.icon} alt="" />
              <span>{item.text}</span>
            </div>

            <div className="notificationDate">
              {item.date}
            </div>

          </div>

        ))}

      </div>

      <Footer /> 

    </div>
  );
}

export default Notifications;