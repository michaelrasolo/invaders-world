import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SI_Api from "@/api/jsonServer";
import { PlusCircleIcon, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import cloudinary from "@/api/cloudinary";

function CityForm() {
  const [name, setName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [waveCount, setWaveCount] = useState("");
  const [nbSpaceInvader, setNbSpaceInvader] = useState("");
  const [points, setPoints] = useState("");
  const [pictureFile, setPictureFile] = useState("");
  const [pictureName, setPictureName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  function handlePicture(event) {
    setPictureFile(event);
    setPictureName(event.target.value);
  }

  async function uploadPic() {
    const file = pictureFile.target.files[0];
    return await cloudinary.upload(file);
  }
  const resetStates = () => {
    setName("");
    setLongitude("");
    setLatitude("");
    setWaveCount("");
    setNbSpaceInvader("");
    setPoints("");
    setPictureFile("");
    setPictureName("");
    setSubmitting(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set city's URL
    const url = name.toLowerCase().replace(/\s+/g, "-"); // Lower case + replace spaces with -
    // Upload image to cloudinary
    const pictureURL = await uploadPic();
    console.log("URL defined by function", pictureURL);
    // Object to post
    const cityToPost = {
      name,
      longitude,
      latitude,
      waveCount,
      nbSpaceInvader,
      points,
      pictures: [pictureURL],
      url,
    };
    try {
      // POST Request to the JSON Server
      const response = await SI_Api.post("/cities", cityToPost);
      console.log("Post response:", response.data);
      // Button display
      setSubmitting(true);
      // Navigation to new place
      setTimeout(() => {
        resetStates();
        navigate(`/city/${url}`);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Drawer className="z-50">
      <DrawerTrigger asChild>
        <Button className="z-50 absolute bottom-8 right-8 rounded-full h-16 w-16 p-0">
          <PlusCircleIcon size={40} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="z-50 mx-auto w-full max-w-xl flex flex-col justify-center items-center">
          {/* HEADERS */}
          <DrawerHeader>
            <DrawerTitle>Add an invaded city</DrawerTitle>
            <DrawerDescription>
              You spotted an invader in a new city? Let the world know!
            </DrawerDescription>
          </DrawerHeader>
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex gap-6 justify-around items-center flex flex-col h-full"
          >
            <div className="w-full h-full flex gap-6 justify-around items-center">
              {/* INPUTS */}
              <section className="flex flex-col justify-between w-6/12">
                <div>
                  <Label htmlFor="name">City</Label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id="name"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    onChange={(e) => setLongitude(e.target.value)}
                    value={longitude}
                    type="number"
                    id="longitude"
                    placeholder="48.00"
                  />
                </div>
                <div>
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    onChange={(e) => setLatitude(e.target.value)}
                    value={latitude}
                    type="number"
                    id="latitude"
                    placeholder="7.00"
                  />
                </div>
                <div>
                  <Label htmlFor="picture">Picture</Label>
                  <Input
                    onChange={handlePicture}
                    value={pictureName}
                    id="picture"
                    type="file"
                  />
                </div>
              </section>
              <section className="flex flex-col justify-between	h-full w-6/12">
                <div>
                  <Label htmlFor="waveCount">Waves</Label>
                  <Input
                    onChange={(e) => setWaveCount(e.target.value)}
                    value={waveCount}
                    type="number"
                    id="waveCount"
                    placeholder="1"
                    min="0"
                  />
                </div>
                <div>
                  <Label htmlFor="nbSpaceInvader">Number of invaders</Label>
                  <Input
                    onChange={(e) => setNbSpaceInvader(e.target.value)}
                    value={nbSpaceInvader}
                    type="number"
                    id="nbSpaceInvader"
                    min="0"
                    placeholder="3"
                  />
                </div>
                <div>
                  <Label htmlFor="points">Total points</Label>
                  <Input
                    onChange={(e) => setPoints(e.target.value)}
                    value={points}
                    id="points"
                    type="number"
                    min="0"
                    placeholder="1000"
                  />
                </div>
              </section>
            </div>
          </form>
          {/* FOOTER */}
          <DrawerFooter className="flex flex-row gap-8 items-center justify-center">
            {!submitting ? (
              <Button type="submit" onClick={handleSubmit}>
                Create the invasion !
              </Button>
            ) : (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            )}
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default CityForm;
