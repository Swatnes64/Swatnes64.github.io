import React from "react";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import capgemini from "../../../Assets/Projects/Capgemini.png";
import { Container, Row, Col } from "react-bootstrap";
import TechstackCap2 from "./TechstackCap2";

function Cap2() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h1 className="project-heading">
                Ingenieur d’etudes et developpement au sein d'une équipe devOps
              </h1>
              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col xs={6}  md={6}>
                  <div style={{ textAlign: "middle", verticalAlign: "center" }}>
                    01/21 - 06/22 
                    <br />
                    1 an et 6 mois
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <img className="project-imgage" src={capgemini} alt="Capgemini.png"/>
                </Col>
              </Row>
              <br /> <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
              Rapports Excel
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity">
                  {" "}
                  • Rédaction de différents rapports ayant pour but l’analyse et l’anticipation de la production des puits de pétrole et à la gestion des stocks 
                </li>
                <li className="about-activity">
                  • Rédaction de rapports officiels pour gestion des stocks.
                </li>
              </ul>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
              Développement logiciel
                <br />
                <br />
                Travail en autonomie sur un outil d’import/export de données destiné à une équipe support. Cet outil doit permettre d’exporter des données à partir d’une base au format Excel ou Script SQL et de pouvoir importer des données
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity"> • Analyse du besoin</li>
                <li className="about-activity">
                  •	Fonction d’exports de fichier SQL et Excel

                </li>
                <li className="about-activity">
                •	Fonction d’imports de fichier SQL et Excel

                </li>
                <li className="about-activity">
                •	Maquette des interfaces des différents types d’import et d’export

                </li>
                
                <li className="about-activity">
                  • Développement des interfaces 
                </li>
                
              </ul>
            </blockquote>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h1 className="project-heading">Technologies rencontrées</h1>
           <TechstackCap2 />
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Cap2;