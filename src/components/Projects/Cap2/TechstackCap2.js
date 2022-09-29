import React from "react";
import { Row } from "react-bootstrap";
import FlipCard from "../../About/FlipCard";

import {
  SiVisualstudiocode,
  SiOracle,
  SiMicrosoftoffice,
  SiCsharp
} from "react-icons/si";

const cards = [
  {
    id: "1",
    variant: "click",
    front: <SiOracle />,
    back: "Oracle",
  },{
    id: "2",
    variant: "click",
    front: <SiCsharp />,
    back: "C# .NET",
  },{
    id: "3",
    variant: "click",
    front: <SiMicrosoftoffice />,
    back: "Microsoft Office",
  },{
    id: "10",
    variant: "click",
    front: <SiVisualstudiocode />,
    back: "VS Code",
  },
];



function TechstackCap1() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {cards.map((card) => (
        <FlipCard key={card.id} card={card} />
      ))}
    </Row>
  );
}

export default TechstackCap1;
