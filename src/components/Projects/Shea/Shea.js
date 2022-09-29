import React from "react";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import safran from "../../../Assets/Projects/Safran.png";
import { Container, Row, Col } from "react-bootstrap";
import TechstackShea from "./TechstackShea";


function Shea() {
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
                    10/19 – 01/20
                    <br />4 mois
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <img className="project-imgage" src={safran} alt="safran.png"/>
                </Col>
              </Row>
              <br /> <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                Dans une démarche de green IT Safran Helicopter Engines BORDES à
                mis en place l’outil WorkFlowGen qui permet de dématérialiser
                des formulaires papier vers des formulaires numériques.
                Responsable du déploiement sur le site de Singapour. Evolution
                dans un environnement multiculturel en anglais.
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity"> • Analyse du besoin</li>
                <li className="about-activity">
                  • Animation de réunions avec les équipes utilisant des
                  formulaires pour analyser le besoin
                </li>
                <li className="about-activity">
                  • Planification du déroulement des différents processus en
                  parallèles
                </li>
                <li className="about-activity">• Optimisation des processus</li>
                <li className="about-activity">
                  • Création de maquettes et rédaction des formulaires
                </li>
                <li className="about-activity">
                  • Tests fonctionnels avec les utilisateurs
                </li>
                <li className="about-activity">• Formation des utilisateurs</li>
              </ul>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                Support informatique de proximité
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity">
                  {" "}
                  • Réinitialisation de mots de passe
                </li>
                <li className="about-activity">
                  • Gestion de comptes utilisateurs
                </li>
                <li className="about-activity">• Maintenance des appareils</li>
                <li className="about-activity">
                  • Accompagnement des utilisateurs sur les logiciels en place
                </li>
                <li className="about-activity">
                  • Présentation sur le thème « Prévention et sécurité
                  informatique »
                </li>
                <li className="about-activity">
                  • Mise en place de switchs Cisco et routeur Huawai
                </li>
              </ul>
            </blockquote>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h1 className="project-heading">Technologies rencontrées</h1>
            <TechstackShea />
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Shea;
