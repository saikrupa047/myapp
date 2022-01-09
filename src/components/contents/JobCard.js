import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./css/JobCard.css";
import logo from "../Jobs.jpg";

const Madhav = () => {
  return (
    <div>
      <Button variant="primary"> APPLY </Button>
    </div>
  );
};

function JobCard(props) {
  const [state, setState] = useState(false);

  const jsx = (
    <Card.Body>
      <Card.Title>{props.companyName}</Card.Title>
      <Card.Text>Company description : {props.companyDescription}</Card.Text>
      <Button variant="primary">VISIT WEBSITE</Button>
    </Card.Body>
  );

  return (
    <div>
      <Card
        style={{ width: "20rem" }}
        onMouseOver={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        <Card.Img variant="top" src={logo} style={{ height: "10em" }} />
        <div>
          {state ? (
            <div>
              <Card.Body>
                <Card.Header>JOB NAME</Card.Header>
                <Card.Title>{props.companyName}</Card.Title>

                <Card.Text className="blur">
                  Company description : {props.companyDescription}
                </Card.Text>
                <Button variant="primary" className="apply" as="h3">
                  Apply
                </Button>
                {/* <Button variant="primary" id="cancel" as="h3">
                  Cancel
                </Button> */}
                <Button variant="primary" id="visit">
                  VISIT WEBSITE
                </Button>
              </Card.Body>
            </div>
          ) : (
            <Card.Body>
              <Card.Header>JOB NAME</Card.Header>
              <Card.Title>{props.companyName}</Card.Title>
              <Card.Text>
                Company description : {props.companyDescription}
              </Card.Text>
              <Button variant="primary" id="visit">
                VISIT WEBSITE
              </Button>
            </Card.Body>
          )}
        </div>
      </Card>
    </div>
  );
}

export default JobCard;
