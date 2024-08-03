import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from "../assets/img/yoyo.png";
import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Banner = () => {

    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 200,
            origin: { y: 0.6 },
            colors: ['#ff7fb5', '#46b8cd', '#3f7fa1', '#fef176', '#9f4c81'], // Optional: customize confetti colors
            shapes: ['square', 'circle', 'star']    // Optional: customize confetti shapes
        });
    }, []);

    return (
        <>
        <Helmet>
            <title>nenu</title>
            <link rel="icon" href="%PUBLIC_URL%/assets/img/title_logo.ico" type="image/png" />
        </Helmet>
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> welcome to pre-launch of</span>
                    <h1>{'nenu apparel'}<span className="wrap">{''}</span></h1>
                    <p> create a customizable, fully embroidered mini-you from a variety of options given on the website. once you're satisfied, cop the merch and elevate your vibe. this can be u →</p>
                    <Button className="custom-button" href="https://www.waitforit.me/signup/67340bfe">Sign Up</Button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" className="header-img" />
                </Col>
            </Row>
        </Container>
      </section>  
      </>
    );
}

