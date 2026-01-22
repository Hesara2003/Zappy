import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, toggleLogin }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isGuest = !isLoggedIn;

  // Dynamic styles based on state
  const containerStyles = isGuest
    ? 'bg-[#1a1f2e]/70 border-white/10 text-white'
    : 'bg-white/70 border-white/40 text-[#00053d]';

  const logoColor = isGuest ? "white" : "#0b5cff";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-6 px-4 pointer-events-none">
      <div className={`
        pointer-events-auto 
        w-auto
        rounded-full 
        flex items-center justify-between gap-8
        pl-6 pr-2 py-2
        transition-all duration-500 ease-out
        backdrop-blur-xl border shadow-2xl
        ${containerStyles}
        ${scrolled ? 'shadow-lg scale-[0.98]' : 'shadow-md'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group pl-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
            <span className="text-2xl font-bold tracking-tight" style={{ color: logoColor }}>zappy</span>
          </Link>

          {!isLoggedIn && (
            <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium" aria-label="Main navigation">
              <Link to="/categories" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Categories</Link>
              <Link to="/saved" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Saved</Link>
              <Link to="/search" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Search</Link>
            </nav>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={toggleLogin}
              className={`text-[13px] font-bold px-5 py-2.5 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isGuest
                ? 'text-white border-white/20 hover:bg-white/10 hover:border-white/40'
                : 'text-[#0b5cff] border-[#0b5cff]/30 hover:bg-blue-50'
                }`}
            >
              {isLoggedIn ? 'Sign Out' : 'Sign In'}
            </button>
            {!isLoggedIn && (
              <button className="bg-[#0b5cff] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#004ad7] transition-all text-[13px] shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500">
                Sign Up Free
              </button>
            )}
            {isLoggedIn && (
              <Link to="/profile" aria-label="Your profile" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] cursor-pointer hover:scale-105 transition-transform">
                  <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full rounded-full border-2 border-white" alt="Profile" />
                </div>
              </Link>
            )}
          </div>


        </div>
      </div>
    </header>
  );
};