import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GuestView } from './components/home/GuestView';
import { LoggedInView } from './components/home/LoggedInView';
import { MobileNav } from './components/MobileNav';
import { PageTransition } from './components/ui/PageTransition';
import { ScrollToTop } from './components/ui/ScrollToTop';

// Lazy load pages for better initial load performance
const CategoryListing = lazy(() => import('./pages/CategoryListing').then(m => ({ default: m.CategoryListing })));
const PlaceDetail = lazy(() => import('./pages/PlaceDetail'));
const Categories = lazy(() => import('./pages/Categories').then(m => ({ default: m.Categories })));
const Search = lazy(() => import('./pages/Search').then(m => ({ default: m.Search })));
const Saved = lazy(() => import('./pages/Saved').then(m => ({ default: m.Saved })));
const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#fafcff]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  </div>
);

interface HomePageProps {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, toggleLogin }) => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
        {/* Header removed from here */}

        <main className="flex-1">
          {isLoggedIn ? <LoggedInView /> : <GuestView />}
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />} />

        <Route path="/category/:slug" element={
          <PageTransition>
            <CategoryListing />
          </PageTransition>
        } />

        <Route path="/place/:id" element={
          <PageTransition>
            <PlaceDetail />
          </PageTransition>
        } />

        <Route path="/categories" element={
          <PageTransition>
            <Categories />
          </PageTransition>
        } />

        <Route path="/search" element={
          <PageTransition>
            <Search />
          </PageTransition>
        } />

        <Route path="/saved" element={
          <PageTransition>
            <Saved />
          </PageTransition>
        } />

        <Route path="/profile" element={
          <PageTransition>
            <Profile />
          </PageTransition>
        } />
      </Routes>
      <MobileNav isLoggedIn={isLoggedIn} />
    </BrowserRouter>
  );
};

export default App;