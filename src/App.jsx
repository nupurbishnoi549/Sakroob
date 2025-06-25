import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // ✅ Correct import

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
import Cart from './pages/Cart';
import Checkout from './pages/CheckOut';

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

const MinimalLayout = ({ children, showFooter = true, showSakroob = true }) => (
  <>
    <Navbar />
    {children}
    {showFooter && <Footer showSakroob={showSakroob} />}
  </>
);

const App = () => {
  const { isAuthenticated, currentScreen } = useAuth();

  // ✅ Redirect unauthenticated users to login/signup
  if (!isAuthenticated) {
    return currentScreen === 'signup' ? <Signup /> : <Login />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product/:slug"
          element={
            <MinimalLayout showFooter={true} showSakroob={true}>
              <ProductDetails />
            </MinimalLayout>
          }
        />
        <Route
          path="/cart/:slug"
          element={
            <MinimalLayout showFooter={true} showSakroob={false}>
              <Cart />
            </MinimalLayout>
          }
        />
        <Route
          path="/checkout/:slug"
          element={
            <MinimalLayout showFooter={true} showSakroob={false}>
              <Checkout />
            </MinimalLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
