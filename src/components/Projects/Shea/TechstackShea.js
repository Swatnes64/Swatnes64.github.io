import React from "react";
import { Row } from "react-bootstrap";
import FlipCard from "../../About/FlipCard";
import {
  FaServer,
  FaUsers,
} from "react-icons/fa";

import {FcWorkflow} from "react-icons/fc";


const cards = [
  {
    id: "1",
    variant: "click",
    front: <FaServer />,
    back: "Windows Server 2016",
  },
  {
    id: "2",
    variant: "click",
    front: <FaUsers />,
    back: "Active Directory",
  },
  {
    id: "3",
    variant: "click",
    front: <FcWorkflow />,
    back: "WorkFlowGen",
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
