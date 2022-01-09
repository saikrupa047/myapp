// import React, { useState } from "react";
// import Nav from "./home/Nav";
// import SideMenu from "./home/SideMenu";
// import zemosoLogo from "./home/zemoso.png";
// import atntLogo from "./home/at&t.jfif";
// import Logo from "./home/masalas.png";
// import Content from "./home/Content";
// import JobCard from "./home/JobCard";
// import Login from "./Login/Login";
// import Header from "./components/header";

// const jobs = [
//   {
//     id: 1,
//     company: "Zemoso Technologies",
//     compensation: 689000,
//     role: "Associate Software Engineer",
//     logo: zemosoLogo,
//     location: "Hyderabad",
//   },
//   {
//     id: 2,
//     company: "American Telephone and Telegraph Company",
//     compensation: 800000,
//     role: "Technical Intern",
//     logo: atntLogo,
//     location: "Hyderabad/Bengaluru",
//   },
// ];
// let users = [];
// function App() {
//   const [newUsers, setUsers] = useState(users);

//   const loginHandler = (newUserData) => {
//     setUsers([newUserData, ...newUsers]);
//     //console.log(newUserData);
//     console.log("after login");
//   };
//   const signOutHandler = (value) => {
//     setUsers([]);
//     console.log("after signout");
//     //console.log(newUsers);
//   };
//   users = [...newUsers];
//   console.log(users);
//   const loggedinContent = (
//     <div>
//       <Nav logo={Logo} user={users} onSignOut={signOutHandler}></Nav>
//       <div className="content_rendering">
//         <SideMenu></SideMenu>
//         <Content></Content>
//       </div>
//     </div>
//   );
//   return (
//     // <div>{ users.length === 0 ? <Login onLogin={loginHandler} />  : loggedinContent}</div>
//     <div>
//       <Header></Header>
//     </div>
//   );
// }
// export default App;
// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/contents/Feed";
import Home from "./components/home.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="Feed" element={<Feed />} />
            {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
