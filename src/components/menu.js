import React from "react";
import "./css/menu.css";
import { Link, Outlet } from "react-router-dom";
// import Header from "./header"

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="feed">Feed</Link>
          <Link to="feed">mad</Link>
          <Link to="feed">Fmamd</Link>
          <Link to="feed">Faca</Link>
        </div>
        <Outlet />
      </div>
    );
  }
}
