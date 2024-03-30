import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsList from "./components/JobsList";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero subTitle="this is the subtitle" />
      <HomeCards />
      <JobsList />
      <ViewAllJobs />

     
    </>
  );
};

export default App;
