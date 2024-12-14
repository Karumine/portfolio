import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FaServer, FaCloud } from "react-icons/fa";
import OrangeVisual from "../assets/img/Orange Visual.png";
import { ValorantCard } from "./ValorantCard";

export const ApiShowcase = () => {
  const apishowcases = [
    {
      title: "คลิกเพื่อเข้าชม",
      description: "เกี่ยวกับ Valorant",
      imgUrl: OrangeVisual
    },
    {
      title: "คลิกเพื่อเข้าชม",
      description: "เกี่ยวกับ Valorant",
      imgUrl: OrangeVisual
    },
    {
      title: "คลิกเพื่อเข้าชม",
      description: "เกี่ยวกับ Valorant",
      imgUrl: OrangeVisual
    },
    
  ];

  return (
    <section className="apishowcase" id="apishowcases">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="apishowcase-bx">
              <h2>API Showcase</h2>
              <p>Here are some of the APIs I've developed and worked with:</p>
              <Tab.Container defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Valorant</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">League of Legends</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Teamfight Tactics</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row >
                      {
                        apishowcases.map((apishowcase, index) => {
                          return (
                            <ValorantCard
                              key={index}
                              {...apishowcase}
                            />
                          )
                        })
                      }
                    </Row>

                  </Tab.Pane>
                  <Tab.Pane eventKey="second">


                  </Tab.Pane>
                  <Tab.Pane eventKey="third">


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
