import { Container, Row, Col } from "react-bootstrap";

import headerImg from "../assets/img/logoanime.png";
import { useState, useEffect } from "react";
import videobg from "../assets/img/bg.mp4";

export const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    "Welcome to My Portfolio",
    "Let's Explore My Work",
    "Contact Me for Collaborations"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // เปลี่ยนข้อความทุกๆ 4 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกทำลาย
  }, [messages.length]); // ถ้า messages ไม่ได้มีการเปลี่ยนแปลงในภายหลังใน component นี้ การใช้งาน array ว่าง [] เป็น dependency คือวิธีที่เหมาะสมที่สุด
  //****<video src={videobg} autoPlay loop muted className="video-bg" />***/
  return (
    <section className="banner" id="home">
      <video src={videobg} autoPlay loop muted className="video-bg" />
      
      <Container className="content">
        <div className="main">
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={5} className="img-col">
              <img src={headerImg} alt="Header Img" className="header-img" />
            </Col>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline fade-in">Welcome to my Portfolio</span>
              <h1 className="slide-up">
                <span className="wrap">
                  <span className="fade-text">{messages[textIndex]}</span>
                </span>
              </h1>
              <p className="intro-text fade-in">
                Hello. My name is Mr. Supap Nonkaew, Nickname is Not. I used to do an internship on the web.
                I have the ability to write PHP. My project at college is a mobile app. Knowledge of JavaScript,
                React, C#.Net is an additional skill. I aim to pursue a career as a software developer in the backend.
              </p>
              <button className="btn-connect" onClick={() => console.log('connect')}>More</button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};