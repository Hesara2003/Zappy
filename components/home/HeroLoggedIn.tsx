import React from 'react';
import { Sun, MapPin, Navigation } from 'lucide-react';

export const HeroLoggedIn: React.FC = () => {
  return (
    <section className="pt-36 pb-12 px-4 relative overflow-hidden">
        {/* Background blobs for glassmorphism context */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-orange-100/50 rounded-full blur-[80px] pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-2 font-medium">
              <Sun size={20} className="text-orange-500" />
              <span>Good morning, Sarah!</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Where to next?
            </h1>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-white/60 rounded-full shadow-sm text-sm font-medium text-gray-600">
             <MapPin size={16} className="text-[#269af2]" />
             <span>Current Location: <strong>Seattle, WA</strong></span>
          </div>
        </div>

        {/* Quick Actions / Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {['Breakfast', 'Coffee', 'Parks', 'Shops', 'More'].map((item) => (
             <button key={item} className="p-4 bg-white/60 backdrop-blur-md border border-white/50 rounded-[24px] font-bold text-gray-700 hover:border-[#269af2] hover:text-[#269af2] hover:bg-white transition-all shadow-sm text-center hover:shadow-md">
                {item}
             </button>
          ))}
        </div>
      </div>
    </section>
  );
};