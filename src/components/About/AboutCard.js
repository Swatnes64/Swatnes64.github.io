import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Bonjour, je suis <span className="blue">Robin MONCOUTIÉ. </span>
             Je suis originaire de <span className="blue">Pau, France.</span>
            <br />J'ai réalisé mon <span className="blue">diplôme d'ingénieur informatique</span> au CESI Pau.
            <br />
            <br />
            En dehors du travail, quelques autres activités que j'aime faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports : Handball, pelote basque et ski
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
