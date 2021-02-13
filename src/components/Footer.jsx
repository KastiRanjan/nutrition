import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Facebook, Instagram, Twitter } from 'react-feather'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <Row className="pb-5">
                    <Col className=" col-12 col-md-12 text-center" style={{ color: "#fff" }}>
                        <div className="brand-logo mb-3">
                            logo
                        </div>
                        <p className="mb-5" style={{ color: "#ccc" }}>

                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className="contact-address d-flex ">
                            <div className="address-left text-right mr-4 mb-5">
                                <a href="/">baneswor, kathmandus</a><br />
                                <a href="/"> 123-456-7890</a>
                            </div>
                            <div className="address-right text-left ml-4 mb-5">
                                {"Phone:"} <a href="/">986035000</a><br />
                                {"Fax:"} <a href="/">123-456-7890</a>
                            </div>
                        </div>
                        <ul className="d-flex justify-content-center social-media" >
                            <li><a href="/"><Facebook color="#ccc" /></a></li>
                            <li><a href="/"><Twitter color="#ccc" /></a></li>
                            <li><a href="/"><Instagram color="#ccc" /></a></li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-bottom pt-5 text-center">
                    <p>&copy; copyright 2021 </p>
                </div>
            </div>
        </div>
    )
}
