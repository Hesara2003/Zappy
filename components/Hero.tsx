import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <section className="relative bg-gradient-to-b from-[#203585] to-[#3C61C8] text-white">
      {/* Top Promotional Banner */}
      {showBanner && (
        <div className="bg-[#00053d]/30 backdrop-blur-sm text-xs md:text-sm py-2 px-4 flex justify-between items-center w-full relative z-30">
          <div className="mx-auto flex gap-2 text-center">
            <span className="font-normal opacity-90">The Zappy Solopreneur 50 is now accepting nominations</span>
            <a href="#" className="underline font-semibold hover:text-blue-200">Learn more</a>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 hover:bg-white/10 p-1 rounded transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="pt-16 pb-64 md:pt-24 md:pb-80 px-4 text-center max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] mb-8 tracking-tight">
          Find out what's possible<br /> when work connects
        </h1>

        <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          Whether you're chatting with teammates or supporting customers, Zappy makes it easier to
          connect, collaborate, and reach goals — all with built-in AI doing the heavy lifting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3.5 bg-[#00053d] text-white rounded-full font-semibold hover:bg-[#1a1f52] transition-colors text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            Explore products
          </button>
          <button className="px-8 py-3.5 bg-white text-[#0b5cff] rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            Find your plan
          </button>
        </div>
      </div>
    </section>
  );
};