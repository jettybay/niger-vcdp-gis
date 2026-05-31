// "use client";

// import dynamic from "next/dynamic";

// const NigeriaBoundaryMap = dynamic(
//   () => import("@/components/maps/NigeriaBoundaryMap"),
//   { ssr: false }
// );

// export default function HomePage() {
//   return <NigeriaBoundaryMap />;
// }

"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex h-screen items-center justify-center">
      <button
        onClick={() =>
          router.push("/nigeria")
        }
        className="rounded bg-green-600 px-6 py-3 text-white"
      >
        Open Nigeria GIS Portal
      </button>
    </main>
  );
}