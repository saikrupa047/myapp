import React from "react";
import "./css/header.css";
import logo from "./kakashi.jpg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <img src={logo} style={{ width: "30px" }} alt="imaef" />

            <Button id="login">Login</Button>
            <br />
          </div>
        </header>
      </>
    );
  }
}
