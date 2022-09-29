import React from "react";
import { Row } from "react-bootstrap";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { SiMariadb, SiPostgresql, SiMongodb, SiOracle } from "react-icons/si";
import FlipCard from "./FlipCard";

const cards=[
  {
    id: "1",
    variant: "click",
    front: <DiMsqlServer />,
    back: "SQL Server",
  },{
    id: "2",
    variant: "click",
    front: <DiMysql />,
    back: "My SQL",
  },{
    id: "3",
    variant: "click",
    front: <SiMariadb />,
    back: "MariaDB",
  },{
    id: "4",
    variant: "click",
    front: <SiPostgresql />,
    back: "PostGreSQL",
  },{
    id: "5",
    variant: "click",
    front: <SiMongodb />,
    back: "MongoDB",
  },{
    id: "6",
    variant: "click",
    front: <SiOracle />,
    back: "Oracle",
  }
]



function Bddstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {cards.map((card) => (
        <FlipCard key={card.id} card={card} />
      ))}
    </Row>
  );
}

export default Bddstack;
