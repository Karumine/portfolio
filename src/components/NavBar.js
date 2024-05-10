import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import resumePdf from '../assets/pdf/Resume.pdf'; // เปลี่ยนเส้นทางไฟล์ PDF ตามต้องการ

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

    const scrollToHome = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
            ontimeupdateActiveLink('home');
        }
    }

    const scrollToSkills = () => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
            ontimeupdateActiveLink('skills');
        }
    }

    const scrollToCertificates = () => {
        const certificatesSection = document.getElementById('certificates');
        if (certificatesSection) {
            certificatesSection.scrollIntoView({ behavior: 'smooth' });
            ontimeupdateActiveLink('certificates');
        }
    }

    const downloadResume = () => {
        window.open(resumePdf, '_blank');
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
                        <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={scrollToHome}>Home</Nav.Link>
                        <Nav.Link className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={scrollToSkills}>Skills</Nav.Link>
                        <Nav.Link className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={scrollToCertificates}>Certificate</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/Karumine7" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/karumine7/" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='resume-bx' onClick={downloadResume}>
                            <b><span>My Resume</span></b>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
