import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaReact, FaDesktop, FaCogs } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Experience = () => {
    const [showVideoModal, setShowVideoModal] = useState(false); // สถานะการแสดง Modal
    const [videoUrl, setVideoUrl] = useState(''); // URL ของวิดีโอ

    useEffect(() => {
        window.location.hash = '#home';
    }, []);

    // ฟังก์ชันเปิด Modal สำหรับโปรเจคที่ 3
    const handleMoreClick = (project) => {
        if (project === 'C# Blazor Server CRUD Application') {
            setVideoUrl(''); // ใส่ URL วิดีโอที่ต้องการแสดง
            setShowVideoModal(true); // เปิด Modal
        }
    };

    // ฟังก์ชันปิด Modal
    const handleCloseModal = () => {
        setShowVideoModal(false);
        setVideoUrl(''); // ลบ URL เมื่อปิด Modal
    };

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
                            <button 
                                className="btn btn-primary mt-3" 
                                onClick={() => handleMoreClick('Restaurant Reservation App')}
                            >
                                More
                            </button>
                        </Col>

                        {/* โปรเจค 2 */}
                        <Col md={4} className="experience-bx">
                            <FaDesktop size={70} color="#2965f1" />
                            <h4>Customer Notification Web System</h4>
                            <p>Built a web system that notifies customers, working closely with the backend team to ensure a seamless user experience.</p>
                            <button 
                                className="btn btn-primary mt-3" 
                                onClick={() => handleMoreClick('Customer Notification Web System')}
                            >
                                More
                            </button>
                        </Col>

                        {/* โปรเจค 3 */}
                        <Col md={4} className="experience-bx">
                            <FaCogs size={70} color="#563d7c" />
                            <h4>C# Blazor Server CRUD Application</h4>
                            <p>Developed a CRUD application using C# Blazor Server, allowing users to interact with data seamlessly through a web interface.</p>
                            <button 
                                className="btn btn-primary mt-3" 
                                onClick={() => handleMoreClick('C# Blazor Server CRUD Application')}
                            >
                                More
                            </button>
                        </Col>
                    </Row>
                </div>
            </Container>

            {/* Modal สำหรับแสดงวิดีโอ */}
            <Modal 
                show={showVideoModal} 
                onHide={handleCloseModal} 
                dialogClassName="modal-dark" // ใช้คลาสเพื่อให้ Modal มีธีมดำ
                centered // จัดตำแหน่ง Modal ให้อยู่ตรงกลาง
            >
                <Modal.Header closeButton>
                    <Modal.Title>C# Blazor Server CRUD Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe 
                        width="100%" 
                        height="315" 
                        src={videoUrl} 
                     
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        title="Video"
                    ></iframe>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};
