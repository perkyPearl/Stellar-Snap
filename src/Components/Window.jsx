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
          <img src={props.imageURL} alt="Image" className="window-image" />
        </div>
        <div className="window-info-area">
          <h3 className="caption">Image Caption:</h3>
          <p className="caption-text">{props.caption}</p>
          <div className="user">
            <img src={props.user.PFP} alt="User Profile" className="usr-img" />
            <div className="user-info">
              <h5 className="username">{props.user.Username}</h5>
              <p className="posted-time">Posted 2 hours ago</p>
            </div>
          </div>
          <h3 className="comments-heading">Comments:</h3>
          <div className="comments-area">
            <div className="comment">No Comments yet</div>
          </div>
          <div className="add-comment">
            <h3 className="add-comment-heading">Add your Comment:</h3>
            <div className="comment-input">
              <input type="text" placeholder="Write your comment here" />
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;

