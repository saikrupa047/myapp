import Content from "./Content";
import "./SearchBar.css";
import React, { useState } from "react";
import JobCard from "./JobCard";
function SearchBar(props) {
  //   const [searchResult, setSearchResult] = useState([]);
  //   roles = props.jobs.map((item) => item.role);
  const searchHandler = (event) => {
    props.onSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className="searchBar"
        placeholder="Search..."
        onChange={searchHandler}
      ></input>
      {/* <Content>{searchResult.map(item=><JobCard/>)}</Content> */}
    </div>
  );
}

export default SearchBar;
