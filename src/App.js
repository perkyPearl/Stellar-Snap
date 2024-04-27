import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Home from "./Home";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
