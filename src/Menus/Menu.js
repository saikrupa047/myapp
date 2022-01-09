import React from "react";
import "./Menu.css";
import SideMenu from "../home/SideMenu";

class Menu extends React.Component {
  menuClickHandler = (event) => {
    console.log(event.target.value);
    this.props.onSelect(event.target.value);
  };

  render() {
    return (
      // <div className='flex_container'>
      //     <button onClick={this.menuClickHandler} value={this.props.title}>
      //         {this.props.title}
      //     </button>
      //     </div>
      <SideMenu></SideMenu>
    );
  }
}

export default Menu;
