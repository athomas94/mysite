import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../Assets/img/logo.svg';
import nav1 from '../Assets/img/nav-icon1.svg';
import nav2 from '../Assets/img/github-mark-white.png';
import nav3 from '../Assets/img/nav-icon3.svg';

function NavigationBar() {
const [ activeLink, setActiveLink ] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, []);

const updateActiveLink = (value) => {
    setActiveLink(value);
}
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('about')}>About Me</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icons"> 
                    <a href="www.linkedin.com/athomas94"><img style={{paddingRight: '20px'}} src={nav1} alt="" /></a>
                    <a href="www.github.com/athomas94"><img style={{paddingRight: '20px'}} src={nav2} alt="" /></a>
                    <a href="#"><img style={{paddingRight: '20px'}} src={nav3} alt="" /></a>
                </div>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavigationBar;