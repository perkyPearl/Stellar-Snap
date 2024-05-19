import React, { useState } from "react";
import "./Login.css";
import Logo from "../images/logo.png";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      let user = null;

      for(let i=0;i<users.length;i++){
        console.log(users[i].email == email, users[i].password == password)
        }
      if (user) {
        localStorage.setItem("authToken", JSON.stringify({ email: user.email }));
        window.location.href = "/feed";
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login">
      <span className="close" id="closePopup" onClick={props.toggle}>
        ×
      </span>
      <div className="structure">
        <center>
          <img src={Logo} height="300px" id="logo" alt="Stellar Snap Logo" />
        </center>
        <h1 className="head1">Log In to Stellar Snap</h1>
        <form onSubmit={handleLogin}>
          <p className="para1">Email</p>
          <input
            type="email"
            placeholder="Email"
            className={`input1 ${error ? "error-border" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="para2">Password</p>
          <input
            type="password"
            placeholder="Password"
            className={`input2 ${error ? "error-border" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <center>
            <button type="submit" className="but1">
              Log In
            </button>
          </center>
        </form>
        <center>
          <p className="para4">OR</p>
        </center>
        <center>
          <button className="but2">
            <img
              className="img"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"
              alt="Facebook"
              width={24}
              height={24}
            />
            Continue with Facebook
          </button>
        </center>
        <pre className="pre1">
          By continuing, you agree to Stellar Snap's {"\n"}
          <b className="bold1">Terms of Service</b> and acknowledge you've
          read our {"\n"}
          <b className="bold1"> Privacy Policy. Notice at collection.</b>{" "}
          {"\n"}
          <div className="div3"></div>
        </pre>
      </div>
    </div>
  );
};

export default Login;
