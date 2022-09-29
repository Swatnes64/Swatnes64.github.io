import React from "react";
import { Row } from "react-bootstrap";
import { FaReact, FaAngular, FaJava, FaHtml5 } from "react-icons/fa";
import { DiJavascript1, DiPhp, DiCss3 } from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import FlipCard from "./FlipCard";

const cards=[
  {
    id: "1",
    variant: "click",
    front: <FaReact />,
    back: "ReactJS",
  },{
    id: "2",
    variant: "click",
    front: <DiJavascript1 />,
    back: "Javascript",
  },{
    id: "3",
    variant: "click",
    front: <FaAngular />,
    back: "Angular",
  },{
    id: "4",
    variant: "click",
    front: <FaJava />,
    back: "Java",
  },{
    id: "5",
    variant: "click",
    front: <DiPhp />,
    back: "PHP",
  },{
    id: "6",
    variant: "click",
    front: <FaHtml5 />,
    back: "HTML 5",
  },{
    id: "7",
    variant: "click",
    front: <DiCss3 />,
    back: "CSS 3",
  },{
    id: "8",
    variant: "click",
    front: <SiCsharp />,
    back: "C# .NET",
  },
]



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {cards.map((card) => (
        <FlipCard key={card.id} card={card} />
      ))}
    </Row>
  );
}

export default Techstack;
