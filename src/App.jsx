import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/Footer';

import Marque from './components/Marque';
import Hero from './components/Hero';
import FeatureBanner from './components/FeatureBanner';
import TestimonialSwiper from './components/TestimonialSwiper';
import Shop from './components/Shop';
import BestSellers from './components/BestSellers';
import Blog from './components/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetail';

const HomeLayout = () => (
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

const MinimalLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product/:slug"
          element={
            <MinimalLayout>
              <ProductDetails />
            </MinimalLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
