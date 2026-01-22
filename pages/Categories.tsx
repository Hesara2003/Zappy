import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CategoriesGrid } from '../components/home/CategoriesGrid';

export const Categories: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col relative">
            <Header isLoggedIn={false} toggleLogin={() => { }} />
            <main className="flex-1 pt-20">
                <CategoriesGrid />
            </main>
            <Footer />
        </div>
    );
};
