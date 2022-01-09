import React from "react";
import "./css/menu.css";
import Content from "./content.js";

export default class Menu extends React.Component {
  state = {
    index: 0,
  };
  menuHandler = (event) => {
    // console.log(event.target.id);
    // contentHandler(event.target.id);
    this.setState({
      index: parseInt(event.target.id),
    });
  };

  render() {
    return (
      <div>
        <div className="menu">
          <div className="navbar">
            <a id="0" href="#" onClick={this.menuHandler}>
              masdhv
            </a>
            <a id="1" href="#" onClick={this.menuHandler}>
              Feed
            </a>
            <a id="2" href="#" onClick={this.menuHandler}>
              masdhv
            </a>
            <a id="3" href="#" onClick={this.menuHandler}>
              masdhv
            </a>
            <a id="4" href="#" onClick={this.menuHandler}>
              masdhv
            </a>
          </div>
        </div>

        <div className="content">
          {console.log(this.state.index)}
          <Content menu_num={this.state.index} />
        </div>
      </div>
    );
  }
}
