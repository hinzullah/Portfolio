import React from "react";
import { Col, Row } from "react-bootstrap";
 import { SiTailwindcss } from 'react-icons/si'
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      
    </Row>
    
  );
}

export default Techstack;
