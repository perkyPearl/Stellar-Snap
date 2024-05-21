// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Home from "./Home";
import Test from "./Components/Test";
import Shared from "./Shared";
import About from "./Components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/dev" element={<Test />} />
        <Route path="/post/:postId" element={<Shared />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;