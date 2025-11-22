import React from "react";
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Profile from "../Profile";
import Skill from "../Skill";




export default function App() {
  return (
    <>
    <BrowserRouter>
    
    
   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>

       </BrowserRouter>
    </>
  );
}
