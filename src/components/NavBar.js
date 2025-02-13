import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/Untitled_Artwork 7.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon_2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import confetti from 'canvas-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
        
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt ="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className = "navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>home</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'pieces' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pieces')}>pieces</Nav.Link>
                <Nav.Link href="https://www.waitforit.me/signup/67340bfe" className={activeLink === 'pre-order' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pre-order')}>pre-order now!</Nav.Link>
            </Nav>
            <span className = "navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/harshita-keerthipati/"><img src={navIcon1} alt = "" /></a>
                    <a href="https://twitter.com/harsh1tak"><img src={navIcon2} alt = "" /></a>
                    <a href="https://www.instagram.com/nenu.apparel/"><img src={navIcon3} alt = "" /></a>
                </div>
                <button className="vvd" onClick={() => window.location.href = '#project'}><span>let's go!</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

