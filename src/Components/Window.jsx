import React, { useState, useEffect } from "react";
import "./Window.css";
import user from "../images/user.jpg";

const Window = ({ post, toggle }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${post.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }

    const storedLikes = localStorage.getItem(`likes_${post.id}`);
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }

    const storedLiked = localStorage.getItem(`liked_${post.id}`);
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [post]);

  useEffect(() => {
    localStorage.setItem(`comments_${post.id}`, JSON.stringify(comments));
  }, [comments, post]);

  useEffect(() => {
    localStorage.setItem(`likes_${post.id}`, JSON.stringify(likes));
  }, [likes, post]);

  useEffect(() => {
    localStorage.setItem(`liked_${post.id}`, JSON.stringify(liked));
  }, [liked, post]);

  const handleShare = () => {
    const postId = post.id;
    const shareUrl = `${window.location.origin}/post/${postId}`;
    navigator.clipboard.writeText(shareUrl);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    const newComment = {
      id: Date.now(),
      text: comment,
      user: "Anonymous",
      userImage: "",
    };

    setComments([...comments, newComment]);

    setComment("");
  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="window">
      <div className="window-content">
        <span className="close" onClick={toggle}>
          &times;
        </span>

        <div className="image-container">
          <img src={post.image_src} alt="Image" className="window-image" />
        </div>
        <div className="window-info-area">
          <div className="user-info-header">
            <img src={user} className="userpfp-icon" alt="User Profile" />
            {post.user.Username}
          </div>
          <p className="caption-text">{post.caption}</p>
          <div className="likes-area">
            <span className="likes-count">{likes} likes</span>
          </div>
          <div className="comments-area">
            {comments.map((comment) => (
              <div key={comment.id} className="comment">
                {comment.userImage && (
                  <img src={comment.userImage} className="comment-user-image" alt="User Profile" />
                )}
                {!comment.userImage && (
                  <img src="./images/anonymous Profile Icon.jpg" className="comment-user-image" alt="Anonymous Profile" />
                )}
                <p>{comment.user}: {comment.text}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="interaction-buttons">
              <button className="like-btn" onClick={handleLike}>{liked ? "Liked" : "Like"}</button>
              <label className="comment-btn" htmlFor="comment-box">Comment</label>
              <button className="share-btn" onClick={handleShare}>Share</button>
            </div>
            <div className="add-comment">
              <h3 className="add-comment-heading">Add your Comment:</h3>
              <div className="comment-input">
                <input 
                  type="text" 
                  placeholder="Write your comment here" 
                  id="comment-box"
                  value={comment}
                  onChange={handleCommentChange}
                />
                <button className="submit-btn" onClick={handleSubmitComment}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;