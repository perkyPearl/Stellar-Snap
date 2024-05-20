import React, { useState } from "react";
import "./About.css"
import Login from "./Login";
import Signup from "./Signup";
import logo from "../images/logo.png"
import img1 from '../images/[removal.ai]_cb435d56-347c-4a5c-972e-5b079a2745b8-easter-bunny-fairytale-tubikarts.png'
import img2 from '../images/[removal.ai]_cad43923-b784-4794-a368-d89c980207cc-800b78cf961d8624e3f25c98f65bf620.png'
import img3 from '../images/vision-4352694-3611155.webp'
import img4 from '../images/[removal.ai]_f8f21d96-0d29-4368-bf95-4e6947f5fbbb-job-offer-abstract-concept-vector-illustration-2h1ywrw.png'
import girl from '../images/[removal.ai]_c135d541-4ede-4b28-ac01-182d33905427-images.png'
import boy from '../images/man_9-512.webp'

const About = () => {
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
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>About</title>
            <link rel="stylesheet" href="style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Monoton&family=Sacramento&display=swap"
                rel="stylesheet"
            />
           
            {/* navigation bar*/}
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
            <br />
            <br />
            <br />
            <h1 className="title" style={{ textAlign: "center", fontSize: "12vh" }}>
                Welcome To Stellar Snap
            </h1>
            <table style={{ padding: 50 }}>
                <tbody>
                    <tr style={{ marginBottom: 20 }}>
                        <td className="image-cell" colSpan={2}>
                            <p style={{ fontSize: 30 }}>
                            At Stellar Snap, we believe in the power of visual storytelling. Our platform is designed to bring people together through the sharing and discovery of beautiful images. Whether you’re an amateur photographer, a seasoned professional, or simply someone who appreciates stunning visuals, Stellar Snap is the perfect place to explore and engage with a world of imagery.
                            </p>
                        </td>
                        <td>
                            <img
                                src={img1}
                                alt=""
                                style={{ height: 300, width: 400 }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style={{ padding: 50 }}>
                <tbody>
                    <tr style={{ marginBottom: 20 }}>
                        <td className="image-cell" colSpan={2}>
                            <img
                                src={img2}
                                alt=""
                                style={{
                                    height: 300,
                                    width: 300,
                                    borderRadius: "10%",
                                }}
                            />
                        </td>
                        <td className="image-cell" colSpan={2}>
                            <p style={{ fontSize: 30 }}>
                            Our mission is to create a vibrant and inclusive community where users can share their visual experiences and discover inspiring content from around the globe. We strive to provide a user-friendly platform that makes it easy for everyone to find and enjoy high-quality images, fostering creativity and connection.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style={{ padding: 50 }}>
                <tbody>
                    <tr>
                        <td className="image-cell" colSpan={2}>
                            <p style={{ fontSize: 30 }}>
                            We envision a world where visual content is easily accessible and where people from all walks of life can connect through their shared love of photography and art. By offering a seamless browsing experience and planning future interactive features, we aim to be the go-to destination for anyone passionate about visual storytelling.
                            </p>
                        </td>
                        <td>
                            <img
                                src={img3}
                                alt=""
                                style={{
                                    height: 300,
                                    width: 400,
                                    borderRadius: "10%",
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style={{ padding: 50 }}>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src={img4}
                                alt=""
                                style={{
                                    height: 300,
                                    width: 300,
                                    borderRadius: "10%",
                                }}
                            />
                        </td>
                        <td className="image-cell" colSpan={3}>
                            <p style={{ fontSize: 30 }}>
                            Stellar Snap provides a curated selection of high-quality images, ensuring a diverse and engaging visual experience. Our platform is designed with simplicity and enjoyment in mind, allowing users to effortlessly explore and appreciate a wide array of content.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <h1
                style={{
                    fontSize: "12vh",
                    textAlign: "center",
                    marginTop: 30,
                }}>
                Our Collaborators
            </h1>
            <div className="team-container">
                <div className="team-card">
                    <img src={girl} alt="Prachi" title="Prachi Anand" />
                    <div className="container">
                        <h4>Prachi Anand</h4>
                        <h5>2210990660</h5>
                        <div className="flex">

                        <a href="https://github.com/prachi91124">
                            {" "}
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/prachi-anand-8173531a1">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="https://www.instagram.com/prachi.9124/">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="https://twitter.com/prachi_9124">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                        </div>
                    </div>
                </div>
                
                <div className="team-card">
                    <img src={boy} alt="Pearl" />
                    <div className="container">
                        <h4>Pearl</h4>
                        <h5>2210990648</h5>
                        <div className="flex">
                        <a href="https://github.com/prachi91124">
                            {" "}
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/prachi-anand-8173531a1">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="https://www.instagram.com/prachi.9124/">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="https://twitter.com/prachi_9124">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <img src={girl} alt="Prachi" title="Prachi Malik" />
                    <div className="container">
                        <h4>Prachi Malik</h4>
                        <h5>2210990661</h5>
                        <div className="flex">

                        <a href="https://github.com/prachi91124">
                            {" "}
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/prachi-anand-8173531a1">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="https://www.instagram.com/prachi.9124/">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="https://twitter.com/prachi_9124">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
