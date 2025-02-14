import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { FaPlayCircle } from "react-icons/fa";
import "glightbox/dist/css/glightbox.min.css";
import video1Thumbnail from '../assets/6.jpg';
import video2Thumbnail from '../assets/2.jpg';
import video3Thumbnail from '../assets/4.jpg';

const VideoSlider = () => {
  return (
    <div className="position-relative ">
      <div className="play-button position-absolute top-50 start-50 translate-middle z-3">
        <FaPlayCircle className="play-icon" />
      </div>

      <Carousel className="custom-carousel">
        {[...Array(2)].map((_, index) => (
          <Carousel.Item key={index}>
            <Row className="g-3">
              {[video1Thumbnail, video2Thumbnail, video3Thumbnail].map((image, i) => (
                <Col key={i} xs={12} md={4} className="text-center">
                  <img className="img-fluid rounded carousel-image" src={image} alt={`Video ${index * 3 + i + 1}`} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoSlider;
