import React from 'react';
import { Place } from '../../types';
import { MediaCard } from '../ui/MediaCard';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronRight, Flame } from 'lucide-react';

const FEATURED: Place[] = [
  {
    id: '1',
    title: 'Neon Garden Cafe',
    category: 'Coffee & Tea',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop', // Higher res for spotlight
    location: 'Capitol Hill',
    isOpen: true
  },
  {
    id: '2',
    title: 'The Underground Library',
    category: 'Arts & Culture',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1507842217121-9e9f14781f27?q=80&w=800&auto=format&fit=crop',
    location: 'Downtown',
    isOpen: true
  },
  {
    id: '3',
    title: 'Blue Water Tacos',
    category: 'Food & Dining',
    rating: 4.6,
    reviews: 450,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop',
    location: 'Fremont',
    isOpen: false
  },
  {
    id: '4',
    title: 'Sunset Peak Trail',
    category: 'Outdoors',
    rating: 4.9,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1519681393784-d8e5b5a4574c?q=80&w=800&auto=format&fit=crop',
    location: 'Discovery Park',
    isOpen: true
  }
];

export const FeaturedPlacesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-0 md:px-6 bg-black relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#0b5cff]/10 rounded-full blur-[140px] pointer-events-none translate-x-1/3 -translate-y-1/4 mix-blend-screen"></div>
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 px-6 md:px-0 gap-6">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold mb-5 text-[11px] tracking-widest uppercase">
              <Flame size={12} className="fill-orange-400 animate-pulse" />
              <span>Hot this week</span>
            </div>
            <SectionHeading
              title="Trending Near You"
              subtitle="Discover the most popular spots selected by our community editors."
              light={true}
            />
          </div>

          <button className="hidden md:flex items-center gap-2 text-white/70 font-semibold hover:text-white transition-colors mb-4 group bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/10">
            View all locations <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Desktop Layout: Grid */}
        <div className="hidden md:grid lg:grid-cols-12 gap-6 h-[600px]">
          {/* Main Feature (Left) */}
          <div className="lg:col-span-8 h-full">
            <MediaCard
              place={FEATURED[0]}
              variant="dark"
              layout="featured"
              className="h-full shadow-2xl shadow-blue-900/10"
            />
          </div>

          {/* Side List (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-4 h-full">
            {FEATURED.slice(1, 4).map((place) => (
              <div key={place.id} className="flex-1 min-h-0">
                <MediaCard
                  place={place}
                  variant="dark"
                  layout="horizontal"
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Horizontal Scroll */}
        <div className="flex md:hidden overflow-x-auto no-scrollbar gap-4 px-6 pb-8 snap-x">
          {/* Main Feature First */}
          <div className="min-w-[85vw] h-[480px] snap-center">
            <MediaCard
              place={FEATURED[0]}
              variant="dark"
              layout="featured"
              className="h-full"
            />
          </div>
          {/* Other Items */}
          {FEATURED.slice(1, 4).map((place) => (
            <div key={place.id} className="min-w-[70vw] h-[480px] snap-center">
              <MediaCard
                place={place}
                variant="dark"
                layout="vertical"
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden px-6 mt-4">
          <button className="w-full flex items-center justify-center gap-2 text-white font-bold bg-white/5 px-6 py-4 rounded-2xl border border-white/5 active:scale-95 transition-transform">
            View all locations <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};