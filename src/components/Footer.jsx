import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

const Footer = () => {
    return (
        <footer className="footer-custom py-5 mt-5">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-4">
                        <img src={logo} alt="Brand Logo" className="mb-3 footer-logo" />
                        <p className="footer-text">
                            We have been leading travelers for a long time, ensuring a seamless journey.
                        </p>
                        <div className="social-icons text-orange">
                            <FaFacebook size={20} className="me-2 text-orange" />
                            <FaTwitter size={20} className="me-2" />
                            <FaInstagram size={20} />
                        </div>
                    </div>

                    <div className="col-md-2">
                        <h5>About us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 text-md-end">
                        <h5>Get in touch</h5>
                        <button className="btn btn-orange w-100">Get Access</button>
                    </div>
                </div>
            </div>

            <div className="text-center py-3 border-top mt-4">
                <p>&copy; 2025 All rights reserved. <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;
