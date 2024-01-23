import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import "../App.css";

function HomePage() {
  return (
    <div className="Home ">
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default HomePage;
