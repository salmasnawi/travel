import React from "react";
import { Link } from "react-router-dom"; 
import additionalImage2 from '../assets/Logo.jpg';
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <img src={additionalImage2} alt="Logo" className="img-fluid" style={{ height: "40px" }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">home</Link> 
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about us">About Us</Link> 
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/Tour Packages">Tour Packages</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/Gallery">Gallery</Link> 
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="ms-3 d-flex align-items-center">
            <FaPhone className="phone-icon me-2 text-orange" />
            <span className="phone-section fw-bold me-2">+123 456 7890</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
