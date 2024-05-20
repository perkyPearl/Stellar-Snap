import React, { useState } from "react";
import "./Home.css";
import logo from "./images/logo.png";
import Login from "./Components/Login";
import user from "./images/user.jpg";
import Signup from "./Components/Signup";

const Home = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
    setSignupVisible(false);
  };

  const toggleSignup = () => {
    setSignupVisible(!signupVisible);
    setLoginVisible(false);
  };

  const handleLogout = () => {
    localStorage.setItem("authToken","NULL");
    window.location.href = "/";
  }

  return (
    <>
      <header>
        <nav>
          <div id="leftoptions">
            <img src={logo} alt="logo" id="logo" />
            <div className="optionscontainer">
              <a href="#">Today</a>
            </div>
            <div className="optionscontainer">
              <a href="#">Watch</a>
            </div>
            <div className="optionscontainer">
              <a href="#">Explore</a>
            </div>
          </div>
          <div id="rightoptions">
            <div className="optionscontainer">
              <a href="#">About</a>
              <a href="#">Business</a>
              <a href="#">Blog</a>
            </div>
            <div className="loginbutton">
              <div className="loginbuttonlabel" onClick={toggleLogin}>
                Log In
              </div>
            </div>
            <div className="signupbutton">
              <div className="signupbuttonlabel" onClick={toggleSignup}>
                Sign Up
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="body">
        <div className="welcome-container">
          <section className="section1">
            <div className="welcomesection1">
              <h1 className="welcomesection1h1">
                Welcome to
                <br /> <span>"Stellar Snap"</span>
                <br />- Your Creative Photo Haven!
              </h1>
              <h2>
                Explore, share, and discover stunning visuals from a community
                of passionate photographers.
              </h2>
              <center>
                <button className="btn">
                  <strong onClick={toggleSignup}>Explore Now</strong>
                  <div id="container-stars">
                    <div id="stars" />
                  </div>
                  <div id="glow">
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                </button>
              </center>
            </div>
          </section>
          <section className="section2">
            <div className="section2div">
              <h1>
                <span>Discover</span>
                <p>WHAT'S TRENDING NOW</p>
              </h1>
              <div className="section2images">
                <img src="/welcome page images/Image 1.jpeg" alt="" srcSet="" />
                <img src="/welcome page images/Image 2.jpeg" alt="" srcSet="" />
                <img src="/welcome page images/Image 3.jpeg" alt="" srcSet="" />
                <img src="/welcome page images/Image 4.jpeg" alt="" srcSet="" />
                <img src="/welcome page images/Image 5.jpeg" alt="" srcSet="" />
                <img src="/welcome page images/Image 6.jpeg" alt="" srcSet="" />
                <img src="/welcome page images/Image 7.jpeg" alt="" srcSet="" />
              </div>
              <div className="section2afterimgtext">
                <ul>
                  <li>Explore the latest and </li>
                  <li> most popular photos</li>
                  <li> by our vibrant community</li>
                </ul>
                <div className="buttoncontainer">
                  <button>Explore Trending Photos</button>
                  <span className="arrow first">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                  <span className="arrow second">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                  <span className="arrow third">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section3div">
              <div className="section3divh1">
                <h1>
                  Dive into <br /> Diverse Collections
                </h1>
              </div>
              <div className="section3divh2">
                <div className="section3divh2text">
                  <h2>
                    Browse through curated categories
                    <br /> and find the perfect
                    <br /> visual inspiration for <br /> every mood and
                    interest.
                  </h2>
                  <button>Explore Categories</button>
                </div>
                <div className="section3divh2imgs">
                  <img
                    src="/welcome page images/New folder/pexels-aviv-perets-3274899.jpg"
                    alt=""
                  />
                  <img
                    src="/welcome page images/New folder/pexels-eberhard-grossgasteiger-2098427.jpg"
                    alt=""
                  />
                  <img
                    src="/welcome page images/New folder/pexels-felix-mittermeier-2832071.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="growing-container">
            <div className="section4text">
              <h1>Join Our Growing Community</h1>
              <h2>
                Become a part of <br />
                our creative community. <br />
                Share your passion, <br />
                connect with like-minded individuals, <br />
                and inspire others
              </h2>
            </div>
            {loginVisible && <Login toggle={toggleLogin} />}
            {signupVisible && <Signup toggle={toggleSignup} />}
          </section>
        </div>
      </div>
      <footer>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Help</a>
        <a href="#">Iphone App</a>
        <a href="#">Android App</a>
        <a href="#">Users</a>
        <a href="#">Collections</a>
        <a href="#">Shopping</a>
        <a href="#">Today</a>
        <a href="#">Explore</a>
        <a href="#">Watch</a>
        <a href="#">Shop</a>
      </footer>
    </>
  );
};

export default Home;
