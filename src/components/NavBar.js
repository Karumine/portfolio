import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const [scrolled, setScrolled] = useState(false);

    useState(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const ontimeupdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => ontimeupdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skill" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => ontimeupdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#certificates" className={activeLink === 'certificate' ? 'active navbar-link' : 'navbar-link'} onClick={() => ontimeupdateActiveLink('certificates')}>Certificate</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/Karumine7" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/karumine7/" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='resume-bx' onClick={() => console.log('connect')}>
                            <b href="Supap Nonkaew.pdf" target="_blank"><span>My Resume</span></b>
                        </button>
                    </span>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'></script>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

/* อย่าลืมทำ ใส่ไฟล์ */