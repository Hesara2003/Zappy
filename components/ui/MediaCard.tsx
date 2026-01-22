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
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        </div>

        {/* Glass Tag */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 text-xs font-bold tracking-wide rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
            {place.category}
          </span>
        </div>

        <div className="absolute top-6 right-6 z-20">
          {place.isOpen ? (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 text-xs font-bold shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div> Open Now
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-300 text-xs font-bold shadow-lg">
              <Clock size={10} /> Closed
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px]">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-blue-200">
            <MapPin size={16} className="text-[#0b5cff]" />
            <span>{place.location}</span>
          </div>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 leading-tight group-hover:text-[#4ab5ff] transition-colors">
            {place.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(place.rating) ? "currentColor" : "none"} className={i < Math.floor(place.rating) ? "" : "text-gray-600"} />
                ))}
              </div>
              <span className="text-white font-semibold">{place.rating}</span>
              <span className="text-gray-400 text-sm">({place.reviews} reviews)</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-[#0b5cff] group-hover:border-[#0b5cff] transition-all">
              <ArrowRight size={20} className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- HORIZONTAL LAYOUT (Compact row) ---
  if (layout === 'horizontal') {
    return (
      <div className={`group relative rounded-[24px] overflow-hidden flex cursor-pointer backdrop-blur-lg border transition-all duration-300 min-h-[120px] ${isDark
          ? 'bg-[#181b24]/60 border-white/10 hover:bg-[#1e232e]/80'
          : 'bg-white/60 border-white/50 hover:shadow-xl hover:bg-white/80'
        } ${className}`}>
        <div className="w-[140px] relative overflow-hidden flex-shrink-0">
          <img src={place.image} alt={place.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-[10px] font-bold rounded-md bg-black/40 backdrop-blur-md text-white border border-white/10">
              {place.category}
            </span>
          </div>
        </div>
        <div className="flex-1 p-5 flex flex-col justify-center">
          <h3 className={`font-heading font-bold text-lg mb-1.5 line-clamp-1 ${isDark ? 'text-white group-hover:text-[#4ab5ff]' : 'text-gray-900'}`}>
            {place.title}
          </h3>
          <div className="flex items-center gap-2 text-xs mb-3 text-gray-500 font-medium">
            <MapPin size={12} className="text-[#0b5cff]" /> {place.location}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <div className="flex gap-0.5">
              <Star size={14} className="text-yellow-400 fill-current" />
            </div>
            <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{place.rating}</span>
            <span className="text-xs text-gray-500">({place.reviews})</span>
          </div>
        </div>
        <div className="pr-4 flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-white/10 text-white group-hover:bg-white group-hover:text-black' : 'border-gray-200/50 text-gray-400 group-hover:bg-[#0b5cff] group-hover:text-white group-hover:border-[#0b5cff]'
            }`}>
            <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
        </div>
      </div>
    )
  }

  // --- VERTICAL / STANDARD LAYOUT ---
  return (
    <div className={`group rounded-3xl overflow-hidden flex flex-col h-full relative backdrop-blur-xl transition-all duration-300 ${isDark
        ? 'bg-[#181b24]/40 border border-white/10 hover:bg-[#1e232e]/60 hover:shadow-2xl hover:shadow-blue-900/10'
        : 'bg-white/60 border border-white/40 hover:shadow-xl hover:bg-white/80'
      } ${className}`}>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
        <img
          src={place.image}
          alt={place.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-4 py-1.5 text-xs font-bold tracking-wide rounded-full shadow-lg backdrop-blur-md border ${isDark ? 'bg-black/40 text-white border-white/20' : 'bg-white/80 text-[#00053d] border-white/50'
            }`}>
            {place.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          {place.isOpen ? (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 text-xs font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div> Open Now
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-300 text-xs font-bold">
              <Clock size={10} /> Closed
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${isDark ? 'border-t-0 rounded-b-3xl' : ''}`}>
        <div className={`flex items-center gap-1.5 mb-3 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-[#5c6685]'}`}>
          <MapPin size={14} className="text-[#0b5cff]" />
          <span className="truncate">{place.location}</span>
        </div>

        <h3 className={`font-heading font-bold text-2xl mb-3 leading-tight transition-colors ${isDark ? 'text-white group-hover:text-[#4ab5ff]' : 'text-[#00031f] group-hover:text-[#0b5cff]'
          }`}>
          {place.title}
        </h3>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex text-yellow-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(place.rating) ? "currentColor" : "none"} className={i < Math.floor(place.rating) ? "" : "text-gray-400/50"} />
            ))}
          </div>
          <span className={`text-sm font-semibold ml-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {place.rating}
          </span>
          <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            ({place.reviews} reviews)
          </span>
        </div>

        <div className={`mt-auto pt-5 flex items-center justify-between ${isDark ? 'border-t border-white/10' : 'border-t border-gray-100'
          }`}>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Local Favorite
          </span>
          <button className={`text-sm font-bold flex items-center gap-1.5 transition-all group-hover:gap-2.5 ${isDark ? 'text-white' : 'text-[#0b5cff]'
            }`}>
            Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};