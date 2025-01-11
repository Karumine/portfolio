import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import { Link } from "react-router-dom"; // ใช้ Link จาก react-router-dom

import OrangeVisual from "../assets/img/Orange Visual.png";

export const Certificates = () => {
    const certificates = [
        {
            title: "Example Certificate",
            description: "This is a description of the certificate",
            imgUrl: OrangeVisual,
            link: "/WebSkills", // ลิงก์ที่ไปยังหน้าเปล่า
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
                                            {certificates.map((certificate, index) => {
                                                return (
                                                    <Col key={index} size={12} sm={6} md={4}>
                                                        <Link to={certificate.link}>
                                                            <div className="certificate-imgbx">
                                                                <img src={certificate.imgUrl} alt={certificate.title} />
                                                                <div className="certificate-txtx">
                                                                    <h4>{certificate.title}</h4>
                                                                    <span>{certificate.description}</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>Loading</p>
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
