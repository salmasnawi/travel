import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Image (4).jpg";
import image2 from "../assets/Image (5).jpg";
import image3 from "../assets/Image (6).jpg";
import brandLogos from "../assets/Sponsor.jpg";


const BlogSection = () => {
    const blogs = [
        {
            date: "June 2023",
            title: "The Amazing Difference a Year of Traveling...",
            image: image1,
            color: "primary",
            description: "How traveling changed my perspective on life and helped me grow.",

        },
        {
            date: "March 2023",
            title: "Reflections on 6 Months of Travel",
            image: image2,
            color: "warning",
            description: "Lessons learned from traveling for half a year around the world.",

        },
        {
            date: "July 2023",
            title: "How to Save Money While Visiting Africa...",
            image: image3,
            color: "danger",
            description: "Smart tips to save money and enjoy your journey in Africa.",

        },
    ];

    return (
        <div className="container text-center my-5 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title text-start">Our Blog</h2>
                <div>
                    <p className="section-subtitle fw-bold fs-4 ">Stay up to date with the latest <br></br> travel trends and news.</p>
                    <button className="btn btn-orange">View All</button>

                </div>
            </div>
            <div className="row justify-content-center">
                {blogs.map((blog, index) => (
                    <div key={index} className="col-md-4 position-relative">

                        <div className={`blog-card d-flex me-5 bg-${blog.color} text-white rounded shadow-sm p-3`}>
                            <div className="blog-date fw-bold">{blog.date}</div>

                            <img src={blog.image} alt={blog.title} className="img-fluid rounded  " style={{ width: "90%", height: "100%" }} />

                        </div>
                        <div className=" w-100 mt-5">
                            <h5 className="blog-title mt-2">{blog.title}</h5>
                            <p className="blog-description">{blog.description}</p>

                        </div>

                    </div>

                ))}
            </div>
            <div className="text-center mt-5">
                <img src={brandLogos} alt="Brands" className="img-fluid" />
            </div>

        </div>
    );
};

export default BlogSection;
