import React from 'react';
import { useAuth } from './context/AuthContext';

import Marque from './components/Marque';
import Hero from './components/Hero';
import FeatureBanner from './components/FeatureBanner';
import TestimonialSwiper from './components/TestimonialSwiper';
import Shop from './components/Shop';
import Navbar from './components/common/Navbar';
import Footer from './components/Footer';
import BestSellers from './components/BestSellers';
import Blog from './components/Blog';
import Login from './pages/Login';   
import Signup from './pages/Signup'; 

const App = () => {
  // const { isAuthenticated, currentScreen } = useAuth();

  // if (!isAuthenticated) {
  //   return currentScreen === 'signup' ? <Signup /> : <Login />;
  // }

  return (
    <>
      <Navbar />
      <Marque />
      <Hero />
      <FeatureBanner />
      <Shop />
      <BestSellers />
      <Blog />
      <TestimonialSwiper />
      <Footer />
    </>
  );
};

export default App;
