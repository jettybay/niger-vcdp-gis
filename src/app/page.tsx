"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/ui/Navbar";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        {/* Top Section - Red Title */}
        <div className="mb-12 max-w-5xl">
          <h1 className="text-2xl font-black uppercase tracking-tighter text-red-600 md:text-3xl lg:text-4xl">
            FGN / IFAD-ASSISTED VALUE CHAIN DEVELOPMENT PROGRAMME (VCDP-AF) NIGER STATE
          </h1>
        </div>
        
        {/* Button Section */}
        <button
          onClick={() => router.push("/nigeria")}
          className="group relative mb-16 overflow-hidden rounded-full bg-green-600 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-green-900/20 transition-all hover:bg-green-500 hover:shadow-green-500/40 active:scale-95"
        >
          <span className="relative z-10">Open Nigeria GIS Portal</span>
        </button>

        {/* Bottom Section - White Subtitles */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-xl font-bold leading-tight text-white md:text-2xl">
            Digital Mapping of Niger VCDP Intervention Sites in the Nine (9) Participating LGAs
          </h1>
          <h1 className="text-lg font-medium tracking-[0.2em] text-gray-300 md:text-1xl">
            2015 - 2025
          </h1>
        </div>
      </main>
    </div>
  );
}