import React, { useEffect, useState } from "react";
import SI_Api from "@/api/jsonServer";
import { useParams } from "react-router-dom";
import { MapPin, RefreshCcw, Gamepad, Hash } from "lucide-react";

function CityDetails() {
  const [location, setLocation] = useState("");
  const { cityName } = useParams();
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
  }, []);

  return (
    <article className="h-screen flex justify-around items-center text-left text-justify	">
      <div className="h-5/6"></div>
      <div className="border border-blue h-5/6 w-2/6 p-6 flex flex-col justify-center text-deepGreen font-medium">
        <h2 className="text-3xl text-center py-2 font-bold p-0 m-0 flex gap-4 items-center justify-center w-full">
          <MapPin />
          {location.name}
        </h2>
        <p className="flex gap-4 items-center my-2 ">
          <Hash />
          Invaders: {location.nbSpaceInvader}
        </p>
        <p className="flex gap-4 items-center my-2">
          {" "}
          <RefreshCcw />
          Waves: {location.waveCount}
        </p>
        <p className="flex gap-4 items-center my-2">
          {" "}
          <Gamepad />
          Points: {location.points}
        </p>
      </div>
    </article>
  );
}

export default CityDetails;
