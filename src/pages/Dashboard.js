import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

const Dashboard = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedTab, setSelectedTab] = useState("special-deals");
  const [showAll, setShowAll] = useState(false);

  const imagePaths = [img1, img2, img3, img4, img5, img6, img7, img8];

  useEffect(() => {
    fetch("https://679fdbb124322f8329c4c8f3.mockapi.io/api/tourist/tour-destinations")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.slice(0, 16).map((destination, index) => ({
          ...destination,
          avatar: imagePaths[index % imagePaths.length],
          price: Math.floor(Math.random() * (1000 - 300 + 1)) + 300,
        }));
        setDestinations(updatedData);
      });
  }, []);

  return (
    <div className="container mt-5" data-aos="fade-up" data-aos-delay="250">
      <h1 className="text-center mb-4">
        The <span style={{ color: "#FA7436" }}>best place</span> for vacation
      </h1>

      <div className="d-flex justify-content-center mb-4 overflow-auto flex-nowrap tab-container">
        {["special-deals", "popular", "recommendation", "best-price"].map((tab) => (
          <button
            key={tab}
            className={`btn mx-2 px-3 tab-btn ${selectedTab === tab ? "btn-orange active-tab" : "btn-outline"}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      <div className="row">
        {(showAll ? destinations : destinations.slice(0, 8)).map((destination) => (
          <div key={destination.id} className="col-md-3 col-sm-6 col-12 mb-4">
            <div className="card h-100 shadow">
              <img
                src={destination.avatar}
                className="card-img-top"
                alt={destination.name}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">
                  <FaMapMarkerAlt className="me-2" />
                  {destination.city}, {destination.country}
                </p>
                <div className="text-warning">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <h5 className="mt-2 text-danger">${destination.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-orange" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less " : " Show All"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
