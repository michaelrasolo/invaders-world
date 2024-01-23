import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

import "../App.css";

function HomePage() {
  return (
    <div className="Home ">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default HomePage;
