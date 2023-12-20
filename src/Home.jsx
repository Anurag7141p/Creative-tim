import React from "react";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Dashboard from "./pages/Dashboard";

const Home = () => {
  return (
    <div style={{display:'flex'}}>
      <SideNavBar />
      <Dashboard/>
    </div>
  );
};

export default Home;
