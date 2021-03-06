import "./Nav.css";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Notify from "./Notify";
import Login from "./Login";

function Nav(props) {
  //console.log(props);
  const signOutHandler = (value) => {
    props.onSignOut(value);
    //console.log(value);
  };
  let users = props.user;
  const searchHandler = (searchText) => {
    props.onSearch(searchText);
    console.log(searchText);
  };
  return (
    <div className="navbar">
      <Logo logo={props.logo}></Logo>
      <SearchBar onSearch={searchHandler}></SearchBar>
      <Notify></Notify>
      <Login users={users} onSignOut={signOutHandler}></Login>
    </div>
  );
}

export default Nav;
