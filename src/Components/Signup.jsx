var NewComponent = React.createClass({
    render: function() {
      return (
  
        <div className="signup">
          <span className="close" id="closePopup">×</span>
          <div className="structure">
            <center><img src="images/logo.png" alt="" height={100} className="img1" /></center>
            <h1 className="head1">Welcome to Stellar Snap</h1>
            <center>
              <p className="para">Find new ideas to try</p>
            </center>
            <p className="para1">Email</p>
            <input type="email" placeholder="Email" className="input1" />
            <p className="para2">Password</p>
            <input type="password" placeholder="Password" className="input2" />
            <p className="para3">Birthdate</p>
            <center><input type="date" placeholder="mm/dd/yyyy" className="input3" /></center>
            <center><button className="but1">Continue</button></center>
            <center>
              <p className="para4">
                OR
              </p>
            </center>
            <center><button className="but2"> <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png" alt="" width={24} height={24} />Continue with Facebook</button></center>
            <pre className="pre1">By continuing, you agree to Pinterest's {"\n"}<b className="bold1">Terms of Service</b> and acknowledge you've read our {"\n"}<b className="bold1"> Privacy Policy. Notice at collection.</b> {"\n"}<div className="div2">Already a member? <a href="#" className="anchor3">Log in</a></div>{"\n"}<div className="div3"> <a href="#" className="anchor4">Create a free business account</a></div>{"\n"}{"  "}</pre></div>
        </div>
      );
    }
  });