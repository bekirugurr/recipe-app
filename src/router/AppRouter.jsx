import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Banner from "../components/banner/Banner";
import Saved from '../pages/saved/Saved'
import Signup from '../pages/signup/Signup'
import OwnRecipes from '../pages/ownrecipes/OwnRecipes'
import Footer from "../components/footer/Footer";



const AppRouter = () => {
  return (
    <Router>
      <Banner/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/ownrecipes" element={<OwnRecipes />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default AppRouter;
