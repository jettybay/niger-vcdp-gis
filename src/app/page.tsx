"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/ui/Navbar";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <button
          onClick={() =>
            router.push("/nigeria")
          }
          className="rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 active:scale-95"
        >
          Open Nigeria GIS Portal
        </button>
      </main>
    </div>
  );
}