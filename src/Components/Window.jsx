import React from "react";
import "./Window.css";

const Window = (props) => {
  return (
    <div className="window">
      <span className="close" onClick={props.toggle}>
        &times;
      </span>
      <div className="window-content">
        <div className="image-container">
          <img src={props.imageURL} alt="" className="window-image" />
        </div>
        <div className="window-info-area">
          <p className="caption">{props.caption}</p>
          <div className="user">
            <img src={props.user.PFP} className="usr-img" />
            <h5>{props.user.Username}</h5>
          </div>
          <h3>Comments:</h3>
          <div className="comments-area">
            <h5>No Comments Yet</h5>
          </div>
          <div>
            <h3>What are your Thoughts?</h3>
            <input type="text" placeholder="Add your Comment"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
