import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";

import OrangeVisual from "../assets/img/Orange Visual.png";



export const Certificates = () => {
    const certificates = [
        {
            title: "Loading",
            description: "Loading",
            imgUrl: OrangeVisual,
          },
        
    ];

    return (
        <section className="certificate" id="certificate">
            <Container>
                <Row>
                    <Col>
                        <div className="certificate-bx">
                            <h2>Certificate</h2>
                            <p>Loading</p>
                            <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                certificates.map((certificate, index) => {
                                                    return (
                                                        <CertificateCard
                                                            key={index}
                                                            {...certificate}
                                                        />
                                                    )
                                                })
                                            }
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
            
        </section >
    )
}