import React from 'react'
import Marque from './components/Marque'
import Hero from './components/Hero'
import FeatureBanner from './components/FeatureBanner'
import TestimonialSwiper from './components/TestimonialSwiper'
import Shop from './components/Shop'
import Navbar from './components/common/Navbar'
import Footer from './components/Footer'
import BestSellers from './components/BestSellers'
import Blog from './components/Blog'

const App = () => {
  return (
    <>
      <Navbar/>
      <Marque />
      <Hero />
      <FeatureBanner />
      <Shop />
      <BestSellers />
      <Blog/>
      <TestimonialSwiper/>
      <Footer/>
    </>
  )
}

export default App
