import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function TopBrand() {
    return (
        <div className="topBrand">
            <Container>
                <div className="section-title text-center">
                    <h2>
                        <span>We Have</span>
                    </h2>
                </div>
                <p className="text-center text-uppercase">We Produce the best for your health.</p>
                <Row>
                    <Col className="col-12 col-sm-12 col-md-4">
                        <div className="image-container" >
                            <img
                                src="https://www.sambrownnutrition.co.uk/wp-content/uploads/bb-plugin/cache/AdobeStock_187218222-landscape.jpeg"
                                alt=""
                            />
                            <div className="image-mask text-center"><h3> What is  nutrational therapy?</h3></div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">
                        <div className="image-container">
                            <img
                                src="https://www.sambrownnutrition.co.uk/wp-content/uploads/bb-plugin/cache/AdobeStock_187218222-landscape.jpeg"
                                alt=""
                            />
                            <div className="image-mask text-center"><h3>Nutrational therapy plans</h3></div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">
                        <div className="image-container text-center">
                            <img
                                src="https://www.sambrownnutrition.co.uk/wp-content/uploads/bb-plugin/cache/AdobeStock_187218222-landscape.jpeg"
                                alt=""
                            />
                            <div className="image-mask"><h3>Contact Me</h3></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
