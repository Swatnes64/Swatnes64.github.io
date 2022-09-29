import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import capgemini from "../../Assets/Projects/Capgemini.png";
import dsiMAS from "../../Assets/Projects/DsiMAS.png";
import safran from "../../Assets/Projects/Safran.png";
import tmNews from "../../Assets/Projects/TmNews.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Mes expériences professionnelles</h1>
        <p style={{ color: "white" }}>
          Voici les projets sur lesquels j'ai travaillé
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Link className="project-link" to="/project/cap1">
              <ProjectCard
                imgPath={capgemini}
                title="Ingenieur developpement au sein d'une équipe devOps"
                description1="Capgemini Technology services - PAU"
                description2="01/21 – 06/22 : 1 an et 6 mois"
              />
            </Link>
          </Col>
          <Col md={6} className="project-card">
            <Link className="project-link" to="/project/shea">
              <ProjectCard
                imgPath={safran}
                title="Administrateur IT"
                description1="Safran Helicopter Engines ASIA - SINGAPOUR"
                description2="10/19 – 01/20 : 4 mois"
              />
            </Link>
          </Col>
          <Col md={6} className="project-card">
            <Link className="project-link" to="/project/cap2">
              <ProjectCard
                imgPath={capgemini}
                title="Ingenieur developpement logiciel"
                description1="Capgemini Technology services - PAU"
                description2="01/19 – 04/19 : 4 mois"
              />
            </Link>
          </Col>

          <Col md={6} className="project-card">
            <Link className="project-link" to="/project/dsimas">
              <ProjectCard
                imgPath={dsiMAS}
                title="Ingenieur developpement web"
                description1="DSI des Ministères Sociaux - PARIS"
                description2="04/18 – 06/18 : 2 mois"
              />
            </Link>
          </Col>
        </Row>
        <br />
              <br />
              <hr />
              <br />
              <br />
        <h1 className="project-heading">Projet personel</h1>
        <Row>
          
        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tmNews}
              title="Transfer Generator"
              description1="Développement php"
              description2="03/2020"
              demoLink="http://91.121.171.213/franky/TransferGenerator/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
