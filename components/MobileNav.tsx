import React from 'react';
import { Home, Compass, Search, User, Heart } from 'lucide-react';

interface MobileNavProps {
  isLoggedIn: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isLoggedIn }) => {
  const isDark = !isLoggedIn; // Assuming guest mode is dark theme based on App.tsx

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[340px] pointer-events-none">
        <div className={`
            pointer-events-auto
            flex justify-between items-center 
            px-6 py-4 
            rounded-full 
            shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
            backdrop-blur-xl border
            transition-all duration-300
            ${isDark 
                ? 'bg-[#1a1f2e]/80 border-white/10 text-gray-400' 
                : 'bg-white/80 border-white/50 text-gray-500 shadow-blue-900/10'
            }
        `}>
            <button className={`flex flex-col items-center gap-1 transition-all hover:scale-110 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>
                <Home size={22} fill="currentColor" />
            </button>
            
            <button className={`flex flex-col items-center gap-1 transition-all hover:scale-110 hover:text-blue-500 ${isDark ? 'hover:text-white' : ''}`}>
                <Compass size={22} />
            </button>
            
            <div className="relative -top-6">
                <button className="w-14 h-14 rounded-full bg-[#0b5cff] text-white flex items-center justify-center shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform">
                    <Search size={24} strokeWidth={2.5} />
                </button>
            </div>

            <button className={`flex flex-col items-center gap-1 transition-all hover:scale-110 hover:text-blue-500 ${isDark ? 'hover:text-white' : ''}`}>
                <Heart size={22} />
            </button>
            
            <button className={`flex flex-col items-center gap-1 transition-all hover:scale-110 hover:text-blue-500 ${isDark ? 'hover:text-white' : ''}`}>
                <User size={22} />
            </button>
        </div>
    </div>
  );
};