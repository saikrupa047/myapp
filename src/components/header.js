import React from "react";
import "./css/header.css";
import logo from "./kakashi.jpg";
import { Link, Outlet } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="header_container">
            <img src={logo} alt="imaef" />

            <Link to="login" id="login" className="endlink">
              Login
            </Link>
          </div>
        </header>
      </>
    );
  }
}
