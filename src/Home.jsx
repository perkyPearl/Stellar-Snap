import React, { useState } from "react";
import "./Home.css";
import logo from "./images/logo.png";
import Login from "./Components/Login";

const Home = () => {
    // State to manage visibility of login and signup containers
    const [loginVisible, setLoginVisible] = useState(false);
    const [signupVisible, setSignupVisible] = useState(false);
  
    const toggleLogin = () => {
      setLoginVisible(!loginVisible);
      setSignupVisible(false); // Hide signup container if login container is displayed
    };
  
    const toggleSignup = () => {
      setSignupVisible(!signupVisible);
      setLoginVisible(false); // Hide login container if signup container is displayed
    };
  
    const closeContainers = () => {
      setLoginVisible(false);
      setSignupVisible(false);
    };

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
              <div className="loginbuttonlabel" onClick={toggleLogin}>Log In</div>
            </div>
            <div className="signupbutton">
              <div className="signupbuttonlabel">Sign Up</div>
            </div>
          </div>
        </nav>
      </header>
      <div className="login">
        <span className="close" id="closePopup">
          ×
        </span>
        <div className="structure">
          <center>
            <img src="images/logo.png" alt="" height={100} className="img1" />
          </center>
          <h1 className="head1">Welcome to Stellar Snap</h1>
          <p className="para1">Email</p>
          <input type="email" placeholder="Email" className="input1" />
          <p className="para2">Password</p>
          <input type="password" placeholder="Password" className="input2" />
          <br />
          <a href="#" className="anchor1">
            Forgot your password?
          </a>
          <center>
            <button className="but1" onclick="login()">
              Log in
            </button>
          </center>
          <p className="para3">OR</p>
          <center></center>
          <center>
            <button className="but2">
              {" "}
              <img
                className="img"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"
                alt=""
                width={24}
                height={24}
              />
              Continue with Facebook
            </button>
          </center>
          <pre className="pre1">
            By continuing, you agree to Pinterest's {"\n"}
            <b className="bold1">Terms of Service</b> and acknowledge you've
            read our {"\n"}
            <b className="bold1"> Privacy Policy. Notice at collection.</b>{" "}
            {"\n"}
            {"      "}
          </pre>
          <a href="#" className="anchor2">
            Not on Pinterest yet? Sign up
          </a>
          <div className="div2">
            Are you a business?{" "}
            <a href="#" className="anchor3">
              Get started here!
            </a>
          </div>
        </div>
      </div>
      <div className="signup">
        <span className="close" id="closePopup">
          ×
        </span>
        <div className="structure">
          <center>
            <img src="images/logo.png" alt="" height={100} className="img1" />
          </center>
          <h1 className="head1">Welcome to Stellar Snap</h1>
          <center>
            <p className="para">Find new ideas to try</p>
          </center>
          <p className="para1">Email</p>
          <input type="email" placeholder="Email" className="input1" />
          <p className="para2">Password</p>
          <input type="password" placeholder="Password" className="input2" />
          <p className="para3">Birthdate</p>
          <center>
            <input type="date" placeholder="mm/dd/yyyy" className="input3" />
          </center>
          <center>
            <button className="but1">Continue</button>
          </center>
          <center>
            <p className="para4">OR</p>
          </center>
          <center>
            <button className="but2">
              {" "}
              <img
                className="img"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"
                alt=""
                width={24}
                height={24}
              />
              Continue with Facebook
            </button>
          </center>
          <pre className="pre1">
            By continuing, you agree to Pinterest's {"\n"}
            <b className="bold1">Terms of Service</b> and acknowledge you've
            read our {"\n"}
            <b className="bold1"> Privacy Policy. Notice at collection.</b>{" "}
            {"\n"}
            <div className="div2">
              Already a member?{" "}
              <a href="#" className="anchor3">
                Log in
              </a>
            </div>
            {"\n"}
            <div className="div3">
              {" "}
              <a href="#" className="anchor4">
                Create a free business account
              </a>
            </div>
            {"\n"}
            {"  "}
          </pre>
        </div>
      </div>
      <div className="welcome-container">
        <section className="section1">
          <div className="welcomesection1">
            <h1 className="welcomesection1h1">
              Welcome to
              <br /> <span>"Stellar Snap"</span>
              <br />- Your Creative Photo Haven!
            </h1>
            <h2>
              Explore, share, and discover stunning visuals from a community of
              passionate photographers.
            </h2>
            <center>
              <button className="btn">
                <strong>Explore Now</strong>
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
                  <br /> visual inspiration for <br /> every mood and interest.
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
          <Login/>
        </section>
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
