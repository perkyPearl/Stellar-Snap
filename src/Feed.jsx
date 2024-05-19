// Feed.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import Data from "./Data";
import Users from "./Users";
import "./Feed.css";

const Feed = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {Data.map((data) => (
          <Card key={data.id} post={data} user={Users[0]} />
        ))}
      </div>
    </>
  );
};

export default Feed;
