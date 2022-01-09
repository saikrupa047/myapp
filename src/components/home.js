import React from "react";
import Header from "./header";
import Menu from "./menu";
import Content from "./content";
import "./css/home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="home_flex_container">
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
