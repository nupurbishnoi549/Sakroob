import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

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

const AppRoutes = () => {
  const { isAuthenticated, currentUser } = useAuth();

  console.log('🔐 Authenticated:', isAuthenticated);
  console.log('👤 Current User:', currentUser);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <HomeLayout /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/product/:slug"
        element={
          isAuthenticated ? (
            <MinimalLayout showFooter={true} showSakroob={true}>
              <ProductDetails />
            </MinimalLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/cart/:slug"
        element={
          isAuthenticated ? (
            <MinimalLayout showFooter={true} showSakroob={false}>
              <Cart />
            </MinimalLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/checkout/:slug"
        element={
          isAuthenticated ? (
            <MinimalLayout showFooter={true} showSakroob={false}>
              <Checkout />
            </MinimalLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Public Routes */}
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
      />
      <Route
        path="/signup"
        element={!isAuthenticated ? <Signup /> : <Navigate to="/" replace />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
