import { useState } from "react";
import { Container } from "react-bootstrap";

export const Contact = () => {
    const formInitailDetails = {
        firstName: '',
        lastName: '',
        emil: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitailDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                    <img src={''} alt="Contact us"/>
                    </Col>
                    <Col>
                    <h2>Get In Touch</h2>
                    <form>
                        <Row></Row>
                    </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}