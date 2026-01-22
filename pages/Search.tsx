import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search as SearchIcon, MapPin, ArrowRight, TrendingUp } from 'lucide-react';
import { MediaCard } from '../components/ui/MediaCard';
import { PLACES_DATA } from '../data/mockData';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const Search: React.FC = () => {
    // Get some mock data for recommendations (flattening the PLACES_DATA object)
    const recommendedPlaces = [
        ...PLACES_DATA.hotels,
        ...PLACES_DATA.restaurants
    ].slice(0, 3);

    return (
        <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
            <Header isLoggedIn={false} toggleLogin={() => { }} />
            <main className="flex-1 pt-32 px-6 max-w-[1400px] mx-auto w-full pb-20">



                <RevealOnScroll className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00053d]">What are you looking for?</h1>
                    <p className="text-lg text-gray-500 mb-8">Discover top-rated places, local favorites, and hidden gems.</p>

                    {/* Search Input */}
                    <div className="bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col md:flex-row gap-2 items-center">
                        <div className="flex-1 flex items-center gap-3 w-full px-5 h-14 bg-gray-50/50 rounded-xl border border-transparent focus-within:bg-white focus-within:border-blue-100 focus-within:shadow-sm transition-all">
                            <SearchIcon className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for restaurants, hotels, etc..."
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                            />
                        </div>
                        <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                        <div className="flex-1 flex items-center gap-3 w-full px-5 h-14 bg-gray-50/50 rounded-xl border border-transparent focus-within:bg-white focus-within:border-blue-100 focus-within:shadow-sm transition-all">
                            <MapPin className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                            />
                        </div>
                        <button className="bg-[#0b5cff] text-white h-14 px-8 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full md:w-auto shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                            Search
                        </button>
                    </div>
                </RevealOnScroll>

                {/* Recent Searches / Trends */}
                <RevealOnScroll className="max-w-4xl mx-auto mb-20 text-center" delay={100}>
                    <div className="flex items-center justify-center gap-2 mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        <TrendingUp size={14} /> Trending Searches
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Coffee Shop', 'Sushi Spot', 'Luxury Hotel', 'Art Museum', 'Hiking Trails', 'Coworking'].map((tag) => (
                            <button key={tag} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-600 font-medium hover:border-[#0b5cff] hover:text-[#0b5cff] hover:shadow-md transition-all text-sm">
                                {tag}
                            </button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Recommended Section */}
                <RevealOnScroll delay={200}>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-[#00053d]">Recommended for you</h2>
                        <button className="text-[#0b5cff] font-semibold hover:text-blue-700 flex items-center gap-1">
                            View all <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendedPlaces.map(place => (
                            <MediaCard
                                key={place.id}
                                place={place}
                                variant="glass"
                                className="h-full hover:shadow-xl transition-shadow"
                            />
                        ))}
                    </div>
                </RevealOnScroll>

            </main>
            <Footer />
        </div>
    );
};
