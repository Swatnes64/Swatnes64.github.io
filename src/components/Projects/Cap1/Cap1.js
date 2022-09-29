import React from "react";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import capgemini from "../../../Assets/Projects/Capgemini.png";
import { Container, Row, Col } from "react-bootstrap";
import TechstackCap1 from "./TechstackCap1";

function Cap1() {
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
                Intervention au sein d’une équipe DevOps chargé de la conformité
                du code, de l'intégration de nouvelles versions en Continuous
                Integration et de plateforme d'intégration pour le compte d’un
                client.
                <br />
                <br />
                Vérification quotidienne de la conformité structurelle des
                applicatifs
              </p>
              <ul>
                <li className="about-activity">
                  {" "}
                  • Relecture de code avec système de note (+1 code OK et -1
                  code à modifier)
                </li>
                <li className="about-activity">
                  • Support aux développeurs et retours sur revues de codes
                </li>
                <li className="about-activity">
                  • Mise à jour d’outils internes et formations utilisateurs
                </li>
              </ul>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                Dans un contexte de migration cloud réalisation d’un outil
                permettant de synchroniser les informations contenues sur le
                cloud et d’appliquer des modifications sur les serveurs internes
                à l’entreprise.
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity"> • Analyse du besoin</li>
                <li className="about-activity">
                  • Animation des réunions de conception avec les développeurs
                </li>
                <li className="about-activity">
                  • Définition des lots et spécificités des nouvelles
                  fonctionnalités
                </li>
                <li className="about-activity">
                  • Développement de l’outil en JAVA :
                </li>
                <ul>
                  <li className="about-activity">
                    - Mise en place d’un abonnement PUB/SUB avec Google cloud
                    Plateforme
                  </li>
                  <li className="about-activity">
                    - Créations et remise en place d’une vingtaine de procédures
                    (identification de l’action à réaliser et récupération des
                    données à installées ou suppression de données)
                  </li>
                  <li className="about-activity">
                    - Automatisation du lancement via un script Bash
                  </li>
                  <li className="about-activity">
                    - Supervision via Grafana via l’API Spring
                  </li>
                  <li className="about-activity">- Alerting sur Slack</li>
                </ul>
                <li className="about-activity">
                  • Test fonctionnel et gestion des évolutions et de la
                  maintenance
                </li>
                <li className="about-activity">
                  • Rédaction de la documentation interne reprenant les détails
                  techniques et architecturels de l’outil
                </li>
              </ul>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                Refonte d’une application Angular obsolète pour la gestion des
                licences (Atlassian)
                <br />
                <br />
              </p>
              <ul>
                <li className="about-activity">
                  • Mise à jour du Framework Angular2 (version 13) et des
                  librairies utilisées
                </li>
                <li className="about-activity">
                  • Ajout de nouvelles fonctionnalités
                </li>
                <ul>
                  <li className="about-activity">
                    - Exportation des données vers un document Excel (volumétrie
                    : 4500 utilisateurs)
                  </li>
                  <li className="about-activity">
                    - Réalisation d’interface visuelle détaillant le nombre de
                    licences attribuée aux différentes entités
                  </li>
                </ul>
              </ul>
            </blockquote>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h1 className="project-heading">Technologies rencontrées</h1>
           <TechstackCap1 />
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Cap1;