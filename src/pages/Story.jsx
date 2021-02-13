import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Story() {
    return (
        <div className="story pb-5" >
            <div className="page-header" style={{ backgroundImage: 'url("https://nutrifitnepal.com/wp-content/uploads/2020/01/image-10.jpg")' }}>
                <Container className=" ">
                    <h3 className="text-center">Our Success Story</h3>
                </Container>
            </div>
            <Container>
                <Row className="pt-5">
                    <Col className="col-md-6">
                        <Card className="mb-4">
                            <Card.Body>
                                <img className="rounded-circle" width="100px " height="100px" src="https://nutrifitnepal.com/wp-content/uploads/2019/10/client02-free-img.jpg" />
                                <Card.Text className="pt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae nobis magnam libero porro molestias aliquid distinctio, ipsum dicta minus corrupti beatae, necessitatibus debitis. Necessitatibus temporibus consequuntur culpa praesentium in?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga, vero necessitatibus eveniet officia fugit, distinctio architecto molestiae mollitia autem, dolorum ducimus nobis! Animi, officiis itaque! Eveniet dolor vel eaque!
                                </Card.Text>
                                <div className="story-person">
                                    Sunita KC , 42 years
                                    Kathmandu
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-4">
                            <Card.Body>
                                <img className="rounded-circle" width="100px " height="100px" src="https://nutrifitnepal.com/wp-content/uploads/2019/10/client02-free-img.jpg" />
                                <Card.Text className="pt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae nobis magnam libero porro molestias aliquid distinctio, ipsum dicta minus corrupti beatae, necessitatibus debitis. Necessitatibus temporibus consequuntur culpa praesentium in?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga, vero necessitatibus eveniet officia fugit, distinctio architecto molestiae mollitia autem, dolorum ducimus nobis! Animi, officiis itaque! Eveniet dolor vel eaque!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus earum vero ratione autem quae libero quia at, deserunt unde vel veniam tempore eligendi ipsa ducimus amet quis quisquam minus?
                                </Card.Text>
                                <div className="ooter">
                                    Sunita KC , 42 years
                                    Kathmandu
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <img className="rounded-circle" width="100px " height="100px" src="https://nutrifitnepal.com/wp-content/uploads/2019/10/client02-free-img.jpg" />
                                <Card.Text className="pt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae nobis magnam libero porro molestias aliquid distinctio, ipsum dicta minus corrupti beatae, necessitatibus debitis. Necessitatibus temporibus consequuntur culpa praesentium in?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga, vero necessitatibus eveniet officia fugit, distinctio architecto molestiae mollitia autem, dolorum ducimus nobis! Animi, officiis itaque! Eveniet dolor vel eaque!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime? Impedit neque commodi, officia minima, voluptatum facilis laudantium sed at deleniti minus asperiores? Officia aspernatur doloremque reprehenderit, beatae eos impedit?
                                </Card.Text>
                                <div className="story-person">
                                    Sunita KC , 42 years
                                    Kathmandu
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-6">
                        <Card className="mb-4">
                            <Card.Body >
                                <img className="rounded-circle" width="100px " height="100px" src="https://nutrifitnepal.com/wp-content/uploads/2019/10/client02-free-img.jpg" />
                                <Card.Text className="pt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae nobis magnam libero porro molestias aliquid distinctio, ipsum dicta minus corrupti beatae, necessitatibus debitis. Necessitatibus temporibus consequuntur culpa praesentium in?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga, vero necessitatibus eveniet officia fugit, distinctio architecto molestiae mollitia autem, dolorum ducimus nobis! Animi, officiis itaque! Eveniet dolor vel eaque!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum animi quis provident magnam quaerat praesentium quisquam laboriosam labore eaque, quod, unde totam tempore ad ipsa dignissimos quo similique quam!
                                </Card.Text>
                                <div className="story-person">
                                    Sunita KC , 42 years
                                    Kathmandu
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body >
                                <img className="rounded-circle" width="100px " height="100px" src="https://nutrifitnepal.com/wp-content/uploads/2019/10/client02-free-img.jpg" />
                                <Card.Text className="pt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae nobis magnam libero porro molestias aliquid distinctio, ipsum dicta minus corrupti beatae, necessitatibus debitis. Necessitatibus temporibus consequuntur culpa praesentium in?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga, vero necessitatibus eveniet officia fugit, distinctio architecto molestiae mollitia autem, dolorum ducimus nobis! Animi, officiis itaque! Eveniet dolor vel eaque!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum animi quis provident magnam quaerat praesentium quisquam laboriosam labore eaque, quod, unde totam tempore ad ipsa dignissimos quo similique quam!
                                </Card.Text>
                                <div className="story-person">
                                    Sunita KC , 42 years
                                    Kathmandu
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
