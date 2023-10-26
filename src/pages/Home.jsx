import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Services from '../components/Services';
import TrustedBrands from '../components/TrustedBrands';

const Home = () => {
  return (
    <>
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <Services/>
      <TrustedBrands/>
    </>
  )
}

export default Home;