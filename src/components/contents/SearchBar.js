import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SearchBar() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="search"
              style={{ width: "100%", marginRight: "40px" }}
            />
          </Col>
          <div></div>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;
