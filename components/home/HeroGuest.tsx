import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Carousel } from '../Carousel';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const HeroGuest: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="relative bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b1a60] via-[#00053d] to-black z-0"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-0"></div>

      <section className="relative z-10 pt-20 pb-4 md:pt-24 md:pb-12 text-white overflow-hidden">
        {/* Top Promotional Banner */}
        {showBanner && (
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <div className="bg-[#1e2336]/60 backdrop-blur-md rounded-2xl md:rounded-full text-xs md:text-sm py-3 px-4 md:py-2 flex justify-between items-start md:items-center w-full md:w-fit md:mx-auto border border-white/10 relative">
              <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-start md:items-center text-left md:text-center pr-8 md:pr-0">
                <span className="font-medium opacity-90 leading-snug">The Zappy Solopreneur 50 is now accepting nominations</span>
                <a href="#" className="font-bold hover:text-blue-300 whitespace-nowrap flex items-center mt-1 md:mt-0">
                  Learn more <ChevronRight size={12} className="ml-1" />
                </a>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors flex-shrink-0 absolute right-3 top-3 md:static md:ml-4"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        )}



        {/* Main Hero Content */}
        <RevealOnScroll className="px-4 text-center max-w-[1200px] mx-auto mb-16 md:mb-24">
          <h1
            className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.05] mb-8 tracking-[-0.02em]"
            style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.4)' }}
          >
            Find out what's possible<br /> when work connects
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Whether you're chatting with teammates or supporting customers, Zappy makes it easier to
            connect, collaborate, and reach goals — all with built-in AI doing the heavy lifting.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="px-8 py-3 bg-[#0b5cff] hover:bg-[#004ad7] text-white rounded-full font-bold transition-all text-[15px] w-full sm:w-auto min-w-[160px]">
              Explore products
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 rounded-full font-bold transition-all text-[15px] w-full sm:w-auto min-w-[160px]">
              Find your plan
            </button>
          </div>
        </RevealOnScroll>

        {/* Carousel Section */}
        <div className="w-full pb-20">
          <Carousel />
        </div>
      </section>
    </div>
  );
};