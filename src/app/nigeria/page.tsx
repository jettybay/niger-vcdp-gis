"use client";

import dynamic from "next/dynamic";

const NigeriaStatesMap = dynamic(
  () => import("@/components/maps/NigeriaStatesMap"),
  {
    ssr: false,
  }
);

export default function NigeriaPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <NigeriaStatesMap />
    </div>
  );
}