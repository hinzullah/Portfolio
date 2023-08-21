import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Oduola Kamol, 
              <i>
                <b className="purple"> Enthusiastic junior developer with a passion for turning code into meaningful solutions. Believes in technology's positive impact on the world. </b>
              </i>
              <br />
              <br />
                  <b>🚀 Coding Journey:</b>
                  Hooked on coding since the first "Hello, World!" program. Constantly learning and adapting to new programming languages, frameworks, and challenges.<br />
              <br />
              <b>Skills and Collaboration:</b>
              Proficient in relevant technologies. Thrives in collaborative environments, values knowledge exchange, and contributes actively to projects.<br/> <br />

              <b>Continuous Learning:</b>
              Sees software development as a continuous learning process. Actively seeks new knowledge through online courses, coding communities, and tech meetups.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I'm always exited to <span className="purple">connect </span>with peers, mentors, and industry professionals. Open to discussing tech trends, collaborating on projects, and sharing coding humor.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hinzullah"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/alh_bn_murtadho"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oduola-kamol-8987931a9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/proffessoraugur/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
