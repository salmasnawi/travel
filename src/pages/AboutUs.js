import React, { useEffect } from "react";
import additionalImage3 from '../assets/about us.jpg';


const AboutUs = () => {
  useEffect(() => {
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  return (
    <section className="about-section container mt-5" data-aos="fade-up" data-aos-delay="250">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={additionalImage3}
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6" >
          <h6 className="about-heading mb-5">ABOUT US</h6>
          <h2 className="about-title">
            The Best And Most Trusted <span className="highlight">Service</span>
          </h2>
          <p className="about-text">
            We are the largest holiday service provider in the world with
            partners and places spread all over the world by prioritizing
            service and customer satisfaction.
          </p>
          <button className="btn btn-orange">Learn More</button>

          {/* العدادات */}
          <div className="counters d-flex mt-4">
            <div className="counter-box">
              <span
                data-purecounter-start="0"
                data-purecounter-end="200"
                data-purecounter-duration="2"
                className="purecounter counter-number orange"
              ></span>
              <p>Customer & Partners</p>
            </div>
            <div className="counter-box">
              <span
                data-purecounter-start="0"
                data-purecounter-end="500"
                data-purecounter-duration="2"
                className="purecounter counter-number orange"
              ></span>
              <p>Places in the World</p>
            </div>
            <div className="counter-box">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1000"
                data-purecounter-duration="2"
                className="purecounter counter-number orange"
              ></span>
              <p>Success Journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
