import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile1.css";
import "./JobCard";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import "./css/feed.css";

function Feed() {
  let companyName = ["Google"];
  let companyDescription = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti expedita hic provident quia quos corrupti, alias sit, ab temporibus dolore repudiandae cupiditate corporis obcaecati labore aut commodi! Reiciendis, quasi?",
  ];

  const [text, setText] = useState("");
  const search = () => {
    console.log(text);
  };

  return (
    <div>
      <Container>
        <input
          type="text"
          placeholder="search"
          className="search"
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="searchbtn" onClick={search}>
          Search
        </Button>
        <br />
        <br />
        <br />
        <Row ls={4} md={3}>
          <Col>
            <JobCard
              companyName={companyName[0]}
              companyDescription={companyDescription[0]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feed;
