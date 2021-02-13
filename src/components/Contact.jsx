import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Mail, Phone } from "react-feather";

export default function Contact() {
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>
                            <span>Contact Us</span>
                        </h2>
                    </div>
                    <Row>
                        <Col className="col-12 col-sm-12 col-md-4">
                            <Card className="p-4">
                                <Row>
                                    <Col className="col-md-1 "><Phone /></Col>
                                    <Col className="col-md-11 ">
                                        <h4>Telephone</h4>
                                        <span>+977 986321456</span>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col className="col-12 col-sm-12 col-md-4">
                            <Card className="p-4">
                                <Row>
                                    <Col className="col-md-1 "><Mail /></Col>
                                    <Col className="col-md-11 ">
                                        <h4>Telephone</h4>
                                        <span>+977 986321456</span>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col className="col-12 col-sm-12 col-md-4">
                            <Card className="p-4">
                                <Row>
                                    <Col className="col-md-1 "><Phone /></Col>
                                    <Col className="col-md-11 ">
                                        <h4>Telephone</h4>
                                        <span>+977 986321456</span>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
}
