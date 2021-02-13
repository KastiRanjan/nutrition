import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Process() {
    return (
        <div className="process">
            <Container>
                <div className="section-title text-center">
                    <h2>
                        <span>Our Process</span>
                    </h2>
                </div>
                <Row>
                    <Col className="col-sm-12 col-md-4 p-0">
                        <Card className="p-5">
                            <div className="text-center">
                                <img width="100px" height="100px" src="https://cdn.iconscout.com/icon/free/png-256/pied-piper-8-569464.png" alt="" />
                            </div>
                            <Card.Title className="text-center text-uppercase"><b><big>Pre Consultant</big></b></Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    Formulating diet plans according to your goals and needs and explaining about it.
                                    Followed by weekly interaction/support via either phone or email.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-sm-12 col-md-4 p-0">
                        <Card className="p-5">
                            <div className="text-center">
                                <img width="100px" height="100px" src="https://image.flaticon.com/icons/png/512/64/64873.png" alt="" />
                            </div>
                            <Card.Title className="text-center text-uppercase"><b><big> Consultant</big></b></Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    Formulating diet plans according to your goals and needs and explaining about it.
                                    Followed by weekly interaction/support via either phone or email.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-sm-12 col-md-4 p-0">
                        <Card className="p-5">
                            <div className="text-center">
                                <img width="100px" height="100px" src="https://img.icons8.com/ios/452/rubber-stamp.png" alt="" />
                            </div>
                            <Card.Title className="text-center text-uppercase"><b><big>Post Consultant</big></b></Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    Formulating diet plans according to your goals and needs and explaining about it.
                                    Followed by weekly interaction/support via either phone or email.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
