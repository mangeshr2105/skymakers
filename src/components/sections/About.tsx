import FounderCard from './FounderCard';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Founder Card - Left Side */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <FounderCard />
          </div>

          {/* Text Content - Right Side */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              About the Founder
            </h2>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--color-primary)" }}>
              Mr. Manoj Prithiani, Founder and Partner of Skymakers, has been operating in the real estate sector for over 3 decades. He passionately started working in the real estate sector in 1994 and began servicing his clients&apos; needs with a completely fresh skill of understanding the real estate market, trends, and both developers&apos; and consumers&apos; mindsets and requirements.
            </p>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--color-primary)" }}>
              He is a dynamic leader with a keen sense of his customers&apos; needs and requirements. Known for his dedication towards clients, he has maintained strong relations through the ups and downs of the market.
            </p>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--color-primary)" }}>
              His comprehensive understanding of locations, properties, and the consumer&apos;s point of view makes him unique when it comes to providing the best, hand-picked options for his clients. His knowledge about property is not just limited to four walls. He believes in integrity and long-term association with all his clients and developers.
            </p>
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
              <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--color-primary)" }}>
                He cultivates a strong and powerful foundation built on relationships and trust, in order to achieve excellence in the industry. Manoj is regularly in touch with master developers and is keenly aware of developments that are taking place in various areas of Dubai, hence placing him in an excellent position to advise his clients appropriately.
              </p>
              <p className="mb-4 text-lg leading-relaxed" style={{ color: "var(--color-primary)" }}>
                He is also in touch with private developers and stays aware of various new developments. Having completed his M.Com and being a professor in Economics, he brings a deeper perspective that enables him to understand the actual situation of the market with clarity and precision.
              </p>
            </div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-forest hover:text-gold transition-colors mt-2"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUpIcon className="ml-1 h-5 w-5" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </>
              )}
            </button>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-forest hover:bg-gold hover:text-dark transition-colors"
              >
                Learn More
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
