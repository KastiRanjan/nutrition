import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

export default function Textimonial() {
    return (
        <div className="testimonial">
            <Container>
                <div className="section-title text-center">
                    <h2>
                        <span>Testimonials</span>
                    </h2>
                </div>
            </Container>
            <Container>

                <div className="avatar">
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <img style={{ filter: "brightness(0.4)" }}
                                className="d-block w-100"
                                src="https://static.wixstatic.com/media/8fd1f4_f35c86195e2c4f59a1cd0d07f67af578~mv2.jpg/v1/fill/w_572,h_571,al_c,q_80,usm_0.66_1.00_0.01/IMG_3743_edited_edited.webp"
                                alt="First slide"
                            />
                            <Carousel.Caption>

                                <p>						I have been suffering from hypothyroidism and pcod for long time and struggling to lose my weight after having my baby. Came across this amazing dietician on Instagram. After 4 virtual consultation, customized diet plan every 3 weeks and unlimited text I have lost a whopping 10 kg all in just 3 months' time. All thanks to Priyanka Sainju and Nutrifit Nepal. Priyanka Sainju has been very patient with me.					</p>
                                <p>						I have been suffering from hypothyroidism and pcod for long time and struggling to lose my weight after having my baby. Came across this amazing dietician on Instagram. After 4 virtual consultation, customized diet plan every 3 weeks and unlimited text I have lost a whopping 10 kg all in just 3 months' time. All thanks to Priyanka Sainju and Nutrifit Nepal. Priyanka Sainju has been very patient with me.					</p>
                                <h3>Nutrition nepal</h3>                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                style={{ filter: "brightness(0.4)" }}
                                className="d-block w-100"
                                src="https://static.wixstatic.com/media/8fd1f4_4fd223969e994c5195837463f173587f~mv2.jpg/v1/fill/w_384,h_512,al_c,q_80,usm_0.66_1.00_0.01/IMG_9904.webp"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <p>						I have been suffering from hypothyroidism and pcod for long time and struggling to lose my weight after having my baby. Came across this amazing dietician on Instagram. After 4 virtual consultation, customized diet plan every 3 weeks and unlimited text I have lost a whopping 10 kg all in just 3 months' time. All thanks to Priyanka Sainju and Nutrifit Nepal. Priyanka Sainju has been very patient with me.					</p>
                                <h3>Nutrition nepal</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </Container>


        </div>
    )
}
