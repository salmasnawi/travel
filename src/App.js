import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./pages/WhyChooseUs";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/Tour Packages" element={<Dashboard />} />
        <Route path="/Gallery" element={<WhyChooseUs />} />
        <Route path="/Contact" element={<Testimonials />} />


      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
