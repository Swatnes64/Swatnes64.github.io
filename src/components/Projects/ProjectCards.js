import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <img className="project-img" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ height: "60%" }}>
        <Card.Title style={{ textAlign: "left" }}>{props.title}</Card.Title>
        <div  style={{ textAlign: "right", verticalAlign:"bottom", marginTop: "10%" }}>
        <Card.Text>
          {props.description1}
        </Card.Text>
        <Card.Text>
          {props.description2}
        </Card.Text>
        </div>
        <br />
        <br />
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
