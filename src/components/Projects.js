import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import lilies from "../Assets/lilies.png";
import medic from "../Assets/medic-AI.png";
import lagosHomes from "../Assets/lagoshomes.png";
import Rental from "../Assets/Car rent.png";
import ecommerce from "../Assets/ecommerce.webp";
import kitchen from "../Assets/chuks.png";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "LagosHomes",
      image: lagosHomes,
      link: "https://lagos-homes-pkw4.vercel.app/",
      description: "Lagos #1 Property Platform - Find Your Perfect Home in Lagos"
    },
    {
      id: 2,
      name: "Car Rental Service",
      image: Rental,
      link: "https://car-hiring.vercel.app/",
      description: "A modern car rental service platform"
    },
    {
      id: 3,
      name: "Lilies Food App",
      image: lilies,
      link: "https://lillies-two.vercel.app/",
      description: "Food ordering application with seamless user experience"
    },
    {
      id: 4,
      name: "Medic-AI Chatbot",
      image: medic,
      link: "https://medic-ai-bot-production.up.railway.app/",
      description: "AI-powered chatbot for medical inquiries"
    },
    {
      id: 6,
      name: "Atelia E-Commerce",
      image: ecommerce,
      link: "https://ecommerce-beige-nu.vercel.app/",
      description: "Full-featured e-commerce platform"
    },
    {
      id: 7,
      name: "Food Kitchen",
      image: kitchen,
      link: "https://chucks-kitchen-project-1.vercel.app/",
      description: "Food ordering application with real-time tracking"
    }
  ];

  const projectCardStyle = (projectId) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    transform: hoveredProject === projectId ? "translateY(-10px)" : "translateY(0)",
    boxShadow: hoveredProject === projectId 
      ? "0 12px 24px rgba(0, 0, 0, 0.4)" 
      : "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer"
  });

  const imageStyle = (projectId) => ({
    width: "100%",
    height: "280px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    transform: hoveredProject === projectId ? "scale(1.05)" : "scale(1)",
    display: "block"
  });

  const overlayStyle = (projectId) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 60%)",
    opacity: hoveredProject === projectId ? 1 : 0.7,
    transition: "opacity 0.3s ease"
  });

  const titleStyle = {
    position: "absolute",
    bottom: "15px",
    left: "15px",
    right: "15px",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    margin: 0,
    zIndex: 2
  };

  const descriptionStyle = (projectId) => ({
    position: "absolute",
    bottom: "45px",
    left: "15px",
    right: "15px",
    color: "#fff",
    fontSize: "0.85rem",
    margin: 0,
    zIndex: 2,
    opacity: hoveredProject === projectId ? 1 : 0,
    transform: hoveredProject === projectId ? "translateY(0)" : "translateY(10px)",
    transition: "all 0.3s ease"
  });

  const sectionTitleStyle = {
    color: "white",
    textAlign: "center",
    marginBottom: "3rem",
    fontSize: "2.5rem",
    fontWeight: "700",
    letterSpacing: "1px"
  };

  return (
    <Container>
      <h1 style={sectionTitleStyle}>Projects</h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {projects.map((project) => (
          <Col 
            key={project.id}
            xs={12} 
            sm={6} 
            md={4} 
            lg={4}
            className="mb-4"
          >
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={projectCardStyle(project.id)}>
                <img
                  style={imageStyle(project.id)}
                  src={project.image}
                  alt={project.name}
                />
                <div style={overlayStyle(project.id)} />
                <p style={descriptionStyle(project.id)}>
                  {project.description}
                </p>
                <h3 style={titleStyle}>{project.name}</h3>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;