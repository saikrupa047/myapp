import React from "react";
import Feed from "./contents/Feed";
import Profile2 from "./contents/profile2";
import Profile3 from "./contents/profile3";
import Profile4 from "./contents/profile4";
import TimeLine from "./contents/timeline";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    var x = {};
  }
  x = {
    0: <TimeLine />,
    1: <Feed />,
    2: <Profile2 />,
    3: <Profile3 />,
    4: <Profile4 />,
  };
  render() {
    return (
      // <div>{this.x[this.props.menu_num]}</div>
      <div>{this.x[this.props.menu_num]}</div>
    );
  }
}
