import Data from "../Data.js";
import React from "react";
import Window from "./Window.jsx";
import users from "../Users.js"

const Test = () => {
    console.log(Data[4])
  return (
    <Window imageURL={Data[4].image_src} caption={Data[4].caption} user={users[0]}></Window>
  );
};

export default Test;
