import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import "./Feed.css";

const Feed = () => {
  const [data, setData] = useState([]);
  
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    console.log(shuffledArray)
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  };  

  useEffect(() => {
    const storedData = localStorage.getItem('cardsData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []); 

  const shuffledData = shuffleArray(data);

  return (
    <>
      <Navbar mode="logout" />
      <div className="container">
        {shuffledData.map((shuffledItem) => (
          <Card key={shuffledItem.id} post={shuffledItem} user={shuffledItem.user} />
        ))}
      </div>
    </>
  );
};

export default Feed;