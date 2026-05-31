"use client";

import dynamic from "next/dynamic";

const NigeriaStatesMap = dynamic(
  () =>
    import(
      "@/components/maps/NigeriaStatesMap"
    ),
  {
    ssr: false,
  }
);

export default function NigeriaPage() {
  return <NigeriaStatesMap />;
}