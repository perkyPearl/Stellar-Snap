import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import Data from "./Data";
import Users from "./Users";
import "./Feed.css";

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Feed = () => {
  const shuffledData = shuffleArray(Data);
  return (
    <>
      <Navbar mode="logout"/>
      <div className="container">
        {shuffledData.map((data) => (
          <Card key={data.id} post={data} user={Users[0]} />
        ))}
      </div>
    </>
  );
};

export default Feed;