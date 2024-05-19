import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Window from './Components/Window';
import cardsData from "./Data"; 
import "./Components/Window.css"
import Login from "./Components/Login"

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // State to control login popup

  useEffect(() => {
    const filteredPost = cardsData.find(card => card.id === parseInt(postId));
    setPost(filteredPost);
  }, [postId]);

  const handleLoginToggle = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Navbar />
      <div className='Background-Blured' onClick={handleLoginToggle}> 
        {post && <Window post={post} />} 
      </div>
      {showLogin && <Login />}
    </>
  );
};

export default Post;
