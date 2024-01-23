import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <>
      <MapContainer
        center={[48.775, 9.182]}
        zoom={4.1}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100vw" }}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            <img src="/vite.svg" alt="Vite vite" />
            <h1>Dat popup</h1>
          </Popup>
        </Marker>
        <Marker position={[43.7159395, 10.4018624]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            <img src="/vite.svg" alt="Vite vite" />
            <h1>Dat popup</h1>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
