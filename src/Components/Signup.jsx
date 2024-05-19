import React, { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const newUser = {
      email: email,
      password: password,
      birthdate: birthdate,
    };
  
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      const userExists = existingUsers.some((user) => user.email === email);
      if (userExists) {
        setError("User with this email already exists.");
        return; 
      }
  
      const updatedUsers = [...existingUsers, newUser];
  
      localStorage.setItem("users", JSON.stringify(updatedUsers));
  
      window.location.href = "/";
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };  

  return (
    <div className="signup">
      <div className="structure">
      <span className="close" id="closePopup" onClick={props.toggle}>
        &times;
      </span>
        <center>
          <img src="images/logo.png" alt="" height={100} className="img1" />
        </center>
        <h1 className="head1">Welcome to Stellar Snap</h1>
        <center>
          <p className="para">Find new ideas to try</p>
        </center>
        <form onSubmit={handleSignup}>
          <p className="para1">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="input1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="para2">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="input2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="para3">Birthdate</p>
          <center>
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              className="input3"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </center>
          {error && <p className="error">{error}</p>}
          <center>
            <button type="submit" className="but1">
              Continue
            </button>
          </center>
        </form>
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
          <b className="bold1">Terms of Service</b> and acknowledge you've read
          our {"\n"}
          <b className="bold1"> Privacy Policy. Notice at collection.</b> {"\n"}
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
  );
};

export default Signup;