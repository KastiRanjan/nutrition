import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function Shop() {
    return (
        <div className="shop">
            <div className="container">
                <div className="section-title text-center">
                    <h2>
                        <span>Welcome to our shop</span>
                    </h2>
                </div>
                <Row>
                    <Col className="col-12 col-md-4">
                        <Card>
                            <Card.Img src="http://welldone.axiomthemes.com/wp-content/uploads/2020/11/3.png" />


                        </Card>
                    </Col>
                    <Col className="col-12 col-md-4" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                    }}>

                        <div id="experiment">
                            <div className="cube1">
                                <div className="face front">
                                    <img src="http://welldone.axiomthemes.com/wp-content/uploads/2016/03/Depositphotos_73931365_original.png" alt="" />
                                </div>
                                <div className="face side text-center">
                                    <a href="/productDetail">
                                        Up to 50% Off Sport
                                      Nutrition <br />
                                        <span>Simplify your life</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="experiment">
                            <div className="cube1">
                                <div className="face front">
                                    <a href="/productDetail">
                                        <img src="http://welldone.axiomthemes.com/wp-content/uploads/2016/03/Depositphotos_73931365_original.png" alt="" />
                                    </a>
                                </div>
                                <div className="face side text-center">
                                    <a href="/productDetail">
                                        Up to 50% Off Sport
                                      Nutrition <br />
                                        <span>Simplify your life</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col className="col-12 col-md-4">
                        <Card>
                            <Card.Img src="http://welldone.axiomthemes.com/wp-content/uploads/2016/03/Depositphotos_65026525_original-copy.png" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
