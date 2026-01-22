
import { Place, Category } from '../types';
import { Coffee, Utensils, ShoppingBag, Music, Camera, Trees, Dumbbell, Wine, BookOpen } from 'lucide-react';

export const CATEGORIES: Category[] = [
    {
        id: 'hotels',
        name: 'Hotels',
        icon: ShoppingBag, // Placeholder icon, should be Hotel/Bed
        count: '150+ stays',
        color: 'from-blue-400 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
        slug: 'hotels'
    },
    {
        id: 'restaurants',
        name: 'Restaurants',
        icon: Utensils,
        count: '120+ places',
        color: 'from-orange-400 to-pink-500',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
        slug: 'restaurants'
    },
    {
        id: 'cafes',
        name: 'Cafes',
        icon: Coffee,
        count: '85+ spots',
        color: 'from-amber-200 to-yellow-500',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
        slug: 'cafes'
    },
    {
        id: 'education',
        name: 'Education',
        icon: BookOpen,
        count: '40+ institutes',
        color: 'from-emerald-400 to-teal-600',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
        slug: 'education'
    },
    {
        id: 'attractions',
        name: 'Attractions',
        icon: Camera,
        count: '60+ sights',
        color: 'from-purple-500 to-indigo-500',
        image: 'https://images.unsplash.com/photo-1569388330-9fa5a9eb156c?q=80&w=800&auto=format&fit=crop',
        slug: 'attractions'
    },
];

export interface PlaceData extends Place {
    priceRange?: string;
    description?: string;
    amenities?: string[];
    cuisine?: string;
    specialty?: string;
    courses?: string[];
    type?: string;
}

export const PLACES_DATA: Record<string, PlaceData[]> = {
    hotels: [
        {
            id: 'h1',
            title: 'Grand Sultan Tea Resort',
            category: 'Stays',
            rating: 4.9,
            reviews: 1240,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
            location: 'Srimongal, Moulvibazar',
            isOpen: true,
            priceRange: '$150 - $400',
            description: 'Luxury resort located in the heart of tea gardens.',
            amenities: ['Pool', 'Spa', 'Gym', 'Free Wi-Fi']
        },
        {
            id: 'h2',
            title: 'Ocean Paradise Hotel',
            category: 'Stays',
            rating: 4.7,
            reviews: 850,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
            location: 'Cox\'s Bazar',
            isOpen: true,
            priceRange: '$100 - $300',
            description: 'Beachfront hotel with stunning ocean views.',
            amenities: ['Beach Access', 'Pool', 'Restaurant']
        }
    ],
    restaurants: [
        {
            id: 'r1',
            title: 'The Spice Lounge',
            category: 'Dining',
            rating: 4.5,
            reviews: 320,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
            location: 'Downtown',
            isOpen: true,
            cuisine: 'Indian Fusion',
            priceRange: '$$',
            description: 'A modern take on traditional Indian cuisine.'
        },
        {
            id: 'r2',
            title: 'Sushify',
            category: 'Dining',
            rating: 4.8,
            reviews: 500,
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop',
            location: 'Uptown',
            isOpen: true,
            cuisine: 'Japanese',
            priceRange: '$$$',
            description: 'Authentic sushi and sashimi experience.'
        }
    ],
    cafes: [
        {
            id: 'c1',
            title: 'Brew & Bean',
            category: 'Cafe',
            rating: 4.6,
            reviews: 210,
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
            location: 'Campus Area',
            isOpen: true,
            specialty: 'Artisan Coffee',
            priceRange: '$',
            description: 'Cozy spot for coffee lovers and students.'
        }
    ],
    education: [
        {
            id: 'e1',
            title: 'City University',
            category: 'Institute',
            rating: 4.4,
            reviews: 1500,
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop',
            location: 'City Center',
            isOpen: true,
            courses: ['Computer Science', 'Business', 'Arts'],
            description: 'Leading university with a legacy of excellence.'
        }
    ],
    attractions: [
        {
            id: 'a1',
            title: 'Sunset Peak',
            category: 'Attraction',
            rating: 4.9,
            reviews: 800,
            image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
            location: 'Highlands',
            isOpen: true,
            type: 'Natural',
            description: 'Best place to watch the sunset over the valley.'
        }
    ]
};
