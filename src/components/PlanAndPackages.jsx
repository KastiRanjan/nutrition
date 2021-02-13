import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PlanAndPackages() {
    return (
        <div className="plansandpackages" style={{ background: "#fff" }}>
            <Container>
                <div className="section-title text-center">
                    <h2>
                        <span>Plan & Packages</span>
                    </h2>
                </div>
                <Row>
                    <Col className="col-12 col-sm-12 col-md-4">
                        <Card className="plan-card">
                            <CardImg src="https://nutrifitnepal.com/wp-content/uploads/2020/10/weightloss.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "bronze" }}>Bronze Packages</Card.Title>
                                <Card.Text>Who Should Choose this package?</Card.Text>
                                <Link to="plans&packages"><Button className="btn btn-success">More Info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">
                        <Card className="plan-card">
                            <CardImg src="https://nutrifitnepal.com/wp-content/uploads/2020/01/image-12.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "#867e7e" }}>Silver packages</Card.Title>
                                <Card.Text>Who Should Choose this package?</Card.Text>
                                <Link to="plans&packages"><Button className="btn btn-success">More Info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">
                        <Card className="plan-card">
                            <CardImg src="https://nutrifitnepal.com/wp-content/uploads/2020/10/weightloss.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: "goldenrod" }}>Gold Packages</Card.Title>
                                <Card.Text>Who Should Choose this package?</Card.Text>
                                <Link to="plans&packages"><Button className="btn btn-success">More Info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
