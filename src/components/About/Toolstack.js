import React from "react";
import { Row } from "react-bootstrap";
import { FaJenkins, FaDocker, FaJira, FaConfluence } from "react-icons/fa";
import { DiEclipse, DiGoogleCloudPlatform } from "react-icons/di";
import { BsGithub, BsSlack } from "react-icons/bs";
import {
  SiVisualstudiocode,
  SiGrafana,
  SiMicrosoftoffice,
} from "react-icons/si";
import FlipCard from "./FlipCard";

const cards = [
  {
    id: "1",
    variant: "click",
    front: <BsGithub />,
    back: "Github",
  },
  {
    id: "2",
    variant: "click",
    front: <FaJenkins />,
    back: "Jenkins",
  },
  {
    id: "3",
    variant: "click",
    front: <SiGrafana />,
    back: "Grafana",
  },
  {
    id: "4",
    variant: "click",
    front: <DiEclipse />,
    back: "Eclipse",
  },
  {
    id: "5",
    variant: "click",
    front: <SiVisualstudiocode />,
    back: "VS Code",
  },
  {
    id: "6",
    variant: "click",
    front: <SiMicrosoftoffice />,
    back: "Microsoft Office",
  },
  {
    id: "7",
    variant: "click",
    front: <FaDocker />,
    back: "Docker",
  },
  {
    id: "8",
    variant: "click",
    front: <FaJira />,
    back: "Jira",
  },
  {
    id: "9",
    variant: "click",
    front: <FaConfluence />,
    back: "Confluence",
  },
  {
    id: "10",
    variant: "click",
    front: <DiGoogleCloudPlatform />,
    back: "Google Cloud Plateform",
  },
  {
    id: "11",
    variant: "click",
    front: <BsSlack />,
    back: "Slack",
  }
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {cards.map((card) => (
        <FlipCard key={card.id} card={card} />
      ))}
    </Row>
  );
}

export default Toolstack;
