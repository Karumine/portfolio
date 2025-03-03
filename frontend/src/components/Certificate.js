import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import { Link } from "react-router-dom"; // ใช้ Link จาก react-router-dom
import WebSkills from "../assets/img/1727963115852.jpg";
import appmoblie from "../assets/img/moblie-bg.jpg";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import appmoblie1 from "../assets/img/1.jpg";
import appmoblie2 from "../assets/img/2.jpg";
import appmoblie3 from "../assets/img/3.jpg";
import appmoblie4 from "../assets/img/4.jpg";
import appmoblie5 from "../assets/img/5.jpg";
import appmoblie6 from "../assets/img/6.jpg";
import appmoblie7 from "../assets/img/7.jpg";
import appmoblie8 from "../assets/img/8.jpg";


export const Certificates = () => {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleShow = (image) => {
        setCurrentImage(image);
        setShow(true);
    };

    const handleClose = () => setShow(false);


    const work1 = [
        {
            title: "More",
            description: "Web karumine.js",
            imgUrl: WebSkills,
            link: "/WebSkills", // ลิงก์ที่ไปยังหน้าเปล่า
        },
    ];

    const work2 = [
        {
            title: "More",
            description: "Web karumine.jsx",
            imgUrl: WebSkills,
            link: "/WebSkills2", // ลิงก์ที่ไปยังหน้าเปล่า
        },
    ];

    const work3 = [
        {
            title: "More",
            description: "Web karumine.html",
            imgUrl: WebSkills,
            link: "http://localhost:3000/WebSkills3.html", // ลิงก์ที่ไปยังหน้าเปล่า
        },
    ];


    const moblie = [
        {
            title: "More",
            description: "Moblie App",
            imgUrl: appmoblie,
            imgUrl: appmoblie,
        },

    ];

    const moblieapp = [
        {
            imgUrl: appmoblie1,
        },
        {
            imgUrl: appmoblie2,
        },
        {
            imgUrl: appmoblie3,
        },
        {
            imgUrl: appmoblie4,
        },
        {
            imgUrl: appmoblie5,
        },
        {
            imgUrl: appmoblie6,
        },
        {
            imgUrl: appmoblie7,
        },
        {
            imgUrl: appmoblie8,
        },

    ];



    return (
        <section className="certificate" id="certificates">
            <Container>
                <Row>
                    <Col>
                        <div className="certificate-bx">
                            <h2>ผลงาน</h2>
                            <p>Loading</p>
                            <Tab.Container defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Web</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">App</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {[...work1, ...work2, ...work3].map((work1, index) => {
                                                return (
                                                    <Col key={index} size={12} sm={6} md={4}>
                                                        <Link to={work1.link}>
                                                            <div className="certificate-imgbx">
                                                                <img src={work1.imgUrl} alt={work1.title} />
                                                                <div className="certificate-txtx">
                                                                    <h4>{work1.title}</h4>
                                                                    <span>{work1.description}</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </Link>
                                                    </Col>
                                                    
                                                );
                                            })}
                                        </Row>
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {moblie.map((certificate, index) => (
                                                <Col key={index} size={12} sm={6} md={4}>
                                                    <div
                                                        className="certificate-imgbx"
                                                        onClick={handleShow}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <img src={certificate.imgUrl} alt={certificate.title} />
                                                        <div className="certificate-txtx">
                                                            <h4>{certificate.title}</h4>
                                                            <span>{certificate.description}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>

                                        {/* Modal for displaying multiple images */}
                                        <Modal show={show} onHide={handleClose} centered size="lg">
                                            <Modal.Header closeButton>
                                                <Modal.Title>Gallery</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Row>
                                                    {moblieapp.map((certificate, index) => (
                                                        <Col key={index} xs={12} sm={6} md={4}>
                                                            <div >
                                                                <img
                                                                    src={certificate.imgUrl}
                                                                    alt={certificate.title}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "auto",
                                                                        marginBottom: "15px",
                                                                    }}
                                                                />
                                                                
                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>Loading</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
