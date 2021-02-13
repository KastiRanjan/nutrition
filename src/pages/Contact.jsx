import React from "react";
import { Col, Container, Form, FormControl, Row, FormText, Button } from "react-bootstrap";
import { Facebook, Instagram, Mail, Phone, Twitter } from "react-feather";

export default function Contact() {
    return (
        <div className="contact">
            <div className="page-header" style={{ backgroundImage: 'url("https://nutrifitnepal.com/wp-content/uploads/2020/01/image-10.jpg")' }}>
                <Container className=" ">
                    <h3 className="text-center">Contact Us</h3>
                </Container>
            </div>
            <Container>

                <Row>
                    <Col className='pt-5 text-center' style={{ fontSize: "18px", fontWeight: 600 }}>
                        <p style={{ color: "#2F707D" }}> We are here to help 7 days a week and respond within 24 hours.</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="col-md-8">
                        <div className="get-in-touch ">
                            <h3>Message</h3>
                        </div>
                        <Form>
                            <Row>
                                <Col className="col-md-6">
                                    <FormControl placeholder="Username" />
                                </Col>
                                <Col className="col-md-6">
                                    <FormControl placeholder="Email Address" />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className="col-md-12">
                                    <Form.Control as="textarea" rows={6} />
                                </Col>
                            </Row>
                            <br />
                            <Button className="btn btn-success">Submit</Button>
                        </Form>
                    </Col>
                    <Col className="col-md-4 right">
                        <div className="get-in-touch ">
                            <h3>Get In Touch</h3>
                        </div>
                        <ul>
                            <li>
                                <div className="contact-icon">
                                    <a href="/">
                                        <Mail color="#fff" />
                                    </a>
                                </div>
                                <div className="contact-info">
                                    <h4>Mail</h4>
                                    <p>Nutrition@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <a href="/">
                                        <Phone color="#fff" />
                                    </a>
                                </div>
                                <div className="contact-info">
                                    <h4>Call Us</h4>
                                    <p>+977 9860357400</p>
                                </div>
                            </li>

                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12">
                        <div className="contact-social-media">
                            <ul className="d-flex ">
                                <li><a href="/"><Facebook size="25" color="#fff" /></a></li>
                                <li><a href="/"><Instagram size="25" color="#fff" /></a></li>
                                <li><a href="/"><Twitter size="25" color="#fff" /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
