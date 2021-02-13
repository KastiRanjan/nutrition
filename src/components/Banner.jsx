
import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";

export default function Banner() {
  return (
    <div className="banner">
      <div className="curve"></div>
      <div className="container">
        <Row>
          <Col className="col-md-6 col-lg-6">
            <div className="slider1 pt-md-5 mt-5 pl-md-5">
              <Carousel fade={true} indicators={false} controls={false}>
                <Carousel.Item className="" >
                  <h2 style={{ color: "#2F707D", fontWeight: "600" }}>
                    Customize your diet to your needs
                    </h2>
                  <p>I’d love to chat more about how I may be able to help you live life to the full.
                    Book a free, no-obligation, 15-minute call today.</p>
                  <Button className="btn btn-success">More Info</Button>
                </Carousel.Item>
                <Carousel.Item>
                  <h2 style={{ color: "#2F707D", fontWeight: "600" }}>
                    Providing nutrition and lifestyle consultations to help you live life to the full
                    </h2>
                  <p>I’d love to chat more about how I may be able to help you live life to the full.
                    Book a free, no-obligation, 15-minute call today.</p>
                  <Button className="btn btn-success">More Info</Button>
                </Carousel.Item>
              </Carousel>
            </div>

          </Col>
          <Col className="col-12 col-md-6 col-lg-6">
            <div className="slider1">
              <Carousel fade={true} indicators={false} controls={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://pngimage.net/wp-content/uploads/2018/06/supplement-png-3.png"
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://pngimage.net/wp-content/uploads/2018/06/licuados-de-frutas-png-4.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
