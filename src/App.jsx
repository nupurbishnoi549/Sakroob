import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeatureBanner from './components/FeatureBanner';
import TestimonialSwiper from './components/TestimonialSwiper';
import Shop from './components/Shop';
import BestSellers from './components/BestSellers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/CheckOut';
import BackToTop from './components/common/BackToTop';
import Header from './components/common/Header';
import BuildLogs from './components/BuildLogs';
import CustomMarquee from './components/CustomMarquee';

const HomeLayout = () => (
  <>
    <Header/>
    <CustomMarquee/>
    <Hero />
    <FeatureBanner />
    <Shop />
    <BestSellers />
    <BuildLogs/>
    <TestimonialSwiper />
    <Footer />
    <BackToTop/>
  </>
);

const MinimalLayout = ({ children, showFooter = true, showSakroob = true }) => (
  <>
    <Header />
    {children}
    {showFooter && <Footer showSakroob={showSakroob} />}
  </>
);

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

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
            <MinimalLayout>
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
            <MinimalLayout showSakroob={false}>
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
            <MinimalLayout showSakroob={false}>
              <Checkout />
            </MinimalLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

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

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
