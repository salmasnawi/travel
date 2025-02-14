import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar1 from "../assets/Image.jpg"; 
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://679fdbb124322f8329c4c8f3.mockapi.io/api/tourist/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.slice(4, 8)))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1 className="section-title">
        Contact us to review <br /><span className="text-orange">your experience</span> with us
      </h1>
      <p className="section-subtitle">
        Give us feedback and let us know what experiences you had while on vacation with us.
      </p>

      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => {
          const rating = Math.max(0, Math.min(5, Math.round(testimonial.rating)));

          return (
            <div key={index} className="col-md-3">
              <div className="testimonial-card shadow-sm p-4">
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <div className="testimonial-info">
                  <img src={avatar1} alt={testimonial.name} className="testimonial-avatar" />
                  <p className="testimonial-name">{testimonial.name}</p>
                </div>
                <p className="testimonial-rating">
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
