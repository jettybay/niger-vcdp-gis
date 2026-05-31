"use client";

import { useEffect, useState } from "react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import { useRouter } from "next/navigation";

export default function NigeriaStatesMap() {
  const [geoData, setGeoData] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    fetch("/geojson/nigeria-adm1.geojson")
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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoData && (
        <GeoJSON
          data={geoData}
          style={(feature: any) => {
            const state =
              feature?.properties?.shapeName;

            return {
              fillColor:
                state === "Niger"
                  ? "#ef4444"
                  : "#d1d5db",

              color: "#333",
              weight: 1,
              fillOpacity: 0.8,
            };
          }}
          onEachFeature={(feature: any, layer: any) => {
            const state =
              feature?.properties?.shapeName;

            if (state === "Niger") {
              layer.on({
                click: () => {
                  router.push("/niger-state");
                },
              });
            }
          }}
        />
      )}
    </MapContainer>
  );
}