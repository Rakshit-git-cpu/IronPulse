import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import CTASection from '../components/Home/CTASection';
import QuickStats from '../components/Home/QuickStats';

const Home = () => {
  return (
    <div>
      <Hero />
      <QuickStats />
      <Features />
      <CTASection />
    </div>
  );
};

export default Home;