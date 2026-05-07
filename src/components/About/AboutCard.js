import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Kamol Oduola</span>  from <span className="purple">Lagos, Nigeria.</span>

    <br /> I am a Software Engineer and Computer Science graduate from the Federal University of Technology, Minna.
    <br />
    I build scalable web applications and enjoy working with modern technologies, including frontend development, machine learning, and AI-driven solutions.
    <br />
    I’m passionate about solving real-world problems and continuously improving my skills as a developer.
    <br />
    <br />
    Some of my hobbies are
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games
    </li>
    <li className="about-activity">
      <ImPointRight /> Hiking
    </li>
    <li className="about-activity">
      <ImPointRight /> Surfing The Internet
    </li>
  </ul>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
