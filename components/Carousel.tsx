import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Video, FileText, Monitor, Bot, Film, Phone, MessageSquare, Headphones, Sparkles, User } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FeatureCardData } from '../types';

const CARDS: FeatureCardData[] = [
  {
    id: '1',
    category: 'Clips',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', // Woman smiling
    overlayType: 'clips',
    hasNotification: true
  },
  {
    id: '2',
    category: 'Contact Center',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop', // Man with headset
    overlayType: 'contact_center'
  },
  {
    id: '3',
    category: 'Meetings',
    icon: Video,
    bgGradient: 'bg-gradient-to-b from-[#0b5cff] to-[#00053d]',
    overlayType: 'meetings'
  },
  {
    id: '4',
    category: 'AI Companion',
    icon: Sparkles,
    bgGradient: 'bg-gradient-to-b from-[#00031f] to-[#000000]',
    overlayType: 'ai_companion'
  },
  {
    id: '5',
    category: 'Team Chat',
    icon: MessageSquare,
    bgGradient: 'bg-gradient-to-b from-[#0b5cff] to-[#052c85]',
    overlayType: 'team_chat'
  },
  {
    id: '6',
    category: 'Phone',
    icon: Phone,
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=600&auto=format&fit=crop',
    overlayType: 'phone'
  }
];

export const Carousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const index = Math.round(scrollLeft / 376);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 376;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="w-full 2xl:max-w-[1600px] mx-auto z-20 px-0">

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar py-12 px-0 snap-x"
        onScroll={checkScroll}
      >
        {CARDS.map((card) => (
          <div key={card.id} className="snap-center md:snap-start">
            <FeatureCard data={card} />
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="min-w-[1px] h-1"></div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center px-8 mt-0 max-w-[1300px] mx-auto hidden md:flex">
        <div>
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border border-white/20 ${canScrollLeft
              ? 'bg-white/10 text-white hover:bg-white/20 cursor-pointer'
              : 'bg-transparent text-white/30 cursor-not-allowed border-white/10'
              }`}
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex gap-3">
          {CARDS.map((_, idx) => (
            <div
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                ? 'bg-white w-8'
                : 'bg-white/30 w-2.5 hover:bg-white/50'
                }`}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: idx * 376, behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>

        <div>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border border-white/20 ${canScrollRight
              ? 'bg-white/10 text-white hover:bg-white/20 cursor-pointer'
              : 'bg-transparent text-white/30 cursor-not-allowed border-white/10'
              }`}
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </div>
  );
};