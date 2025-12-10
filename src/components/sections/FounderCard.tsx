import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Folder } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FounderCard() {
  return (
    <Reveal variant="zoom-in">
      <div className="w-full max-w-[300px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl bg-white/10 relative backdrop-blur-md border border-white/20 hover:shadow-2xl hover:shadow-forest/60 transition-all duration-500 transform hover:-translate-y-2">
      {/* Main Content Container */}
      <div className="relative">
        {/* Image Container */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/images/firstpage/founder.jpg"
            alt="Founder portrait"
            width={300}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Content Area */}
        <div className="px-4">
          {/* Glassmorphism Overlay */}
          <div className="relative p-4 -mt-8 bg-gradient-to-t from-white/60 via-white/40 to-transparent backdrop-blur-lg rounded-t-xl">
            {/* Name & Title */}
            <Reveal as="h3" variant="fade-up" className="text-xl font-serif font-bold text-white drop-shadow-sm">Manoj Prithiani</Reveal>
            <Reveal as="p" variant="fade-up" delay={80} className="text-sm text-gold font-semibold tracking-wide mt-1">Founder & CEO</Reveal>
            <Reveal as="p" variant="fade-up" delay={160} className="text-sm text-gray-800 mt-1.5 leading-snug">
              Visionary leader with expertise in Dubai real estate portfolio
              management.
            </Reveal>

            {/* Stats */}
            <Reveal variant="fade-up" delay={240}>
              <div className="flex items-center justify-between mt-3 text-gray-900 text-sm">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-forest" />
                  <span>2k+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Folder size={16} className="text-forest" />
                  <span>342</span>
                </div>
              </div>
            </Reveal>

            {/* Action Button */}
            <Reveal variant="fade-up" delay={320}>
              <Link href="/contact" className="block w-full">
                <button className="w-full mt-3 py-2 rounded-xl bg-gradient-to-r from-forest to-gold text-white font-semibold shadow-md hover:from-gold hover:to-forest hover:text-dark transition-all duration-300">
                  Connect
                </button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
      </div>
    </Reveal>
  );
}