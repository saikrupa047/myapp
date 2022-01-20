import React, { useState } from "react";
import Nav from "./home/Nav";
import SideMenu from "./home/SideMenu";
import zemosoLogo from "./home/zemoso.png";
import atntLogo from "./home/at&t.jfif";
import Logo from "./home/masalas.png";
import Content from "./home/Content";
import JobCard from "./home/JobCard";
import Login from "./Login/Login";
import Profile from "./home/Profile";
import sureify from "./home/sureify.png";
const JD =
  "What is Lorem Ipsum?\
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\
\
Why do we use it?\
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\
\
\
Where does it come from?\
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\
\
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\
\
Where can I get some?\
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
const jobs = [
  {
    id: 1,
    company: "Zemoso Technologies",
    compensation: 689000,
    role: "Associate Software Engineer",
    logo: zemosoLogo,
    location: "Hyderabad",
    jd: JD,
  },
  {
    id: 2,
    company: "American Telephone and Telegraph Company",
    compensation: 800000,
    role: "Technical Intern",
    logo: atntLogo,
    location: "Hyderabad/Bengaluru",
    jd: JD,
  },
  {
    id: 3,
    company: "Surify",
    compensation: 1000000,
    role: "Fullstack Developer",
    logo: sureify,
    location: "Hyderabad",
    jd: JD,
  },
];
let users = [];
function App() {
  const [newUsers, setUsers] = useState(users);
  var content = <div></div>;
  const [newContent, setContent] = useState(content);
  const [applications, addApplication] = useState([]);
  const loginHandler = (newUserData) => {
    setUsers([newUserData, ...newUsers]);
    //console.log(newUserData);
    //console.log("after login");
  };
  const signOutHandler = (value) => {
    setUsers([]);
    //console.log("after signout");
    //console.log(newUsers);
  };
  const jobApplicationHandler = (status, jobId) => {
    const newJobApplication = jobs[jobId - 1];
    // console.log(newJobApplication);
    if (status === "apply") {
      addApplication([newJobApplication, ...applications]);
    }
    // console.log(applications);
  };
  const matchedJobs = [];
  const [newMatchedJobs, setMatchedJobs] = useState(matchedJobs);
  const searchHandler = (searchText) => {
    setContent(null);
    setMatchedJobs([]);
    var temp = [];
    for (var i of jobs) {
      console.log("job:");
      console.log(i);
      if (i.role === searchText) {
        console.log("matched");
        console.log(i);
        temp = [i, ...temp];
        // if (!newMatchedJobs.find((val) => val === i)) {
        // console.log(newMatchedJobs);
      }
    }
    setMatchedJobs(temp);
    setContent(
      newMatchedJobs.map((job, index) => (
        <JobCard
          id={job.id}
          role={job.role}
          company={job.company}
          compensation={job.compensation}
          logo={job.logo}
          location={job.location}
          key={index}
          JD={job.jd}
          onApply={jobApplicationHandler}
        ></JobCard>
      ))
    );
    console.log(newMatchedJobs);
  };
  const showContentHandler = (menuName) => {
    if (menuName === "Feed") {
      setContent(
        jobs.map((job, index) => (
          <JobCard
            id={job.id}
            role={job.role}
            company={job.company}
            compensation={job.compensation}
            logo={job.logo}
            location={job.location}
            key={index}
            JD={job.jd}
            onApply={jobApplicationHandler}
          ></JobCard>
        ))
      );
    }
    if ((menuName === "My Applications") | (menuName === "TimeLine")) {
      setContent(
        applications.map((job, index) => (
          <JobCard
            id={job.id}
            role={job.role}
            company={job.company}
            compensation={job.compensation}
            logo={job.logo}
            location={job.location}
            key={index}
            JD={job.jd}
          ></JobCard>
        ))
      );
    }
    if (menuName === "Profile") {
      setContent(
        <div>
          <Profile user={newUsers[0]} />
        </div>
      );
    }
    // if (menuName === "TimeLine") {
    //   setContent(<div>{JD}</div>);
    // }
    if (menuName === "About Us") {
      setContent(<div>{JD}</div>);
    }
    if (menuName === "Contact Us") {
      setContent(<div>{JD}</div>);
    }
  };

  users = [...newUsers];
  //console.log(users);
  const loggedinContent = (
    <div>
      <Nav
        logo={Logo}
        user={users}
        onSignOut={signOutHandler}
        onSearch={searchHandler}
      ></Nav>
      <div className="content_rendering">
        <SideMenu onMenuSelect={showContentHandler}></SideMenu>
        <Content>{newContent}</Content>
      </div>
    </div>
  );
  return (
    <div>
      {users.length === 0 ? <Login onLogin={loginHandler} /> : loggedinContent}
    </div>
  );
}
export default App;
