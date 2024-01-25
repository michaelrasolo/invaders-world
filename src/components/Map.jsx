import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SI_Api from "@/api/jsonServer";
import CircularProgress from "@mui/material/CircularProgress";
import "../App.css";


function Map() {
  const [cities, setCities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const pin = L.icon({
    iconUrl: "/logos/map_pin.png", // custom pin icon
    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -15], // point from which the popup should open relative to the iconAnchor
  });

  const fetchData = async () => {
    try {
      const data = await SI_Api.getAll();
      // setInterval to see the loader
      setInterval(() => {
        setCities(data);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const markers =
    cities &&
    cities.map((city) => (
      <Marker
        position={[city.latitude, city.longitude]}
        key={city.id}
        icon={pin}
      >
        <Popup>
          <h1>{city.name}</h1>
          Invaders: {city.nbSpaceInvader}.{/* <img src="" alt="" /> */}
        </Popup>
      </Marker>
    ));

  return (
    <>
      {isLoading && (
        <div
          style={{ backgroundColor: "hsla(0, 0%, 0%, 0.3)" }}
          className="z-20 absolute left-0 top-0 h-screen w-screen flex items-center justify-center"
        >
          <CircularProgress color="success" size={60} />
        </div>
      )}

      <MapContainer
        center={[48.775, 9.182]}
        zoom={4.1}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100vw" }}
        className="z-10"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers}
      </MapContainer>
    </>
  );
}

export default Map;
