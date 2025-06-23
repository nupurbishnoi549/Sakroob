import React from 'react'
import Marque from './components/Marque'
import Hero from './components/Hero'
import FeatureBanner from './components/FeatureBanner'
// import TestimonialSwiper from './components/TestimonialSwiper'
// import SakroobCircle from './components/SakroobCircle'
import Shop from './components/Shop'
import Navbar from './components/common/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Marque />
      <Hero />
      <FeatureBanner />
      {/* <TestimonialSwiper/> */}
      <Shop />
      {/* <SakroobCircle/> */}
      <Footer/>
    </>
  )
}

export default App
