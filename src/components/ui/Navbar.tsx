"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex min-h-[5rem] items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo and Brand Section */}
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 group">
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-transform group-hover:scale-105">
              <Image
                src="/images/coatofarm.png"
                alt="Coat of Arms"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col border-l border-gray-200 pl-4">
              <span className="text-sm font-extrabold tracking-tight text-gray-900 sm:text-base leading-none">
                NIGER VCDP
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-green-600 mt-1">
                GIS Portal
              </span>
            </div>
            {/* Niger State Logo */}
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-transform group-hover:scale-105">
              <Image
                src="/images/NigerState.png"
                alt="Niger State"
                fill
                className="object-contain"
                priority
              />
            </div>

          {/* ifadv */}
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-transform group-hover:scale-105">
              <Image
                src="/images/ifadv.png"
                alt="ifadv"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* ifad */}
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-transform group-hover:scale-105">
              <Image
                src="/images/ifad.png"
                alt="ifad"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        
      </div>
    </header>
  );
}