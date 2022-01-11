import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Header from "./header"
import "bootstrap/dist/css/bootstrap.css";
import {
  Col,
  Navbar,
  Row,
  Button,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "./css/menu.css";
export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <Navbar sticky="top" bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">MY APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="feed">Feed</Nav.Link>

                <Nav.Link to="/">Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}
