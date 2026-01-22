import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Heart } from 'lucide-react';

export const Saved: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
            <Header isLoggedIn={false} toggleLogin={() => { }} />
            <main className="flex-1 pt-32 px-6 max-w-[1400px] mx-auto w-full">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                        <Heart className="text-red-500 fill-red-500" size={24} />
                    </div>
                    <h1 className="text-4xl font-bold text-[#00053d]">Saved Places</h1>
                </div>

                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart size={32} className="text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No saved places yet</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-8">
                        Start exploring and save your favorite spots to create your personal collection.
                    </p>
                    <button className="px-8 py-3 bg-[#0b5cff] text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                        Explore Categories
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};
