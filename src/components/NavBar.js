import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import resumePdf from '../assets/pdf/Resume Supap Nonkaew.pdf';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId, link) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(link);
    }
  };

  const scrollToTop = () => {
    // เลื่อนขึ้นไปที่ element ที่มี id="home"
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // เลื่อนไปยังจุดเริ่มต้นของ element
      });
    }
  };
  const downloadResume = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <>
      {isMobile ? (
        // Navbar แบบ Offcanvas สำหรับหน้าจอเล็ก
        <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvas-navbar" />
            <Navbar.Offcanvas id="offcanvas-navbar" placement="end">
              <Offcanvas.Body>
                <Nav>
                  <Nav.Link
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => {
                      scrollToTop(); // เรียกใช้ฟังก์ชันเลื่อนไปที่ด้านบนสุด
                      setActiveLink('home'); // ตั้งค่าลิงก์ active
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => scrollToSection('skills', 'skills')}
                  >
                    Skills
                  </Nav.Link>
                  <Nav.Link
                    className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => scrollToSection('experience', 'experience')}
                  >
                    experience
                  </Nav.Link>
                </Nav>
                <div className="social-icon">
                  <a href="#"><img src={navIcon1} alt="" /></a>
                  <a href="https://www.facebook.com/Karumine7" target="_blank"><img src={navIcon2} alt="" /></a>
                  <a href="https://www.instagram.com/karumine7/" target="_blank"><img src={navIcon3} alt="" /></a>
                </div>

              </Offcanvas.Body>
              <button className="resume-bx" onClick={downloadResume}>
                <b><span>My Resume</span></b>
              </button>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ) : (
        // Navbar แบบปกติสำหรับหน้าจอใหญ่
        <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => scrollToSection('home', 'home')}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => scrollToSection('skills', 'skills')}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => scrollToSection('experience', 'experience')}
                >
                  experience
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="#"><img src={navIcon1} alt="" /></a>
                  <a href="https://www.facebook.com/Karumine7" target="_blank"><img src={navIcon2} alt="" /></a>
                  <a href="https://www.instagram.com/karumine7/" target="_blank"><img src={navIcon3} alt="" /></a>
                </div>
                <button className="resume-bx" onClick={downloadResume}>
                  <b><span>My Resume</span></b>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};
