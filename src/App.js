import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Home from "./Home";
import Test from "./Components/Test";
import About from "./About"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/dev" element={<Test/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
