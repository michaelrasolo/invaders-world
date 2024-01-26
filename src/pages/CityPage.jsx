import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CityDetails from "@/components/CityDetails";
import CityCarousel from "@/components/CityCarousel";
import SI_Api from "@/api/jsonServer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CityPage() {
  const { cityName } = useParams();
  const [location, setLocation] = useState("");

  async function getCityDetails() {
    try {
      const details = await SI_Api.getCity(cityName);
      setLocation(details);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCityDetails();
  }, [cityName]);

  return (
    <>
      <Navbar />
      <main className="flex h-screen justify-around items-center p-6">
        <CityCarousel location={location}/>
        <CityDetails location={location}/>
      </main>
      <Footer />
    </>
  );
}

export default CityPage;
