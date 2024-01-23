import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SI_Api from "@/api/jsonServer";

function Map() {
  const [cities, setCities] = useState(null);
  const fetchData = async () => {
    try {
      const data = await SI_Api.getAll();
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( () => {

    fetchData();
  }, []);

  const markers = cities && cities.map((city) => (
    <Marker position={[city.latitude, city.longitude]} key={city.id}>
      <Popup>
        Invaders: {city.nbSpaceInvader}.
        {/* <img src="" alt="" /> */}
        <h1>{city.name}</h1>
      </Popup>
    </Marker>
  ));

  return (
    <>
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
