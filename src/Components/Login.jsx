import React from "react";
import "./Login.css";
import Logo from "../images/logo.png";

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <span className="close" id="closePopup" onClick={props.toggle}>
          ×
        </span>
        <div>
          <img src={Logo} alt="" height={100} className="img1" />
          <h1>Welcome to StellarSnap</h1>
          <div className="input-area">
            <p>Email</p>
            <input type="email" placeholder="Email" className="input1" />
            <p>Password</p>
            <input type="password" placeholder="Password" className="input2" />
          </div>
          <a href="#">
            Forgot your password?
          </a>
          <br />
          <a href="/feed" className="login-Button">Log in</a>

          <p>OR</p>

          <button className="facebook-button">
            <img
              className="img"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"
              alt=""
              width={24}
              height={24}
            />
            Continue with Facebook
          </button>

          <div className="pre1">
            By continuing, you agree to StellarSnap's 
            <b className="bold1"> Terms of Service </b> and acknowledge you've
            read our
            <b className="bold1"> Privacy Policy. Notice at collection.</b>
          </div>
          <br />
          <hr />
          <br />
          <a href="#" className="anchor2">
            Not on StellarSnap yet? Sign up
          </a>
          <div className="div2">
            Are you a business?{" "}
            <a href="#" className="anchor3">
              Get started here!
            </a>
          </div>
        </div>
      </div>

      <div>Login</div>
    </>
  );
};

export default Login;
