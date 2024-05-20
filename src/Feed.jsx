import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import "./Feed.css";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('cardsData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []); 

  return (
    <>
      <Navbar mode="logout" />
      <div className="container">
        {data.map((item) => (
          <Card key={item.id} post={item} user={item.user} />
        ))}
      </div>
    </>
  );
};

export default Feed;