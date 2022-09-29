import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Bddstack from "./Bddstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Pour mieux me connaître
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">Languages</h1>
        <Techstack />

        <h1 className="project-heading">Outils</h1>
        <Toolstack />

        <h1 className="project-heading">Base de Données</h1>
        <Bddstack />

      </Container>
    </Container>
  );
}

export default About;
