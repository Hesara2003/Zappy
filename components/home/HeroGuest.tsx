import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Carousel } from '../Carousel';

export const HeroGuest: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="relative bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00053d] via-[#00053d] to-black z-0"></div>
      
      <section className="relative z-10 pt-20 pb-4 md:pt-24 md:pb-12 text-white overflow-visible">
        {/* Top Promotional Banner */}
        {showBanner && (
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <div className="bg-[#1e2336]/60 backdrop-blur-md rounded-full text-xs md:text-sm py-2 px-4 flex justify-between items-center w-full md:w-fit md:mx-auto border border-white/10">
              <div className="flex gap-3 items-center text-center">
                <span className="font-medium opacity-90 truncate">The Zoom Solopreneur 50 is now accepting nominations</span>
                <a href="#" className="font-bold hover:text-blue-300 whitespace-nowrap flex items-center">
                  Learn more <ChevronRight size={12} className="ml-1" />
                </a>
              </div>
              <button 
                onClick={() => setShowBanner(false)}
                className="ml-4 hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          </div>
        )}

        {/* Main Hero Content */}
        <div className="px-4 text-center max-w-[1200px] mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 tracking-[-0.02em]">
            Find out what's possible<br /> when work connects
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Whether you're chatting with teammates or supporting customers, Zoom makes it easier to 
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
        </div>

        {/* Carousel Section */}
        <div className="w-full pb-20">
           <Carousel />
        </div>
      </section>
    </div>
  );
};