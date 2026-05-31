// import MapWrapper from "@/components/maps/MapWrapper";

// export default function HomePage() {
//   return (
//     <main>
//       <MapWrapper />
//     </main>
//   );
// }

"use client";

import dynamic from "next/dynamic";

const OpenStreetMap = dynamic(
  () => import("@/components/maps/OpenStreetMap"),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  }
);

export default function HomePage() {
  return (
    <main className="h-screen">
      <OpenStreetMap />
    </main>
  );
}