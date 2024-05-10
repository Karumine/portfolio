import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/logoanime.png"
import { useEffect, useState } from "react";
import videobg from "../assets/img/bg.mp4"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Welcome"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">

            <video src={videobg} autoPlay loop muted className="video-bg" />

            <Container className="content">
                <div className="main">
                    <Row className="align-item-center">
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline" >Welcome to my Portfolio</span>
                            <h1><span className="wrap">Hello ! {text}</span></h1>
                            <p>Hello. My name is Mr. Supap Nonkaew Nickname is Not. I used to do an internship on the web. have the ability to write php My project at college is a mobile app. Knowledge of JavaScript, React, C#.Net is an additional skill. Because the position I want to do is the software developer in the backend.</p>
                            <button onClick={() => console.log('connect')}>More<ArrowRightCircle size={25} /></button>
                        </Col>

                    </Row>
                </div>
            </Container>


        </section >


    )
}