import React from "react";
import { Col, Row } from "react-bootstrap";
import  lilies  from '../Assets/pj1.jpeg'
import  note  from '../Assets/pj2.webp'
import generator  from '../Assets/pj3.jpeg'

function Projects() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 style={{color: 'white'}}>Projects</h1>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <a href="https://lilies-food.vercel.app/"><img src={lilies} alt="food-app" /></a>
          <h3>Lilies Food App</h3>
        </div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <a href="https://react-note-app-puce.vercel.app/"><img src={note} alt="food-app" /></a>
          <h3>Notebook App</h3>
        </div>
         
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <a href="https://box-shadow-generator-phi.vercel.app/"><img src={generator} alt="food-app" /></a>
          <h3>Shadow Generator</h3>
        </div>
         
      </Col>
      
      
      
    </Row>
  );
}

export default Projects;
