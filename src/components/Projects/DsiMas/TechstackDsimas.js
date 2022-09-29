import React from "react";
import { Row } from "react-bootstrap";
import FlipCard from "../../About/FlipCard";
import {FaReact} from "react-icons/fa";
import {DiJavascript1,DiScrum} from "react-icons/di";
import {SiPostgresql} from "react-icons/si";
import {BsGithub} from "react-icons/bs";

const cards = [
  {
    id: "1",
    variant: "click",
    front: <FaReact />,
    back: "ReactJS",
  },
  {
    id: "2",
    variant: "click",
    front: <DiJavascript1 />,
    back: "Javascript",
  },
  {
    id: "3",
    variant: "click",
    front: <SiPostgresql />,
    back: "PostGreSQL",
  },
  {
    id: "4",
    variant: "click",
    front: <BsGithub />,
    back: "Github",
  },
  {
    id: "5",
    variant: "click",
    front: <DiScrum />,
    back: "Scrum",
  },
];

function TechstackShea() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {cards.map((card) => (
        <FlipCard key={card.id} card={card} />
      ))}
    </Row>
  );
}

export default TechstackShea;
