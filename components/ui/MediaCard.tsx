import React from 'react';
import { Star, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Place } from '../../types';

interface MediaCardProps {
  place: Place;
  variant?: 'light' | 'dark';
  layout?: 'vertical' | 'horizontal' | 'featured';
  className?: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  place,
  variant = 'light',
  layout = 'vertical',
  className = ''
}) => {
  const isDark = variant === 'dark';

  // --- FEATURED LAYOUT (Full background image) ---
  if (layout === 'featured') {
    return (
      <div className={`group relative rounded-[32px] overflow-hidden cursor-pointer h-full min-h-[400px] ${className}`}>
        <div className="absolute inset-0">
          <img
            src={place.image}
            alt={place.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00053d] via-[#00053d]/40 to-transparent opacity-90"></div>
        </div>

        {/* Glass Tag */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 text-[13px] font-semibold tracking-wide rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105">
            {place.category}
          </span>
        </div>

        <div className="absolute top-6 right-6 z-20">
          {place.isOpen ? (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/20 text-green-400 text-xs font-bold shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div> Open
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-400 text-xs font-bold shadow-lg">
              <Clock size={12} /> Closed
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-blue-200/80">
            <MapPin size={16} className="text-[#0b5cff]" />
            <span>{place.location}</span>
          </div>
          <h3 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-[1.1] group-hover:text-blue-100 transition-colors">
            {place.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5 items-center gap-2">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="text-white font-bold">{place.rating}</span>
              </div>
              <span className="text-white/60 text-sm font-medium">{place.reviews} reviews</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-[#0b5cff] group-hover:border-[#0b5cff] transition-all shadow-lg text-white">
              <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- HORIZONTAL LAYOUT (Compact row) ---
  if (layout === 'horizontal') {
    return (
      <div className={`group relative rounded-[20px] overflow-hidden flex cursor-pointer backdrop-blur-xl border transition-all duration-300 min-h-[110px] ${isDark
          ? 'bg-[#1e2336]/40 border-white/5 hover:bg-[#1e2336]/60 hover:border-white/10'
          : 'bg-white/60 border-white/50 hover:shadow-xl hover:bg-white/80'
        } ${className}`}>
        <div className="w-[120px] relative overflow-hidden flex-shrink-0">
          <img src={place.image} alt={place.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-1">
            <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase mb-1 block">
              {place.category}
            </span>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-yellow-400 fill-current" />
              <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{place.rating}</span>
            </div>
          </div>
          <h3 className={`font-heading font-bold text-[17px] mb-1.5 line-clamp-1 ${isDark ? 'text-white group-hover:text-blue-100' : 'text-gray-900'}`}>
            {place.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mt-auto">
            <MapPin size={12} className="text-[#0b5cff]" />
            <span className="truncate">{place.location}</span>
          </div>
        </div>
        <div className="pr-5 flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#0b5cff] group-hover:text-white'
            }`}>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    )
  }

  // --- VERTICAL / STANDARD LAYOUT ---
  return (
    <div className={`group rounded-[28px] overflow-hidden flex flex-col h-full relative backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${isDark
        ? 'bg-[#1e2336]/40 border border-white/5 hover:bg-[#1e2336]/60 hover:border-white/10 hover:shadow-2xl hover:shadow-black/20'
        : 'bg-white/60 border border-white/40 hover:shadow-xl hover:bg-white/80'
      } ${className}`}>

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-[11px] font-bold tracking-wide rounded-full shadow-lg backdrop-blur-md border ${isDark ? 'bg-black/40 text-white border-white/10' : 'bg-white/80 text-[#00053d] border-white/50'
            }`}>
            {place.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 flex flex-col flex-1 ${isDark ? 'border-t-0' : ''}`}>
        <div className={`flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-blue-400' : 'text-[#0b5cff]'}`}>
          <MapPin size={12} />
          <span className="truncate">{place.location}</span>
        </div>

        <h3 className={`font-heading font-bold text-xl mb-3 leading-tight transition-colors ${isDark ? 'text-white group-hover:text-blue-100' : 'text-[#00031f] group-hover:text-[#0b5cff]'
          }`}>
          {place.title}
        </h3>

        <div className="flex items-center gap-2 mt-auto">
          <div className="flex text-yellow-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(place.rating) ? "currentColor" : "none"} className={i < Math.floor(place.rating) ? "" : "text-gray-600"} />
            ))}
          </div>
          <span className={`text-sm font-bold ml-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {place.rating}
          </span>
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            ({place.reviews})
          </span>
        </div>
      </div>
    </div>
  );
};