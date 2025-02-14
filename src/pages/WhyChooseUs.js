import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import topRatedImage from '../assets/Icon.jpg'; 
import trustedServicesImage from '../assets/Icon (1).jpg';
import supportImage from '../assets/Icon (2).jpg';
import VideoSlider from '../components/VideoSlider';

const WhyChooseUs = () => {
  return (
    <>
    <Container className="my-5">
      <Row className="align-items-center ">
        <Col md={4}>
          <h1 className='mb-4 text-center'>Why <span className='text-orange'>Choose</span> Us</h1>
          <p>
          We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.          </p>
          <Button className='btn btn-orange mt-3 mb-5'>Contact us to review</Button>
        </Col>
        <Col md={8}>
          <div className="icons-section d-flex ">
            <div className="icon-item mb-5">
              <img src={topRatedImage} alt="Top Rated" className="icon-image mb-3" />
              <h5>Top Rated</h5>
              <p>We are highly rated by our customers.</p>
            </div>
            <div className="icon-item">
              <img src={trustedServicesImage} alt="Trusted Services" className="icon-image mb-3" />
              <h5>Trusted Services</h5>
              <p>Reliable and trusted travel services.</p>
            </div>
            <div className="icon-item">
              <img src={supportImage} alt="24/7 Support" className="icon-image mb-3" />
              <h5>24/7 Support</h5>
              <p>We are here to help you anytime.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <VideoSlider/>
    </>
  );
};

export default WhyChooseUs;