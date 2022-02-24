import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import News from "./pages/News/News.js";
import Games from "./pages/Games/Games.js";
import Details from "./pages/Details/Details.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
