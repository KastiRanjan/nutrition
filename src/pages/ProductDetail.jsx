
import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'

export default function ProductDetail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="productDetail">
            <div className="container">
                <Row>
                    <Col className="col-12 col-md-6 col-lg-6">
                        <div className="image-container" onClick={handleShow}>
                            <img src="http://welldone.axiomthemes.com/wp-content/uploads/2020/10/5-600x600.png" alt="" />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-6">
                        <div className="details">
                            <h1 className="product-name mb-3">ALL-IN-ONE NUTRITIONAL SHAKE</h1>
                            <span className="product-price ">$2000</span>
                            <p className="product-description mt-3">
                                Qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                            <input className="form-control qty mr-3" defaultValue="0" type="number" /><button className="btn btn-success add-to-cart">Add to Cart</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </div>

            <Modal show={show} onHide={handleClose} centered >
                <img src="http://welldone.axiomthemes.com/wp-content/uploads/2020/10/5-600x600.png" alt="" />
            </Modal>
        </div>
    )
}

