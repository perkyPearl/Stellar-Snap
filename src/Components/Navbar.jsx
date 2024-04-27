import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import notification from "../images/notification.svg";
import user from "../images/user.jpg";
import arrow from "../images/arrow-down.png";
import messaging from "../images/messaging.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" id="logo" />
        <a href="/">Home</a>
        <a href="/explore">Explore</a>
        <a href="/create">Create</a>
        <input type="text" id="SearchBar" placeholder="Search" alt="Search" />
        {/* <button id="SearchButton">Search</button> */}
        <img src={notification} alt="notification" id="notification" />
        <img src={messaging} alt="" id="messaging" />
        <img src={user} alt="" id="user-profile" />
        <img src={arrow} id="arrow-down" />
      </nav>
    </header>
  );
};

export default Navbar;
