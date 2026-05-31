"use client";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("./OpenStreetMap"),
  {
    ssr: false,
  }
);

export default function MapWrapper() {
  return <Map />;
}