import React from 'react';
import { HeroLoggedIn } from './HeroLoggedIn';
import { SectionHeading } from '../ui/SectionHeading';
import { MediaCard } from '../ui/MediaCard';
import { Place } from '../../types';

const RECENT: Place[] = [
  {
    id: '1',
    title: 'Neon Garden Cafe',
    category: 'Coffee & Tea',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
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
  }
];

const SUGGESTED: Place[] = [
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
  },
  {
    id: '5',
    title: 'Vinyl & Wine',
    category: 'Nightlife',
    rating: 4.7,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop',
    location: 'Ballard',
    isOpen: true
  }
];

export const LoggedInView: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <HeroLoggedIn />
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <section>
          <SectionHeading title="Recently Viewed" />
          <div className="grid md:grid-cols-2 gap-6">
            {RECENT.map(place => <MediaCard key={place.id} place={place} />)}
          </div>
        </section>

        <section>
          <SectionHeading title="Hotspots Near You" subtitle="Trending in Seattle this weekend" />
          <div className="grid md:grid-cols-3 gap-6">
            {SUGGESTED.map(place => <MediaCard key={place.id} place={place} />)}
          </div>
        </section>
      </div>
    </div>
  );
};
