import React from "react";
import "./css/header.css";
import logo from "./kakashi.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
// import Home from "./home";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="header_container">
            <img src={logo} alt="imaef" />

            <a id="strtlink" href="#">
              link1
            </a>
            <a id="strtlink" href="#">
              link1
            </a>
            <a id="strtlink" href="#">
              link1
            </a>
            <a className="endlink" href="#">
              link1
            </a>
            <a id="login" classnamw="endlink" href="#">
              login
            </a>
          </div>
        </header>
      </>
      // <div>
      //   <BrowserRouter>
      //     <Routes>
      //       <Route path="/" element={<Home />}>
      //         {/* <Route index element={<Login />} /> */}
      //         {/* <Route path="blogs" element={<Blogs />} />
      //     <Route path="contact" element={<Contact />} />
      //     <Route path="*" element={<NoPage />} /> */}
      //       </Route>
      //     </Routes>
      //   </BrowserRouter>
      // </div>
    );
  }
}
