import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiMysql, SiFirebase, SiDotnet, SiTypescript } from "react-icons/si";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
            centerMode: true,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            centerMode: true,
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Skills</h2>
                    </Col>
                </Row>
                <Row className="mb-4">
                    {/* Frontend Skills */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="skill-bx">
                            <h2>Frontend Skills</h2>
                            <p>Here are some frontend technologies and tools I'm skilled with, which I use to build interactive and responsive user interfaces:</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                transitionDuration={1500}
                                arrows={false}
                                pauseOnHover={true}
                                swipeable={true}
                                draggable={true}
                            >
                                <div className="item">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" aria-label="Learn more about JavaScript">
                                        <FaJs size={60} color="#f7df1e" />
                                        <h5>JavaScript</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" aria-label="Learn more about HTML">
                                        <FaHtml5 size={60} color="#e34f26" />
                                        <h5>HTML</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" aria-label="Learn more about CSS">
                                        <FaCss3Alt size={60} color="#2965f1" />
                                        <h5>CSS</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about React">
                                        <FaReact size={60} color="#61dafb" />
                                        <h5>React</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about Bootstrap">
                                        <FaBootstrap size={60} color="#563d7c" />
                                        <h5>Bootstrap</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about TypeScript">
                                        <SiTypescript size={60} color="#3178c6" />
                                        <h5>TypeScript</h5>
                                    </a>
                                </div>
                            </Carousel>
                        </div>
                    </Col>

                    {/* Backend Skills */}
                    <Col md={6}>
                        <div className="skill-bx">
                            <h2>Backend Skills</h2>
                            <p>Here are some backend technologies and tools I'm skilled with:</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={false}
                                transitionDuration={1500}
                                arrows={false}
                                pauseOnHover={true}
                                className="skill-slider"
                            >
                                <div className="item">
                                    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about MySQL">
                                        <SiMysql size={60} color="#00618a" />
                                        <h5>MySQL</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about Firebase">
                                        <SiFirebase size={60} color="#ffca28" />
                                        <h5>Firebase</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about C#.NET">
                                        <SiDotnet size={60} color="#512bd4" />
                                        <h5>C#.NET</h5>
                                    </a>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
