import React from "react";
import { Row } from "react-bootstrap";
import FlipCard from "../../About/FlipCard";
import {
  FaJenkins,
  FaAngular,
  FaJava,
  FaConfluence,
  FaJira,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiGoogleCloudPlatform,
  DiEclipse,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiGrafana,
  SiMicrosoftoffice,
} from "react-icons/si";
import { BsGithub, BsSlack } from "react-icons/bs";

const cards = [
  {
    id: "1",
    variant: "click",
    front: <FaJava />,
    back: "Java",
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
    front: <FaAngular />,
    back: "Angular",
  },
  {
    id: "4",
    variant: "click",
    front: <DiGoogleCloudPlatform />,
    back: "Google Cloud Plateform",
  },
  {
    id: "5",
    variant: "click",
    front: <DiEclipse />,
    back: "Eclipse",
  },
  {
    id: "6",
    variant: "click",
    front: <BsGithub />,
    back: "Github",
  },
  {
    id: "7",
    variant: "click",
    front: <FaJira />,
    back: "Jira",
  },
  {
    id: "8",
    variant: "click",
    front: <FaConfluence />,
    back: "Confluence",
  },
  {
    id: "9",
    variant: "click",
    front: <FaJenkins />,
    back: "Jenkins",
  },
  {
    id: "10",
    variant: "click",
    front: <SiVisualstudiocode />,
    back: "VS Code",
  },
  {
    id: "11",
    variant: "click",
    front: <SiGrafana />,
    back: "Grafana",
  },
  {
    id: "12",
    variant: "click",
    front: <BsSlack />,
    back: "Slack",
  },
  {
    id: "13",
    variant: "click",
    front: <SiMicrosoftoffice />,
    back: "Microsoft Office",
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
