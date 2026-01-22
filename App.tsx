import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GuestView } from './components/home/GuestView';
import { LoggedInView } from './components/home/LoggedInView';
import { MobileNav } from './components/MobileNav';
import { CategoryListing } from './pages/CategoryListing';
import PlaceDetail from './pages/PlaceDetail';
import { Categories } from './pages/Categories';
import { Search } from './pages/Search';
import { Saved } from './pages/Saved';
import { Profile } from './pages/Profile';
import { PageTransition } from './components/ui/PageTransition';

interface HomePageProps {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, toggleLogin }) => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
        <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

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