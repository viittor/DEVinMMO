import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/index.js";
import News from "../src/pages/News/index.js";
import Games from "../src/pages/Games/index.js";
import Details from "../src/pages/Details/index.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
