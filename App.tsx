import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GuestView } from './components/home/GuestView';
import { LoggedInView } from './components/home/LoggedInView';
import { MobileNav } from './components/MobileNav';
import { CategoryListing } from './pages/CategoryListing';
import PlaceDetail from './pages/PlaceDetail';

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
      <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

      <main className="flex-1">
        {isLoggedIn ? <LoggedInView /> : <GuestView />}
      </main>

      <Footer />
      <MobileNav isLoggedIn={isLoggedIn} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<CategoryListing />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;