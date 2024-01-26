import React from "react";
import { MapPin, RefreshCcw, Gamepad, Hash, ImagePlus, SquarePen  } from "lucide-react";
import { Button } from "./ui/button";
function CityDetails({ location }) {
  return (
    <article className="h-full w-1/4 p-6 flex flex-col justify-around text-deepGreen font-medium">
        <div className="flex items-center justify-center">
          <MapPin size={40} />
                <h2 className="text-3xl text-center py-2 font-bold p-0 m-0 flex gap-4 items-center justify-center text-wrap	">
          {location.name}
                </h2>
        </div>

      <div>
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
      <div className="flex flex-col gap-4">
<Button className="gap-1"><ImagePlus/>Add an invader</Button>
<Button className="gap-1" variant="outline"> <SquarePen/>Edit</Button>
      </div>
    </article>
  );
}

export default CityDetails;
