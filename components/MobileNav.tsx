import React from 'react';
import { Home, Compass, Search, User, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MobileNavProps {
    isLoggedIn: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isLoggedIn }) => {
    const location = useLocation();
    const isDark = !isLoggedIn; // Guest mode is dark theme

    const isActive = (path: string) => location.pathname === path;

    const getIconClass = (path: string) => {
        const active = isActive(path);
        if (active) return 'text-blue-500 scale-110';
        if (isDark) return 'text-gray-400 hover:text-white';
        return 'text-gray-400 hover:text-blue-600';
    };

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
                    ? 'bg-[#1a1f2e]/90 border-white/10'
                    : 'bg-white/90 border-white/50 shadow-blue-900/10'
                }
        `}>
                <Link to="/" className={`flex flex-col items-center gap-1 transition-all ${getIconClass('/')}`}>
                    <Home size={22} />
                </Link>

                <Link to="/categories" className={`flex flex-col items-center gap-1 transition-all ${getIconClass('/categories')}`}>
                    <Compass size={22} />
                </Link>

                <div className="relative -top-6">
                    <Link to="/search" className="w-14 h-14 rounded-full bg-[#0b5cff] text-white flex items-center justify-center shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform">
                        <Search size={24} strokeWidth={2.5} />
                    </Link>
                </div>

                <Link to="/saved" className={`flex flex-col items-center gap-1 transition-all ${getIconClass('/saved')}`}>
                    <Heart size={22} />
                </Link>

                <Link to="/profile" className={`flex flex-col items-center gap-1 transition-all ${getIconClass('/profile')}`}>
                    <User size={22} />
                </Link>
            </div>
        </div>
    );
};