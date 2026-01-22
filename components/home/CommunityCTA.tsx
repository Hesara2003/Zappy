import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CommunityCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="relative rounded-[40px] overflow-hidden bg-[#13161c] border border-white/10 px-6 py-24 md:py-32 text-center">
            {/* Inner Top Highlight */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading tracking-tight leading-[1.1]">
              Start your journey
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Join thousands of locals sharing their favorite spots. Create lists, write reviews, and discover hidden gems in your city today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-20">
              <button className="group relative px-8 py-4 bg-[#0b5cff] text-white rounded-full font-bold text-lg hover:bg-[#004ad7] transition-all overflow-hidden shadow-lg shadow-blue-900/20">
                <span className="relative z-10 flex items-center gap-2">
                    Create free account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all">
                Explore as Guest
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};