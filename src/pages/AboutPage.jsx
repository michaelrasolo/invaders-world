import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import "../App.css";

function AboutPage() {
    return (
        <div className="Home ">
          <Navbar/>
          <About/>
          <Footer/>
        </div>
      );
}

export default AboutPage