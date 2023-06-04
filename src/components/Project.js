import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Project = () => {
    const Project = [
        {
            title: "Mobile App",
            description: "แอพจองร้านอาหาร",

        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Project</h2>
                        <p>Loading</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link evenKey="first">Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link evenKey="second">Tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link evenKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane evenKey="first">
                                    <Row>
                                        {
                                            Project.map((Project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...Project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane evenKey="second">Loading</Tab.Pane>
                                <Tab.Pane evenKey="third">Loading</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
}