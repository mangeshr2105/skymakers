"use client";

import Image from "next/image";
import Marquee from "../ui/Marquee";
import Reveal from "@/components/ui/Reveal";

export default function AwardsSection() {
  // Award images and labels
  const developers1 = [
    { src: "/images/firstpage/developers/danube-properties.svg", alt: "danube-properties",  },
    { src: "/images/firstpage/developers/sobha-realty.svg", alt: "sobha-realty", },
    { src: "/images/firstpage/developers/ellington-properties.svg", alt: "ellington-properties", },
    { src: "/images/firstpage/developers/emaar.svg", alt: "emaar", className: "invert" },
    { src: "/images/firstpage/developers/Binghatti.svg", alt: "Binghatti",  },
  ];
  const Developers2 = [
    { src: "/images/firstpage/developers/london-gate.png", alt: "london-gate", },
    { src: "/images/firstpage/developers/damac.png", alt: "damac", },
    { src: "/images/firstpage/developers/nakheel.svg", alt: "nakheel", className: "invert" },
    { src: "/images/firstpage/developers/azizi.svg", alt: "azizi", className: "invert" },
    { src: "/images/firstpage/developers/prescott.svg", alt: "prescott", className: "invert" },
  ];

  // Helper to render award cards
  function renderAwardCards(items: typeof  developers1) {
    return items.map((item, idx) => (
      <div
        key={item.src + idx}
        className="bg-white p-2 rounded-lg shadow-md border flex-shrink-0 mx-2 flex flex-col items-center justify-center relative"
        style={{ width: '4cm', height: '2cm', borderColor: "var(--color-sage)" }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          className={`rounded w-full h-auto object-contain ${item.className || ''}`}
          width={60}
          height={60}
          loading="lazy"
        />
        <p className="text-xs text-center no-fade whitespace-nowrap truncate w-full absolute bottom-0.5" style={{ color: "var(--color-primary)" }}></p>
      </div>
    ));
  }

  return (
    <Reveal as="section" id="awards" className="py-12 bg-gradient-to-b from-black via-gray-900 to-white" variant="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal as="h2" className="text-4xl font-bold font-serif mb-6 text-white" variant="fade-up" delay={60}>Developers we work with</Reveal>
        {/* Awards Marquee (RTL) */}
        <Reveal
          as="div"
          className="relative mb-8 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
          }}
          variant="fade-in"
        >
          <Marquee
            direction="rtl"
            autoScrollSpeed={90}
            mobileScrollSpeed={45}
            enableManualControl={true}
          >
            <div className="relative flex items-center" style={{ height: '2.5cm' }}>
              {renderAwardCards(developers1)}
            </div>
          </Marquee>
        </Reveal>
        {/* Award Receiving Marquee (LTR) */}
        <Reveal
          as="div"
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
          }}
          variant="fade-in"
        >
          <Marquee
            direction="ltr"
            autoScrollSpeed={90}
            mobileScrollSpeed={60}
            enableManualControl={true}
          >
            <div className="relative flex items-center" style={{ height: '2.5cm' }}>
              {renderAwardCards(Developers2)}
            </div>
          </Marquee>
        </Reveal>
      </div>
    </Reveal>
  );
} 