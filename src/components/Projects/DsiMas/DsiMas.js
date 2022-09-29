import React from "react";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import dsi from "../../../Assets/Projects/DsiMAS.png";
import { Container, Row, Col } from "react-bootstrap";
import TechstackDsiMas from "./TechstackDsimas";

function DsiMas() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h1 className="project-heading">It Administrator</h1>
              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col xs={6} md={6}>
                  <div
                    style={{ textAlign: "justify", justifyContent: "center" }}
                  >
                    04/18 – 06/18
                    <br />2 mois
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <img className="project-imgage" src={dsi} alt="dsiMAS.png" />
                </Col>
              </Row>
              <br /> <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                Projet ayant pour but de réduire la durée des procédures
                administratives
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity">
                  {" "}
                  • Traduction du besoin vers des solutions techniques
                </li>
                <li className="about-activity">
                  • Mise en forme d’éléments non conformes aux attentes
                  utilisateurs
                </li>
                <li className="about-activity">
                  • Mise en place de nouveaux petits composants web (boutons,
                  formulaires et formulaire de recherche géographique)
                </li>
                <li className="about-activity">• Optimisation des processus</li>
                <ul>
                  <li className="about-activity">
                    - Réalisation de maquettes graphiques des différents profils
                    utilisateurs
                  </li>
                  <li className="about-activity">
                    - Développement des interfaces d’inscription
                  </li>
                  <li className="about-activity">
                    - Validation avec les clients
                  </li>
                  <li className="about-activity">
                    - Validation avec les clients
                  </li>
                </ul>
              </ul>
              <br />
              <br />
              <hr />
              <br />
              <br />
            </blockquote>
            <h1 className="project-heading">Technologies rencontrées</h1>
            <TechstackDsiMas />
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default DsiMas;
