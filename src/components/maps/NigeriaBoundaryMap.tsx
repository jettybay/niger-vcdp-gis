"use client";

import { useEffect, useState } from "react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function NigeriaBoundaryMap() {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/geojson/nigeria-adm0.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  return (
    <MapContainer
      center={[9.082, 8.6753]}
      zoom={6}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoData && (
        <GeoJSON
          data={geoData}
          style={{
            color: "#16a34a",
            weight: 3,
            fillColor: "#22c55e",
            fillOpacity: 0.4,
          }}
        />
      )}
    </MapContainer>
  );
}