import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import notification from "../images/notification.svg";
import user from "../images/user.jpg";
import messaging from "../images/messaging.png";

const Navbar = (props) => {

  const handleLogout = () => {
    localStorage.setItem("LoggedIn","NULL");
    window.location.href = "/";
  }

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
        { props.mode == 'logout' ? (
          <>
            <img src={user} alt="" id="user-profile" />
            <button className="logoutButton" onClick={handleLogout}> Logout </button>
          </>
        ) : (
          <button className="loginButton"> Log In </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
