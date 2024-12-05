import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaDesktop, FaCogs } from "react-icons/fa";

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <div>
                    <Row className="mb-4">
                        <Col>
                            <h2>Experience</h2>
                        </Col>
                    </Row>
                    <Row>
                        {/* โปรเจค 1 */}
                        <Col md={4} className="experience-bx">
                            <FaReact size={70} color="#61dafb" />
                            <h4>Restaurant Reservation App</h4>
                            <p>Developed a React Native mobile app for restaurant reservations, allowing users to view time slots and make reservations seamlessly.</p>
                        </Col>

                        {/* โปรเจค 2 */}
                        <Col md={4} className="experience-bx">
                            <FaDesktop size={70} color="#2965f1"  />
                            <h4>Customer Notification Web System</h4>
                            <p>Built a web system that notifies customers, working closely with the backend team to ensure a seamless user experience.</p>
                        </Col>

                        {/* โปรเจค 3 */}
                        <Col md={4} className="experience-bx">
                            <FaCogs size={70} color="#563d7c" />
                            <h4>C# Blazor Server CRUD Application</h4>
                            <p>Developed a CRUD application using C# Blazor Server, allowing users to interact with data seamlessly through a web interface.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};
