import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsList from "../components/JobsList";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsList />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
