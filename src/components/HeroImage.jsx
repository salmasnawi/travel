import heroImage from "../assets/Main Image.jpg"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Glightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import React, { useEffect } from "react";

import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch , FaPlayCircle} from "react-icons/fa";

function HeroImage() {
  useEffect(() => {
    Glightbox({ selector: ".glightbox" });
  }, []);

  return (
    <div className="container text-center mt-5 mb-5 position-relative" data-aos="fade-up" data-aos-delay="250">
      <div className="position-relative">
        <img src={heroImage} alt="Travel Destination" className="img-fluid hero-image rounded" />

        <a  href="https://www.youtube.com/watch?v=Mf_nGEPIsQ8" className="position-absolute top-50 start-50 translate-middle z-3 glightbox pulsating-play-btn">              <FaPlayCircle className="play-icon  mt-4" />

        </a>
      </div>

      {/* صندوق البحث */}
      <div className="search-box-container position-absolute top-100 start-50 translate-middle w-100 ">
        <div className="search-box shadow-lg p-3">
          <div className="search-input">
            <FaMapMarkerAlt className="search-icon" />
            <input type="text" placeholder="From" className="form-control border-0" />
          </div>
          <div className="search-input">
            <FaMapMarkerAlt className="search-icon" />
            <input type="text" placeholder="To" className="form-control border-0" />
          </div>
          <div className="search-input">
            <FaCalendarAlt className="search-icon" />
            <input type="date" className="form-control border-0" />
          </div>
          <div className="search-input">
            <FaUsers className="search-icon" />
            <input type="number" placeholder="Guests" className="form-control border-0" />
          </div>
          <button className="btn search-btn">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
