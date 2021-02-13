import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Check } from "react-feather";

export default function About() {
    return (
        <div className="about">
            <div className="page-header" style={{ backgroundImage: 'url("https://nutrifitnepal.com/wp-content/uploads/2020/01/image-10.jpg")' }}>
                <Container className=" ">
                    <h3 className="text-center">About Us</h3>
                </Container>
            </div>
            <Container>
                <Row className="mt-4 pt-4">
                    <Col className="col-12 col-sm-12 col-md-6">
                        <Card>
                            <img
                                src="https://nutrifitnepal.com/wp-content/uploads/2020/10/priyanka-comp-1004x1024.jpg"
                                alt=""
                            />
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6">
                        <div className="title">
                            <h3 style={{}}>KNOW YOUR DIETITIAN</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facilis nulla placeat
                            quia officiis eum aspernatur praesentium nam iste quo? Ipsum sint facere cupiditate.
                            In reprehenderit totam error dignissimos nihil. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Magnam, aliquid. Qui necessitatibus accusantium ipsum quos
                            reiciendis, voluptates consequuntur sit quaerat a nam eius officiis quis deleniti
                            adipisci commodi, est laborum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. At ratione tempora recusandae. Provident natus ducimus dolor, inventore,
                            voluptatem molestiae quos, amet nam accusamus necessitatibus aliquid. Quisquam labore
                            quos quam. Facilis!
            </p>
                    </Col>
                </Row>
            </Container>
            <section className="mt-5 pt-5 pb-5" style={{ background: "#ccc" }}>
                <Container>
                    <Row>
                        <Col className="col-12 col-sm-12 col-md-6">
                            <div className="title">
                                <h3 style={{ fontSize: "40px !important" }}>About US</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facilis nulla placeat
                                quia officiis eum aspernatur praesentium nam iste quo? Ipsum sint facere cupiditate.
                                In reprehenderit totam error dignissimos nihil. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Magnam, aliquid.
            </p>
                            <p>
                                Qui necessitatibus accusantium ipsum quos
                                reiciendis, voluptates consequuntur sit quaerat a nam eius officiis quis deleniti
                                adipisci commodi, est laborum. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. At ratione tempora recusandae. Provident natus ducimus dolor, inventore,
                                voluptatem molestiae quos, amet nam accusamus necessitatibus aliquid. Quisquam labore
                                quos quam. Facilis!
                            </p>
                        </Col>
                        <Col className=" col-12 col-sm-12 col-md-6">
                            <div className="title">
                                <h3>Vision</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, incidunt perspiciatis pariatur consequuntur eius atque quae consequatur saepe dolores corrupti debitis cupiditate, dolorum quia odio. Dicta sapiente totam cumque hic.
                            </p>

                            <div className="title">
                                <h3>Mission</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias deleniti numquam natus quisquam. Necessitatibus cum quisquam ad qui! Assumenda enim esse sint laudantium! Nam repellendus eos repudiandae libero quis!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row className="mt-5">

                    <Col className="col-12 col-sm-12 col-md-6">
                        <div className="title">
                            <h3 style={{ fontSize: "40px !important", color: "    color: #bcd" }}>What I do for Healthy Nutrition?</h3>
                        </div>
                        <ul>
                            <li>
                                <Check color="green" /> &nbsp; Develop meal plan
                            </li>
                            <li>
                                <Check color="green" /> &nbsp; Nutritional science research
                            </li>
                            <li>
                                <Check color="green" /> &nbsp; Client health needs
                            </li>
                            <li>
                                <Check color="green" /> &nbsp; Report the patient progress
                            </li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6">
                        <Card>
                            <img
                                src="https://nutrifitnepal.com/wp-content/uploads/2019/12/img-01.jpg"
                                alt=""
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
