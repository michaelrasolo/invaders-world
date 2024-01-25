import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CityDetails from "@/components/CityDetails";
import CityCarousel from "@/components/CityCarousel";
function CityPage() {

  return (
    <>
      <Navbar />

      <CityCarousel />
      <Footer />
    </>
  );
}

export default CityPage;
