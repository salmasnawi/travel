import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <>
    <div className="hero-section ">

 

      {/* المحتوى */}
      <div className="container mt-5 "data-aos="fade-up" data-aos-delay="250">
        <div className="row align-items-center">
          {/* العنوان على اليسار */}
          <div className="col-md-6">
            <h1 className="hero-title text-dark fs-large">
              It’s a Big World Out There, <span className="text-orange">Go Explore</span>
            </h1>
          </div>

          {/* الفقرة على اليمين */}
          <div className="col-md-6">
            <p className="hero-text text-dark">
              True Traveling Software that 5 Million+ in Search The Traveler Perfect Tour that Fits to Your Needs. Works 15,000+ Partner Projects.
            </p>
            <button className="btn btn-outline-light btn-orange">discover now</button>

          </div>
        </div>
    </div>

    </div>
 
    </>
    
    
    
    
  );
};

export default HeroSection;