import React from "react";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import CityForm from "@/components/CityForm";
function WorldPage() {
  return (
    <div>
      <Navbar />
      <Map />
      <CityForm />
    </div>
  );
}

export default WorldPage;
