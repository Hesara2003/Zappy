import React from 'react';

import { Footer } from '../components/Footer';
import { Heart, Sparkles } from 'lucide-react';
import { PLACES_DATA } from '../data/mockData';
import { MediaCard } from '../components/ui/MediaCard';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const Saved: React.FC = () => {
    // Mock suggestions
    const suggestions = [PLACES_DATA.cafes[0], PLACES_DATA.attractions[0]];

    return (
        <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
            {/* Header removed */}



            <main className="flex-1 pt-32 px-6 max-w-[1400px] mx-auto w-full pb-20">
                <RevealOnScroll className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shadow-sm border border-red-100">
                        <Heart className="text-red-500 fill-red-500" size={28} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-[#00053d]">Saved Places</h1>
                        <p className="text-gray-500 font-medium">Your personal collection of favorites</p>
                    </div>
                </RevealOnScroll>

                {/* Empty State / List */}
                <RevealOnScroll className="bg-white rounded-[32px] p-16 text-center border border-gray-100 shadow-sm mb-16 relative overflow-hidden" delay={100}>
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-pink-500"></div>

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                            <Heart size={40} className="text-gray-300" />
                            <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                <span className="text-lg">0</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">No saved places yet</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                            Start exploring and save your favorite spots to create your personal collection.
                        </p>
                        <button className="px-10 py-4 bg-[#0b5cff] text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/30">
                            Explore Categories
                        </button>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                </RevealOnScroll>

                {/* Suggestions */}
                <RevealOnScroll delay={200}>
                    <div className="flex items-center gap-2 mb-8">
                        <Sparkles className="text-amber-500" size={20} />
                        <h2 className="text-2xl font-bold text-[#00053d]">Suggested for you</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {suggestions.map(place => (
                            place && (
                                <MediaCard
                                    key={place.id}
                                    place={place}
                                    variant="glass"
                                    className="h-full"
                                />
                            )
                        ))}
                    </div>
                </RevealOnScroll>

            </main>
            <Footer />
        </div>
    );
};
