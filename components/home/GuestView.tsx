import React from 'react';
import { HeroGuest } from './HeroGuest';
import { CategoriesGrid } from './CategoriesGrid';
import { FeaturedPlacesSection } from './FeaturedPlacesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CommunityCTA } from './CommunityCTA';

export const GuestView: React.FC = () => {
  return (
    <div className="bg-black">
      <HeroGuest />
      <CategoriesGrid />
      <FeaturedPlacesSection />
      <TestimonialsSection />
      <CommunityCTA />
    </div>
  );
};
