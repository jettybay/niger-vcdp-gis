"use client";

import { MapContainer, TileLayer } from "react-leaflet";

export default function OpenStreetMap() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <MapContainer
        center={[9.75, 5.5]}
        zoom={8}
        minZoom={6}
        maxZoom={18}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}