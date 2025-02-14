import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroImage from '../components/HeroImage';
import AboutUs from './AboutUs';
import Testimonials from '../components/Testimonials';
import Dashboard from './Dashboard';
import BlogSection from "../pages/BlogSection"; 
import WhyChooseUs from "../pages/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroImage />
      <AboutUs />
      <Dashboard />
      <WhyChooseUs />
      <Testimonials />
      <BlogSection />
    </div>
  );
};

export default Home;

