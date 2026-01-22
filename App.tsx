import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GuestView } from './components/home/GuestView';
import { LoggedInView } from './components/home/LoggedInView';
import { MobileNav } from './components/MobileNav';

const App: React.FC = () => {
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

export default App;