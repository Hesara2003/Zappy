import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search as SearchIcon, MapPin, ArrowRight } from 'lucide-react';

export const Search: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
            <Header isLoggedIn={false} toggleLogin={() => { }} />
            <main className="flex-1 pt-32 px-6 max-w-[1400px] mx-auto w-full">
                <h1 className="text-4xl font-bold mb-8 text-[#00053d]">Search Zappy</h1>

                {/* Search Input */}
                <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2 items-center mb-12">
                    <div className="flex-1 flex items-center gap-3 w-full px-4 h-14 bg-gray-50 rounded-xl">
                        <SearchIcon className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                        />
                    </div>
                    <div className="flex-1 flex items-center gap-3 w-full px-4 h-14 bg-gray-50 rounded-xl">
                        <MapPin className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                        />
                    </div>
                    <button className="bg-[#0b5cff] text-white h-14 px-8 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full md:w-auto shadow-lg shadow-blue-500/30">
                        Search
                    </button>
                </div>

                {/* Recent Searches / Trends */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Trending Searches</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Coffee Shop', 'Sushi', 'Gym', 'Museum', 'Parks', 'Coworking'].map((tag) => (
                            <button key={tag} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 font-medium hover:border-[#0b5cff] hover:text-[#0b5cff] transition-all">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
