import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import Data from "./Data";
import Users from "./Users";
import "./Feed.css"

const feed = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {Data.map(data => (
          <Card key={data.id} imageURL={data.image_src} caption={data.caption} user={Users[0]} />
        ))}
      </div>
    </>
  );
};

export default feed;
